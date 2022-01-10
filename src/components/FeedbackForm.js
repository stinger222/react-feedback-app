import { useEffect, useState } from "react";
import "../index.scss";
import Button from "./Button";


//@todo: remove semicolons
export default function FeedbackForm({ handleAppend }) {
	const [feedbackRating, setFeedbackRating] = useState(null);
	const [feedbackDesc, setFeedbackDesc] = useState('');
	const [submitDisabled, setSubmitDisabled] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);	// Review have to contain at least 10 characters!

	const handleRating = (event) => {
		console.log(1);
		setFeedbackRating(parseInt(event.target.innerText));
	}

	const handleInput = (event) => {
		let value = event.target.value.trim()

		if (value.length == 0) {
			setSubmitDisabled(true)
			setErrorMessage(null)
		} else if ( value !== '' &&value.length < 10) {
			setSubmitDisabled(true)
			setErrorMessage('Review must be at least 10 characters!')
		} else {
			setSubmitDisabled(false)
			setErrorMessage(null)
		}

		setFeedbackDesc(event.target.value)
	}

	return (
		<form className="feedback-form">
			<h2>How would you rate your service with us?</h2>

			<div className="rate">
				<button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating == 1 ? " selected" : ""}`}
				>
					1
				</button>
				<button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating == 2 ? " selected" : ""}`}
				>
					2
				</button>
				<button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating == 3 ? " selected" : ""}`}
				>
					3
				</button>
				<button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating == 4 ? " selected" : ""}`}
				>
					4
				</button>
				<button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating == 5 ? " selected" : ""}`}
				>
					5
				</button>
				<button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating == 6 ? " selected" : ""}`}
				>
					6
				</button>
				<button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating == 7 ? " selected" : ""}`}
				>
					7
				</button>
				<button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating == 8 ? " selected" : ""}`}
				>
					8
				</button>
				<button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating == 9 ? " selected" : ""}`}
				>
					9
				</button>
			</div>

			{/* <Button onClick={() => {console.log(1)}}>ACTIVE</Button> */}

			<div className="input-wrapper">
			<input
			 onChange={handleInput}
			 placeholder={'Write a review'}
			 value={feedbackDesc}
			/>

			<Button className="btn-submit" isDisabled={submitDisabled} type="submit">
				Send
			</Button>
		</div>

		{errorMessage && <div className="message-wrapper">
				{errorMessage}
			</div>
		}

		</form>
	);
}

