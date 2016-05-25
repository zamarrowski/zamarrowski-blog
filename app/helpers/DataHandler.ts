import { Injectable } from '@angular/core';

@Injectable()
export class DateHandler {
  constructor() {}

  convertPostDates(posts) {
    if (posts) {
      for (let i = 0; i < posts.length; i++) {
          let post = posts[i];
          post.date = new Date(post.date)
      }
    }
    return posts;
  }
}
