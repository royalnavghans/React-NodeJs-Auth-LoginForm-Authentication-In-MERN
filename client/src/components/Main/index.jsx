import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


	

const Main = () => {
	const [email, setEmail] = useState('');
  
	useEffect(() => {
	  const fetchUserEmail = async () => {
		try {
		  const response = await axios.get('http://localhost:8080/api/users/email');
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
			<div className={styles.text}><b>Hello this is CHSC Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae corrupti doloremque repellat accusamus ut ex iste non eos assumenda, ad adipisci consequatur, mollitia perferendis aperiam, omnis cumque impedit. Rerum.
			Unde aliquam ex dolore quae atque dolorum rerum illum, cum aliquid exercitationem aut, ipsam laborum eum non ut earum? Minus tenetur minima qui illum deleniti, culpa aut consectetur ipsa sapiente!
			Ipsam nobis deleniti natus expedita vero cum ipsum, velit dolores quaerat sapiente dolore doloremque aspernatur, quibusdam excepturi blanditiis quod esse rerum adipisci doloribus sed. Fugit itaque eaque consequuntur modi ad?
			Aliquid harum laborum exercitationemnesciunt doloremque corporis optio dolorem facilis! Tenetur magnam minima ipsam.Ratione, placeat magni. Quam totam eos eius nam. Nisi quae vitae possimus dicta recusandae, omnis earum commodi aliquam facilis at iusto quia exercitationem non nobis minus adipisci fuga esse. Ipsum.</b>
			<br></br><br></br></div>
			
			<div><button className={styles.green_btn}onClick={() => handleSubmit('/cbse')}>CBSE</button></div>
			<div className={styles.text}><b>Hello this is CBSE Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae corrupti doloremque repellat accusamus ut ex iste non eos assumenda, ad adipisci consequatur, mollitia perferendis aperiam, omnis cumque impedit. Rerum.
			Unde aliquam ex dolore quae atque dolorum rerum illum, cum aliquid exercitationem aut, ipsam laborum eum non ut earum? Minus tenetur minima qui illum deleniti, culpa aut consectetur ipsa sapiente!
			Ipsam nobis deleniti natus expedita vero cum ipsum, velit dolores quaerat sapiente dolore doloremque aspernatur, quibusdam excepturi blanditiis quod esse rerum adipisci doloribus sed. Fugit itaque eaque consequuntur modi ad?
			Aliquid harum laborum exercitationemnesciunt doloremque corporis optio dolorem facilis! Tenetur magnam minima ipsam.Ratione, placeat magni. Quam totam eos eius nam. Nisi quae vitae possimus dicta recusandae, omnis earum commodi aliquam facilis at iusto quia exercitationem non nobis minus adipisci fuga esse. Ipsum.</b>
			<br></br><br></br></div>
		
			<div><button className={styles.green_btn} onClick={() => handleSubmit('/icse')}>ICSE</button></div>
			<div className={styles.text}><b>Hello this is ICSE Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae corrupti doloremque repellat accusamus ut ex iste non eos assumenda, ad adipisci consequatur, mollitia perferendis aperiam, omnis cumque impedit. Rerum.
			Unde aliquam ex dolore quae atque dolorum rerum illum, cum aliquid exercitationem aut, ipsam laborum eum non ut earum? Minus tenetur minima qui illum deleniti, culpa aut consectetur ipsa sapiente!
			Ipsam nobis deleniti natus expedita vero cum ipsum, velit dolores quaerat sapiente dolore doloremque aspernatur, quibusdam excepturi blanditiis quod esse rerum adipisci doloribus sed. Fugit itaque eaque consequuntur modi ad?
			Aliquid harum laborum exercitationemnesciunt doloremque corporis optio dolorem facilis! Tenetur magnam minima ipsam.Ratione, placeat magni. Quam totam eos eius nam. Nisi quae vitae possimus dicta recusandae, omnis earum commodi aliquam facilis at iusto quia exercitationem non nobis minus adipisci fuga esse. Ipsum.</b>
			<br></br><br></br></div>
			
			</div>
			
	);
};

export default Main;
