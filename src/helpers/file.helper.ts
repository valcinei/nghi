import * as fs from 'fs';
import * as path from 'path';
export class FileHelper {
    constructor() { 
    }


    public readAndSaveFile(pathtoName: any, className: any, templaName: any, typeClass:string) {
        let fileName = className.toLocaleLowerCase();
        fs.readFile(path.resolve(__dirname, `../templates/${typeClass}.nghi`), 'utf-8', (err, data) => {
            if (err) { throw err; }
           this.saveFile(pathtoName,templaName, className, fileName, typeClass, this.replacedData(data, className, fileName));
        })
        
    }


    public saveFile(pathtoName: any ,templaName:any,className:string,fileName:string,typeClass: string, convertedData :string) {
        fs.writeFile(path.resolve(`${pathtoName}`, `${fileName}.${(templaName.replace(/(.downgrade.nghi|.nghi)/, '.ts'))}`),  convertedData, 'utf8', function (err) {
            if (err) return console.log(err);
        });
        this.createFile(path.resolve(`${pathtoName}`, `${fileName}.${typeClass}.html`),`<${fileName}>app-${fileName} Works!</${fileName}>`);
        this.createFile(path.resolve(`${pathtoName}`, `${fileName}.${typeClass}.scss`),'');
    }

    private replacedData(data: any, className:any, fileName:string) {
        let nameComp = data.replace(/{{className}}/g, ` ${className}`);
        let htmlselector = nameComp.replace(/{{htmlselector}}/g, `app-${fileName}`);
        let templateUrl = htmlselector.replace(/{{htmlcomponent}}/g,fileName);
        let styleUrls = templateUrl.replace(/{{scsscomponent}}/g,fileName);
        let finalData = styleUrls;
        return  finalData.replace(/{{className}}/g, ` ${className}`);
     }
     
    private createFile(fileName:string, content:string){
        fs.writeFile(fileName, content, function(err) {
            if(err) {
                return console.log(err);
            }
        
            console.log("Created");
        }); 
     }
}