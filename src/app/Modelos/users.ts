export interface entityUserI {
    id:number,
    nick:string,
    name:string,
    email:string,
    password:string,
    rol:string
}

export interface entityLoginI {
    email:string,
    password:string
}

export interface entityTokenI {
    token:string
}