import './index.css'

const FeatureItem = props => {
    const {data} = props
    const {title,details,imgPath} = data

    return(
        <li className='card-container'>
            <img src={imgPath} alt={title} className='ft-image' />
            <div className='ft-detail'>
                <h1 className='ft-head'>{title}</h1>
                <p className='text'>{details}</p>
            </div>
        </li>
    )
}

export default FeatureItem