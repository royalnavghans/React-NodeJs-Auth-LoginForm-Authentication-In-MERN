import styles from "./styles.module.css";
import files from "../../../../files/RealNumber.txt"
import pdf from "../../../../files/Content.pdf"
import QA from "../../../../files/RealNumberQ&A.txt"



const CBSE10thMath= () => {


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
            
            <div><button className={styles.green_btn}>Real Numbers</button></div> <div className="st">
			<span className={styles.blue_btn}><a href={pdf} download={pdf}  style={{ textDecoration: 'none',color:'white'  }}>Chapter-Content</a></span>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Imp-Qs</a></span>
			<span className={styles.blue_btn}><a href={QA} download={QA}  style={{ textDecoration: 'none',color:'white'  }}>Q/A-Sessions</a></span></div>
			
			<br></br><br></br>
			<div><button className={styles.green_btn}>Polynomials</button></div>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Chapter-Content</a></span>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Imp-Qs</a></span>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Q/A-Sessions</a></span>
			<br></br><br></br>
			<div><button className={styles.green_btn}>Pair of Linear Equation in two variables</button></div>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Chapter-Content</a></span>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Imp-Qs</a></span>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Q/A-Sessions</a></span>
			<br></br><br></br>
			<div><button className={styles.green_btn}>Quadratics Equation</button></div>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Chapter-Content</a></span>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Imp-Qs</a></span>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Q/A-Sessions</a></span>
			<br></br><br></br>
			<div><button className={styles.green_btn}>Arithmetic Progression</button></div>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Chapter-Content</a></span>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Imp-Qs</a></span>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Q/A-Sessions</a></span>
			<br></br><br></br>
			<div><button className={styles.green_btn}>Triangles</button></div>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Chapter-Content</a></span>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Imp-Qs</a></span>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Q/A-Sessions</a></span>
			<br></br><br></br>
			<div><button className={styles.green_btn}>Coordinate Geometry</button></div>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Chapter-Content</a></span>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Imp-Qs</a></span>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Q/A-Sessions</a></span>
			<br></br><br></br>
			<div><button className={styles.green_btn}>Introduction to Trigonometry</button></div>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Chapter-Content</a></span>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Imp-Qs</a></span>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Q/A-Sessions</a></span>
			<br></br><br></br>
			<div><button className={styles.green_btn}>Some application of Trigonometry</button></div>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Chapter-Content</a></span>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Imp-Qs</a></span>
			<span className={styles.blue_btn}><a href={files} download={files} style={{ textDecoration: 'none',color:'white' }}>Q/A-Sessions</a></span>
			<br></br><br></br>
        </div>
			
	);
};

export default CBSE10thMath;
