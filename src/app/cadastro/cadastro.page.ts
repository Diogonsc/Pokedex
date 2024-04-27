import { Component } from '@angular/core';
import axios from 'axios';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  user = { name: '', email: '', password: '' };

  constructor(public alertController: AlertController, private navCtrl: NavController) {}

  async handleCreateUser(user: { name: string; email: string; password: string }) {
    axios.post(`http://localhost:3000/users`, user).then(async (res) => {
      if(res.status === 201) {
        const alert = await this.alertController.create({
          header: 'Sucesso!',
          message: 'Usuário cadastrado com sucesso!',
          buttons: [{
            text: 'OK',
            handler: () => {
              this.navCtrl.navigateRoot('/login');
            }
          }],
        });
        await alert.present();
      }
      else {
        const alert = await this.alertController.create({
          header: 'Erro',
          message: 'Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    });
  }
}
