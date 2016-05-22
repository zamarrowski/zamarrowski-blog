import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'blog',
  templateUrl: 'app/templates/blog.html',
  styleUrls: ['app/css/blog.css'],
  providers: [BlogService]
})

export class BlogComponent implements OnInit {

  posts = [];
  search = '';

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPosts().then(response => {
      this.posts = response
      console.log(this.posts)
    })
  }

  searchOnEnter(event) {
    if (event.which == 13) {
      console.log(this.search)
      this.blogService.search(this.search).then(response => {
        this.posts = response
      })
    }
  }

}
