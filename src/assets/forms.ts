export const formData = (form: HTMLFormElement) => {
	const inputs = form.querySelectorAll('input');
	let values: {[prop: string]: string|number} = {};

	inputs.forEach(input => {
        let valor: string|number;
        if (input.type == "number") {
            valor = Number(parseInt(input.value));
        }else{
            valor = input.value;
        }
		values[input.id] = valor;
	});
	return values;
};

export const tableTemplate = (table: HTMLElement, data: {name: string, email: string, age:number}[]) =>{
    if(data.length > 0){
        let el = ``;
        data.forEach(user => {
            el += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.age}</td>
                </tr>
            `;
        });
        table.innerHTML = el;
    }else{
        table.innerHTML = `<tr><td colspan="3">No existe ningun registro</td></tr>`;
    }
}
