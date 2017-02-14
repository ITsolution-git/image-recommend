// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Image', {
    name: { type: String, default: '' },
    subFolder: { type: String, default: '' },
    status: { type: String, default: '' },
    link: { type: String, default: '' },
    amount: { type: Number }
});