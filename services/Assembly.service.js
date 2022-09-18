const db = require("./db.service");

async function get() {
    const result = await db.query(`SELECT * FROM [IIoT].[dbo].[db_b14_area01]`);

    let message = "Error";

    if (result.affectedRows) {
        message = "successfully";
    }

    return { message };
}

module.exports = {
    get,
};
