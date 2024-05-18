import { Component } from '@angular/core';
import axios from 'axios';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
   public email:string=''
   public password:string=''
  constructor(public ngFireAuth: AngularFireAuth,private router:Router) {}

  async handleLogin(email:string, password:string) {
   this.ngFireAuth.signInWithEmailAndPassword(email, password)
   .then((res)=> {
    this.router.navigate(['app/home'])
   }).catch((error)=>{
    console.log(error)
   })
   

  }

  async handleCreate(email:string,password:string) { 
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
  }


}
