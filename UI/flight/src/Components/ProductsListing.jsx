export default function ProductsListing({icon, title, desc, learnLink}) {
    return(
        <>
          <div className="product">
            <img src={icon} alt="" />
            <h2>{title}</h2>
            <p>{desc}</p>
            <a href={learnLink}>
                <span>Learn more</span>
                 <svg viewBox="0 0 24 24" fill="none" className="dig-UIIcon dig-UIIcon--standard" width="24" height="24" role="presentation" focusable="false"><path d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path></svg>
            </a>
          </div>  
        </>
    )
}