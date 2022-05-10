import { useState } from 'react';

const Search = ({ data, property, getFoundItems, getSearchInput }) => {
	const [searchData, setSearchData] = useState('');
	const [foundItems, setfoundItems] = useState(data);

	const searchInput = (e) => {
		let searchValue = e.target.value.toLowerCase();
		
		if (searchValue.length >= 2){
			const results = data.filter((item) => {
				const { [property]: name } = item
				
				return name.toLowerCase().includes(searchValue);
			});
			setSearchData(searchValue);	
			setfoundItems(results);	

		} else if (searchValue.length === 0) {	
			setSearchData('');
			setfoundItems([]);	
		}
	};
	
	getSearchInput(searchData);
	getFoundItems(foundItems);
	
	return (
		<>
			<div className="search-page">
				<input type="search" name="search-clients" className="in-search" placeholder='Search Here...' onChange={searchInput}/>
			</div>
		</>
	 );
}
 
export default Search;