import { FaQuestion } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function AboutIconLink() {
	return (
		<Link to="/about" className="about-icon">
			<FaQuestion size={30} color="white"/>
		</Link>
	)
}
