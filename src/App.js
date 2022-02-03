import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import FeedbackProvider from "./context/FeedbackContext"
import AboutIconLink from "./components/AboutIconLink"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import AboutPage from "./components/pages/AboutPage"
import Header from "./components/Header"
import RegisterPage from "./components/pages/RegisterPage"

export default function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<Routes>
					<Route
						exact
						path="/"
						element={
							<>
								<div className="container">
									<FeedbackForm />
									<FeedbackList />
									<AboutIconLink />
								</div>
							</>
						}
					/>

					<Route exact path="/about" element={<AboutPage />} />

					<Route exact path="/register" element={<RegisterPage />} />

				</Routes>
			</Router>
		</FeedbackProvider>
	)
}
