import Icon from './Icon'

export default function Plan({ value, amount }) {
  const title = `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`
  const iconAlt = `${title} plan icon`

  return (
    <div>
      <Icon name={value} alt={iconAlt}/>
      <label htmlFor={value}>{title}</label>
      <p>${amount}/mo</p>
      <p>2 months free</p>
      <input type="radio" name="plan" id={value} value={value}/>
    </div>
  )
}