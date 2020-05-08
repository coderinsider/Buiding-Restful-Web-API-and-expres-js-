const routes = (app) => {
    app.route('/contact')
        .get(
            (req, res, next) => {
                // middleware
                console.log(`Request from: ${req.originalUrl}`);
                console.log(`Request method ${req.method}`);
                return next();
            },
            (req, res) => {
                res.send(`Get request successfully`);
            }
        )
        .post((req, res) => {
            res.send(`Post request successfully`);
        });

    app.route('/contact/:contactId')
        .put((req, res) => {
            res.send(`Edit request successfully`);
        })
        .delete((req, res) => {
            res.send(`Delete request successfully`);
        });
};
module.exports = routes;
