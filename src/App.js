import React from "react"
import GlobalState from "./Global/GlobalState"
import GlobalStyles from "./GlobalStyles/GlobalStyles"
import Router from "./routes/routes";




const App = () => {
  return (
    <div>
      <GlobalState>
        <Router /> 
        <GlobalStyles />
      </GlobalState>
    </div>

  );
}

export default App;
