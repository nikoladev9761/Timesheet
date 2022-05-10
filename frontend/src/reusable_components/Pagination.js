import { useState } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ dataLength, getIndexesOfPage }) => {
	const [currentPage, setCurrentPage] = useState(1);
  	const [itemsPerPage] = useState(3);
	const [pageNumberLimit] = useState(3);
	const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
	const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
	const pageNumbers = [];	

	
	for (let page = 1; page <= Math.ceil(dataLength / itemsPerPage); page++) {
		pageNumbers.push(page);
	}
	
	const handleClick = (e) => {
		setCurrentPage(Number(e.target.id));
	}

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	

	getIndexesOfPage(indexOfFirstItem, indexOfLastItem);

		const renderPageNumbers = pageNumbers.map((number) => {
			if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit){
			return(
					<li key={number} id={number} onClick={handleClick}>	
					<Link to="#" key={number} id={number} onClick={handleClick}>{number}</Link>
				</li>
			);
			} else {
				return null;
			}
		}
	);

	const handlePrevious = () => {
		setCurrentPage(currentPage - 1);

		if( ((currentPage - 1) % pageNumberLimit) === 0){
			setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
		}
	}

	const handleNext = () => {
		setCurrentPage(currentPage + 1);
		
		if(currentPage + 1 > maxPageNumberLimit){
			setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
		}
	}

	let pageDecrement = null;
	if (minPageNumberLimit >= 1){
		pageDecrement = <li> <Link to="#" onClick={handlePrevious}> &hellip; </Link> </li>;
	}

	let pageIncrement = null;
	if (pageNumbers.length > maxPageNumberLimit){
		pageIncrement = <li> <Link to="#" onClick={handleNext}> &hellip; </Link> </li>;
	}

	
	return ( 
		<>
			{dataLength >= 3 ? (

				<div className="pagination">
					<ul>
						<li>
							<button to="#" onClick={handlePrevious} disabled={currentPage === pageNumbers[0] ? true : false }
							>
								Previous
							</button>
						</li>
						
						{pageDecrement}
						{renderPageNumbers}
						{pageIncrement}

						<li className="last">
							<button to="#" onClick={handleNext} disabled={currentPage === pageNumbers[pageNumbers.length - 1] ? true : false}
							>
								Next
							</button>
						</li>
					</ul>
				</div>

			) : (null)
			}
		</>
		);
}
	
export default Pagination;


