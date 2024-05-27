import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.scss'
})



export class DatabindingComponent {

  nome = 'Helyomar';
  urlPOD = 'https://apod.nasa.gov/apod/image/2106/neonsaturnaurora_cassini_1080.jpg';
  texto = '...';


  acaoBotao() {
    console.log("Clicou!");
  }

}
