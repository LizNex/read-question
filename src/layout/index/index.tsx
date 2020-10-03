import React from 'react'
import Nav from "./components/nav"
import "./index.css"


const  DefaultLayout:React.FC = ({children})=>{
    return <div>
      <Nav></Nav>
      {children}
    </div>
}



export default DefaultLayout

