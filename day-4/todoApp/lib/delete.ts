import Conf from 'conf';
import chalk from 'chalk';
import { TodoItem } from './ITodoItems';
import program from 'commander';

const inquirer = require('inquirer');

const conf = new Conf({ projectName: 'todo-project' });

let todos: TodoItem[] = Array.from(conf.get('todo-project') as Iterable<TodoItem>);

export const deleteTodo = () => {
    if (todos.length === 0) {
      console.log('No tasks found.');
      return;
    }

    inquirer.prompt({
      type: 'list',
      name: 'taskToDelete',
      message: 'Select a task to delete:',
      choices: todos.map((todo) => ({
        name: todo.text,
        value: todo.id,
      })),
    }).then((answer: { taskToDelete: number }) => {
      const indexToDelete = todos.findIndex((todo) => todo.id === answer.taskToDelete);
      const taskToDelete = todos[indexToDelete].text;
      todos.splice(indexToDelete, 1);
      conf.set('todo-project', todos);
      console.log(chalk.gray(`Deleted task "${taskToDelete}" with ID ${answer.taskToDelete}.`));
    });
  }