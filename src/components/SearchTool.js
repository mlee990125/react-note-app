import magnifier from '../images/baseline_search_black_24dp.png';
const SearchTool = () =>{

  return (
    <div className="search_tool">
      <img className="search_tool_img" src={magnifier} alt=""></img>
        <div className="search_box">
          <input className="search_engine" type="text" placeholder="Search all notes"></input>
        </div>
    </div>
  );
};

export default SearchTool;