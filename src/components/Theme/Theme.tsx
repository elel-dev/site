import React from 'react'

//styles
import Styles from "./theme.module.css";

const Theme = () => {
  return (
    <div className={Styles.theme}>
      <button>dark</button>
      <button>light</button>
    </div>
  )
}

export default Theme;
