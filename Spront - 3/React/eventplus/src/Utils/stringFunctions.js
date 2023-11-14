//Lembe-se o JAvaScript não pe tipado, então variável pode assumir vários tipos de dados
export const dateFormatDbToView = data => {
    //Ex: 2023-09-30T00:00:00 para 30/09/2023
    data = data.substr(0,10); // retorna apenas a data (2023-09-30)
    data = data.split("-"); //[2023,09, 30]

    return `${data[2]}/${data[1]}/${data[0]}`;
}

// export default function XPTO(x){
//     return x + 1;
// }