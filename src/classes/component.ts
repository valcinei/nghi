import * as path from 'path';
import * as fs from 'fs';
export class Component {

    constructor() { }

    public create(diretory: string, fileName: string) {
        let className = fileName.split('/')[fileName.split('/').length - 1];
        className = className.replace(/^\w/, c => c.toUpperCase());
        let pathtoName = `${diretory}/${fileName}`;
        this.createDir(pathtoName);
        let fileTemplate = path.resolve(__dirname, '../src/templates/component.nghi');
        let templaName = path.basename(fileTemplate);
        let source = fs.createReadStream(fileTemplate);
        this.readAndSaveFile(pathtoName,className,templaName);

    }

    private createDir(pathtoName: fs.PathLike) {
        let pathFinal = '';
        let pathString = String(pathtoName);
        let  pathArray = pathString.split('/');
        console.log(pathArray);
        for (let i=0; i<pathArray.length+1; i++ ) {
            console.log(pathFinal.length);
            
            if (!fs.existsSync(pathFinal) && pathFinal.length > 0 ) {
                console.log('criou', pathFinal);
                fs.mkdirSync(pathFinal);
                console.log(pathFinal);
            }
            pathFinal+=`${pathArray[i]}/`;
        }
    }

    private readAndSaveFile(pathtoName: any, className: any, templaName: any) {
        fs.readFile(path.resolve(__dirname, '../src/templates/component.nghi'), 'utf-8', (err, data) => {
            if (err) { throw err; }
            let convertedData = this.replacedData(data, className);
            this.saveFile(convertedData, pathtoName, templaName);

        })
    }

    private saveFile(convertedData: any, pathtoName:any ,templaName:any) {
        fs.writeFile(path.resolve(`${pathtoName}`, templaName.replace('nghi', 'ts')), convertedData, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    }

    private replacedData(data: any, className:any) {
    return  data.replace(' {{componentName}}', ` ${className}`)
    }

}