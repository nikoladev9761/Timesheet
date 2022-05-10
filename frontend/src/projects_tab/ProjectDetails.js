import { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectDetails = ({ reloadData, projects, projectId, projectName, customer}) => {
	const [details, setDetails] = useState({});
	const [showDetails, setShowDetails] = useState('none');
	const [allLeads, setAllLeads] = useState([]);
	const [customersLastIndex, setCustomersLastIndex] = useState(1);
	const [allCustomers, setAllCustomers] = useState([]);

	let config = {
		headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		} 
	} 
	
	const getProjectDetails = (id) => {
		let parameters = { params: { projectId: id} }
		axios.get( 'http://127.0.0.1:8000/api/projects/details', parameters)
		.then((response) => {
			setDetails(response.data[0]);
			reloadData();
			getAllLeads();
			getCustomersLastIndex();
		});  
	}

	useEffect(() => {
		getAllCustomers();
	},[customersLastIndex]);

	const getAllLeads = () => {
		axios.get( 'http://127.0.0.1:8000/api/users/all')
		.then((response) => {
			setAllLeads(response.data);
		});  
	}

	const getCustomersLastIndex = () => {
		let parameters = { params: { firstIndex: 0 , lastIndex: 0, searchInput: ''} } 
		axios.get( 'http://127.0.0.1:8000/api/clients/all', parameters)
		.then((response) => {
			setCustomersLastIndex(response.data[0].allClientsLength);
		});  
	}
	
	const getAllCustomers = () => {
		let parameters = { params: { firstIndex: 0 , lastIndex: customersLastIndex} } 
		axios.get( 'http://127.0.0.1:8000/api/clients/all', parameters)
		.then((response) => {
			setAllCustomers(response.data);
		});  
	}

	const getUserInput = (e) => {
		setDetails({
			...details,
			[e.target.name] : e.target.value		
		});
	};

	const updateProjectDetails = () => {
		const params = new URLSearchParams();	
		params.append('id', details.id);
		params.append('projectName', details.projectName);
		params.append('description', details.description);			
		params.append('customer', details.customer);
		params.append('projectLead', details.projectLead);
		params.append('stillActive', details.stillActive);
		params.append('status', 'True');

		axios.post( 'http://127.0.0.1:8000/api/projects/update', params, config)
		.then(() => {
			getProjectDetails(details.id);
		});  
	}

	const deleteProject = (id) => {
		const params = new URLSearchParams();	
		params.append('id', id);

		axios.post( 'http://127.0.0.1:8000/api/projects/delete', params, config )
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
						<span>{projectName} ({customer})</span>
						<i>+</i>
					</div>
				</div>
		);
	} else {
			return ( 
				<div className="accordion-wrap projects">
					<div className="item">
						<div onClick={expandDetails}>
							<div className="heading" onClick={() => getProjectDetails(projectId)}>
								<span>{projectName}</span> <span><em>({customer})</em></span>
								<i>+</i>
							</div>
						</div>

						<div className="details" key={projectId} style={{display: showDetails}}>
							<ul className="form">
								<li>
									<label>Project name:</label>
									<input type="text" className="in-text" name='projectName' defaultValue={details.projectName} onChange={getUserInput} />
								</li>
								<li>
									<label>Lead:</label>
									<select name='projectLead' onChange={getUserInput}>
										<option defaultValue={details.projectLead}>{details.userFullName}</option>
										
										{allLeads.map((leader) => {
											if (leader.userFullName !== details.userFullName){
												return <option value={parseInt(leader.id)} >{leader.userFullName}</option>
											}
										})}
									</select>
								</li>
							</ul>
							<ul className="form">
								<li>
									<label>Description:</label>
									<input type="text" className="in-text" name='description' defaultValue={details.description} onChange={getUserInput}/>
								</li>
							</ul>

							<ul className="form last">
								<li>
									<label>Customer:</label>
									<select name='customer' onChange={getUserInput}>
										<option value={details.customer}>{details.customer}</option>
										
										{allCustomers.map((customer) => {
											if (customer.clientName !== details.customer){
												return <option name='customer'>{customer.clientName}</option>
											}
										})}
									</select>
								</li>
								<li className="inline">
									<label>Status:</label>
									<span className="radio" name='stillActive' onChange={getUserInput}>	
										<label>Active:</label>	
										<input type="radio" name='stillActive' value="True" id="active" />	
									</span> 

									<span className="radio" name='stillActive' onChange={getUserInput}>
										<label>Inactive:</label>
										<input type="radio" name='stillActive' value="False" id="inactive" />
									</span> 
								</li>
							</ul>
							<div className="buttons">
								<div className="inner">
									<button className="btn green" onClick={() => updateProjectDetails()}>Save</button>
									<button className="btn red" onClick={() => deleteProject(projectId)}>Delete</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			);}
}
 
export default ProjectDetails;