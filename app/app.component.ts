import { Component, AfterViewInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { BlogComponent } from './components/blog.component';
import { SobremiComponent } from './components/sobremi.component';
import { PostComponent } from './components/post.component';

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
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: PostComponent,
  },
  {
    path: '/sobre-mi',
    name: 'Sobremi',
    component: SobremiComponent
  }
])

export class AppComponent implements AfterViewInit {

  redirecToSocialPage(socialPage) {
    window.open(socialPage, '_blank');
  }

  ngAfterViewInit() {
    let $ = window['$']
    $(".button-collapse").sideNav();
  }

}
