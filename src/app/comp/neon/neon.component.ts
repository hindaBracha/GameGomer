import { Component } from '@angular/core';
import { GameService } from 'src/app/server/game.service';

@Component({
  selector: 'app-neon',
  templateUrl: './neon.component.html',
  styleUrls: ['./neon.component.css']
})
export class NeonComponent {
  constructor(public Gs: GameService) { }

  

}
