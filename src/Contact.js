import React from "react";

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Contact = () => {
  return (
    <div className="app-content">
      <h1>Contact Us</h1>
      <p>
        If you have any questions about this app, feel free to send your comments and suggestions {" "}
        <a id="trash" target="_blank" rel="noreferrer" href="https://media.istockphoto.com/id/171584082/photo/old-trashcan-clipping-path.jpg?s=612x612&w=0&k=20&c=wOwhB1e6PVmuRtZk7eb8pZ-HmrQjmFQnLXv6O6SaJeA=">here</a>.
      </p>
      <h2>Other resources:</h2>
      <p>
        For any questions about Appcues, check out <a href="https://appcues.com">Appcues.com</a>
      </p>
      <p>
        <a href="https://docs.appcues.com/">The Appcues docs</a> are also a great resource.  
      </p>      
    </div>
  );
};

export default Contact;
