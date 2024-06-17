export interface User{
    userid: string,
    username:string,
    Email:string,
    Password:string,
    isDeleted:number,
    isEmailSent: number,
    role:string
}
export interface Payload{
    Sub: string,
    Name: string,
    role:string
}