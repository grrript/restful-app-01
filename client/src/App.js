import './App.css'
import List from './components/List'
import Test from './components/Test'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Demo app:</p>
        <p>Fetch a Person:</p>
        <Test />
        <div>---------------------</div>
        <p>Fetch a list:</p>
        <List />
      </header>
    </div>
  )
}

export default App
