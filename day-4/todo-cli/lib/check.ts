import Conf from 'conf';
import inquirer from 'inquirer';
import chalk from 'chalk';

import { TodoItem } from './ITodoItems';

const conf = new Conf({ projectName: 'todo-project' });

if (!conf.has('todo-project')) {
  conf.set('todo-project', []);
}

let todos = conf.get('todo-project') as TodoItem[];


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

