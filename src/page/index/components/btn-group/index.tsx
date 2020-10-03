import React, { useContext, useEffect } from 'react'
import { HomeCtx, homeCtx, MARK_LIST } from '../..'
import { Question } from '../../../../data/question'
import BtnPlay from './btn-play'
import './index.css'

/** 按钮组 组件 */
const BtnGroup: React.FC = () => {
  const { setIsShowAnswer, idx, setIsOnlyShowMark, markList, setMarkList, isMark, isOnlyShowMark } = useContext(homeCtx as React.Context<HomeCtx>)
  /** 更新标记列表同时更新 localstorage 参数 */
  useEffect(() => {
    localStorage.setItem(MARK_LIST, JSON.stringify(markList))
  }, [markList])

  /** 切换下一个 */
  const next = (idx:number, list:Question) => {
    if (idx >= list.length - 1) {
      alert('已到题目尾部')
      return false
    }
    return true
  }
  /** 下一个按钮参数 */
  const nextBtn = {
    beforePlay: next,
    text: '下一页',
    num: 1
  }
  /** 切换上一个 */
  const pre = (idx:number) => {
    if (idx <= 0) {
      alert('已到题目顶部')
      return false
    }
    return true
  }
  /** 上一个按钮 */
  const preBtn = {
    beforePlay: pre,
    text: '上一页',
    num: -1
  }
  /** 重复按钮 */
  const againBtn = {
    text: '重复',
    num: 0
  }
  /** 显示答案 */
  const showAnswer = () => {
    setIsShowAnswer(true)
  }

  /** 标记问题 */
  const mark = () => {
    if (isMark) {
      const tmp = [...markList]
      tmp.splice(markList.indexOf(idx), 1)
      setMarkList(tmp)
    } else {
      setMarkList([idx, ...markList])
    }
  }
  /** 清空标记列表 */
  const clearMark = () => {
    setMarkList([])
  }

  /** 只显示标记列表 */
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
