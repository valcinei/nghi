
import { Component } from "./classes/component";

export class Main {
    public component = new Component();

    constructor(public params: any) {
        console.log(params);
        this.component.create('');
    }

}