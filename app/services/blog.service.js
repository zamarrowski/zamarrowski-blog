"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var BlogService = (function () {
    function BlogService(http) {
        this.http = http;
        this.baseservice = 'http://localhost/Apache/GitHub/wordpress/wp-json/wp/v2/';
    }
    BlogService.prototype.getPosts = function (page) {
        return this.http.get(this.baseservice + "posts?page=" + page + "&per_page=5")
            .toPromise()
            .then(function (response) {
            var totalPages = Number(response.headers._headersMap.get('X-WP-TotalPages')[0]);
            var posts = response.json();
            console.log(totalPages);
            return { totalPages: totalPages, posts: posts };
        })
            .catch();
    };
    BlogService.prototype.search = function (match) {
        return this.http.get(this.baseservice + "posts?search=" + match + "&page=1&per_page=5")
            .toPromise()
            .then(function (response) {
            var totalPages = Number(response.headers._headersMap.get('X-WP-TotalPages')[0]);
            console.log(totalPages);
            var posts = response.json();
            return { totalPages: totalPages, posts: posts };
        })
            .catch();
    };
    BlogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BlogService);
    return BlogService;
}());
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map