import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { ComponentsModule } from './components/components.module';

import { StartComponent } from './pages/start/start.component';
import { TheBestGameComponent } from './pages/the-best-game/the-best-game.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    TheBestGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
