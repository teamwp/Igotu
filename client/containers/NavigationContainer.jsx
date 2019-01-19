/* eslint-disable no-unused-expressions */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import Search from '../components/SearchBox.jsx';
import SubNavigation from './SubNavContainer.jsx'
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
      <div className="nav-left" />
      <div className="nav-center">
        <div className="nav-item no-hover" id="header-search">
          <Search
            fetchSearchedItems={props.fetchSearchedItems}
            searchValue={props.searchValue}
            searchBoxChange={props.searchBoxChange}
          />
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-item has-sub toggle-hover" id="dropdown">
          <a className="nav-dropdown-link">Categories</a>
          <ul className="dropdown-menu dropdown-animated" role="menu">
            <li role="menu-item">
              <center>
                <a href="/">Show All</a>
              </center>
            </li>
            <li
              role="menu-item"
              onClick={() => {
                props.fetchCategory('outdoor');
              }}
            >
              <center>Outdoor</center>
            </li>
            <li
              role="menu-item"
              onClick={() => {
                props.fetchCategory('household');
              }}
            >
              <center>Household</center>
            </li>
            <li
              role="menu-item"
              onClick={() => {
                props.fetchCategory('entertainment');
              }}
            >
              <center>Entertainment</center>
            </li>
            <li
              role="menu-item"
              onClick={() => {
                props.fetchCategory('toys');
              }}
            >
              <center>Toys</center>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Navigation;
