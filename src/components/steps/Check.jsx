import Step from '../Step'

export default function Check() {
  return (
    <Step
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <div>
        {/* Dynamically add subscription and add-on selections here */}
        <p>Arcade (Monthly)</p>
        <a href="/">Change</a>
        <p>$9/mo</p>
        <hr />
        <ul>
          <li>
            <p>Online service</p>
            <p>+$1/mo</p>
          </li>
          <li>
            <p>Larger storage</p>
            <p>+$2/mo</p>
          </li>
        </ul>
      </div>
      <div>
        <p>Total (per month)</p>
        <p>+$12/mo</p>
      </div>
    </Step>
  )
}
