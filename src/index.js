import React from 'react';
import ReactDOM from 'react-dom';

import API_KEY from './API_KEY';
import SearchBar from './components/search_bar';

// Create a new component that produces HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// insert componenet's generated HTML in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
