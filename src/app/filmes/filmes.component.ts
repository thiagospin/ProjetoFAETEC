import { Component } from '@angular/core';
import moviesDB from '../../assets/movielist.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.scss',
})
export class FilmesComponent {
  urlFilme =
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg';

  listaFilmes = moviesDB.movies;

  public handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).src =
      '../../assets/capa_filme_padrao.webp';
  }
}
