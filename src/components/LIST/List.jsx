import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useRef, useState } from 'react'
import Listitem from "../Listitem/Listitem"
import "./List.css"
const List = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleclick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 4) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="watch">Continue to watch</span>
      <div className="wrapper">
         <ArrowBackIosNewOutlined className="sliderArrowleft"
          onClick={()=>handleclick("left")}style={(slideNumber>0)?{display:"block"}:{display:"none"}}/>
      <div className="itemcontainer"
      ref={listRef}>
           <Listitem index={0}/>
           <Listitem index={1}/>
           <Listitem index={2}/>
           <Listitem index={3}/>
           <Listitem index={4}/>
           <Listitem index={5}/>
           <Listitem index={6}/>
           <Listitem index={7}/>
           <Listitem index={8}/>
           <Listitem index={9}/>
      </div>
      <ArrowForwardIosOutlined className="sliderArrowright"
      onClick={()=>handleclick("right")}
      style={(slideNumber<4)?{display:"block"}:{display:"none"}}/>
      </div>
     
    </div>
  )
}

export default List;