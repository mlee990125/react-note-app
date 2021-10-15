import Sidebar from './Sidebar';
import Main from './Main';
import './App.css'
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
//change
function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const handleAddNote = () => {
    const newNote = {
      text: 'New Note',
      lastModified: Date.now(),
      id: nanoid(),

    }
    setNotes([newNote, ...notes]);
  }
  
  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);


  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  }

  const onEditNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote){
        return updatedNote;

      }

      return note;
    });
    setNotes(updatedNotesArray);
  };

  useEffect(()=> {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes){
      setNotes(savedNotes);
    }
  }, []);

  useEffect(()=> {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

  return (
    <div className="notes">
      <Sidebar 
      notes={notes} 
      handleDelete={handleDelete} 
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      
      />
      <Main handleAddNote={handleAddNote}
      activeNote={getActiveNote()}
      onEditNote={onEditNote}
      />
    </div>
    
  );
}

export default App;
