import * as React from "react"
import HeaderNavBar from "../components/header-navbar"
import LeftContainer from "../components/left-container"
import InformationContainer from "../components/right-container"
import SharingComponent from "../components/sharing-container"
import '../css/global.scss'

const IndexPage = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <LeftContainer />
      </div>
      <div className="right-container">
        <InformationContainer />
        <SharingComponent />
      </div>
      <HeaderNavBar />
    </div>
  )
}

export default IndexPage
