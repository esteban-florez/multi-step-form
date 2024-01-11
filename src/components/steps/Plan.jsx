import PlanRadio from '../PlanRadio'
import Step from '../Step'
import arcadeIcon from '../../assets/images/icon-arcade.svg'
import advancedIcon from '../../assets/images/icon-advanced.svg'
import proIcon from '../../assets/images/icon-pro.svg'

export default function Plan() {
  return (
    <Step
      title="Select your plan" 
      description="You have the option of monthly or yearly billing."
    >
      <div>
        <PlanRadio value="arcade" amount="9" icon={arcadeIcon} />
        <PlanRadio value="advanced" amount="12" icon={advancedIcon}/>
        <PlanRadio value="pro" amount="15" icon={proIcon}/>
      </div>
      <div>
        <span>Monthly</span>
        <input type="checkbox" name="mode" id="mode" />
        <span>Yearly</span>
      </div>
    </Step>
  )
}
