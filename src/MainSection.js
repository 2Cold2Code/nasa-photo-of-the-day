import React, { useState } from "react";

export default function MainSection(props) {
console.log('mainSection props = ', props)
  const [title] = useState(props.data.title);
  console.log("This is Title: ", title);

  return (
    <div className = 'main-section'>
      <h1 className="title" >{title}</h1>
      <p className='description' >{props.explanation}</p>
      <img src={props.url} alt={props.explanation}/>
      {console.log('This is MainSection props: ', props)}
      <p className='date'>{props.date}</p>
    </div>
  )
}
