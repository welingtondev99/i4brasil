import './titleSection.css'
import './nacionalPresence.css'

const TitleSection = ({title}) => {
  return (
    <div className='orgTop'>
        <h2 className='title'>{title}</h2>
    </div>
  )
}

export default TitleSection