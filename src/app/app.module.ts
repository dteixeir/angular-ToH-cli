import './rxjs-extensions';

// 3rd Party
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// Internal Components
import { AppComponent }         from './app.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { routing }              from './app.routing';
import { DashboardComponent }   from './dashboard.component';
import { HeroSearchComponent }  from './hero-search.component';

// Internal Modules
import { HeroDetailModule } from './heroDetail/hero-detail.module'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing,
    HeroDetailModule
  ],

  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroSearchComponent
  ],

  providers: [
    HeroService
  ],

  bootstrap: [ AppComponent ]
})
  
export class AppModule {}
