import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { bootstrap } from 'ngx-bootstrap-icons';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, BarraNavegacaoComponent, RodapeComponent]
})
export class AppComponent {
  title = 'AprendizadoAngular';
}
