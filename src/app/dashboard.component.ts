import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Internal Objecta
import { Hero }             from './hero';

// Internal Modules
import { HeroDetailModule } from './heroDetail/hero-detail.module'

// Service Imports
import { HeroService }      from './hero.service';




@Component({
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
