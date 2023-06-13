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
import CHSESyllabus from "./components/CHSE/CHSE-Syllabus/CHSE6Syllabus";
import CHSE6Syllabus from "./components/CHSE/CHSE-Syllabus/CHSE6Syllabus";
import CHSE7Syllabus from "./components/CHSE/CHSE-Syllabus/CHSE7Syllabus";
import CHSE8thSyllabus from "./components/CHSE/CHSE-Syllabus/CHSE8Syllabus";
import CHSE9thSyllabus from "./components/CHSE/CHSE-Syllabus/CHSE9Syllabus";
import CHSE10thSyllabus from "./components/CHSE/CHSE-Syllabus/CHSE10Syllabus";
import CHSE11thSyllabus from "./components/CHSE/CHSE-Syllabus/CHSE11thSyllabus";
import CHSE12thSyllabus from "./components/CHSE/CHSE-Syllabus/CHSE12thSyllabus";
import CBSE6thSyllabus from "./components/CBSE/CBSE-Syllabus/CBSE6thSyllabus";
import CBSE7thSyllabus from "./components/CBSE/CBSE-Syllabus/CBSE7thSyllabus";
import CBSE8thSyllabus from "./components/CBSE/CBSE-Syllabus/CBSE8thSyllabus";
import CBSE9thSyllabus from "./components/CBSE/CBSE-Syllabus/CBSE9thSyllabus";
import CBSE10thSyllabus from "./components/CBSE/CBSE-Syllabus/CBSE10thSyllabus";
import CBSE11thSyllabus from "./components/CBSE/CBSE-Syllabus/CBSE11thSyllabus";
import CBSE12thSyllabus from "./components/CBSE/CBSE-Syllabus/CBSE12thSyllabus";

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
			<Route path="/path" element={<CHSE6Syllabus/>}/>
			<Route path="/path1" element={<CHSE7Syllabus/>}/>
			<Route path="/path2" element={<CHSE8thSyllabus/>}/>
			<Route path="/path3" element={<CHSE9thSyllabus/>}/>
			<Route path="/path4" element={<CHSE10thSyllabus/>}/>
			<Route path="/path5" element={<CHSE11thSyllabus/>}/>
			<Route path="/path6" element={<CHSE12thSyllabus/>}/>
			<Route path="/path1" element={<CBSE6thSyllabus/>}/>
			<Route path="/path2" element={<CBSE7thSyllabus/>}/>
			<Route path="/path3" element={<CBSE8thSyllabus/>}/>
			<Route path="/path4" element={<CBSE9thSyllabus/>}/>
			<Route path="/path5" element={<CBSE10thSyllabus/>}/>
			<Route path="/path6" element={<CBSE11thSyllabus/>}/>
			<Route path="/path7" element={<CBSE12thSyllabus/>}/>
			
		</Routes>
	);
}

export default App;
