
import styles from "./styles.module.css";



const ICSEContent= () => {
  
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
            <div><button className={styles.green_btn}>vi</button></div>
			<br></br><br></br>
            <div><button className={styles.green_btn}>vii</button></div>
			<br></br><br></br>
            <div><button className={styles.green_btn}>viii</button></div>
			<br></br><br></br>
            <div><button className={styles.green_btn}>ix</button></div>
			<br></br><br></br>
            <div><button className={styles.green_btn}>x</button></div>
			<br></br><br></br>
            <div><button className={styles.green_btn}>xi</button></div>
			<br></br><br></br>
			<div><button className={styles.green_btn}>xii</button></div>
			<br></br><br></br>
        </div>
			
	);
};

export default ICSEContent;
