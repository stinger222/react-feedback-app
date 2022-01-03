import '../index.scss'
import Input from './InputForm';

export default function FeedbackEditor() {
	return (
		<div className="feedback-editor">
			<h2>How would you rate your service with us?</h2>

			<div className="rate">
				<button className="btn-rate">1</button>
				<button className="btn-rate">2</button>
				<button className="btn-rate">3</button>
				<button className="btn-rate">4</button>
				<button className="btn-rate">5</button>
				<button className="btn-rate">6</button>
				<button className="btn-rate">7</button>
				<button className="btn-rate">8</button>
				<button className="btn-rate">9</button>
			</div>
		</div>
	);
}

Input.defaultProps = {
	placeholder: "Write a review"
}