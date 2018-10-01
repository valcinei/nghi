import * as path from 'path';
import * as fs from 'fs';

export class DirectoryHelper{

    constructor() {}
    
    public create(pathtoName: fs.PathLike) {
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
}