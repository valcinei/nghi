import * as fs from 'fs';
import * as path from 'path';
export class FileHelper {
    constructor() { 
    }


    public readAndSaveFile(pathtoName: any, className: any, templaName: any, typeClass:string) {

        fs.readFile(path.resolve(__dirname, `../src/templates/${typeClass}.nghi`), 'utf-8', (err, data) => {
            if (err) { throw err; }
           this.saveFile(pathtoName,templaName, className, this.replacedData(data, className));
        })
        
    }


    public saveFile(pathtoName: any ,templaName:any,className:string, convertedData :string) {
        let fileName = className.toLocaleLowerCase()
        console.log('template',templaName)
        fs.writeFile(path.resolve(`${pathtoName}`, `${fileName}.${(templaName.replace('nghi', 'ts'))}`),  convertedData, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    }

    private replacedData(data: any, className:any) {
        return  data.replace(/{{className}}/g, ` ${className}`)
     }
}