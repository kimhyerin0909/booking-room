import React, { useRef, useState } from 'react'
import Info from './Info';
import List from './List'

export default function Home() {
  const selects = useRef<HTMLSelectElement>(null);
  const [options, setOptions] = useState("전체");
  const [data, setData] = useState<object>();
  const [content, setContent] 
    = useState(<List
        clicked={(dt:object) => {saveData(dt)}}
        isClick={(isClick:boolean) => relocateSelect(isClick)}
        options={options}
      />)
  let isClicked = false;

  const changeOption = (e:any) => {
    setOptions(() =>  e.target.value);
  }

  const saveData = (data:object) => {
    if(isClicked) {
      setContent(() => <Info data={data} back={() => relocateSelect(false)} />)
    }
    setData(() => data);
  }
  
  const relocateSelect = (isClick:boolean) => {
    const {current} = selects;
    isClicked = isClick;
    if(current !== null) {
      if(isClicked) {
        current.style.display = "none";
        setContent(() => <Info data={data} back={() => relocateSelect(false)} />)
      } else {
        current.style.display = "flex";
        setContent(() => <List clicked={(dt:object) => {saveData(dt)}} isClick={(isClick:boolean) => relocateSelect(isClick)} options={options} />)
      }
    }
  }

  return (
    <article className='booking-list'>
      <div className='type-box'>
        <select ref={selects} onChange={changeOption} className='booking-type'>
          <option>전체</option>
          <option>예약 가능</option>
          <option>예약 중</option>
        </select>
      </div>
      {content}
    </article>
  )
}
