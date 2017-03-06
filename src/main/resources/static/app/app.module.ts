import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HttpModule, JsonpModule} from "@angular/http";
import {BirdIdentifierService} from "./birdidentifier.service";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, JsonpModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [BirdIdentifierService]
})
export class AppModule {
}
