import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { DatabaseService } from '../core/database.service';
import { DadosModalPage } from '../modal/dados/dados-modal/dados-modal.page';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  dados:any[] = [];

  constructor(public navCtrl: NavController,public modalController: ModalController, public dadoService:DatabaseService, public alertController: AlertController, public toastController: ToastController) {
    this.getAllRegistros();
  }

  ngOnInit(): void {
   
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registro excluído com sucesso.',
      duration: 2000
    });
    toast.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DadosModalPage,
      cssClass: 'my-custom-class'
    });

    modal.onDidDismiss()
    .then((data) => {
      this.getAllRegistros();
  });

    return await modal.present();
  }

  excluir(item){
    this.presentAlertConfirm(item);
    
  }

  getAllRegistros(){
    this.dadoService.getAll().then(dados => {
      this.dados = dados;
    });
  }

  async presentAlertConfirm(item) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção!',
      message: 'Deseja excluir o registro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, excluir.',
          handler: () => {
            this.dadoService.remove(item.key);
            this.getAllRegistros();
            this.presentToast();
          }
        }
      ]
    });

    await alert.present();
  }


}
