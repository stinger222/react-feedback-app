
// Props

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactChild | React.ReactNode,
	isDisabled?: boolean,
	className?: string 
}

export interface CardProps {
	children: React.ReactChild | React.ReactNode,
	className: string
}

export interface FormProps {
	title: string,
	handleSubmit: ({login, password}: IhandleSubmit) => any
}

export interface HeaderProps {
	text: string
}

export interface ProviderProps {
	children: React.ReactChild | React.ReactNode
}

// Handlers

export 	interface IhandleUpdate {
	id: number,
	rating: number,
	text: string
}

export interface IhandleSubmit {
	login: string,
	password: string
}

// Other

export interface IFeedbackData {
	id: number,
	rating: number,
	text: string,
	user_id: number
}

export interface InowEditingItem {
	item: IFeedbackData | null,
	editing: boolean
}
