import React from "react";
import Nav from './Nav';

export default function Header() {
const textArr = ['Home', 'About', `Tell us about${'\n'}how you feel${'\n'}about our nav${'\n'} not working!`]
const [text, setText] = useState(...textArr);
  return (
    <div>
      <Nav className='navigation' text={text}/>
    </div>
  );
}
