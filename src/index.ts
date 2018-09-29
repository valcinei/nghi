
import { Component } from "./classes/component";

export class Main {
    public component = new Component();

    constructor(public params: any) {
        
        if(params.argv[2] === 'generate' ) {
            console.log('Generate Component');
        
        }

      
        this.component.create('');
    }

}