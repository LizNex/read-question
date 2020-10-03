import React, { useContext } from 'react'
import { HomeCtx, homeCtx } from '../..'
import './qa-panel.css'
/** 问答面板 */
const QAPanel:React.FC = () => {
  const { list, idx, isShowAnswer, isMark } = useContext(homeCtx as React.Context<HomeCtx>)
  /** 序列 */
  const no = `${idx + 1}/${list.length}`
  /** 问题 */
  const question = list[idx][0]
  /** 答案 */
  const answer = list[idx][1]

  return (
    <div className={`qa-panel ${isMark ? 'qa-panel__mark' : ''}`} >
      <div className="qa-panel__serial">{no}</div>
      <div className="question">问题: {question}</div>
      { isShowAnswer && <div className="answer" >答案：{answer}</div> }
    </div>
  )
}

export default QAPanel
