var mongoose = require('mongoose');
var Image = require('./models/Image');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // frontend routes =========================================================
    // route to handle all angular requests

    app.get('/api/images', function(req, res) {
        Image.find({}, function(err, images) {
            if (err){ console.error(err);  res.json({}); }
            res.json(images);
        });
    });

    app.get('/api/archive/:id', function(req, res) {
        var id = req.params['id'];
        Image.findById(id, function(err, image) {
            if (err) console.error(err);

            image.status = 'archived';
            image.amount = 0;
            image.save(function(err, image){
                Image.find({}, function(err, images) {
                    if (err) res.json({err:err});
                    for (var i = 0; i < images.length; i++) {
                        if(images[i].status != 'archived'){

                            images[i].amount += 1;
                            images[i].save();
                        }
                    }
                    res.json(images);
                });        
            });
        });
    });
    app.get('*', function(req, res) {
        res.json({result:"Endpoint not found"});
    });

};