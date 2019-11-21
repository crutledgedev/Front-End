import React from 'react';
import {
  Link
} from "react-router-dom";
function Home() {
  return (
    <div >
      <h1>Marketing Page</h1>
      <Link to="/dashBoard">DashBoard</Link>
      
      {/* <Link to="/MVP">Get Request MVP Proof of Concept</Link> */}
      
    </div>
  );
}

export default Home;
