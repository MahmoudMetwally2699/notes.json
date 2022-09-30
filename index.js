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
    command: 'remove-desc',
    describe: 'removinging command',
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
        fwrite.readFile('note.txt', { encoding: 'utf-8' }, function(err, data) {

            let dataArray = data.split('\n'); // convert file data in an array
            const searchKeyword = argv.describe; // we are looking for a line, contains, key word 'user1' in the file
            let lastIndex = -1; // let say, we have not found the keyword

            for (let index = 0; index < dataArray.length; index++) {
                if (dataArray[index].includes(searchKeyword)) { // check if a line contains the 'user1' keyword
                    lastIndex = index; // found a line includes a 'user1' keyword
                    break;
                }
            }

            dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array

            // UPDATE FILE WITH NEW DATA
            // IN CASE YOU WANT TO UPDATE THE CONTENT IN YOUR FILE
            // THIS WILL REMOVE THE LINE CONTAINS 'user1' IN YOUR shuffle.txt FILE
            const updatedData = dataArray.join('\n');
            fwrite.writeFile('note.txt', updatedData, (err) => {
                if (err) throw err;
                console.log('Successfully updated the file data');
            });

        });


    }
});


yargs.command({
    command: 'read',
    describe: 'reading command',

    handler: function(argv) {
        const m = fwrite.readFileSync('note.txt', 'utf8')
        console.log(m);
    }


});

yargs.parse();