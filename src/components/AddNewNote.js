import addNoteImg from '../images/baseline_note_add_black_24dp.png'

const AddNewNote = () => {
  return(
    <div class="add_new_note">
      <button id="add_new_note_img">
        <img src={addNoteImg} alt=""></img>
      </button>
    </div>
  );
};

export default AddNewNote;