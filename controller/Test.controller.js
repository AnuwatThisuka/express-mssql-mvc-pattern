const testServices = require("../services/test.service");

async function getMultiple(req, res, next) {
    try {
        res.json(await testServices.getMultiple(req.query.page));
    } catch (err) {
        console.error(
            `Error while getting programming languages `,
            err.message
        );
        next(err);
    }
}

module.exports = {
    getMultiple,
};
