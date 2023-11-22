import React from 'react'
import "./style.css"

const Alif = (props) => {
  return (
    <div className='alif-container'>
      <div className="content">
        <div className="alif">
          <img src={props.image} alt="" className='alif-img' />
          <h2 className='alif-title'>{props.title}</h2>
          <p className='alif-text'>{props.text}</p>
          <span className='alif-span'>{props.span}</span>
        </div>
      </div>
    </div>

  );
}


export default Alif;