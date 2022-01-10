import { useEffect, useState } from "react";
import "../index.scss";
import Button from "./Button";

export default function FeedbackForm({ handleAppend }) {
	const [feedbackRating, setFeedbackRating] = useState(null);
	const [feedbackDesc, setFeedbackDesc] = useState('');

	const handleRating = (event) => {
		setFeedbackRating(parseInt(event.target.innerText));
	};

	const handleInput = (event) => {
		setFeedbackDesc(event.target.value)
	}

	useEffect(() => {
		console.log("rating: ", feedbackRating);
		console.log("desc: ", feedbackDesc);
	});

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

			<Button>
				CLIIICKC ME
			</Button>

			<div className="input-wrapper">
			<input
			 onChange={handleInput}
			 placeholder={'Write a review'}
			 value={feedbackDesc}
			/>
			
			<button className="btn btn-submit" type="submit">
				Send
			</button>
		</div>

		</form>
	);
}

