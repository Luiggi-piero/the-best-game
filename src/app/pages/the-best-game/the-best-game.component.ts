import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { Game } from 'src/app/interfaces/game.interface';
import { GameService } from 'src/app/services/game.service';
@Component({
  selector: 'app-the-best-game',
  templateUrl: './the-best-game.component.html',
  styleUrls: ['./the-best-game.component.css'],
})
export class TheBestGameComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {
    gameService.getGames().subscribe((resp) => (this.games = resp));
  }

  ngOnInit(): void {}

  vote(game: Game) {
    this.gameService
      .vote(game)
      .then((resp) => {
        Swal.fire({
          title: 'Gracias',
          text: `Votaste por ${game.name}`,
          icon: 'success',
        });
      })
      .catch((e) => {
        console.log(e);
        Swal.fire({
          title: 'Algo salió mal',
          text: 'Consulta con el administrador',
          icon: 'error',
        });
      });
  }
}
