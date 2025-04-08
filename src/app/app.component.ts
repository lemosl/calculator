import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  { HelloworldComponent} from './Helloworld/helloworld.components'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HelloworldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculadora';
}
