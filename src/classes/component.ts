import * as fs from 'fs';
import * as path from 'path';
export class Component {
    constructor() { }
    public create(pathtoCopy: string) {
        fs.readFile('../foo.txt', (err, html) => {
            if (err) { throw err; }
            console.log('reponse', html);
        });
        console.log('Create Component NG')
    }
}