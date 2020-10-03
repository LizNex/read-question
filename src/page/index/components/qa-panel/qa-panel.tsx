import React,{useContext} from 'react';
import { HomeCtx, homeCtx } from '../..';
import "./qa-panel.css"


const QAPanel:React.FC = () => {

  const {list,idx,isShowAnswer,isMark} = useContext(homeCtx as React.Context<HomeCtx>)

  const no=`${idx+1}/${list.length}`
  const question = list[idx][0]
  const answer =  list[idx][1]

  return (
    <div className={`qa-panel ${isMark?'qa-panel__mark':""}`} >
        <div className="qa-panel__serial">{`${no}`}</div>
        <div className="question">问题: {question}</div>
        { isShowAnswer && <div className="answer" >答案：{answer}</div> } 
    </div>
  )
}

export default QAPanel



