import * as path from 'path';
import * as fs from 'fs';
export class Component {

    constructor() { }
    
    public create(diretory: string, fileName:string) {
        let pathtoName =`${diretory}/${fileName}`
        if (!fs.existsSync(pathtoName)){
            fs.mkdirSync(pathtoName);
        }
    
        console.log(pathtoName)
    let file = path.resolve(__dirname,'../src/classes/foo.txt')
  
    //gets file name and adds it to dir2
    let f = path.basename(file);
    let source = fs.createReadStream(file);
    let dest = fs.createWriteStream(path.resolve(pathtoName, f));
  
    source.pipe(dest);
    source.on('end', function() { console.log('Succesfully copied'); });
    source.on('error', function(err:any) { console.log(err); });
    
    // fs.readFile(path.resolve(__dirname,'../src/classes/foo.txt'), (err, html:Buffer) => {
    //     if (err) { throw err; }
    //     console.log( html.toLocaleString());
    // });
  };
    
    
}