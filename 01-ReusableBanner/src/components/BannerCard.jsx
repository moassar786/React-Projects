import './BannerCard.css';

export default function BannerCard(props) {
    const {bannerDetails} = props
    const {headerText, description, className} = bannerDetails

  return (
    <li className={`${className} banner-card-item`}>
        <div>
            <h1 className='heading'>{headerText}</h1>
            <p className='description'>{description}</p>
            <button className='btn'>Show More</button>
        </div>
    </li>
  )
}
