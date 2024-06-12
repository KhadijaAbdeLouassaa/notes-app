document.addEventListener('DOMContentLoaded', function() {
    const addNoteBtn = document.querySelector('.add-note-btn');
    const notesContainer = document.querySelector('.notes-container');
    const noteDetails = document.querySelector('.note-details');
    const notes = []; // Array to store notes data

    // Event listener for the "Add Note" button
    addNoteBtn.addEventListener('click', function() {
        const title = document.querySelector('.note-title').value;
        const content = document.querySelector('.note-content').value;
        const date = document.querySelector('.note-date').value;
        const color = document.querySelector('.color-picker').value;

        // Create a new note object
        const newNote = {
            title: title,
            content: content,
            date: date,
            color: color
        };

        // Add the new note to the array
        notes.push(newNote);

        // Render all notes
        renderNotes();
    });

    // Function to render all notes
    function renderNotes() {
        // Clear the notes container
        notesContainer.innerHTML = '';

        // Loop through all notes and generate HTML elements for each note title
        notes.forEach(function(note, index) {
            const noteTitleElem = createNoteTitleElement(note, index);
            notesContainer.appendChild(noteTitleElem);
        });
    }

    // Function to create a note title HTML element
    function createNoteTitleElement(note, index) {
        const noteTitleElem = document.createElement('div');
        noteTitleElem.classList.add('note-title');
        noteTitleElem.textContent = note.title;
        noteTitleElem.style.backgroundColor = note.color; // Apply color to note title element

        // Event listener to show full details of the note when clicked
        noteTitleElem.addEventListener('click', function() {
            displayNoteDetails(note, index);
        });

        return noteTitleElem;
    }

    // Function to display full details of a selected note
    function displayNoteDetails(note, index) {
        const noteDetailsHTML = `
            <h2>${note.title}</h2>
            <p><strong>Date:</strong> ${note.date}</p>
            <p><strong>Content:</strong> ${note.content}</p>
            <p><strong>Color:</strong> <span style="background-color: ${note.color}; padding: 5px;">${note.color}</span></p>
            <button class="edit-note-btn" data-index="${index}">Edit Note</button>
        `;
        noteDetails.innerHTML = noteDetailsHTML;

        // Event listener for the "Edit Note" button
        const editNoteBtn = document.querySelector('.edit-note-btn');
        editNoteBtn.addEventListener('click', function() {
            editNoteDetails(index);
        });
    }

    // Function to edit details of a note
    function editNoteDetails(index) {
        const note = notes[index];
        const titleInput = document.querySelector('.note-title');
        const contentInput = document.querySelector('.note-content');
        const dateInput = document.querySelector('.note-date');
        const colorPicker = document.querySelector('.color-picker');

        titleInput.value = note.title;
        contentInput.value = note.content;
        dateInput.value = note.date;
        colorPicker.value = note.color;
    }
});
