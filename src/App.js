import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Routes
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotels from "./pages/hotels/Hotels";
import List from "./pages/list/List";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/>} />
        <Route path="/hotels/:id" element={<Hotels/>} />
      </Routes>
    </Router>
  );
}

export default App;
