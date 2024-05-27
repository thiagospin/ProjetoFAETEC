import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretivas',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.scss'
})
export class DiretivasComponent {


  estaLigado: boolean = false;

  lista = ['item 1', 'item 2', 'item 3', 'item 4'];

  ligaDesliga() {
    this.estaLigado = !this.estaLigado;
  }

  selecao = 'nome';
  listaOpcoes = ['nome', 'endereco', 'telefone', 'estado'];


}
