import { Component } from "./classes/component";


export class Main {
    component = new Component();
    
    constructor(public params:any) {
        console.log(params);
        console.log('Hellow Main')
        this.component.create('');
    }

    
}
const main : Main = new Main('params');