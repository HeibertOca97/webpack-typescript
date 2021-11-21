import { formData, tableTemplate } from '../assets/forms';
import {setDB, getDB} from '../assets/db';

export const Index = ()=>{
    if(getDB() == null){
        setDB([]);
    }
    let userDB: any = getDB();
    let users: {name: string, email: string, age:number}[] = JSON.parse(userDB);
    const form = document.querySelector('form')!;
    let table = document.getElementById("data")!;

    tableTemplate(table, users); // Load data

    form.addEventListener('submit', e => {
        e.preventDefault();
        const data: any = formData(form);
        users.push(data); // send data
        setDB(users); // Upload data
        form.reset(); // Reset inputs
        tableTemplate(table, users); // Load data
    });
};