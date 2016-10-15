import '../rxjs-extensions';

// 3rd Party
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../in-memory-data.service';


// Internal Components
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from '../hero.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],

  declarations: [
    HeroDetailComponent
  ],

  exports: [
    HeroDetailComponent
  ],

  providers: [
    HeroService
  ]
})
  
export class HeroDetailModule {}
