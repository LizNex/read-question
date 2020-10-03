import React, { useState, useRef, useEffect, useContext } from 'react'
import { Question } from '../../../../data/question'
import { HomeCtx, homeCtx } from '../../index'

type beforeFn = (idx:number, list:Question) => boolean

interface BtnProps {
  /** 按钮文字 */
  text:string
  /** 播放问题偏移的位置 */
  num?:number
  /** 播放前的回调 */
  beforePlay?:beforeFn
}

/** 播放按钮组件 */
const BtnPlay:React.FC<BtnProps> = ({ num, text, beforePlay }) => {
  const { setIdx, idx, list } = useContext(homeCtx as React.Context<HomeCtx>)
  /** 音频播放器ref */
  const audioRef = useRef<HTMLAudioElement>(null)
  /** 辅助强制更新state */
  const [forceUpdate, setForceUpdate] = useState(0)
  /** 音频路径 */
  const [src, setSrc] = useState('')
  /** 每次点击播放系列按钮触发播放 */
  useEffect(() => {
    if (audioRef.current && src) {
      audioRef.current.play()
        .catch((err) => console.log(err))
    }
  }, [forceUpdate, src])
  /** 改变当前题目 */
  const change = (num = 1, before = (idx:number, list:Question) => true) => {
    return () => {
      if (!before(idx, list)) {
        return idx
      }
      playAudio(list[idx + num][0])
      setIdx(idx + num)
    }
  }
  /** 播放音频 */
  const playAudio = (text:string, speed = 8) => {
    setSrc(`http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=${speed}&text=${text}`)
    setForceUpdate(forceUpdate + 1)
  }

  return (
    <div className="Btn-play">
      <button onClick={change(num, beforePlay)}>{text}</button>
      <audio src={src} ref={audioRef}/>
    </div>
  )
}

export default BtnPlay
