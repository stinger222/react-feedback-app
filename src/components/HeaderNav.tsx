import { useContext } from "react";
import { Link } from "react-router-dom";
import { FeedbackContext } from "../context/FeedbackContext";

import { FaCaretDown } from 'react-icons/fa'

export default function AuthNav() {
	const {authData} = useContext(FeedbackContext)
	
	const handleClick = (e):void => {
		console.log('click');
	}

	if (authData?.login != undefined) {
		return (
			<div className="header-nav user-nav" onClick={handleClick}>
				<span className="user-avatar"></span>
				<span className="user-login" >
					{authData.login}
					<span className="user-dropdown">
						<FaCaretDown color="#e9e9e9"/>
					</span>
				</span>

		</div>
		)
	}

	return (
		<div className="header-nav auth-nav">
			<Link to='/login'>Sign in</Link>
			<Link to='/register'>Sign up</Link>
		</div>
	)
}
