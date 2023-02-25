export default function Addon({ title, value, amount, children }) {
  return (
    <div>
      <input type="checkbox" name={value} id={value}/>
      <label htmlFor={value}></label>
      <p>{children}</p>
      <p>+${amount}/mo</p>
    </div>
  )
}