const sqlConfig = {
    user: "Anuwat_Thisuka",
    password: "11111111",
    database: "IIoT",
    server: "ANUWAT-THISUKA\\SQLEXPRESS",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: false,
    },
};
module.exports = sqlConfig;
