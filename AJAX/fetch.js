import fetch from "node-fetch";

const root = "http://jsonplaceholder.typicode.com";
let id = Math.floor(Math.random() * 20) + 1; //id between 1 to 20

let uri = root + '/users/' + id;

console.log(uri);

fetch(uri)
.then((response) => {
    if (response.status==200) {
        return response.json();
    } else{
        throw new Error("Invalid user ID");
    }
})
.then((response)=>console.log(response))
.catch((err) => {
    console.log(err.message);
})