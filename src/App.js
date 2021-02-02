import React from "react";
import './App.css';

const App = () => {

  const APP_ID = '2a43513a'
  const APP_KEY = 'bd34b64b59e8fd2876fbac498f3ce0ae	';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return(
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
};

export default App;
