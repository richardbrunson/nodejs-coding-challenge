const users = require('./../data/users.json');

'use strict';

const viewUsers = () => {
    console.log('viewUsers() ' + Math.random());
}

const createUser = () => {
    console.log('createUser() ' + Math.random());
}

const updateUser = () => {
    console.log('updateUser() ' + Math.random());
}

const deleteUser = () => {
    console.log('deleteUser() ' + Math.random());
}

$(document).ready(() => {
    $('#view').click(() => { viewUsers() });
    $('#create').click(() => { createUser() });
    $('#update').click(() => { updateUser() });
    $('#delete').click(() => { deleteUser() });
});