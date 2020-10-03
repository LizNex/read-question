import React, { useState,useRef,useEffect,useContext } from 'react';
import { Question } from '../../../../data/question';
import {homeCtx} from "../../index"




type beforeFn = (idx:number,list:Question) => boolean

interface BtnProps {
  /** 按钮文字 */
  text:string
  /** 播放问题偏移的位置 */
  num?:number
  /** 播放前的回调 */
  beforePlay?:beforeFn
}

/** 播放按钮组件 */
const BtnPlay:React.FC<BtnProps> = ({num,text,beforePlay}) => {
  const {setIdx,idx,list} = useContext(homeCtx)
  const audioRef:any = useRef(null)
  const [forceUpdate, setForceUpdate] = useState(0)
  const [src,setSrc] = useState("")


  useEffect(() => {
    if(audioRef.current && src){
      audioRef.current.play()
      .catch((err:any)=>console.log(err))
    }
  }, [forceUpdate, src])


  const change = (num=1, before = (idx:number,list:any[])=>true) => {
    return () => {
      if (!before(idx,list)) {
        return idx;
      }
      playAudio(list[idx+num][0])
      setIdx(idx+num);
    };
  };


  const playAudio=(text:string,speed=8)=>{
    setSrc(`http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=${speed}&text=${text}`)
    setForceUpdate(forceUpdate+1)
  }


  return (
    <div className="Btn-play">
      <button onClick={change(num,beforePlay)}>{text}</button>
			<audio src={src} ref={audioRef}/>
    </div>
  )
}

export default BtnPlay
