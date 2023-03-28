import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignUpUser from "./Pages/signUpUser";
import UserCard from "./Components/UserCard";
import Reports from "./Pages/reports";
import About from "./Pages/About";
import MapUser from "./Components/MapUser/MapUser";
import User from "./Components/User/User";
import Maps from "./Components/Maps/Maps";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<UserCard />} />
					<Route exact path="/admin-dashboard" element={<UserCard />} />
					<Route exact path="/reports" element={<Reports />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/mapuser" element={<MapUser />} />
					<Route exact path="/user" element={<User />} />
					<Route exact path="/map" element={<Maps />} />
					<Route exact path="/auth" element={<SignUpUser />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
