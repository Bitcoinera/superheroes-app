import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes.service'

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html'
})

export class SearcherComponent implements OnInit {

  heroes: Hero[] = [];
  query: string;

  constructor( private activatedRoute: ActivatedRoute, private _heroesServices: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.query = params['query']
      this.heroes = this._heroesServices.searchHeroes( params['query'] );
    })
  }

}
