import React from 'react';
import {Provider} from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
    <div>
      <h1>redux with react</h1>
      <p>simple counter</p>
    </div>
    </Provider>
  );
}

export default App;
