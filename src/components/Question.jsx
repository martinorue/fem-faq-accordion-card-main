import iconArrow from '../assets/images/icon-arrow-down.svg'
import { useState } from 'react'
function Question ({ question, answer }) {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div className='question-answer-wrapper' onClick={handleClick}>
        <div className="question-container" >
            <p className='question'>{question}</p>
            <button className={`icon-arrow ${isActive ? 'active' : ''}`}><img src={iconArrow}/></button>
        </div>
        <p className={`answer ${!isActive ? 'hidden' : ''}`}>{answer}</p>
      <div className='line-separator'></div>
    </div>
  )
}

export default Question
