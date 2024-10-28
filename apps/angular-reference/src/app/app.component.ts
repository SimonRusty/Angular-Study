import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';

const IMPORTS = [CoreModule];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ...IMPORTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular-Reference';
}
