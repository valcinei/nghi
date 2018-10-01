import * as fs from 'fs';
import * as path from 'path';
export class FileHelper {
    constructor() { 
    }


    public readAndSaveFile(pathtoName: any, className: any, templaName: any, typeClass:string) {
        let fileName = className.toLocaleLowerCase();
console.log(pathtoName);
        fs.readFile(path.resolve(__dirname, `../templates/${typeClass}.nghi`), 'utf-8', (err, data) => {
            if (err) { throw err; }
           this.saveFile(pathtoName,templaName, className, fileName, this.replacedData(data, className, fileName));
        })
        
    }


    public saveFile(pathtoName: any ,templaName:any,className:string,fileName:string, convertedData :string) {
        console.log('template',templaName)
        fs.writeFile(path.resolve(`${pathtoName}`, `${fileName}.${(templaName.replace(/(.downgrade.nghi|.nghi)/, '.ts'))}`),  convertedData, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    }

    private replacedData(data: any, className:any, fileName:string) {
        let nameComp = data.replace(/{{className}}/g, ` ${className}`);
        let htmlselector = nameComp.replace(/{{htmlselector}}/g,fileName);
        let templateUrl = htmlselector.replace(/{{htmlcomponent}}/g,fileName);
        let styleUrls = templateUrl.replace(/{{scsscomponent}}/g,fileName);
        let finalData = styleUrls;
        return  finalData.replace(/{{className}}/g, ` ${className}`);
     }
}