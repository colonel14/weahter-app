import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherCardComponent } from './pages/weather-card/weather-card.component';
import { CitiesSearchComponent } from './pages/cities-search/cities-search.component';
import { SearchComponent } from './pages/search/search.component';
import { WeatherService } from './services/weather.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherCardComponent,
    CitiesSearchComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
