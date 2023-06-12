import styles from "./styles.module.css";


const CHSEContent= () => {
  
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
            <div><button className={styles.green_btn}>ICSE</button></div>
			<br></br><br></br>
            <div><button className={styles.green_btn}>ICSE</button></div>
			<br></br><br></br>
            <div><button className={styles.green_btn}>ICSE</button></div>
			<br></br><br></br>
            <div><button className={styles.green_btn}>ICSE</button></div>
			<br></br><br></br>
            <div><button className={styles.green_btn}>ICSE</button></div>
			<br></br><br></br>
            <div><button className={styles.green_btn}>ICSE</button></div>
			<br></br><br></br>
        </div>
			
	);
};

export default CHSEContent;
