import addNoteImg from './baseline_note_add_black_24dp.png'
import backImg from './baseline_arrow_back_black_24dp.png'
const Main = ( { handleAddNote, activeNote, onEditNote}) => {

  

  const onEdit = (text, activeNote) => {
    if(!activeNote) return;
    onEditNote({
      text: text,
      lastModified: Date.now(),
      id: activeNote.id,
    });

  };

 const noteSelected = (activeNote2) =>{
   if(!activeNote2){
     return "No Notes Selected";
   }else {
     return activeNote2.text;
   }
 }

  return (
    <div className="notes_edit">
        <div className="add_new_note">
          <button className="back_img" onClick={() => console.log("clicked!")}>
            <img src={backImg} alt=""></img>
          </button>
          <button id="add_new_note_img" onClick={handleAddNote}>
            <img src={addNoteImg} alt=""></img>
          </button>
        </div>
        <div className="text">
          <textarea id="txt" className="notes_body" onChange={(e) => onEdit(e.target.value, activeNote)} value={noteSelected(activeNote)}></textarea>
        </div>
      </div>

  );

};

export default Main;