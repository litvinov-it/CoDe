import classes from './button.module.css'
import  {ReactComponent as Arrow} from '../../../sprites/icons/arrow.svg'

export const Button = ({text, onClick, type}) => {
  return (
    <button onClick={onClick} className={classes.button} type={type ? type : 'button'}>
        <p className={classes.text}>{text}</p>
        <Arrow />
    </button>
  )
}