import Step from '../Step'
import Input from '../Input'

export default function Personal() {
  return (
    <Step
      title="Personal info" 
      description="Please provide your name, email address, and phone number."
    >
      <Input name="name" label="Name" placeholder="e.g. Stephen King" />
      <Input name="email" label="Email Address" placeholder="e.g. stephenking@lorem.com" />
      <Input name="phone" label="Phone Number" placeholder="e.g. +1 234 567 890" />
    </Step>
  )
}
