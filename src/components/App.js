import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main";




const App = () => {


  return (
    <>
      <Header  />
      <Main uno={true} dos={1} tres={"Maximiliano"} />
      <Footer  />
    </>
  )
}

export default App;