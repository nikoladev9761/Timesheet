import Search from '../reusable_components/Search';
import NewClientForm from './NewClientForm';
import ClientDetails from './ClientDetails';
import CharFilter from '../reusable_components/CharFilter';
import Pagination from '../reusable_components/Pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Clients = () => {
	const [clients, setClients] = useState([]);
	const [firstItemIndex, setFirstItemIndex] = useState(0);	
	const [lastItemIndex, setLastItemIndex] = useState(3);
	const [foundClients, setFoundClients] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const [pickedLetter, setPickedLetter] = useState('');

	const fetchClients = () => {
		let parameters = { params: { firstIndex: firstItemIndex, lastIndex: lastItemIndex, searchInput: searchInput, letter: pickedLetter } }
		axios.get('http://127.0.0.1:8000/api/clients/all', parameters)
		.then((response) => {
			setClients(response.data);
		});
	}

	useEffect(() => {
		fetchClients();
	}, [firstItemIndex, foundClients, pickedLetter]);

	const getSearchInput = (result) => {
		setSearchInput(result);
	}

	const getFoundItems = (result) => {
		setFoundClients(result);
	}

	const getIndexesOfPage = (firstItemIndex, lastItemIndex) => {
		setFirstItemIndex(firstItemIndex);
		setLastItemIndex(lastItemIndex);
	}
	
	const getPickedLetter = (letter) => {
		if (letter !== pickedLetter){
			setFirstItemIndex(0);
			setLastItemIndex(3);
			setPickedLetter(letter);
		} else {
			setPickedLetter(letter);
		}
	}

	const displayClientsPerPage = clients.filter(item => item !== clients[clients.length-1]);

	if (!clients) return null;

	return (
		<>
			<h2><i className="ico clients"></i>Clients</h2>
				<div className="grey-box-wrap reports">
					<a href="#new-member" className="link new-member-popup">Create New Client</a>
					<Search data={displayClientsPerPage} property={'clientName'} getSearchInput={getSearchInput} getFoundItems={getFoundItems}/>
				</div>
			<NewClientForm />
			<CharFilter getPickedLetter={getPickedLetter}/>
			<div className="accordion-wrap clients">
				{displayClientsPerPage.map( (client) => (
					<div key={client.id}>
						{clients && <ClientDetails reloadData={fetchClients} clientName={client.clientName} clientId={client.id}/> }	
					</div>			
				))}
			</div>
					
			{clients.length > 0 ? (
				<Pagination dataLength={clients[clients.length-1].allClientsLength} getIndexesOfPage={getIndexesOfPage}/>
			) : ( 
			<h2>No clients to display</h2>
			)}
		</>
	);
}
 
export default Clients;