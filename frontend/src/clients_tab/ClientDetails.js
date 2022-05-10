import { useState } from 'react';
import axios from 'axios';

const ClientDetails = ({ reloadData, clientName, clientId}) => {
	const [details, setDetails] = useState({});
	const [showDetails, setShowDetails] = useState('none');
	const countries = ['Russia', 'China', 'South Korea', 'USA', 'France', 'UK', 'Germany', 'Italy', 'Taiwan'];

	let config = {
		headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		} 
	}  

	const getClientDetails = (id) => {
		let parameters = { params: { clientId: id} }
		axios.get( 'http://127.0.0.1:8000/api/clients/details', parameters)
		.then((response) => {
			setDetails(response.data[0]);
			reloadData();
		});  
	}

	const getUserInput = (e) => {
		setDetails({
			...details,
			[e.target.name] : e.target.value		
		});
	};
	
	const updateClientDetails = () => {
		
		const params = new URLSearchParams();	
		params.append('id', details.id);
		params.append('clientName', details.clientName);
		params.append('address', details.address);			
		params.append('city', details.city);
		params.append('zipPostal', details.zipPostal);
		params.append('country', details.country);
		params.append('status', 'True');
		
		axios.post( 'http://127.0.0.1:8000/api/clients/update', params, config)
		.then(() => {
			getClientDetails(details.id);
		});  
	}

	const deleteClient = (id) => {
		const params = new URLSearchParams();	
		params.append('id', id);

		axios.post( 'http://127.0.0.1:8000/api/clients/delete', params, config )
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
						<span>{clientName}</span>
						<i>+</i>
					</div>
				</div>
		);
	} else {
			return (
				<div className="item-details">
					<div className="item">
						<div onClick={expandDetails}>
							<div className="heading" onClick={() => getClientDetails(clientId)} >	
								<span>{clientName}</span>
								<i>+</i>
							</div>
						</div>

						<div className="details" key={clientId} style={{display: showDetails}}>
							<ul className="form">
								<li> 
									<label>Client name:</label>
									<input type="text" className="in-text" name='clientName' defaultValue={details.clientName} onChange={getUserInput}/>
								</li>
								<li>
									<label>Zip/Postal code:</label>
									<input type="text" className="in-text" name='zipPostal' defaultValue={details.zipPostal} onChange={getUserInput}/>
								</li>
							</ul>
							<ul className="form">
								<li>
									<label>Address:</label>
									<input type="text" className="in-text" name='address' defaultValue={details.address} onChange={getUserInput}/>
								</li>
								<li>
									<label>Country:</label>
									<select name='country' onChange={getUserInput}>
										<option  value={details.country}>{details.country}</option>
										
										{countries.map((country) => {
											if (country !== details.country){
												return <option name='country' >{country}</option>
										}
										})}
									</select>
								</li>
							</ul>
							<ul className="form last">
								<li>
									<label>City:</label>
									<input type="text" className="in-text" name='city' defaultValue={details.city} onChange={getUserInput}/>
								</li>
							</ul>
							<div className="buttons">
								<div className="inner">
									<button className="btn green" onClick={() => updateClientDetails()}>Save</button>
									<button className="btn red" onClick={() => deleteClient(clientId)}>Delete</button>
								</div>
							</div>
						</div> 
					</div>
				</div>
			);}
}
 
export default ClientDetails;