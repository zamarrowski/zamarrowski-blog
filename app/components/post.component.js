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
var router_deprecated_1 = require('@angular/router-deprecated');
var blog_service_1 = require('../services/blog.service');
var PostComponent = (function () {
    function PostComponent(params, blogService) {
        this.params = params;
        this.blogService = blogService;
        this.id = null;
        this.post = null;
        this.id = params.get('id');
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogService.getPostById(this.id).then(function (post) {
            console.log(post);
            _this.post = post;
        });
    };
    PostComponent = __decorate([
        core_1.Component({
            selector: 'post',
            templateUrl: 'app/templates/post.html',
            styleUrls: ['app/css/blog.css'],
            providers: [blog_service_1.BlogService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, blog_service_1.BlogService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map