import React from "react";

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Settings = () => {
  return (
    <div className="app-content">
      <h1>Change your app's settings here</h1>
      <p>Password</p>
      <select defaultValue="Select one" >
        <option  disabled='disabled'>Select one</option>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
      </select>
    </div>
  );
};

export default Settings;