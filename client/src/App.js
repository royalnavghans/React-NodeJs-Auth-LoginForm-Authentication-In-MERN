import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";
import CHSEContent from "./components/CHSE/CHSEContent";
import CBSEContent from "./components/CBSE/CBSEContent";
import ICSEContent from "./components/ICSE/ICSEContent";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/password-reset/:id/:token" element={<PasswordReset />} />
			<Route path="/chse" element={<CHSEContent/>}/>
			<Route path="/cbse" element={<CBSEContent/>}/>
			<Route path="/icse" element={<ICSEContent/>}/>
		</Routes>
	);
}

export default App;
