import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticlesComponent } from "./articles/articles.component";
import { TemplateDrivenFromComponentComponent } from './template-driven-from-component/template-driven-from-component.component';

@NgModule({
    declarations: [
        AppComponent,
        OffresEmploiComponentComponent,
        ArticlesComponent,
        TemplateDrivenFromComponentComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
       
    ]
})
export class AppModule { }
