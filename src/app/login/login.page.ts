import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';// Metodo para volver a la pagina de inicio

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/home']); // Redirige a la página de inicio
  }

  ngOnInit() {
  }

}
