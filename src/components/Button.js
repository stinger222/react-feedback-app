export default function Button({ children, type, isDisabled, className }) {
	return (
		<button className={`btn ${className}`} type={type} disabled={isDisabled}>
			{children}
		</button>
	)
}

Button.defaultProps = {
	type: 'button',
	isDisabled: false,
}