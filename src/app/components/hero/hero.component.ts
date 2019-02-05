import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  hero: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _heroesServices: HeroesService ) {

    this.activatedRoute.params.subscribe( params => {
      this.hero = this._heroesServices.getHero( params['id'] );
    })
  }
}