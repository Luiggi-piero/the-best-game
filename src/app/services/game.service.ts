import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private firestore: AngularFirestore) {}

  getGames(): Observable<Game[]> {
    return this.firestore.collection<Game>('tbg').valueChanges();
  }

  async vote(game: Game) {
    return await this.firestore
      .collection('tbg')
      .doc(game.id)
      .update({
        votes: game.votes + 1,
      });
  }
}
