import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BingoComponent } from './bingo/bingo.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'bingo', component: BingoComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, ListComponent, BingoComponent],
  imports: [
    BrowserModule,
    InputTextareaModule,
    FormsModule,
    ButtonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
