import fetch from 'node-fetch';

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

async function ping() {
    const res = await fetch('http://localhost:8080/monolith/rext/usermgmt/ping');
    const data = await res.json();
    return data;
}

class User {
    constructor(options = {}) {
        Object.assign(this, options);
    }
    get login() {
        return this.userlogin;
    }
    get firstName() {
        return this.firstName;
    }
    set firstName(name) {
        this.firstname = name;
    }
    set lastName(name) {
        this.lastname = name;
    }
    set login(name) {
        this.userlogin = name;
    }

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
    let result = getUsers();
    let data = await result.then(data => {return data});
    data.forEach(user => console.log(user))
    let pingData = await ping();
    console.log(pingData);
}

main()