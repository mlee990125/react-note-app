import picture from './KakaoTalk_Photo_2021-10-14-18-17-59.jpeg'
import trashCanImg from './baseline_delete_black_24dp.png'
import searchToolImg from './baseline_search_black_24dp.png'

const Sidebar = ({ notes, handleDelete, activeNote, setActiveNote }) => {

  const lengthCheck = (text) => {
    if(text.length > 30){
      return text.substr(0, 30) + '...';
    }else{
      return text;
    } 

  }


  return (
    <div class="notes_tab">
        <div class="notes_tab_header">
          <span class="profile_pic">
            <img class="picture" src={picture} alt=""></img>
          </span>
          <span class="header_title">My Notes</span>
          <span class="trash_can" onClick={() => handleDelete(activeNote)}>
            <img class="trash_can_img" src={trashCanImg} alt=""></img>
          </span>
        </div>
        <div class="search_tool">
          <img class="search_tool_img" src={searchToolImg} alt=""></img>
          <div class="search_box">
            <input class="search_engine" type="text" placeholder="Search all notes"></input>
          </div>
        </div>
        <div class="notes_list">
          {notes.map((note) => (
            <div 
            class={`notes_list_item ${note.id === activeNote && "notes_list_item_selected"}`} 
            onClick={() => setActiveNote(note.id)}
            >
            <div class="notes_title">{lengthCheck(note.text)}</div>
            <div class="notes_date">{new Date(note.lastModified).toLocaleDateString()}</div>
          </div>
          ))}
          
        </div>

      </div>

  );
};

export default Sidebar;