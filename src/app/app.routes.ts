import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SearcherComponent } from './components/searcher/searcher.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'hero/:id', component: HeroComponent },
    { path: 'about', component: AboutComponent },
    { path: 'searcher/:query', component: SearcherComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const AppRouting = RouterModule.forRoot(ROUTES, { useHash: true });