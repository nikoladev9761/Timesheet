import NewMemberForm from './NewMemberForm';
import MemberDetails from './MemberDetails';
import Pagination from '../reusable_components/Pagination';
import { useState, useEffect } from 'react';
import axios from 'axios';

const TeamMembers = () => {
	const [users, setUsers] = useState([]);
	const [firstItemIndex, setFirstItemIndex] = useState(0);	
	const [lastItemIndex, setLastItemIndex] = useState(3);

	const fetchUsers = () => {
		let parameters = { params: { firstIndex: firstItemIndex, lastIndex: lastItemIndex } }
		axios.get('http://127.0.0.1:8000/api/users/all', parameters)
		.then((response) => {
			setUsers(response.data);
		});
	}

	useEffect(() => {
		fetchUsers();
	}, [firstItemIndex]);

	const getIndexesOfPage = (firstItemIndex, lastItemIndex) => {
		setFirstItemIndex(firstItemIndex);
		setLastItemIndex(lastItemIndex);
	}
	
	const displayUsersPerPage = users.filter(item => item !== users[users.length-1]);

	if (!users) return null;

	return (
		<>
			<h2><i className="ico users"></i>Team Members</h2>
				<div className="grey-box-wrap reports">
					<a href="#new-member" className="link new-member-popup">Create New Member</a>
					<NewMemberForm />
				</div>
			
			<div className="accordion-wrap users">
				{displayUsersPerPage.map( (user) => (
					<div key={user.id}>
						{users && <MemberDetails reloadData={fetchUsers} userFullName={user.userFullName} userId={user.id}/> }	
					</div>			
				))}
			</div>

			{users.length > 0 ? (
				<Pagination dataLength={users[users.length-1].allUsersLength} getIndexesOfPage={getIndexesOfPage} />
			) : ( 
			<h2>No users to display</h2>
			)}
		</>
	 );
}
 
export default TeamMembers;