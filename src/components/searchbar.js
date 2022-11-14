export default function Searchbar({search,setSearch}){
    function handleSearch(e) {
        e.preventDefault();
        setSearch(e.target.value);
    }
    return(
        <div className="search-bar">
            <input
             type="text"
             placeholder="Search Unit"
             name={search}
            onChange = {handleSearch}
              ></input>
        </div>
    )
}