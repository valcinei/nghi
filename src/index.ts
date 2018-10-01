
import { Component } from "./classes/component";

export class Main {
    public component = new Component();

    constructor(public params: any) {
        if(params.argv.length>5) {
            console.log('Error to read params. Try Again')
            return
        }
        switch(params.argv[2]){
            case 'generate':
            case 'g':
                switch(params.argv[3]) {
                    case 'component':
                    case 'c':
                    this.component.create(params.env.PWD, params.argv[4]);
                    break
                    case 'component-down':
                    case 'cd':
                    this.component.createDowngrade(params.env.PWD, params.argv[4]);
                    break
                    default:
                    console.log('Error to read params. Try Again')
                }
                break
                default:
                console.log('Error to read params. Try Again')

        }
        
        }

      
    }

