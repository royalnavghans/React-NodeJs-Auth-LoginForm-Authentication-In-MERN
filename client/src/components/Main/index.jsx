import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


	

const Main = () => {
	const [email, setEmail] = useState('');
  
	useEffect(() => {
	  const fetchUserEmail = async () => {
		try {
		  const response = await axios.get('http://localhost:8081/api/users/email');
		  setEmail(response.data.email);
		} catch (error) {
		  // Handle error
		}
	  };
	
	  fetchUserEmail();
	}, []);
	const navigate=useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	const handleSubmit=(path)=>{
		navigate(path)
	}
	

	return (

		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Prasad E-learning Platform</h1>
				<span>Hello {email}!!</span>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout 
				</button>
			</nav>
			
			<h1>Choose Your Medium</h1><br></br>
			<div><button className={styles.green_btn} onClick={() => handleSubmit('/chse')}>CHSE</button></div>
			<div className={styles.text}><b> "Council of Higher Secondary Education." It is a state-level education board in India that is responsible for conducting and managing the higher secondary (10+2) education system in the state Odisha.
				The CHSE medium of instruction is an essential aspect of the higher secondary education system. It determines the language in which subjects are taught, textbooks are written, and examinations are conducted for students pursuing their 
				10+2 education under the Council of Higher Secondary Education.</b>
			<br></br><br></br></div>
			
			<div><button className={styles.green_btn}onClick={() => handleSubmit('/cbse')}>CBSE</button></div>
			<div className={styles.text}><b> "Central Board of Secondary Education." It is a national-level education board in India that operates under the Union Government of India.
				 The CBSE medium refers to the educational medium or language of instruction used in schools affiliated with the Central Board of Secondary Education.CBSE conducts national-level examinations, 
				 such as the CBSE Board exams, which are administered in English. These examinations assess students' knowledge, understanding, and skills in the subjects they have studied throughout their schooling.</b>
			<br></br><br></br></div>
		
			<div><button className={styles.green_btn} onClick={() => handleSubmit('/icse')}>ICSE</button></div>
			<div className={styles.text}><b> "Indian Certificate of Secondary Education." It is a national-level education board in India that conducts examinations for the secondary school level. The ICSE medium refers to the educational medium or language of instruction 
				used in schools affiliated with the Indian Certificate of Secondary Education.The curriculum and textbooks used in ICSE schools are designed to align with the chosen medium of instruction. The emphasis is on providing a balanced and holistic education that 
				fosters critical thinking, analytical skills, and practical knowledge.ICSE examinations, including the ICSE Board exams, are conducted in the chosen medium of instruction. These examinations assess students' knowledge, understanding, and skills in the subjects they have studied. </b>
			<br></br><br></br></div>
			
			</div>
			
	);
};

export default Main;
