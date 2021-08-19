import React from 'react';
import Card from './Card';

function SearchList({ filteredlists }) {
  const filtered = filteredlists.map( list =>  <Card key={list.id} list={list} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;