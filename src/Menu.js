import React from "react";
import Search from "./Search";
import Rank from "./Rank";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Reset.css";
import "./Search.css";

class Menu extends React.Component {
  render() {
    return (
      <Router>
        <div className="Menu-wrapper">
          <ul>
            <Link to="/movie_app_kofic/rank">
              <li>Rank</li>
            </Link>
            <Link to="/movie_app_kofic/search">
              <li>Search</li>
            </Link>
          </ul>
        </div>
        <div className="Contents-wrapper">
          <Switch>
            <Route path="/movie_app_kofic/rank" component={Rank} />
            <Route path="/movie_app_kofic/search" component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Menu;
