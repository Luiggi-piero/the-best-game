import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  gamesResults: { name: string; value: number }[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService
      .getGames()
      .pipe(
        map((games) => games.map(({ name, votes }) => ({ name, value: votes })))
      )
      .subscribe((games) => {
        this.gamesResults = games;
      });
  }
}
