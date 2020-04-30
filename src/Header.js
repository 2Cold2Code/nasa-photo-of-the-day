import React from "react";
import Nav from './Nav';

export default function Header() {
  const a = document.querySelectorAll('a')
  a.forEach(anchor => {anchor.style.alignSelf='center'
  anchor.style.textDecoration = 'none'});
  // const header = document.querySelector('.header')
  

  return (
    <div>
      <Nav className='navigation'/>
    </div>
  );
}
