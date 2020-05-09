const mongoose = require('mongoose');
const { ContactSchema, UserSchema } = require('../models/crmModels');
const Contact = mongoose.model('Contact', ContactSchema);
const Users = mongoose.model('Users', UserSchema);
export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
export const addNewUser = (req, res) => {
    let newContact = new Users(req.body);
    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
////////////////
export const getContact = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
export const getUsers = (req, res) => {
    Users.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
////////////////
export const getContactID = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

// Put Controller
export const updateContact = (req, res) => {
    Contact.findOneAndUpdate(
        { _id: req.params.contactId },
        req.body,
        { new: true },
        (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        }
    );
};

export const deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.contactId }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact' });
    });
};
