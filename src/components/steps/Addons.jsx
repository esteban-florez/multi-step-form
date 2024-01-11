import Step from '../Step'
import Addon from '../Addon'

export default function Addons() {
  return (
    <Step
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <Addon value="online" title="Online service" amount="1">
        Access to multiplayer games
      </Addon>
      <Addon value="storage" title="Larger storage" amount="2">
        Extra 1TB of cloud save
      </Addon>
      <Addon value="profile" title="Customizable Profile" amount="2">
        Custom theme on your profile
      </Addon>
    </Step>
  )
}
