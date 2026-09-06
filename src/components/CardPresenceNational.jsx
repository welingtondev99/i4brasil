import "./nacionalPresence.css"
import "./paragraph.css"
import "./titleSection.css"

const CardPresenceNational = ({image, title, text}) => {
  return (

    <div className="cardNational">
        <div>
            <span className="circle"></span>
            <img src={image} alt="" />
        </div>
        <div>
            <h4 className="titleh4">{title}</h4>
            <p className="styleParagraph">{text}</p>
        </div>
    </div>
   
  )
}

export default CardPresenceNational