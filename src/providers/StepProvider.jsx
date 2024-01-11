import { createContext, useState } from 'react'

export const StepContext = createContext({
  step: 0,
  next: () => {},
  back: () => {},
})

export default function StepProvider({ children }) {
  const [step, setStep] = useState(0)

  const next = () => {
    if (step >= 4) return
    setStep(s => s + 1)
  }
  
  const back = () => {
    if (step <= 0) return
    setStep(s => s - 1)
  }

  return (
    <StepContext.Provider value={{ step, next, back }}>
      {children}
    </StepContext.Provider>
  )
}
