let express = require("express");
const app = express();
app.use(express.static('public'))


app.listen(8080, (err) => {
if (err) {
  return console.log("Error", err);
}
});
