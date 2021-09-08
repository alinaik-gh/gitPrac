"use strict";
// console.clear();
// console.log("Adam's Todo List");
Object.defineProperty(exports, "__esModule", { value: true });
// import { TodoItem } from "./todoItem";
// import { TodoCollection } from "./todoCollection";
// let todos = [
//     new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
//     new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];
// let collection = new TodoCollection("Adam", todos);
// console.clear();
// console.log(`${collection.userName}'s Todo List`);
// let newId = collection.addTodo("Go for run");
// let todoItem = collection.getTodoById(newId);
// console.log(JSON.stringify(todoItem));
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"), new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"), new todoItem_1.TodoItem(4, "Call Joe", true)
];
let collection = new todoCollection_1.TodoCollection("Adam", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
todoItem.printDetails();
collection.addTodo(todoItem);
