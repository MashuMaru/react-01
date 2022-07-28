import './Card.css'

const Card = (props) => {
  const classes = 'card ' + props.propsClass
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card;