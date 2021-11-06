import fetch from 'node-fetch';

export default class UserRestAccess {
    constructor() {
        this.baseURL = 'http://localhost:8080/monolith/rext/usermgmt';
    }

    async ping() {
        const res = await fetch(this.baseURL + '/ping');
        const data = await res.json();
        return data;
    }

    async getUsers() {
        const res = await fetch(this.baseURL + '/users');
        const data = await res.json();
        return data;
    }
}