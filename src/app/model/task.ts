export interface ITask{
    itemId: number;
    taskName: '';
    taskDescription: '';
    dueDate: Date;
    createdOn: Date;
    isCompleted: boolean;
    tags: '';
    completedOn: Date;
    i: number;
}

export class Task {
    itemId: number;
    taskName: '';
    taskDescription: '';
    dueDate: Date;
    createdOn: Date;
    isCompleted: boolean;
    tags: '';
    completedOn: Date;
    i: number;

    constructor(){
        this.itemId=0;
        this.taskName= '';
        this.taskDescription= '';
        this.dueDate=new Date();
        this.createdOn=new Date();
        this.isCompleted= false;
        this.tags= '';
        this.completedOn=new Date();
        this.i=0;
    }
}
export interface ApiResponseModel{
    message:'';
    result: '';
    data: any;
}