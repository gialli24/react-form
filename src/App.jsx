import './App.css'
import AppMain from './components/AppMain'

import { articles } from './assets/js/articles.js'

function App() {
  return (
    <>
      <AppMain articles={articles} />
    </>
  )
}

export default App
