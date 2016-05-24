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
  currentPage = 1;
  totalPages = 0;
  search = '';

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPosts(this.currentPage).then(response => {
      this.posts = response.posts
      this.totalPages = response.totalPages
    })
  }

  searchOnEnter(event) {
    if (event.which == 13) {
      console.log(this.search)
      this.blogService.search(this.search).then(response => {
        this.posts = response.posts
        this.totalPages = response.totalPages
        this.currentPage = 1
      })
    }
  }

  getMorePosts() {
    this.currentPage++
    this.blogService.getPosts(this.currentPage).then(response => {
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
