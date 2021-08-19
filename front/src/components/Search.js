import React, { useState } from 'react';
import SearchList from './SerachList';


function Search({ details }) {

    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false);
    const [lists, setLists] = useState([])
     const [newList, setNewList] = useState({
  title:'',
 
})

const AddNewList=(x)=>{setLists([...lists, x])}

//  const handleChange = (e) => {
//   setNewList({ ...newList, [e.target.name]: e.target.value });
// };
    const filteredlists = details.filter(
      list => {
        return (
          list
          .title
          .toLowerCase()
          .includes(searchField.toLowerCase()) 
        );
      }
    );

    const handleChange = e => {
      setSearchField(e.target.value);
      if(e.target.value===""){
        setSearchShow(false);
      }
      else {
        setSearchShow(true);
      }
    };
  
    function searchList() {
        if (searchShow) {
            return (
                
                    <SearchList filteredlists={filteredlists} />
            
            );
        }
    }
  
    return (
      <section className="garamond">
              <div className="navy georgia ma0 grow">
                  <h2 className="f2">Welcome to your TO-DO-LIST</h2>
              </div>
              <div className="pa2">
                  <input 
                      className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                      type = "search" 
                      
                      placeholder = "Search List" 
                      onChange = {handleChange}
                  />
                  <button   onClick={() => { AddNewList(newList)  }}> ADD List  </button>
                 
              </div>
              {searchList()}
             
          </section>
    );
  }
  
  export default Search;