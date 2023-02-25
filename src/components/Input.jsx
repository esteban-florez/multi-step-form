export default function Input({ label, placeholder, name, type = 'text' }) {
  return (
    <>
      <label htmlFor="name">{ label }</label>
      <input type={type} placeholder={placeholder} name={name} id={name}/>
    </>
  )
}