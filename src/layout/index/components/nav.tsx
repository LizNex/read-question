
import React from 'react'
import "./nav.css"
import { Link } from "react-router-dom"


/** 导航子组件props */
interface NavItemProps{
  /** 导航显示的文字 */
  text:string
  /** 导航跳转的url */
  url:string
}

/** 导航子组件 */
const NavItem:React.FC<NavItemProps> = ({text,url}) =>{
  return (
    <Link className="Nav-item" to={url}>
        {text}
    </Link>)
}

/** 导航组件 */
const Nav:React.FC< {items:NavItemProps[]}> = ({items}) => {
  const children = items.map(p=>{
    return <NavItem  key={p.url} {...p} ></NavItem>
  })

  return (
    <div className="Nav">
      { children }
    </div>
  )
}

/** 导航配置列表 */
const navList:NavItemProps[] = [
  {text:"问答",url:"/home"},
]

export default ()=>{
  return <Nav items={navList} ></Nav>
}


