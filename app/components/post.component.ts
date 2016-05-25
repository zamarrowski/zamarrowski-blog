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
    this.blogService.getPostById(this.id).then(post => {
      console.log(post)
      this.post = this.dateHandler.convertPostDates([post])[0]
    })
  }

}
