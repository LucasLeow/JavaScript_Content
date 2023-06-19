import {FormData, Request} from "node-fetch";
import fetch from "node-fetch";

const root = 'http://jsonplaceholder.typicode.com/';
let uri = root + 'posts';

let form_data = new FormData();
form_data.append("userId", 3);
form_data.append("title", 'Title Created');
form_data.append('body', 'Content Created')

let options = {
    method: 'POST',
    mode: 'cors',
    body: form_data
}

let req = new Request(uri, options);

fetch(req)
.then((resp) => {
    if (resp.ok) {
        return resp.json();
    } else {
        throw new Error("POST fail");
    }
})
.then((json_resp) => {
    console.log(json_resp);
})
.catch((err) => {
    console.log("Error caught: ", err.message);
});
