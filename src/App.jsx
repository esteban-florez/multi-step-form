import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'
import Form from './components/layout/Form'
import StepProvider from './providers/StepProvider'
import './App.css'

function App() {
  return (
    <div className="App">
      <StepProvider>
        <Sidebar />
        <main>
          <Form />
        </main>
      </StepProvider>
      <Footer />
    </div>
  )
}

export default App
