function addNote() {
    let note = document.createElement('li');
    note.classList.add('note-single');
    let noteName = document.createElement('p');
    let noteText = document.createElement('p');
    let noteDate = document.createElement('p');
    noteName.id = 'note-name-preview';
    noteText.id = 'note-text-preview';
    noteDate.id = 'note-date';
    noteDate.innerHTML = '18.09.2020';
    note.appendChild(noteName);
    note.appendChild(noteText);
    note.appendChild(noteDate);
    document.querySelector('.note-list').appendChild(note);
}

function deleteNote() {
    if (confirm('Are you sure?')) {
        let notes = document.querySelectorAll('.note-single');
        let list = document.querySelector('.note-list');
        list.removeChild(notes[notes.length - 1]);   
    }
}

document.getElementById('note-name').oninput = () => {
    document.getElementById('note-name-preview').innerHTML = document.getElementById('note-name').value;
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    document.getElementById('note-date').innerHTML = day + '.' + month + '.' + date.getFullYear() + ' ' + hours + ':' + minutes;
}

document.getElementById('note-text').oninput = () => {
    document.getElementById('note-text-preview').innerHTML = document.getElementById('note-text').value;
}