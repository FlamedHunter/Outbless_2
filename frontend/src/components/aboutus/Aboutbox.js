import React from 'react'
import './aboutbox.css'

export default function Aboutbox(props) {
  return (
    <>
        <div className='aboutboxcontainer'>
            <div className='aboutboxiconbox'>
                <div dangerouslySetInnerHTML={{ __html: props.svg }} />
            </div>

            <div className='aboutboxtextbox'>
                <h3>{props.heading}</h3>
                <p>{props.information}</p>
            </div>
        </div>
    </>
  )
}
