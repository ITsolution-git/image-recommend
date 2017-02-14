 
var seeder = require('mongoose-seed');
var db = require('./config/db');
// Connect to MongoDB via Mongoose 
module.exports = function(){
    seeder.connect(process.env.MONGODB_URI, function() {

    // Load Mongoose models 
    seeder.loadModels([
        './app/models/Image.js',
    ]);

    // Clear specified collections 
    seeder.clearModels(['Image'], function() {

        // Callback to populate DB once collections have been cleared 
        seeder.populateModels(data, function(){});

    });
    });

    // Data array containing seed data - documents organized by Model 
    var data = [
    {
        'model': 'Image',
        'documents': [
            {
                'name': 'song-1.jpg',
                'subFolder': 'group1',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-2.jpg',
                'subFolder': 'group1',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-3.jpg',
                'subFolder': 'group1',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-4.jpg',
                'subFolder': 'group2',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-5.jpg',
                'subFolder': 'group2',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-6.jpg',
                'subFolder': 'group2',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-7.jpg',
                'subFolder': 'group2',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-8.jpg',
                'subFolder': 'group3',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-9.jpg',
                'subFolder': 'group3',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-10.jpg',
                'subFolder': 'group3',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-11.jpg',
                'subFolder': 'group4',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-12.jpg',
                'subFolder': 'group4',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-13.jpg',
                'subFolder': 'group4',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-14.jpg',
                'subFolder': 'group5',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-15.jpg',
                'subFolder': 'group5',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-16.jpg',
                'subFolder': 'group5',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-17.jpg',
                'subFolder': 'group6',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-18.jpg',
                'subFolder': 'group6',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-19.jpg',
                'subFolder': 'group6',
                'status' : '',
                'amount' : 0
            },
            {
                'name': 'song-20.jpg',
                'subFolder': 'group7',
                'status' : '',
                'amount' : 0
            },
        ]
    }
    ];
}