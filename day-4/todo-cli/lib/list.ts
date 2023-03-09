import Conf from 'conf';
import chalk from 'chalk';
import { TodoItem } from './ITodoItems';
import program from 'commander';

const inquirer = require('inquirer');

const conf = new Conf({ projectName: 'todo-project' });

let todos: TodoItem[] = Array.from(conf.get('todo-project') as Iterable<TodoItem>);

export const list = (group?: string) => {
  if (todos.length === 0) {
    console.log('No tasks found.');
  } else {
    console.log('ID  | Task                 | Completed | Group');
    console.log('---------------------------------------------');

    // Filter tasks by group
    const filteredTodos = group ? todos.filter((todo) => todo.group === group) : todos;

    // Display the checked tasks
    filteredTodos.forEach((todo) => {
      const task = `${todo.id.toString().padEnd(4)}| ${todo.text.padEnd(23)}| ${todo.checked ? chalk.greenBright('Yes') : chalk.bgGray('No').padEnd(9)}| ${todo.group}`;
      console.log(task);
    });

    // Display the unchecked tasks
    const uncheckedTasks = filteredTodos.filter((todo) => !todo.checked);
    if (uncheckedTasks.length > 0) {
      console.log('---------------------------------------------');
      uncheckedTasks.forEach((todo) => {
        const task = `${todo.id.toString().padEnd(4)}| ${todo.text.padEnd(23)}| ${chalk.bgGray('No').padEnd(9)}| ${todo.group}`;
        console.log(task);
      });
    }
  }
};


