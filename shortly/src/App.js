import React, { Fragment } from "react";
import "./App.css";
import AdvanceStat from "./components/layout/AdvanceStat";
import BottomBanner from "./components/layout/BottomBanner";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Nav from "./components/layout/Nav";
import Shorten from "./components/shorten/Shorten";
// import Navbar from "./components/layout/Navbar";

const App = () => {
	return (
		<div className='App'>
			<Fragment>
				<Nav></Nav>
				<Landing></Landing>
				<Shorten />

				<AdvanceStat />
				<BottomBanner />
				<Footer />
			</Fragment>
		</div>
	);
};

export default App;
