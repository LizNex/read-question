import React, { useContext, useEffect } from 'react'
import { HomeCtx, homeCtx, MARK_LIST } from '../..'
import { Question } from '../../../../data/question'
import BtnPlay from './btn-play'
import './index.css'

const BtnGroup: React.FC = () => {
  const { setIsShowAnswer, idx, setIsOnlyShowMark, markList, setMarkList, isMark, isOnlyShowMark } = useContext(homeCtx as React.Context<HomeCtx>)
  useEffect(() => {
    localStorage.setItem(MARK_LIST, JSON.stringify(markList))
  }, [markList])

  const next = (idx:number, list:Question) => {
    if (idx >= list.length - 1) {
      alert('已到题目尾部')
      return false
    }
    return true
  }

  const nextBtn = {
    beforePlay: next,
    text: '下一页',
    num: 1
  }

  const pre = (idx:number) => {
    if (idx <= 0) {
      alert('已到题目顶部')
      return false
    }
    return true
  }

  const preBtn = {
    beforePlay: pre,
    text: '上一页',
    num: -1
  }

  const againBtn = {
    text: '重复',
    num: 0
  }

  const showAnswer = () => {
    setIsShowAnswer(true)
  }

  const mark = () => {
    if (isMark) {
      const tmp = [...markList]
      tmp.splice(markList.indexOf(idx), 1)
      setMarkList(tmp)
    } else {
      setMarkList([idx, ...markList])
    }
  }
  const clearMark = () => {
    setMarkList([])
  }

  const onlyMarkList = () => {
    setIsOnlyShowMark(!isOnlyShowMark)
  }

  return (
    <div className="btn-group">
      <div className="btn-group_play-group btn-group-sub">
        <BtnPlay {...preBtn}></BtnPlay>
        <BtnPlay {...againBtn}></BtnPlay>
        <BtnPlay {...nextBtn}></BtnPlay>
      </div>
      <div className="btn-group_mark-group btn-group-sub">
        <button onClick={mark}> {isMark ? '取消标记' : '标记'} </button>
        <button onClick={clearMark}>清空标记</button>
        <button onClick={onlyMarkList}>{isOnlyShowMark ? '显示全部' : '只显示标记题目'} </button>
      </div>
      <div className="btn-group-sub">
        <button onClick={showAnswer}>显示答案</button>

      </div>
    </div>
  )
}

export default BtnGroup
