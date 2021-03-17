import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ProjectList from "./components/project-list.component";
import EditProject from "./components/edit-project.component";
import CreateProject from "./components/create-project.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={ProjectList} />
      <Route path="/edit/:id" exact component={EditProject} />
      <Route path="/create" exact component={CreateProject} />
      <Route path="/user" exact component={CreateUser} />
    </Router>
  );
}

export default App;
