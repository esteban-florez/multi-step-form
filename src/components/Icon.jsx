export default function Icon({ name, alt }) {

  return <img src={`/src/assets/images/icon-${name}.svg`} alt={alt}/>
}