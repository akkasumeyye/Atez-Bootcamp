import Conf from 'conf';
import chalk from 'chalk';
import { TodoItem } from './ITodoItems';
import inquirer from 'inquirer';

const conf = new Conf({projectName:'todo-project'});

export const update = (id: number): void => {
  let todos: TodoItem[] = Array.from(conf.get('todo-project') as Iterable<TodoItem>);

  if (!todos) {
    console.log(chalk.red('Todo list is empty.'));
    return;
  }

  const todoItem = todos.find((item) => item.id === Number(id));
  
  if (!todoItem) {
    console.log(chalk.red(`No todo item found with id ${id}`));
    return;
  }

  inquirer.prompt({
    type: 'input',
    name: 'text',
    message: 'Enter new text for the todo item:',
    validate: (value: string) => {
      if (value.length === 0) {
        return 'Please enter some text';
      }
      return true;
    }
  }).then((answer: {text: string}) => {
    const newText = answer.text;
    todoItem.text = newText;
    conf.set('todo-project', todos);
    console.log(chalk.green(`Todo item with id ${id} updated: ${newText}`));
  });
}


