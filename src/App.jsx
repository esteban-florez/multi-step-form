import { useState } from 'react'
import Input from './components/Input'
import Plan from './components/Plan'
import Addon from './components/Addon'
import Step from './components/Step'
import thankyouIcon from './assets/images/icon-thank-you.svg'
import arcadeIcon from './assets/images/icon-arcade.svg'
import advancedIcon from './assets/images/icon-advanced.svg'
import proIcon from './assets/images/icon-pro.svg'
import './App.css'

function App() {
  const [ step, setStep ] = useState(1)

  function goNext() {
    setStep(step + 1)
  }
  
  function goPrevious() {
    setStep(step - 1)
  }

  return (
    <div className="App">
      <aside>
        <section>
          <span>1</span>
          <h5>Step 1</h5>
          <h4>Your info</h4>
        </section>
        <section>
          <span>2</span>
          <h5>Step 2</h5>
          <h4>Select plan</h4>
        </section>
        <section>
          <span>3</span>
          <h5>Step 3</h5>
          <h4>Add-ons</h4>
        </section>
        <section>
          <span>4</span>
          <h5>Step 4</h5>
          <h4>Summary</h4>
        </section>
      </aside>
      <main>
        {/* Step 1 start */}
        <Step 
          title="Personal info" 
          description="Please provide your name, email address, and phone number."
          number={1}
          currentStep={step}
          goNext={goNext}
          goPrevious={goPrevious}
        >
          <Input
            name="name" label="Name" 
            placeholder="e.g. Stephen King"
          />
          <Input 
            name="email" label="Email Address"
            placeholder="e.g. stephenking@lorem.com"
          />
          <Input
            name="phone" label="Phone Number"
            placeholder="e.g. +1 234 567 890"
          />
        </Step>
        {/* Step 2 start */}
        <Step
          title="Select your plan" 
          description="You have the option of monthly or yearly billing."
          number={2}
          currentStep={step}
          goNext={goNext}
          goPrevious={goPrevious}
        >
          <div>
            <Plan value="arcade" amount="9" icon={arcadeIcon}/>
            <Plan value="advanced" amount="12" icon={advancedIcon}/>
            <Plan value="pro" amount="15" icon={proIcon}/>
          </div>
          <div>
            <span>Monthly</span>
            <input type="checkbox" name="mode" id="mode" />
            <span>Yearly</span>
          </div>
        </Step>
        {/* Step 3 start */}
        <Step 
          title="Pick add-ons"
          description="Add-ons help enhance your gaming experience."
          number={3}
          currentStep={step}
          goNext={goNext}
          goPrevious={goPrevious}
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
        {/* Step 4 start */}
        <Step
          title="Finishing up"
          description="Double-check everything looks OK before confirming."
          number={4}
          currentStep={step}
          goNext={goNext}
          goPrevious={goPrevious}
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
        {/* Step 5 start */}
        <section hidden={!(step === 5)}>
          <img src={thankyouIcon} alt="Thank you icon" />
          <h1>Thank you!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun 
            using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.
          </p>
        </section>
      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Esteban Florez</a>.
      </footer>
    </div>
  )
}

export default App
