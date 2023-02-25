import Button from './Button'

export default function Step({ 
  title, description, children, number,
  currentStep, goNext, goPrevious 
}) {
  function handleBackClick(e) {
    e.preventDefault()
    goPrevious()
  }

  function handleButtonClick() {
    if (number > 4) return
    goNext()
  }

  return (
    <section hidden={!(number === currentStep)}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        {children}
      </div>
      {number > 1 && <a href="/" onClick={handleBackClick}>Go Back</a>}
      <Button onClick={handleButtonClick}>
        {number < 5 ? 'Next Step' : 'Confirm'}
      </Button>
    </section>
  )
}