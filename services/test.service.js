const db = require("./db.service");
const helper = require("../helper/helper");
const config = require("../config/config");

async function getMultiple() {
    const rows = await db.query(`SELECT * [IIoT].[dbo].[db_b14_area01]`);
    const data = helper.emptyOrRows(rows);

    return {
        data,
    };
}
module.exports = {
    getMultiple,
};
