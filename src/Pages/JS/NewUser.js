/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../Stylesheet/NewUser.css';

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Randy" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Randy Orton" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="randywweorton124@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 113 256 58" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Chicago | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="others" value="others" />
            <label htmlFor="others">Others</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No </option>
          </select>
        </div>
        <button className="newUserButton"> Create User </button>
      </form>
    </div>
  );
}
