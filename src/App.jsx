import './App.css'
import Question from './components/Question'
import data from '../data'
import heroImage from '../src/assets/images/illustration-woman-online-mobile.svg'
import heroImageShadow from '../src/assets/images/bg-pattern-mobile.svg'

function App () {
  const questions = data.map(q => <Question key={q.id} question={q.question} answer={q.answer} />)

  return (
    <main className="main">
      <img className='main__hero-image' src={heroImage} alt=''/>
      <img className='main__hero-shadow' src={heroImageShadow} alt=''/>
      <div className='main__questions-container'>
      <h1 className='main__title'>FAQ</h1>
        {questions}
      </div>
    </main>
  )
}

export default App
