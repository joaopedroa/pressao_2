import { Component, OnInit } from '@angular/core';
import { Dados } from 'src/app/model/Dados';
import { ModalController, AlertController } from '@ionic/angular';
import { DatabaseService } from 'src/app/core/database.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dados-modal',
  templateUrl: './dados-modal.page.html',
  styleUrls: ['./dados-modal.page.scss'],
})
export class DadosModalPage implements OnInit {

 
  valueD = {
    valorDiastolica : 0,
    valorSistolica : 0,
    valorPulso : 0,
    isDeitado :false
  }

  constructor(public modalController: ModalController, public dadoService:DatabaseService, public alertController: AlertController, public toastController: ToastController) {}
 
  ngOnInit(): void {
    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registro salvo com sucesso.',
      duration: 2000
    });
    toast.present();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  public getValor(valor, name){
    this.valueD[name] = valor.detail.value;
  }

  public salvarRegistro(){
    let dado:Dados = new Dados();
    dado.sistolica = this.valueD['valorSistolica'],
    dado.diastolica = this.valueD['valorDiastolica'],
    dado.pulso = this.valueD['valorPulso'],
    dado.posicao = this.valueD['isDeitado'] ? 'Deitado' : 'Sentado',
    dado.data = new Date();
    this.dadoService.insert(dado);
    this.presentToast();
    this.dismiss();
  }

  private validarDados(dado:Dados){
    if(!dado.sistolica){
      this.presentAlert('Sistólica');
    }
    if(!dado.diastolica){
      this.presentAlert('Diastólica');
    }
    if(!dado.pulso){
      this.presentAlert('Pulso');
    }
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção!',
      subHeader: 'Formulário inválido',
      message: 'Preencha o campo ' + message + ' para continuar.' ,
      buttons: ['OK']
    });

    await alert.present();
  }

}
