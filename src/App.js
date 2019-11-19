import React from 'react';
import {Provider} from "react-redux";
import store from "./redux/store";
import CounterDisplay from "./components/counterDisplay";
import IncrementButton from "./components/incrementButton"
//npx create-react-app (nameTheApp)
//npm install redux react-redux
function App() {
  return (
    <Provider store={store}>
    <div>
      <h1>redux with react</h1>
      <p>simple counter</p>
      <CounterDisplay/>
      <IncrementButton/>
    </div>
    </Provider>
  );
}

export default App;
