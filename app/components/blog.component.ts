import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { DateHandler } from '../helpers/DataHandler';

@Component({
  selector: 'blog',
  templateUrl: 'app/templates/blog.html',
  styleUrls: ['app/css/blog.css'],
  providers: [BlogService, DateHandler]
})

export class BlogComponent implements OnInit {

  posts = [];
  currentPage = 1;
  totalPages = 0;
  search = '';

  constructor(private blogService: BlogService, private dateHandler: DateHandler) { }

  ngOnInit() {
    this.blogService.getPosts(this.currentPage).then(response => {
      console.log(response.posts)
      this.posts = this.dateHandler.convertPostDates(response.posts)
      this.totalPages = response.totalPages
    })
  }

  searchOnEnter(event) {
    if (event.which == 13) {
      console.log(this.search)
      this.blogService.search(this.search).then(response => {
        this.posts = this.dateHandler.convertPostDates(response.posts)
        this.totalPages = response.totalPages
        this.currentPage = 1
      })
    }
  }

  getMorePosts() {
    this.currentPage++
    this.blogService.getPosts(this.currentPage).then(response => {
      response.posts = this.dateHandler.convertPostDates(response.posts)
      for (let i = 0; i < response.posts.length; i++) {
        let post = response.posts[i];
        this.posts.push(post)
      }
    })
  }

  viewPost(id) {
    window.open('/post/' + id, '_blank')
  }

}
