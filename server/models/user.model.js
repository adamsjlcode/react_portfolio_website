const mongoose = require('mongoose');
require('mongoose-type-url');
const validator = require('validator');
const Schema = mongoose.Schema;

// const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 8
    },
    admin: {
        type: Boolean,
        required: true
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'User email required'],
        unique: true,
        lowercase: true,
        validate: {
                validator: function (v) {
                return validator.isEmail(v)
            },
            message: props => `${props.value} is not a valid email!`
        },
    },
    phone: {
        type: String,
        validate: {
            validator: function(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'User phone number required']
    },
    address: { type: String, required: true},
    url: { type: mongoose.SchemaTypes.Url }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;