const baseUrl = 'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10';

export class HTTP_SERVICE {
    static async getTodoListAsync() {} 
    static getTodoList({start= 0, limit= 10, callback}) {
        fetch(baseUrl + '?_start=${start}0_limit=${limit}$').then(response => response.json()).then(result => {
            callback(result);
        })
        .catch(err =>{
            console.trace(err);
        })
    }
}


export default HTTP_SERVICE;