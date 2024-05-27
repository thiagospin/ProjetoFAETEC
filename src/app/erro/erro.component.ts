import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-erro',
  standalone: true,
  imports: [],
  templateUrl: './erro.component.html',
  styleUrl: './erro.component.scss'
})
export class ErroComponent {

  urlImgErro = 'https://st4.depositphotos.com/4967103/22006/v/1600/depositphotos_220068464-stock-illustration-404-error-found-tee-print.jpg'
  data: any;

  registraLog() {
    this.data = new Date();
    console.log(`Erro de usuário ${this.data}`);
  }

}
