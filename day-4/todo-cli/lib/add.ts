import Conf from 'conf';
import chalk from 'chalk';
import { TodoItem } from './ITodoItems';
import program from 'commander';

const inquirer = require('inquirer');

const conf = new Conf({projectName: 'todo-project'});

export const add = () => {
  inquirer.prompt([
    {
      type:'input',
      name:'text',
      message:'Yeni bir task giriniz:',
      validate: (value: string) => {
        if (value.length === 0) {
          return 'Lütfen bir task giriniz.';
        }
        return true;
      }
    },
    {
      type:'list',
      name:'group',
      message:'Task grubunu seçiniz:',
      choices: ['Work', 'Personal', 'Shopping', 'Others']
    }
  ]).then((answers : {text: string, group: string}) => {
    let todos = conf.get('todo-project') as TodoItem[];
    const todo = { id: todos.length + 1, text: answers.text, checked: false , createdDate: Date.now(), group: answers.group };
    todos.push(todo);
    conf.set('todo-project', todos);
    console.log(chalk.gray(`Added task "${todo.text}" with ID ${todo.id} to the ${todo.group} group.`));
  });
};



