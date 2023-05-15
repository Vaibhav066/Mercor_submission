import React from 'react'
import './Leftcard.scss'

const Leftcard = () => {
  return (
    <div className='left-card'>
      <div className='left-title'>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[3px]"><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#A594FD"></path></svg>
        Workflow
      </div>
      <div className='left-heading'>
        Create at the speed of thought.
      </div>
      <div className='left-content'>
        Focus on your getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you
      </div>
    </div>
  )
}

export default Leftcard