const NewMemberForm = () => {
	return ( 
		<div className="new-member-wrap">
			<div id="new-member" className="new-member-inner">
				<h2>Create new team member</h2>
				<ul className="form">
					<li>
						<label>Name:</label>
						<input type="text" className="in-text" />
					</li>								
					<li>
						<label>Hours per week:</label>
						<input type="text" className="in-text" />
					</li>
					<li>
						<label>Username:</label>
						<input type="text" className="in-text" />
					</li>
					<li>
						<label>Email:</label>
						<input type="text" className="in-text" />
					</li>
					<li className="inline">
						<label>Status:</label>
						<span className="radio">
							<label for="inactive">Inactive:</label>
							<input type="radio" value="1" name="status" id="inactive" />
						</span>
						<span className="radio">
							<label for="active">Active:</label>
							<input type="radio" value="2" name="status" id="active" />
						</span>
					</li>
					<li className="inline">
						<label>Role:</label>
						<span className="radio">
							<label for="admin">Admin:</label>
							<input type="radio" value="1" name="status" id="admin" />
						</span>
						<span className="radio">
							<label for="worker">Worker:</label>
							<input type="radio" value="2" name="status" id="worker" />
						</span>
					</li>
				</ul>
				<div className="buttons">
					<div className="inner">
						<button className="btn green">Invite team member</button>
					</div>
				</div>
			</div>
		</div>
	 );
}
 
export default NewMemberForm;