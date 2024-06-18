import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.css"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import Header from "./Components/Header"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Router>
    <Header />
    <App />
  </Router>
)

reportWebVitals()
