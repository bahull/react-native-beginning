let todos = [];
let id = 1;

const addTodo = (req, res, next) => {
  console.log(todos);
  let todoObj = { todo: req.body.item, id: id };
  todos.push(todoObj);
  res.status(200).json(todos);
  id += 1;
};
const removeTodo = (req, res, next) => {
  todos.splice(todos.findIndex(curr => curr.id === req.params.id), 1);
  res.status(200).json(todos);
};
const editTodo = (req, res, next) => {
  todos[req.params.id] = req.body.item;
  res.status(200).json(todos);
};

const getTodo = (req, res, next) => {
  res.status(200).json(todos);
};

module.exports = {
  addTodo,
  removeTodo,
  editTodo,
  getTodo
};
