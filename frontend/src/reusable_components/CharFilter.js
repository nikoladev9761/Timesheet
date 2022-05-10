import { useState } from "react";

const CharFilter = ({ getPickedLetter }) => {
	const [pickedLetter, setPickedLetter] = useState('');
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
	
	const getLetter = (e) => {
		let letter = (e.target.value).toLowerCase()
		setPickedLetter(letter);
	}

	getPickedLetter(pickedLetter);

	return ( 
		<div className="alpha" >
					<ul>
						{alphabet.map(letter => (
							<li onClick={getLetter}> 
								<button name="letter" className="active" value={letter}>{letter}</button>
							</li>	
						))}
					</ul>
				</div>
	);
}

export default CharFilter;