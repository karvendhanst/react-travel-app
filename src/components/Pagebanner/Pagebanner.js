import React from 'react'
import pb1 from '../../assets/images/pagebanner/pb1.jpg'
import './pagebanner.css'

const Pagebanner = (props) => {
    return (
        <>
            <div className='page-banner'>
                <img src={pb1} />
                <h3>{props.name}</h3>
            </div>
        </>
    )
}

export default Pagebanner