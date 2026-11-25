import "./cardPresenceNational.css"
import "./paragraph.css"
import "./titleSection.css"

const CardPresenceNational = ({image, title, text}) => {
  return (
    <div className="cardNational">
        <span className="circle">
            <img src={image} alt="" />
        </span>
        <div>
            <h4 className="titleh4">{title}</h4>
            <p className="styleParagraph">{text}</p>
        </div>
    </div>
  )
}

export default CardPresenceNational
