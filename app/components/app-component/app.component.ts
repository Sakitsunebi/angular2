import {Component} from 'angular2/core';
import {Hero} from 'app/services/hero/hero';
import {HeroDetailComponent} from 'app/components/hero-detail-component/hero-detail.component'

var path: String = "app/components/app-component/";

@Component({
	selector: 'my-app',
	styleUrls: [ path + 'app-component.css'],
	templateUrl: path + 'app-component.html',
	inputs: [
		'hero'
	]
})

export class AppComponent {
	public title = 'Tour of Heroes';
	public selectedHero: Hero;
	public heroes = HEROES;
	onSelect(hero: Hero) {
		this.selectedHero = hero;
		console.log(hero);
	}
}

// interface Hero {
// 	id: number;
// 	name: string;
// }

var HEROES: Hero[] = [
	{ 'id': 11, 'name': 'Mr. Nice' },
	{ 'id': 12, 'name': 'Narco' },
	{ 'id': 13, 'name': 'Bombasto' },
	{ 'id': 14, 'name': 'Celeritas' },
	{ 'id': 15, 'name': 'Magneta' },
	{ 'id': 16, 'name': 'RubberMan' },
	{ 'id': 17, 'name': 'Dynama' },
	{ 'id': 18, 'name': 'Dr IQ' },
	{ 'id': 19, 'name': 'Magma' },
	{ 'id': 20, 'name': 'Tornado' }
];