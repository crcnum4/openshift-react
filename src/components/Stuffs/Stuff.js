import React from 'react';
import BorderCard from '../common/BorderCard'

const Stuff = (props) => {
  const {title,content} = props.stuff;
  return (
      
    <BorderCard style={{width: '100%'}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <div style={{flexDirection: 'column', margin: 10}} >
          <h2>Title:</h2>
          <h2 style={{fontWeight: 'bold'}}>{title}</h2>
        </div>
        <div style={{flexDirection: 'column', margin: 10}} >
          <h2>Content:</h2>
          <h2 style={{fontWeight: 'italics'}}>{content}</h2>
        </div>
      </div>
    </BorderCard>
  )
}

export default Stuff