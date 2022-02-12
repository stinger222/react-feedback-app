import { BrowserRouter as Router, Route } from "react-router-dom"
import FeedbackProvider from "./context/FeedbackContext"
import AboutIconLink from "./components/AboutIconLink"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import AboutPage from "./components/pages/AboutPage"
import Header from "./components/Header"
import RegisterPage from "./components/pages/RegisterPage"
import LoginPage from "./components/pages/LoginPage"

export default function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
					<Route exact path="/">
						<div className="container">
							<FeedbackForm />
							<FeedbackList />
							<AboutIconLink />
						</div>
					</Route>

					<Route exact path="/about">
						<AboutPage />
					</Route>

					<Route exact path="/register">
						<RegisterPage />
					</Route>

					<Route exact path="/login">
						<LoginPage />
					</Route>
			</Router>
		</FeedbackProvider>
	)
}
