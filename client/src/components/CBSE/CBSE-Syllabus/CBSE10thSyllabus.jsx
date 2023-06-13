import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const CBSE10thSyllabus= () => {
	const navigate=useNavigate();

	const handleSubmit=(path)=>{
	  navigate(path)
	}
  
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
        
	};

	return (

		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Prasad E-learning Platform</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
            
            <div><button className={styles.green_btn}>English</button></div>
			<br></br><br></br>
			<div><button className={styles.green_btn}>Hindi</button></div>
			<br></br><br></br>
			<div><button className={styles.green_btn}onClick={()=>handleSubmit('/path-math')}>Math</button></div>
			<br></br><br></br>
			<div><button className={styles.green_btn}>Science</button></div>
			<br></br><br></br>
			<div><button className={styles.green_btn}>SSC</button></div>
			<br></br><br></br>
        </div>
			
	);
};

export default CBSE10thSyllabus;
