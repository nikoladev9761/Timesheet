import { useState } from 'react';
import axios from 'axios';

const MemberDetails = ({ reloadData, userFullName, userId}) => {
	const [details, setDetails] = useState({});
	const [showDetails, setShowDetails] = useState('none');

	let config = {
		headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		} 
	} 
	
	const getUserDetails = (id) => {
		let parameters = { params: { id: id} }
		axios.get( 'http://127.0.0.1:8000/api/users/details', parameters)
		.then((response) => {
			setDetails(response.data[0]);
			reloadData();
		});  
	}

	const getUserInput = (e) => {
		console.log(e.target.name);
		console.log(e.target.value);
		setDetails({
			...details,
			[e.target.name] : e.target.value		
		});
	};

	const updateUserDetails = () => {
		const params = new URLSearchParams();	
		params.append('id', details.id);
		params.append('userFullName', details.userFullName);
		params.append('username', details.username);
		params.append('email', details.email);			
		params.append('hrsPerWeek', details.hrsPerWeek);
		params.append('stillActive', details.stillActive);
		params.append('admin', details.admin);
		params.append('status', 'True');

		axios.post( 'http://127.0.0.1:8000/api/users/update', params, config)
		.then(() => {
			getUserDetails(details.id);
		});  
	}

	const deleteUser = (id) => {
		const params = new URLSearchParams();	
		params.append('id', id);

		axios.post( 'http://127.0.0.1:8000/api/users/delete', params, config )
		reloadData();
	}

	const expandDetails = (e) => {
		setShowDetails('block');

		if (showDetails === 'block'){
			setShowDetails('none');
		}
	}

	if (details == null){
		return(
				<div className="item">
					<div className="heading" onClick={expandDetails}>
						<span>{userFullName}</span>
						<i>+</i>
					</div>
				</div>
		);
	} else {
			return ( 
				<div className="accordion-wrap">
					<div className="item">
						<div onClick={expandDetails}>
							<div className="heading" onClick={() => getUserDetails(userId)}>
								<span>{userFullName}</span>
								<i>+</i>
							</div>
						</div>

						<div className="details" key={userId} style={{display: showDetails}}>
							<ul className="form">
								<li>
									<label>Name:</label>
									<input type="text" className="in-text" name='userFullName' defaultValue={details.userFullName} onChange={getUserInput}/>
								</li>								
								<li>
									<label>Hours per week:</label>
									<input type="text" className="in-text" name='hrsPerWeek' defaultValue={details.hrsPerWeek} onChange={getUserInput}/>
								</li>
							</ul>
							<ul className="form">
								<li>
									<label>Username:</label>
									<input type="text" className="in-text" name='username' defaultValue={details.username} onChange={getUserInput}/>
								</li>
								<li>
									<label>Email:</label>
									<input type="text" className="in-text" name='email'defaultValue={details.email} onChange={getUserInput}/>
								</li>								
							</ul>
							<ul className="form last">
								<li>
									<label>Status:</label>
									<span className="radio" name="stillActive" onChange={getUserInput}>
										<label>Active:</label>
										<input type="radio" value="True" name="stillActive" id="active"/>
									</span>
									<span className="radio" name="stillActive" onChange={getUserInput}>
										<label>Inactive:</label>
										<input type="radio" value="False" name="stillActive" id="inactive"/>
									</span>
								</li>
								<li>
									<label>Role:</label>
									<span className="radio" name="admin" onChange={getUserInput}>
										<label>Admin:</label>
										<input type="radio" value="True" name="admin" id="admin"/>
									</span>
									<span className="radio" name="admin" onChange={getUserInput}>
										<label>Worker:</label>
										<input type="radio" value="False" name="admin" id="worker"/>
									</span>
								</li>
							</ul>
							<div className="buttons">
								<div className="inner">
								<button className="btn green" onClick={() => updateUserDetails()} >Save</button>
								<button className="btn red" onClick={() => deleteUser(userId)}>Delete</button>
									<button className="btn orange">Reset Password</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			);}
}
 
export default MemberDetails;