const express = require("express");
const app = express();
const PORT = 5000;

// app.use(express.static("public"));
app.set("view engine", "ejs")

app.get("/",(req,res) => {
  console.log("Hello");
})


app.listen(PORT,() => console.log("サーバーが起動しました"));