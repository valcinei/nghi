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
    let file = path.resolve(__dirname,'../src/templates/component.nghi')
  
    //gets file name and adds it to dir2
    let f = path.basename(file);
    let source = fs.createReadStream(file);
    let dest = fs.createWriteStream( path.resolve(`${pathtoName}`, f.replace('nghi','ts')));
   
    fs.readFile(path.resolve(__dirname,'../src/templates/component.nghi'),'utf-8' , (err, data) => {
        if (err) { throw err; }
        let convertedData = data.replace(' {{componentName}}',` ${fileName.replace(/^\w/, c => c.toUpperCase())}` )

        fs.writeFile(path.resolve(`${pathtoName}`, f.replace('nghi','ts')), convertedData, 'utf8', function (err) {
            if (err) return console.log(err);
        console.log( data);
    });
  }
    
    
}