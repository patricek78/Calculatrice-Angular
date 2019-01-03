import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'calculatrice', pathMatch: 'full' },
  { path: 'calculatrice', component: CalculatriceComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CalculatriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
