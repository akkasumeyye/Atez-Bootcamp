import { list } from "./lib/list";
import { update } from "./lib/update";
import { check } from "./lib/check";
import { deneme } from "./lib/deneme";
import { add } from "./lib/add";

import { Command } from 'commander';

const program = new Command();


//list task

program
.command('list')
.description("List all todo items")
.action(list);

// add task

program.command("add")
.description('Add new todo item')
.action(add);

//update

program
  .command('update <id>')
  .description('Update an existing todo item')
  .action((id: number) => {
    update(id);
  });

  // task-check

  program
  .command('task-check')
  .description('Check or uncheck existing todo items')
  .action(check);


 

  program
  .command('deneme')
  .description('Check or uncheck an existing todo item')
  .action(deneme)  

program.parse();