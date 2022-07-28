import './Card.css'

function Card (props) {
  const classes = 'card ' + props.propsClass
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card;