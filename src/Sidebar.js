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
    <div className="notes_tab">
      <div className="wrapper">
      <div className="notes_tab_header">
          <span className="profile_pic">
            <img className="picture" src={picture} alt=""></img>
          </span>
          <span className="header_title">My Notes</span>
          <span className="trash_can" onClick={() => handleDelete(activeNote)}>
            <img className="trash_can_img" src={trashCanImg} alt=""></img>
          </span>
        </div>
        <div className="search_tool">
          <img className="search_tool_img" src={searchToolImg} alt=""></img>
          <div className="search_box">
            <input className="search_engine" type="text" placeholder="Search all notes"></input>
          </div>
        </div>
        <div className="notes_list">
          {notes.map((note) => (
            <div 
            className={`notes_list_item ${note.id === activeNote && "notes_list_item_selected"}`} 
            onClick={() => setActiveNote(note.id)}
            >
            <div className="notes_title">{lengthCheck(note.text)}</div>
            <div className="notes_date">{new Date(note.lastModified).toLocaleDateString()}</div>
          </div>
          ))}
          
        </div>

      </div>
        

      </div>

  );
};

export default Sidebar;