import styles from "./styles.module.css";


const CBSE9thSyllabus= () => {
  
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
            <div><button className={styles.green_btn}>Odia</button></div>
			<br></br><br></br>
            <div><button className={styles.green_btn}>English</button></div>
			<br></br><br></br>
			<div><button className={styles.green_btn}>Hindi</button></div>
			<br></br><br></br>
			<div><button className={styles.green_btn}>Math</button></div>
			<br></br><br></br>
			<div><button className={styles.green_btn}>Science</button></div>
			<br></br><br></br>
			<div><button className={styles.green_btn}>SSC</button></div>
			<br></br><br></br>
        </div>
			
	);
};

export default CBSE9thSyllabus;
