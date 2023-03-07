import { list } from "./lib/list";
import { update } from "./lib/update";
import { check } from "./lib/check";
import { add } from "./lib/add";
import { deleteTodo } from "./lib/delete";

import { Command } from 'commander';

const program = new Command();


//list task

program
  .command('list')
  .description('List all todo items')
  .option('-g, --group <group>', 'Filter by group')
  .action(({ group }) => list(group));


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

// delete

program.command('delete')
.description('Delete an existing todo item')
.action(deleteTodo);

program.parse();