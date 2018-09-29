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
        fs.readFile(path.resolve(__dirname,'../src/classes/foo.txt'), (err, html) => {
            if (err) { throw err; }
            console.log('reponse', html);
        });
        console.log('Create Component NG')
    }
}