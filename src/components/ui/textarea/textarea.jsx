import React from 'react'
import classes from './textarea.module.css'

export const Textarea = ({props, placeholder, label}) => {
  return (
    <div className={classes.container}>
        <label className={classes.label} htmlFor="">{label}</label>
        <textarea className={classes.textarea} {...props} placeholder={placeholder} />
    </div>
  )
}