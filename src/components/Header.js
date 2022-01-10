export default function Header({ text }) {
	return (
		<>
			<header>
				<span>{text}</span>
			</header>
		</>
	)
}

Header.defaultProps = {
	text: "Feedback App",
}