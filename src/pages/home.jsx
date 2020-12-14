import React from "react";
import Catalog from "../components/catalog";
import TopBar from "../components/navbar"
import "./pageStyles.css"

function Home(){
  return (
    <div className="home">
      <TopBar/>
      <Catalog/>
    </div>
  )
}

export default Home;