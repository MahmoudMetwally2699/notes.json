const fs = require('fs')
const chalk = require('chalk');


const print = function() {
    console.log("NOTES....");
}
const addnote = (title, describtion) => {
    const Notes = loadNotes()
    const dupli = Notes.find(note => {
        return note.title === title
    })
    if (!dupli) {
        Notes.push({
            title: title,
            describtion: describtion
        })
        savingNotes(Notes)
        console.log(chalk.green.inverse.bold("Notes ADD"));
    } else {
        console.log(chalk.red.inverse.bold("Note title already Taken!"));
    }
}
const removeNotes = (title) => {
    const loadNotess = loadNotes()
    if (loadNotess.length === 0) { console.log(chalk.red.inverse.bold("empty!")); } else {


        const newOne = loadNotess.filter(note => {
            return note.title !== title;
        })
        if (newOne.length < loadNotess.length) {
            console.log(chalk.green.inverse.bold('Note Has been deleted'));

            savingNotes(newOne);

        } else {
            console.log(chalk.red.inverse.bold("There is no note with this title "));
        }
    }
}
const Read = (title) => {
    const loadNotee = loadNotes()
    const founded = loadNotee.find(item => {
        return item.title === title
    })
    if (founded) {
        console.log(chalk.green.inverse.bold.italic("Title : " + founded.title + " "));
        console.log(chalk.green.inverse.bold("Body : " + founded.describtion + " "));

    } else {
        console.log(chalk.red.inverse.bold("No note found "));
    }




}

const listNote = () => {
    const load = loadNotes();
    console.log(chalk.inverse("Your Notes : \n"));
    load.forEach(element => {
        console.log(element.title);

    });





}
const savingNotes = (saves) => {
    const JsonWrte = JSON.stringify(saves)
    fs.writeFileSync('./note.json', JsonWrte)
}
const loadNotes = () => {
    try {
        const readNotes = fs.readFileSync('./note.json', { encoding: 'utf-8' })
        return JSON.parse(readNotes)

    } catch (error) {
        return []
    }


}
module.exports = {
    Notes: print,
    addnote: addnote,
    removeNotes: removeNotes,
    listNote: listNote,
    Read: Read



}