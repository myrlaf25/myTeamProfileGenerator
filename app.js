const fs = require("fs");

//write html file

function writeSite(html) {
  fs.writeFile("sampleIndex.html", html, (err) => {
    if (err) {
      throw err;
    }
    console.log("saved HTML successfully");
  });
}

module.exports = writeSite;
