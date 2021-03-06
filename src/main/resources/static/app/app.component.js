"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent(birdIdentifierService) {
        this.birdIdentifierService = birdIdentifierService;
    }
    AppComponent.prototype.onChange = function (event) {
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        this.file = files[0];
        var uploadResult = this.birdIdentifierService.uploadPhoto(this.file);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<input type=\"file\" accept=\"image/*;capture=camera\"  (change)=\"onChange($event)\">",
            styles: ["\n  #mapid { height: 90%; }\n\n"],
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
