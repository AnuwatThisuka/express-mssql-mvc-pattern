const express = require("express");
const app = express();
const port = 3000;
const testRouter = require("./routes/test.routes");

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use("/test-api", testRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });

    return;
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
