import fetch from 'node-fetch';


function main() {
    console.log("Hello REXT-World");
    fetch('http://localhost:8080/monolith/rext/usermgmt/users')
        .then(res => res.json())
        .then(users => {
            let arr = [];
            users.forEach(user => {
                arr.push(new User(user))
            });
            console.log(arr[0]);
        })
        .catch(err => console.error(err));
    
    let user = new User();
    user.login = 'mab'
    user.firstName = 'Berta'
    user.lastName = ' Maier'

    console.log(JSON.stringify(user));

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


//main()
function createUser() {
    let user = new User();
    user.login = 'mab6';
    user.firstName = 'Berta';
    user.lastName = ' Maier';
    postUser(user);

}

createUser()

