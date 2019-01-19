/* eslint-disable no-unused-expressions */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import Search from '../components/SearchBox.jsx';
// import * as actions from '../constants/actionTypes';

const Navigation = props => (
  <div id="nav-bar" className="header header-fixed unselectable header-animated">
    <div className="header-brand">
      <div className="nav_item no-hover">
        <h6 className="title">igotu</h6>
      </div>
    </div>
    <div className="header-nav" id="header-menu">
      <div className="nav-center">
        <div className="nav-item no-hover" id="header-search">
          <Search fetchSearchedItems={props.fetchSearchedItems} />
        </div>
      </div>
    </div>
  </div>
);

export default Navigation;
