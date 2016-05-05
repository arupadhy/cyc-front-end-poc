import {Component} from '@angular/core';
import {RouteConfig,ROUTER_PROVIDERS,ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {DashBoardComponent} from '../dashboard/dashboard.component';


@Component({
	selector: 'media-planner',
	templateUrl: 'app/main/app.component.html',
	styleUrls: ['app/main/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
	 {
	 	path: '/home',
	 	name: 'Home',
	 	component: DashBoardComponent,
	 	useAsDefault: true
	 }
	])

export class AppComponent {


}