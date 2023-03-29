import { Link } from "react-router-dom"

const LinksComp = ({link_location}) => {
  return (
    <>
    <div>
        <p>
            <Link to={`${link_location}`}>
                {link_location}
            </Link>
        </p>
    </div>
    </>
  )
}
export default LinksComp