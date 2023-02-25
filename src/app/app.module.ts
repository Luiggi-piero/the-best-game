import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
