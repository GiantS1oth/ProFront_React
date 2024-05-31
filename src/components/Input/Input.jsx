import "./styles.css"

function Input(name, type = "text", placeholder, label) {
  return (
    <div className="input-container">
      <label className="label">{label}</label>
      <input className="input-element" name={name} type={type} placeholder={placeholder}/>
    </div>

  )
}

export default Input;