import React, { Fragment } from "react";
import "./App.css";
import BottomBanner from "./components/layout/BottomBanner";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Nav from "./components/layout/Nav";
// import Navbar from "./components/layout/Navbar";

const App = () => {
	return (
		<div className='App'>
			<Fragment>
				<Nav></Nav>
				<Landing></Landing>
				<BottomBanner />
				<Footer />
			</Fragment>
		</div>
	);
};

export default App;
