import { Component, OnInit } from '@angular/core'
import { RouteParams } from '@angular/router-deprecated'
import { BlogService } from '../services/blog.service'
import { DateHandler } from '../helpers/DataHandler';

@Component({
  selector: 'post',
  templateUrl: 'app/templates/post.html',
  styleUrls: ['app/css/blog.css'],
  providers: [BlogService, DateHandler]
})

export class PostComponent {

  id = null
  post = null

  constructor(private params: RouteParams, private blogService: BlogService, private dateHandler: DateHandler) {
    this.id = params.get('id')
  }

  ngOnInit() {
    this.initDisqus()
    this.blogService.getPostById(this.id).then(post => {
      console.log(post)
      this.post = this.dateHandler.convertPostDates([post])[0]
    })
  }

  initDisqus() {
    var disqus_config = function () {
      this.page.url = 'http://www.sergiozamarro.me' + window.location.pathname;
      this.page.identifier = window.location.pathname;
    };

    (function() {
      var d = document, s = d.createElement('script');
      s.src = '//sergiozamarro.disqus.com/embed.js';
      s.setAttribute('data-timestamp', '' + new Date());
      (d.head || d.body).appendChild(s);
    })();
  }

}
