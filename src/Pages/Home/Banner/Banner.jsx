import "./Banner.css"

const Banner = ({children,title,subtitle,body}) => {
  return (
    <div className="banner">
        <h1>
            {title}
        </h1>
        <div></div>
        <h4>
            {subtitle}
        </h4>
        <p>
            {body}
        </p>
        {
            children
        }
    </div>
  )
}
export default Banner