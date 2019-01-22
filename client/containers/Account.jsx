import React from 'react';

import MyListings from '../components/MyListings.jsx';
import UserInfo from '../components/UserInfo.jsx';

const Account = props => {
  return (
    <div>
      <div>
        <UserInfo />
        <MyListings />
      </div>
      <div>
        <button>Add Item</button>
      </div>
    </div>
  );
};

export default Account;
