import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';// Metodo para volver a la pagina de inicio

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/home']); // Redirige a la página de inicio
  }


  ngOnInit() {
  }

}
