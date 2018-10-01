import { Component, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import angular = require('angular');
const template = require("./graficos-parent.html");
const css = require("./graficos-parent.css");

@Component({
    selector: "graficos-parent",
    template: template,
    styles: [""]
})

export class  MyComponentclearComponent {

}

angular.module("wexKanbanApp").directive(" MyComponentclear", downgradeComponent({
    component:  MyComponentclearComponent
}) as angular.IDirectiveFactory);