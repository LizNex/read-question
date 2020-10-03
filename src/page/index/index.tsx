import React, { createContext, useState, useEffect } from 'react'
import QAPanel from './components/qa-panel/qa-panel'
import BtnGroup from './components/btn-group'
import originList from '../../data/question'

type HomeCtxSetState<T> = React.Dispatch<React.SetStateAction<T>>;
/** 首页 上下文 约束 */
export interface HomeCtx {
  setIdx: HomeCtxSetState<number>
  setIsShowAnswer:HomeCtxSetState<boolean>
    setMarkList:HomeCtxSetState<number[]>
    setIsOnlyShowMark:HomeCtxSetState<boolean>
    idx:number
    list:[]
    isShowAnswer:boolean
    isOnlyShowMark:boolean
    markList:number[]
    isMark:boolean

}
/** 首页上下文 */
export const homeCtx = createContext<HomeCtx|null>(null)
/** 标记列表 localStorage key */
export const MARK_LIST = 'MARK_LIST'

/** 首页组件 */
const Home = () => {
  /** 问题列表 */
  const [questionList] = useState(originList)
  /**  问题列表下标 */
  const [questionIdx, setQuesionIdx] = useState<number>(0)
  /** 是否显示答案 */
  const [isShowAnswer, setIsShowAnswer] = useState(false)
  /** 标记问题列表 */
  const [markList, setMarkList] = useState(() => {
    return JSON.parse(localStorage.getItem(MARK_LIST) || '0') || []
  })
  /** 标记问题下标 */
  const [markIdx, setMarkIdx] = useState(0)
  /**  是否只展示标记问题 */
  const [isOnlyShowMark, setIsOnlyShowMark] = useState(false)
  /** 根据是否只显示标记标志位，显示对应列表 */
  const { list, idx, setIdx } = isOnlyShowMark
    ? {
      list: markList.length ? markList.map((i: number) => questionList[i]) : [[]],
      idx: markIdx,
      setIdx: setMarkIdx
    }
    : { list: questionList, idx: questionIdx, setIdx: setQuesionIdx }
  /** 当前显示问题是否被标记 */
  const isMark = markList.includes(idx)

  /** 切换显示标记问题时，重置mark下标 */
  useEffect(() => {
    if (isOnlyShowMark) {
      setMarkIdx(0)
    }
  }, [isOnlyShowMark])

  /** 切换问题时隐藏答案 */
  useEffect(() => {
    setIsShowAnswer(false)
  }, [idx])

  const ctxValue:HomeCtx = {
    setIdx,
    setIsShowAnswer,
    setMarkList,
    setIsOnlyShowMark,
    idx,
    list,
    isShowAnswer,
    isOnlyShowMark,
    markList,
    isMark
  }

  return (
    <div>
      <homeCtx.Provider value={ctxValue}>
        <QAPanel></QAPanel>
        <BtnGroup></BtnGroup>
      </homeCtx.Provider>
    </div>
  )
}

export default Home
