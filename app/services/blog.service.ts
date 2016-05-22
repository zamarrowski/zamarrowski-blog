import { Injectable } from '@angular/core'
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BlogService {
    baseservice = 'http://localhost/Apache/GitHub/wordpress/wp-json/wp/v2/'

    constructor(private http: Http) { }

    getPosts(page) {
        return this.http.get(`${this.baseservice}posts?page=${page}&per_page=5`)
          .toPromise()
          .then(response => {
            var totalPages = Number(response.headers._headersMap.get('X-WP-TotalPages')[0])
            var posts = response.json()
            console.log(totalPages)
            return {totalPages, posts}
          })
          .catch();
    }

    getPostById(id) {
      return this.http.get(`${this.baseservice}posts/${id}`)
        .toPromise()
        .then(response => response.json())
        .catch();
    }

    search(match) {
      return this.http.get(`${this.baseservice}posts?search=${match}&page=1&per_page=5`)
        .toPromise()
        .then(response => {
          var totalPages = Number(response.headers._headersMap.get('X-WP-TotalPages')[0])
          console.log(totalPages)
          var posts = response.json()
          return {totalPages, posts}
        })
        .catch();
    }

}
