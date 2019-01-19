/* eslint-disable no-unused-expressions */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import Search from '../components/SearchBox.jsx';
// import * as actions from '../constants/actionTypes';

const Navigation = props => (
  <div id="nav-bar" className="header header-fixed unselectable header-animated">
    <div className="header-brand">
      <div className="nav_item no-hover">
        <a href="/">
          <h6 className="title">igotu</h6>
        </a>
      </div>
    </div>
    <div className="header-nav" id="header-menu">
      <div className="nav-center">
        <div className="nav-item no-hover" id="header-search">
          <Search
            fetchSearchedItems={props.fetchSearchedItems}
            searchValue={props.searchValue}
            searchBoxChange={props.searchBoxChange}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Navigation;
