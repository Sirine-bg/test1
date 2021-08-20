
import React, { Component } from 'react';
import './App.css';
import Tachyons from 'tachyons/css/tachyons.min.css';
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import Search from './components/Search';
import initialDetails from './data/initialDetails';



function App () {
 
    
  return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={initialDetails}/>
   
    </div>
   
    
  );
  
}

export default App;
