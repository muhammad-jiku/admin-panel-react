/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Add,
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheet/User.css';

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle"> Edit User </h1>
        <Link to="/newUser">
          <Add className="userAddButton" />
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://stillrealtous.com/wp-content/uploads/2021/06/edge.jpeg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">EDGE</span>
              <span className="userShowUserTitle">Professional Wrestler</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Acoount Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">wweedgeadam925</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.5.1975</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">
                wweedgeadam925@gmail.com
              </span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 78</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">NYC | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="wweedgeadam925"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="EDGE"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="wweedgeadam925@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 78"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="NYC | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://stillrealtous.com/wp-content/uploads/2021/06/edge.jpeg"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  style={{ display: 'none' }}
                />
              </div>
              <button type="submit" className="userUpdateButton">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
