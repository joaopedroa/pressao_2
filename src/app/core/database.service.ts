import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Dados } from '../model/Dados';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

 
  databaseName:string = 'dados.db';

  constructor(private storage: Storage, private datepipe: DatePipe) { }

 public insert(dado: Dados) {
  let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
  return this.save(key, dado);
}

public update(key: string, dado: Dados) {
  return this.save(key, dado);
}

private save(key: string, dado: Dados) {
  return this.storage.set(key, dado);
}

public remove(key: string) {
  return this.storage.remove(key);
}

public getAll() {

  let dados = [];

  return this.storage.forEach((value: Dados, key: string, iterationNumber: Number) => {
    let dado = {
      key : key,
      value : value
    }
    dados.push(dado);
  })
    .then(() => {
      return Promise.resolve(dados);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
}
