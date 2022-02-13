interface CardProps {
	children: React.ReactChild | React.ReactNode,
	className: string
}

export default function Card({children, className}: CardProps) {
	return (
		<div className={`card ${className}`}>
			{children}
		</div>
	)
}
