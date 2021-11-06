import fetch from 'node-fetch';
import User from './usermgmt/user.js'
import UserRestAccess from './usermgmt/userrest.js';

/*
function createGetHeader4Json() {
    const config = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };
    return config
}

function getUsers() {
    return fetch('http://localhost:8080/monolith/rext/usermgmt/users')
        .then(res => res.json())
        .then(users => {
            let arr = [];
            users.forEach(user => arr.push(new User(user)));
            return arr;
        })
        .catch(err => console.error(err));
}






async function postUser(user) {
    let dataBody = JSON.stringify(user);
    console.log(dataBody);

    let response = await fetch('http://localhost:8080/monolith/rext/usermgmt/users', {
        method: 'post',
        body: dataBody,
        headers: {'Content-Type': 'application/json'}
    }).catch(err => console.error(err));

    console.log(response.status);

    let data = await response.headers.raw();

    console.log(data.link[0]);
    
}

function createUser() {
    let user = new User();
    user.login = 'mab6';
    user.firstName = 'Berta';
    user.lastName = ' Maier';
    postUser(user);

}

async function main() {
    // createUser()
    //let result = getUsers();
    //let data = await result.then(data => {return data});
    //data.forEach(user => console.log(user))

    let userAccess = new UserRestAccess();

    let pingData = await userAccess.ping();
    console.log(pingData);
}
*/

//main();
