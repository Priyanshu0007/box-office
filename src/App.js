import React from "react";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import {Switch,Route} from "react-router-dom";
import Show from "./pages/Show";
import { ThemeProvider } from "styled-components";
const theme={
  mainColors:{
    // blue:"#2400ff",
    // gray:"#c6c6c6",
    // dark:"#353535"
    blue:"#5B4B8A",
    gray:"#52057B",
    dark:"#000000"
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Switch>
      <Route exact={true} path="/">
        <Home></Home>
      </Route>
      <Route exact={true} path="/starred">
        <Starred></Starred>
      </Route>
      <Route exact path="/show/:id">
        <Show></Show>
      </Route>
      <Route>Error 404 page not found</Route>
    </Switch>
    </ThemeProvider>
  );
}

export default App;
