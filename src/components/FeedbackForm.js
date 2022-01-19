import { FeedbackContext } from "../context/FeedbackContext";
import { useState, useContext } from "react";
import Button from "./Button";
import "../index.scss";

export default function FeedbackForm() {
	const [feedbackRating, setFeedbackRating] = useState(null);
	const [feedbackDesc, setFeedbackDesc] = useState("");
	const [submitDisabled, setSubmitDisabled] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	
	const { handleAppend } = useContext(FeedbackContext);

	const handleRating = (event) => {
		setFeedbackRating(parseInt(event.target.innerText));
	};

	const handleInput = (event) => {
		let value = event.target.value.trim();

		if (value.length === 0) {
			setSubmitDisabled(true);
			setErrorMessage(null);
		} else if (value !== "" && value.length < 10) {
			setSubmitDisabled(true);
			setErrorMessage("Review must be at least 10 characters!");
		} else {
			setSubmitDisabled(false);
			setErrorMessage(null);
		}

		setFeedbackDesc(event.target.value);
	};

	let handleSubmit = (event) => {
		event.preventDefault();
		if (!feedbackRating || feedbackDesc.trim() == "") {
			console.error("Feedback rating is not provided!!");
			// setErrorMessage('Please, rate our services before sending feedback!')
			setErrorMessage("Rating required!");
			return;
		}
		handleAppend(feedbackRating, feedbackDesc);
		setFeedbackRating(null);
		setFeedbackDesc("");
	};

	return (
		<form className="feedback-form">
			<h2>How would you rate your service with us?</h2>

			<div className="rate">
				<Button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating === 1 ? " selected" : ""}`}
				>
					1
				</Button>
				<Button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating === 2 ? " selected" : ""}`}
				>
					2
				</Button>
				<Button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating === 3 ? " selected" : ""}`}
				>
					3
				</Button>
				<Button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating === 4 ? " selected" : ""}`}
				>
					4
				</Button>
				<Button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating === 5 ? " selected" : ""}`}
				>
					5
				</Button>
				<Button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating === 6 ? " selected" : ""}`}
				>
					6
				</Button>
				<Button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating === 7 ? " selected" : ""}`}
				>
					7
				</Button>
				<Button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating === 8 ? " selected" : ""}`}
				>
					8
				</Button>
				<Button
					type="button"
					onClick={handleRating}
					className={`btn btn-rate${feedbackRating === 9 ? " selected" : ""}`}
				>
					9
				</Button>
			</div>

			{/* <Button onClick={() => {console.log(1)}}>ACTIVE</Button> */}

			<div className="input-wrapper">
				<input
					onChange={handleInput}
					placeholder={"Write a review"}
					value={feedbackDesc}
				/>

				<Button
					className="btn-submit"
					onClick={handleSubmit}
					isDisabled={submitDisabled}
					type="submit"
				>
					Send
				</Button>
			</div>

			{errorMessage && <div className="message-wrapper">{errorMessage}</div>}
		</form>
	);
}
