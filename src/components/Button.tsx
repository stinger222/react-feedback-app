import { ButtonProps } from "../types"

export default function Button({ children, type, isDisabled, className, ...rest}: ButtonProps) {
	return (
		<button
			className={`btn ${className}${isDisabled ? ' btn-disabled' : ''}`}
			type={type}
			disabled={isDisabled}
			{...rest}
		>
			{children}
		</button>
	)
}

Button.defaultProps = {
	type: 'button',
	isDisabled: false,
}