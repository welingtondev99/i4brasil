import "./areasOfOperationCard.css"

const AreasOfOperationCard = ({img, title, text}) => {
  return (
    <div className='AreasOfOperationCard'>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <ul>
            <li>{text}</li>
        </ul>
    </div>
  )
}

export default AreasOfOperationCard