import ProfilePic from './components/ProfilePic';
import TrashCan from './components/TrashCan';
import SearchTool from './components/SearchTool';
import NotesList from './components/NotesList';
import AddNewNote from './components/AddNewNote';
const App = () =>{
  return (
    <div className="notes">
      <div className="notes_tab">
        <div className="notes_tab_header">
          <ProfilePic/>
          <span className="header_title">My Notes</span>
          <TrashCan/>
        </div>
        <SearchTool/>
        <NotesList/>
      </div>
      <div className="notes_edit">
        <AddNewNote/>
        <div class="text">
          <textarea id="txt" class="notes_body"></textarea>
        </div>
      </div>
    </div>

  );
};

export default App;
