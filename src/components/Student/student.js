import React from 'react';
import BorderCard from '../common/BorderCard'

const Student = (props) => {
  const {title, description} = props.Student;
  return (
    <BorderCard style={{width: '100%'}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <div style={{flexDirection: 'column', margin: 10}} >
          <h2>Title</h2>
          <h2 style={{fontWeight: 'bold'}}>{title}</h2>
        </div>
        <div style={{flexDirection: 'column', margin: 10}}>
          <h2>Description</h2>
          <h2>{description}</h2>
        </div>

      </div>
    </BorderCard>
  )
}

export default Student