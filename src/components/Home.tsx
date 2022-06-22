import React, { useState } from 'react'
import List from './List'

export default function Home() {
  const [options, setOptions] = useState("전체");
  const changeOption = (e:any) => {
    setOptions(() =>  e.target.value);
  }
  return (
    <article className='booking-list'>
      <div className='type-box'>
        <select onChange={changeOption} className='booking-type'>
          <option>전체</option>
          <option>예약 가능</option>
          <option>예약 중</option>
        </select>
      </div>
      <List options={options} />
    </article>
  )
}
