import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapComponent} from "./components/map/map.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Routes, RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AngularWeatherWidgetModule} from "angular2-weather-widget";


@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AngularWeatherWidgetModule,
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
