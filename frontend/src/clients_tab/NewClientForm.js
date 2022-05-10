const NewClientForm = () => {
	
	return (
		<div className="new-member-wrap">
			<div id="new-member" className="new-member-inner">
				<h2>Create new client</h2>
				<ul className="form">
					<li>
						<label>Client name:</label>
						<input type="text" className="in-text" name='name'/>
					</li>								
					<li>
						<label>Address:</label>
						<input type="text" className="in-text" name='address'/>
					</li>
					<li>
						<label>City:</label>
						<input type="text" className="in-text" name='city'/>
					</li>
					<li>
						<label>Zip/Postal code:</label>
						<input type="text" className="in-text" name='zipPostal'/>
					</li>
					<li>
						<label>Country:</label>
						<select>
							<option>Select country</option>
						</select>
					</li>
				</ul>
				<div className="buttons">
					<div className="inner">
						<button className="btn green">Save</button>
					</div>
				</div>
			</div>
		</div>
	 );
}
 
export default NewClientForm;