
import { Component } from "./classes/component";

export class Main {
    public component = new Component();

    constructor(public params: any) {
        console.log(params.argv[2]);
        switch(params.argv[2]){
            case 'generate':
                switch(params.argv[3]) {
                    case 'component':
                    this.component.createDowngrade(params.env.PWD, params.argv[4]);
                    break
                }

        }
        
        }

      
    }

