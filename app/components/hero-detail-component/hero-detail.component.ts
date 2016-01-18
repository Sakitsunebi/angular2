import {Component} from 'angular2/core';
import {Hero} from 'app/services/hero/hero';

var path: String = "/app/components/hero-detail-component";

@Component({
	selector: 'my-hero-detail',
	styleUrls: [ path + 'hero-detail-component.css'],
	templateUrl: path + 'hero-detail-component.css'	
});

export class HeroDetailComponent {
	public hero: Hero;
}