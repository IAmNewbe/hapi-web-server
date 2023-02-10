const { request } = require("http");

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*', //route dapat diakses menggunakan seluruh method yang ada pada HTTP
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request,  h) => {
            return 'Halaman tidak dapat diakses dengan method';
        }
    },
    {
        method: '*',
        path: '/{any*}', //menangani permintaan masuk pada path yang belum Anda tentukan
        handler: (request, h) => {
            return 'Halaman tidak ditemukan'
        }
    }
];

module.exports = routes;