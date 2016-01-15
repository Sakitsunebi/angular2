import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
	selector: 'my-hero-detail',
	styleUrls: ['app/templates/styles/hero-detail-component.css'],
	templateUrl: 'app/templates/hero-detail-component.css'	
});

export class HeroDetailComponent {
	public hero: Hero;
}