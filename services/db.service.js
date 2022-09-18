const config = require("../config/config");
const sql = require("mssql");

async function query() {
    await sql.connect(config);
}

module.exports = {
    query,
};
