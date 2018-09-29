import * as fs from 'fs';
import * as path from 'path';
export class Component {

    constructor() { }
    public create(pathtoCopy: string) {
        console.log('Create Component')
        
        fs.readdir(path.resolve(__dirname,'./'), (err, files) => {
          files.forEach(file => {
            console.log(file.charCodeAt);
          });
        })


        console.log(__dirname);
        fs.readFile(path.resolve(__dirname,'../src/classes/foo.txt'), (err, html:Buffer) => {
            if (err) { throw err; }
            console.log( html.toLocaleString());
        });
        console.log('Create Component NG')
    }
}