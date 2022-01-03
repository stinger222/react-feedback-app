export default function InputFrom({placeholder}) {
	return (
		<form className="input-wrapper">
			<input placeholder={placeholder}/>
			<button type="submit">
				Send
			</button>
		</form>
	)
}
