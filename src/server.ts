import express from "express";

const app = express();

app.get("/", (req, res) => {
    return res.json({ message: "hello word" });
});

app.listen(3000, () => {
    console.log("Server is running!");
});
