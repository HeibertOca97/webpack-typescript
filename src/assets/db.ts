export function setDB(objecto: object){
    const strObject: string = JSON.stringify(objecto);
    window.localStorage.setItem('users', strObject);
}

export function getDB(){
    return window.localStorage.getItem('users');
}