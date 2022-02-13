import { CardProps } from "../types";

export default function Card({children, className}: CardProps) {
	return (
		<div className={`card ${className}`}>
			{children}
		</div>
	)
}
