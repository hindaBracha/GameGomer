import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterComponent } from './comp/enter/enter.component';
import { MemoryGameComponent } from './comp/memory-game/memory-game.component';
import { RoletaComponent } from './comp/roleta/roleta.component';
import { SendComponent } from './comp/send/send.component';
import { NeonComponent } from './comp/neon/neon.component';
import { CircleComponent } from './comp/circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterComponent,
    MemoryGameComponent,
    RoletaComponent,
    SendComponent,
    NeonComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
