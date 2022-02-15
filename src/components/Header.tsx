import { Link } from "react-router-dom"
import { HeaderProps } from "../types"
export default function Header({ text }: HeaderProps) {
	return (
		<>
			<header>
				<Link to='/'>{text}</Link>
				<div className="header-auth">
					<Link to='/login'>Sign in</Link>
					<Link to='/register'>Sign up</Link>
				</div>
			</header>
		</>
	)
}

Header.defaultProps = {
	text: "Feedback App",
}