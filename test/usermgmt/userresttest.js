import { assert } from 'chai';
import UserRestAccess from '../../usermgmt/userrest.js'

describe('User REST API', function() {
    describe('ping()', function() {
        it('should return non empty message', async() => {
            let objUnderTest = new UserRestAccess();
            let msg = await objUnderTest.ping();
            assert.isNotEmpty(msg);
        })
    })
    describe('getUsers()', function() {
        it('should return non empty json', async() => {
            let objUnderTest = new UserRestAccess();
            let jsonData = await objUnderTest.getUsers();
            assert.isNotEmpty(jsonData);
        })
    })

});