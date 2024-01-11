const ITEMS = [
  'Your info',
  'Select plan',
  'Add-ons',
  'Summary',
]

export default function Sidebar() {
  return (
    <aside>
        {ITEMS.map((title, index) => (
          <section key={title}>
            <span>{index + 1}</span>
            <h4>Step {index + 1}</h4>
            <h3>{title}</h3>
          </section>
        ))}
      </aside>
  )
}
