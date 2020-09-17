const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();

//express has its own body parser
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")));

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log("Server listening on: ", PORT);
});

app.use("/users", require("./routes/userRouter"));
app.use("/todo", require("./routes/todoRouter"));
app.use("/generaltext", require("./routes/textRouter"));
