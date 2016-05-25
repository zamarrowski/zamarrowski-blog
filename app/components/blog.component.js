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
var blog_service_1 = require('../services/blog.service');
var DataHandler_1 = require('../helpers/DataHandler');
var BlogComponent = (function () {
    function BlogComponent(blogService, dateHandler) {
        this.blogService = blogService;
        this.dateHandler = dateHandler;
        this.posts = [];
        this.currentPage = 1;
        this.totalPages = 0;
        this.search = '';
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogService.getPosts(this.currentPage).then(function (response) {
            console.log(response.posts);
            _this.posts = _this.dateHandler.convertPostDates(response.posts);
            _this.totalPages = response.totalPages;
        });
    };
    BlogComponent.prototype.searchOnEnter = function (event) {
        var _this = this;
        if (event.which == 13) {
            console.log(this.search);
            this.blogService.search(this.search).then(function (response) {
                _this.posts = _this.dateHandler.convertPostDates(response.posts);
                _this.totalPages = response.totalPages;
                _this.currentPage = 1;
            });
        }
    };
    BlogComponent.prototype.getMorePosts = function () {
        var _this = this;
        this.currentPage++;
        this.blogService.getPosts(this.currentPage).then(function (response) {
            response.posts = _this.dateHandler.convertPostDates(response.posts);
            for (var i = 0; i < response.posts.length; i++) {
                var post = response.posts[i];
                _this.posts.push(post);
            }
        });
    };
    BlogComponent.prototype.viewPost = function (id) {
        window.open('/post/' + id, '_blank');
    };
    BlogComponent = __decorate([
        core_1.Component({
            selector: 'blog',
            templateUrl: 'app/templates/blog.html',
            styleUrls: ['app/css/blog.css'],
            providers: [blog_service_1.BlogService, DataHandler_1.DateHandler]
        }), 
        __metadata('design:paramtypes', [blog_service_1.BlogService, DataHandler_1.DateHandler])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map