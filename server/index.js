const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const {
  addTodo,
  removeTodo,
  editTodo,
  getTodo
} = require("./controllers/todo");

const app = express();

const port = 3001;

app.use(json());
app.use(cors());

app.get("/api/getTodo", getTodo);

app.post("/api/addTodo", addTodo);

app.delete("/api/removeTodo/:id", removeTodo);

app.post("/api/editTodo/:id", editTodo);

app.listen(port, () => {
  console.log(`listening at port: ${port}`);
});
