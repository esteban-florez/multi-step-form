export default function Button({ children, type = 'button', onClick, className = 'btn' }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
