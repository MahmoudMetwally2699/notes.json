// // import chalk from 'chalk';
// // console.log(chalk.red.bold.inverse('finish'));

const fwrite = require('fs')

const yargs = require('yargs');
const note = require('./note');
yargs.command({
    command: 'add',
    describe: 'Adding command',

    builder: ({
        title: {
            describe: 'Add note',
            demandOption: true,
            type: 'string'
        },
        describe: {
            describe: 'describe note',
            demandOption: true,
            type: 'string'
        }


    }),
    handler: function(argv) {
        note.addnote(argv.title, argv.describe)

    }
});

yargs.command({
    command: 'remove',
    describe: 'removinging command',
    builder: ({
        title: {
            describe: 'Add note',
            demandOption: true,
            type: 'string'
        },



    }),
    handler: function(argv) {
        note.removeNotes(argv.title)




    }
});



yargs.command({
    command: 'list',
    describe: 'reading command',

    handler: function(argv) {
        note.listNote(argv.title)

    }


});
yargs.command({
    command: 'read',
    describe: 'Read command',
    builder: ({
        title: {
            describe: 'Read note',
            demandOption: true,
            type: 'string'
        },



    }),
    handler: function(argv) {
        note.Read(argv.title)




    }
});

yargs.parse();