import { CamelCaseHelper } from './../helpers/camelCase.helper';
import { FileHelper } from './../helpers/file.helper';
import { DirectoryHelper } from './../helpers/directory.helper';
import * as path from 'path';
import * as fs from 'fs';
export class Component {
    public directory: DirectoryHelper ;
    public fileHelper: FileHelper ;
    public camelCase: CamelCaseHelper ;
    constructor(
    ) {
        this.directory = new DirectoryHelper();
        this.fileHelper = new FileHelper();
        this.camelCase = new CamelCaseHelper();

     }

    public create(diretory: string, fileName: string) {
        let className = fileName.split('/')[fileName.split('/').length - 1];
        className = this.camelCase.encode(className);
        let pathtoName = `${diretory}/${fileName}`;
        this.directory.create(pathtoName);
        let fileTemplate = path.resolve(__dirname, '../templates/component.nghi');
        let templaName = path.basename(fileTemplate);
        let source = fs.createReadStream(fileTemplate);
        this.fileHelper.readAndSaveFile(pathtoName, className, templaName,'component');
    }

    public createDowngrade(diretory: string, fileName: string) {
        let className = fileName.split('/')[fileName.split('/').length - 1];
        className = this.camelCase.encode(className);
        let pathtoName = `${diretory}/${fileName}`;
        this.directory.create(pathtoName);
        let fileTemplate = path.resolve(__dirname, '../templates/component.downgrade.nghi');
        let templaName = path.basename(fileTemplate);
        let source = fs.createReadStream(fileTemplate);
        this.fileHelper.readAndSaveFile(pathtoName, className, templaName,'component');
    }

}