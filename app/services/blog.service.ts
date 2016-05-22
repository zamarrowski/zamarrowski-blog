import { Injectable } from '@angular/core'
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BlogService {
    baseservice = 'http://localhost/Apache/GitHub/wordpress/wp-json/wp/v2/'

    constructor(private http: Http) { }

    getPosts() {
        return this.http.get(`${this.baseservice}posts/`)
          .toPromise()
          .then(response => response.json())
          .catch();
    }

    search(match) {
      return this.http.get(`${this.baseservice}posts?search=${match}`)
        .toPromise()
        .then(response => response.json())
        .catch();
    }

}
