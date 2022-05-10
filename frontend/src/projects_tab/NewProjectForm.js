const NewProjectForm = () => {
	return ( 
		<div className="new-member-wrap">
			<div id="new-member" className="new-member-inner">
				<h2>Create New Project</h2>
				<ul className="form">
					<li>
						<label>Project name:</label>
						<input type="text" className="in-text" />
					</li>								
					<li>
						<label>Description:</label>
						<input type="text" className="in-text" />
					</li>
					<li>
						<label>Customer:</label>
						<select>
							<option>Select customer</option>
							<option>Adam Software NV</option>
							<option>Clockwork</option>
							<option>Emperor Design</option>
						</select>
					</li>
					<li>
						<label>Lead:</label>
						<select>
							<option>Select lead</option>
							<option>Sasa Popovic</option>
							<option>Sladjana Miljanovic</option>
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
 
export default NewProjectForm;