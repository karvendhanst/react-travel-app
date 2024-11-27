import React from 'react'
import '../AdvanceSearch/advancesearch.css'

const AdvanceSearch = () => {
  return (
    <form className='search-input'>
        <div className='input-field'>
            <label>Location</label> <br/>
            <input type='text' placeholder='Location'/>
        </div>
        <div className='input-field'>
            <label>Check in</label> <br/>
            <input type='date' value={new Date().toISOString().substr(0, 10)}/>
        </div>
        <div className='input-field'>
            <label>Check Out</label> <br/>
            <input type='date' value={new Date().toISOString().substr(0, 10)}/>
        </div>
        <div className='input-field'>
            <label>Guest </label> <br/>
            <input type='text' placeholder='Guest'/>
        </div>
        <button type='button' className='btn as-btn'>Search</button>
    </form>
  )
}

export default AdvanceSearch