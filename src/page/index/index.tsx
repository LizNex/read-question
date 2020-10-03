import React, { createContext, useState, useEffect } from 'react';
import QAPanel from './components/qa-panel/qa-panel';
import BtnGroup from './components/btn-group';
import originList from '../../data/question';





type HomeCtxSetState<T> = React.Dispatch<React.SetStateAction<T>>;

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
export const homeCtx = createContext<HomeCtx|null>(null);
export const MARK_LIST = 'MARK_LIST';


const Home = () => {
  const [questionList] = useState(originList);
  const [questionIdx, setQuesionIdx] = useState<number>(0);
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const [markList, setMarkList] = useState(() => {
    return JSON.parse(localStorage.getItem(MARK_LIST) || '0') || [];
  });
  const [markIdx, setMarkIdx] = useState(0);
  const [isOnlyShowMark, setIsOnlyShowMark] = useState(false);
  const { list, idx, setIdx } = isOnlyShowMark
    ? {
        list: markList.length?markList.map((i: number) => questionList[i]):[[]],
        idx: markIdx,
        setIdx: setMarkIdx,
      }
    : { list: questionList, idx: questionIdx, setIdx: setQuesionIdx };

  const isMark = markList.includes(idx);

  useEffect(() => {
    if (isOnlyShowMark) {
      setMarkIdx(0);
    }
  }, [isOnlyShowMark]);

  useEffect(() => {
    setIsShowAnswer(false);
  }, [idx]);

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
    isMark,
  };


  return (
    <div>
      <homeCtx.Provider value={ctxValue}>
        <QAPanel></QAPanel>
        <BtnGroup></BtnGroup>
      </homeCtx.Provider>
    </div>
  );
};

export default Home;
