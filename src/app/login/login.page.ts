import { Component } from '@angular/core';
import axios from 'axios';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = { email: '', password: '' };
  constructor(public alertController: AlertController, private router: Router) {}

  async handleLogin(user: { email: string; password: string }) {
    axios.get(`http://localhost:3000/users`).then(async (res) => {
      const foundUser = res.data.find(
        (u: any) => u.email === user.email && u.password === user.password
      );
      if (foundUser) {
        this.router.navigateByUrl('home');
      } else {
        const alert = await this.alertController.create({
          header: 'Erro',
          subHeader: 'Usuário não encontrado',
          message:
            'O email ou a senha que você inseriu estão incorretos. Por favor, tente novamente.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    });
  }
}
