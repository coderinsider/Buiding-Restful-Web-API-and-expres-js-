const {
    addNewContact,
    getContact,
    getContactID,
    updateContact,
    deleteContact,
} = require('../controllers/crmControllers');
const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request method ${req.method}`);
            return next();
        }, getContact)
        // POST endpoint
        .post(addNewContact);

    app.route('/contact/:contactId')
        // get specific contact
        .get(getContactID)
        // put request
        .put(updateContact)

        // Delete request
        .delete(deleteContact);
};
module.exports = routes;
