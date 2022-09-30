const fs = require('fs')

const print = function() {
    console.log("NOTES....");
}
const addnote = function(title, describtion) {
    const Notes = loadNotes()
    const dupli = Notes.filter(note => {
        note.title === title
    })

    if (dupli.length === 0) {
        Notes.push({
            title: title,
            describtion: describtion
        })
        savingNotes(Notes)
        console.log("Notes ADD");
    } else {
        console.log("Note title already Taken!");
    }
}
const removeNotes = function(title) {
    const loadNotess = loadNotes()
    const newOne = loadNotess.filter(note => {
        return note.title !== title
    })
    savingNotes(newOne);
}
const savingNotes = function(saves) {
    const JsonWrte = JSON.stringify(saves)
    fs.writeFileSync('./note.json', JsonWrte)
}
const loadNotes = function() {
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
    removeNotes: removeNotes


}