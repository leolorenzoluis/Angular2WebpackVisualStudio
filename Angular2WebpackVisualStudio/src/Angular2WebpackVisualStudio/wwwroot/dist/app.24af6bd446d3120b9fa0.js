webpackJsonp([2],{0:function(t,e,n){"use strict";var o=n(264),r=n(255),a=n(169),i=n(699),c=n(700);o.bootstrap(i.AppComponent,[a.ROUTER_PROVIDERS,r.HTTP_PROVIDERS,c.Configuration])},467:function(t,e){t.exports='<div class="container" style="margin-top: 15px;">\r\n   \r\n    <nav class="navbar navbar-inverse">\r\n        <div class="container-fluid">\r\n            <div class="navbar-header">\r\n                <a [routerLink]="[\'/home\']" class="navbar-brand"><img src="../images/damienbod.jpg" height="40" style="margin-top:-10px;" /></a>\r\n            </div>\r\n            <ul class="nav navbar-nav">\r\n                <li><a [routerLink]="[\'/home\']">Home</a></li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n\r\n\r\n'},468:function(t,e){t.exports='<div class="panel-group">\r\n\r\n    <p>hello home</p>\r\n\r\n</div>'},469:function(t,e){t.exports="body{padding-top:50px}.starter-template{padding:40px 15px;text-align:center}.navigationLinkButton:hover{cursor:pointer}\n"},699:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=3>a?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(3>a?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0},a=n(2),i=n(169),c=n(701),p=function(){function t(t){this.router=t}return t.prototype.ngOnInit=function(){this.router.navigate(["/home"])},t=o([a.Component({selector:"my-app",template:n(467),styles:[n(469)],directives:[i.ROUTER_DIRECTIVES]}),i.Routes([{path:"/home",component:c.HomeComponent}]),r("design:paramtypes",[i.Router])],t)}();e.AppComponent=p},700:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=3>a?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(3>a?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0},a=n(2),i=function(){function t(){this.Server="http://localhost:5000/"}return t=o([a.Injectable(),r("design:paramtypes",[])],t)}();e.Configuration=i},701:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=3>a?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(3>a?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0},a=n(2),i=n(51),c=function(){function t(){this.message="home.component"}return t.prototype.ngOnInit=function(){console.log("ngOnInit HomeComponent")},t=o([a.Component({selector:"homecomponent",template:n(468),directives:[i.CORE_DIRECTIVES]}),r("design:paramtypes",[])],t)}();e.HomeComponent=c}});
//# sourceMappingURL=app.24af6bd446d3120b9fa0.js.map