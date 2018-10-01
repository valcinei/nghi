import * as path from 'path';
import * as fs from 'fs';
export class Component {

    constructor() { }

    public create(diretory: string, fileName: string) {
        let className = fileName.split('/')[fileName.split('/').length - 1];
        className = className.replace(/^\w/, c => c.toUpperCase());
        let pathtoName = `${diretory}/${fileName}`;
        this.createDir(pathtoName);

        let file = path.resolve(__dirname, '../src/templates/component.nghi');
        
        let f = path.basename(file);
        let source = fs.createReadStream(file);
        this.readFileandSave(pathtoName,className,f);

    }

    private createDir(pathtoName: fs.PathLike) {
        if (!fs.existsSync(pathtoName)) {
            fs.mkdirSync(pathtoName);
        }
    }

    private readFileandSave(pathtoName: any, className: any, f: any) {
        fs.readFile(path.resolve(__dirname, '../src/templates/component.nghi'), 'utf-8', (err, data) => {
            if (err) { throw err; }
            let convertedData = this.replacedData(data, className);
            this.saveFile(convertedData, pathtoName, f);

        })
    }

    private saveFile(convertedData: any, pathtoName:any ,f:any) {
        fs.writeFile(path.resolve(`${pathtoName}`, f.replace('nghi', 'ts')), convertedData, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    }

    private replacedData(data: any, className:any) {
    return  data.replace(' {{componentName}}', ` ${className}`)
    }

}