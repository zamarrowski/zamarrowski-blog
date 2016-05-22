import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { BlogComponent } from './components/blog.component';

@Component({
  selector: 'zamarrowski-blog',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/templates/app.html',
  styleUrls: ['app/css/common.css']
})

@RouteConfig([
  {
    path: '/',
    name: 'Blog',
    component: BlogComponent,
    useAsDefault: true
  }
])

export class AppComponent {

  redirecToSocialPage(socialPage) {
    window.open(socialPage, '_blank');
  }

}
