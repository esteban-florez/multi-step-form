import Button from './Button'
import useStep from '../hooks/useStep'

export default function Step({
  title, description, children
}) {
  const { step, next, back } = useStep()

  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        {children}
      </div>
      {step > 0 && <Button href="#" onClick={back}>Go Back</Button>}
      <Button onClick={next}>
        {step < 5 ? 'Next Step' : 'Confirm'}
      </Button>
    </section>
  )
}
