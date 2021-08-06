import * as React from "react"
import HeaderNavBar from "../components/header-navbar"
import LeftContainer from "../components/left-container"
import InformationContainer from "../components/right-container"
import '../css/global.scss'

const IndexPage = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <LeftContainer />
      </div>
      <div className="right-container">
        <InformationContainer />
      </div>
      <HeaderNavBar />
    </div>
  )
}

export default IndexPage
