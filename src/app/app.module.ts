import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, MainComponent, NotFoundComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HeaderComponent, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
