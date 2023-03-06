// import Conf from 'conf';
// import inquirer from 'inquirer';
// import chalk from 'chalk';

// import { TodoItem } from './ITodoItems';

// const conf = new Conf({ projectName: 'todo-project' });

// export const check = () => {
//   inquirer.prompt({
//     type: 'number',
//     name: 'id',
//     message: 'Enter the ID of the task you want to mark as complete:'
//   }).then((answer: { id: number }) => {
//     const todoList = conf.get('todo-project') as TodoItem[] | undefined;
//     if (Array.isArray(todoList)) {
//       const todo = todoList.find(todo => todo.id === answer.id);
//       if (todo) {
//         todo.checked = true;
//         console.log(`Task ${todo.id} marked as complete.`);
//       } else {
//         console.log(`Task with ID ${answer.id} not found.`);
//       }
//     } else {
//       console.log('No tasks found.');
//     }
//   });
// };



import Conf from 'conf';
import inquirer from 'inquirer';
import chalk from 'chalk';

import { TodoItem } from './ITodoItems';

const conf = new Conf({ projectName: 'todo-project' });

if (!conf.has('todo-project')) {
  conf.set('todo-project', []);
}

let todos = conf.get('todo-project') as TodoItem[];

// export const check = () => {
//   const choices = todos.map(todo => ({ name: todo.text, value: todo.id }));

//   inquirer.prompt({
//     type: 'checkbox',
//     name: 'tasks',
//     message: 'Select the tasks you want to mark as complete:',
//     choices: choices
//   }).then((answer: { tasks: number[] }) => {
//       todos.forEach((todo: TodoItem) => {
//         if (answer.tasks.includes(todo.id)) {
//           todo.checked = true;
//           conf.set('todo-project', todos);
//           console.log(chalk.blue(`Task ${todo.id} marked as complete.`));
//         }
//       });   
//   });
// };

export const check = () => {
  const choices = todos.map(todo => ({
    name: todo.text,
    value: todo.id,
    checked: todo.checked
  }));

  inquirer.prompt({
    type: 'checkbox',
    name: 'tasks',
    message: 'Select the tasks you want to mark as complete:',
    choices
  }).then((answer: { tasks: number[] }) => {
    todos.forEach((todo: TodoItem) => {
      if (answer.tasks.includes(todo.id)) {
        todo.checked = true;
      }
    });
    conf.set('todo-project', todos);
    answer.tasks.forEach((taskId: number) => {
      console.log(chalk.blue(`Task ${taskId} marked as complete.`));
    });
  });
};

