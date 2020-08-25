export class Quotes {
    public showDescription: boolean;
    constructor (public id?: number,public name?: string,public description?: string, public completeDate?: Date,public author?:string,public submitter?:string,public quote?:string){
      this.showDescription=false;
    }
  }