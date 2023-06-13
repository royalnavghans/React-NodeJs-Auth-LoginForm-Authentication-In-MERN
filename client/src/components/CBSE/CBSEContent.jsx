import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";


const CBSEContent= () => {
  
	const navigate=useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
        
	};
const handleSubmit=(path) =>{
	navigate(path)
}
	return (

		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Prasad E-learning Platform</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
            <div><button className={styles.green_btn}onClick={()=>handleSubmit('/pathcbse1')}>vi</button></div>
			<br></br><br></br>
            <div><button className={styles.green_btn}onClick={()=>handleSubmit('/pathcbse2')}>vii</button></div>
			<br></br><br></br>
            <div><button className={styles.green_btn}onClick={()=>handleSubmit('/pathcbse3')}>viii</button></div>
			<br></br><br></br>
            <div><button className={styles.green_btn}onClick={()=>handleSubmit('/pathcbse4')}>ix</button></div>
			<br></br><br></br>
            <div><button className={styles.green_btn}onClick={()=>handleSubmit('/pathcbse5')}>x</button></div>
			<br></br><br></br>
            <div><button className={styles.green_btn}onClick={()=>handleSubmit('/pathcbse6')}>xi</button></div>
			<br></br><br></br>
			<div><button className={styles.green_btn}onClick={()=>handleSubmit('/pathcbse7')}>xii</button></div>
			<br></br><br></br>
        </div>
			
	);
};

export default CBSEContent;
