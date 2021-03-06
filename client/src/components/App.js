import React, { useState, useEffect, createContext } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import getCurrentUser from "../services/getCurrentUser"
import "../assets/scss/main.scss"
import RegistrationForm from "./registration/RegistrationForm"
import SignInForm from "./authentication/SignInForm"
import TopBar from "./layout/TopBar"
import ItemIndex from "./addItems/ItemIndex"

const App = (props) => {
  const [string, setString] = useState("Test String")
  const [currentUser, setCurrentUser] = useState(undefined)
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  const stringContext = createContext()

  return (
    <stringContext.Provider value={string}>
      <Router>
        <TopBar user={currentUser} />
        <Switch>
          <Route exact path="/">
            <h2 className="main-title">Window/Door Trim Cut List Calculator</h2>
            <ItemIndex />
          </Route>
          <Route exact path="/users/new" component={RegistrationForm} />
          <Route exact path="/user-sessions/new" component={SignInForm} />
        </Switch>
      </Router>
    </stringContext.Provider>
  )
}

export default hot(App)
