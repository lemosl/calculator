import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  { HelloworldComponent} from './Helloworld/helloworld.components'
import { MypageComponent } from './mypage/mypage.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HelloworldComponent, MypageComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculadora';
}
