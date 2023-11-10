import React, {useState} from 'react'
import Title from '../components/Title'

export default function EsignatureApp() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("Select a Date");
  const nameHandler = (e) => {
    setName(e.target.value)
  }
  const dateHandler = (e) => {
    setDate(e.target.value)
  }
  const inputStyle = {
    padding: "12px 20px",
    margin: "8px 20px",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box"
  };
  document.body.style.backgroundColor = "#eee";
  return (
    
    <div className='container text-center'>
    <Title classes ={"subtitle"} text={!name ? "select a name below": name} />
    <Title classes ={"main-title mb-4"} text={date} />
    <p>
      This the first Project That I bould using React, I used the following technologies:
      The first one is Node js and the following packages:
    </p>
    <footer className='d-flex' style={{justifyContent:"space-around",position:"relative",top:"40vh"}} >
    <input type='date' value={date} style={inputStyle} onChange={dateHandler}/>
    <input type='text'  value={name} style={inputStyle} onChange={nameHandler}/>
    </footer>

    </div>
  )
}
