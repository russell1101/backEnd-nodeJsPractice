import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "enter your url",
      name: "url",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.url;
    console.log(url);
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("qr_img.png"));

    // 寫入新txt檔案
    fs.writeFile("url.txt", url, (err) => {
      // When a request is aborted - the callback is called with an AbortError
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
