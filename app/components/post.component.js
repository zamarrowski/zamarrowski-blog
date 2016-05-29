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
var DataHandler_1 = require('../helpers/DataHandler');
var PostComponent = (function () {
    function PostComponent(params, blogService, dateHandler) {
        this.params = params;
        this.blogService = blogService;
        this.dateHandler = dateHandler;
        this.id = null;
        this.post = null;
        this.id = params.get('id');
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initDisqus();
        this.blogService.getPostById(this.id).then(function (post) {
            console.log(post);
            _this.post = _this.dateHandler.convertPostDates([post])[0];
        });
    };
    PostComponent.prototype.initDisqus = function () {
        var disqus_config = function () {
            this.page.url = 'http://www.sergiozamarro.me' + window.location.pathname;
            this.page.identifier = window.location.pathname;
        };
        (function () {
            var d = document, s = d.createElement('script');
            s.src = '//sergiozamarro.disqus.com/embed.js';
            s.setAttribute('data-timestamp', '' + new Date());
            (d.head || d.body).appendChild(s);
        })();
    };
    PostComponent = __decorate([
        core_1.Component({
            selector: 'post',
            templateUrl: 'app/templates/post.html',
            styleUrls: ['app/css/blog.css'],
            providers: [blog_service_1.BlogService, DataHandler_1.DateHandler]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, blog_service_1.BlogService, DataHandler_1.DateHandler])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map