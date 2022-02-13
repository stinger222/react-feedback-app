import { BrowserRouter as Router, Route } from "react-router-dom"
import RegisterPage from "./components/pages/RegisterPage"
import FeedbackPage from "./components/pages/FeedbackPage"
import FeedbackProvider from "./context/FeedbackContext"
import AboutPage from "./components/pages/AboutPage"
import LoginPage from "./components/pages/LoginPage"
import Header from "./components/Header"

export default function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
					<Route exact path="/">
						<FeedbackPage/>
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
