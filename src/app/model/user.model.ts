import { Role } from "./role.model";

export class User{
    username:string | undefined;
    password: string | undefined;
    //roles:string[] | undefined;
    roles:Role[] | undefined ;
}    