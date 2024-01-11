export default function Addon({ title, value, amount, children }) {
  return (
    <div>
      <h4>{title}</h4>
      <input type="checkbox" name={value} id={value}/>
      <label htmlFor={value}></label>
      <p>{children}</p>
      <p>+${amount}/mo</p>
    </div>
  )
}
