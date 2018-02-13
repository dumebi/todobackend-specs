var chai = require('chai'),
    should = chai.should,
    expect = chai.expect,
    promise = require('bluebird'),
    request = require('superagent-promise')(require('superagent'), promise),
    chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var url = process.env.URL || 'http://localhost:8000/todos';



/*
 *  Convinience functions
 */

// POST request with data and return promise
function post(url, data){
    return request.post(url)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(data)
    .end();
}

// GET request and return promise
function get(url){
    return request.get(url)
    .set('Accept', 'application/json')
    .end();
}

// DELETE request and return promise
function del(url){
    return request.del(url).end();
}

// Update request with data and return promise
function update(url, method, data){
    return request(method, url)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(data)
    .end();
}

// Resolve promise for property and return expectation
function assert(result, prop){
    return expect(result).to.eventually.have.deep.property(prop)
}