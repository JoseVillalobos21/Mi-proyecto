import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private navController: NavController,
    private toastController: ToastController,

  ) {}

  ngOnInit() {
  }
  login(){
    if(this.email === 'jose@gmail.com' && this.password === 'admin123'){
    this.navController.navigateRoot('/home');
  }
  else{
    this.presentToast();
  }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'DATOS INCORRECTOS!',
      duration: 3000,
      position: 'bottom',
    });

    await toast.present();
  }
}
