import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandname;

// 先進行轉譯body
app.use(express.urlencoded({ extended: true }));

function createbandName(req, res, next) {
  console.log(req.body);
  bandname = req.body["street"] + req.body["pet"];
  next();
}
// 在自己製作middleware 去給全域變數值
app.use(createbandName);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// 最後回覆答案
app.post("/submit", (req, res) => {
  // 也可以直接在這裡做 不用自創middleware
  // console.log(req.body);
  // const { street, pet } = req.body;
  // res.send(`your band name is ${street + pet}`);
  res.send(`your band name is ${bandname}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
