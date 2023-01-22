import React from 'react'

export default function weatherItem(props) {
  return (
    <div className='main'>
        <p>{props.db_txt}</p>
    </div>
  )
}
