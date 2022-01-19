import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './components/pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import ProductPage from './components/pages/ProductPage'
import FeedbackProvider from './context/FeedbackContext'

export default function App() {




	return (
		<FeedbackProvider>
			<Router>
				<Header />
					<Routes>

						<Route
							exact path="/" element={
								<>
									<div className="container">
										<FeedbackForm />
										<FeedbackList />
										<AboutIconLink/>
									</div>
								</>
							}
							/>

						<Route exact path="/about" element={<AboutPage/>}/>
						
						<Route path="/product/:id" element={<ProductPage/>}/>

					</Routes>
			</Router>
		</FeedbackProvider>
	);
	}
