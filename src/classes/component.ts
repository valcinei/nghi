import { FileHelper } from './../helpers/file.helper';
import { DirectoryHelper } from './../helpers/directory.helper';
import * as path from 'path';
import * as fs from 'fs';
export class Component {
    public directory: DirectoryHelper ;
    public fileHelper: FileHelper ;
    constructor(
    ) {
        this.directory = new DirectoryHelper();
        this.fileHelper = new FileHelper();

     }

    public create(diretory: string, fileName: string) {
        let className = fileName.split('/')[fileName.split('/').length - 1];
        className = className.replace(/^\w/, c => c.toUpperCase());
        let pathtoName = `${diretory}/${fileName}`;
        this.directory.create(pathtoName);
        let fileTemplate = path.resolve(__dirname, '../src/templates/component.nghi');
        let templaName = path.basename(fileTemplate);
        let source = fs.createReadStream(fileTemplate);
        this.fileHelper.readAndSaveFile(pathtoName, className, templaName,'component');
    }

}