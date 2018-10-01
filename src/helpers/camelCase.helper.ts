export class CamelCaseHelper{
    constructor(){}

    public encode(str:string) {
        return str.replace(/\W+(.)/g, function(match, chr)
       {
            return chr.toUpperCase();
        });
    }
}