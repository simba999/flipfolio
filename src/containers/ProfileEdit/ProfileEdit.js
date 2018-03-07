import React from 'react';
import { Page } from 'react-onsenui';

const ProfileEdit = ({ back }) => (
  <Page id="edit-profile">
    <div className="toolbar blue">
      <div className="toolbar__left">
        <span className="toolbar-button">
          <i
            onClick={() => { back() }}
            className="icon-close"
            style={{ fontSize: '30px' }}
          />
        </span>
      </div>
      <div className="toolbar__center">
        Edit profile
      </div>
      <div className="toolbar__right">
        <span className="toolbar-button" onClick={() => back()} >
          Save
        </span>
      </div>      
    </div>
    <div className="profile-card">
      <div className="profile-image-container">
        <div className="profile-image" />      
      </div>
      <input
        className="text-input profile-name"
        type="text"
        defaultValue="Dave Graham"
        style={{ textAlign: 'center', backgroundColor: 'white' }}
      />
    </div>
  </Page>
);

export default ProfileEdit;
