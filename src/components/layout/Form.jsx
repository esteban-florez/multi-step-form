import Personal from '../steps/Personal'
import Plan from '../steps/Plan'
import Addons from '../steps/Addons'
import Check from '../steps/Check'
import Thanks from '../steps/Thanks'
import useStep from '../../hooks/useStep'

const STEPS = [Personal, Plan, Addons, Check, Thanks]

export default function Form() {
  const { step } = useStep()
  const StepComponent = STEPS[step]

  return (
    <form>
      <StepComponent />
    </form>
  )
}
