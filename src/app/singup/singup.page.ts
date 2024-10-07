import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';// Metodo para volver a la pagina de inicio
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {
  ionicForm: FormGroup;

  constructor(public formBuilder:FormBuilder, public  loadingController: LoadingController, public authService: AuthService, private toastController: ToastController,private router: Router) { }
  
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name:['',[Validators.required,]],
      
      email : ['',[
        Validators.required,
        //Validators.email,
        Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,3}$')
      ]],
      password:['',[
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ]]
    
    }) 
  }

  get errorControl(){
    return this.ionicForm.controls;
  }

  async singUp(){
      const loading = await this.loadingController.create();
        await loading.present();
        if(this.ionicForm?.valid){

          const user = await this.authService.registerUser(this.ionicForm.value.email, this.ionicForm.value.password,this.ionicForm.value.name).catch((err) => {
            this.presentToast(err)
            console.log(err);
            loading.dismiss();
          })
    
          if (user) {
            loading.dismiss();
            this.router.navigate(['/home'])
          }
        } else {
          return console.log('Se require que todos los valores sean adecuados');
        }
  }
  
  async presentToast(message: undefined) {
    console.log(message);
    
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }

 
}
