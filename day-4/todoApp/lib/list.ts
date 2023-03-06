import Conf from 'conf';
import chalk from 'chalk';
import { TodoItem } from './ITodoItems';
import program from 'commander';

const inquirer = require('inquirer');

const conf = new Conf({ projectName: 'todo-project' });

let todos: TodoItem[] = Array.from(conf.get('todo-project') as Iterable<TodoItem>);

// export const list = () => {
//   if (todos.length === 0) {
//     console.log('No tasks found.');
//   } else {
//     const table = todos.map((todo) => ({
//       ID: todo.id,
//       Task: todo.text,
//       Completed: todo.checked ? chalk.greenBright('Yes') : chalk.bgGray('No'),
//     }));
//     console.table(table);
//   }
// };

export const list = () => {
  if (todos.length === 0) {
    console.log('No tasks found.');
  } else {
    console.log('ID  | Task                 | Completed');
    console.log('-------------------------------------');

    // Display the checked tasks
    todos.forEach((todo) => {
      const task = `${todo.id.toString().padEnd(4)}| ${todo.text.padEnd(23)}| ${todo.checked ? chalk.greenBright('Yes') : chalk.bgGray('No')}`;
      console.log(task);
    });

    // Display the unchecked tasks
    const uncheckedTasks = todos.filter((todo) => !todo.checked);
    if (uncheckedTasks.length > 0) {
      console.log('-------------------------------------');
      uncheckedTasks.forEach((todo) => {
        const task = `${todo.id.toString().padEnd(4)}| ${todo.text.padEnd(23)}| ${chalk.bgGray('No')}`;
        console.log(task);
      });
    }
  }
};



