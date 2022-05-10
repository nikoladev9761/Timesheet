import { NavLink } from 'react-router-dom';

const Header = () => {
	
	return (
		<header className="header">
			<div className="top-bar"></div>
			<div className="wrapper">
				<NavLink to="/" className="logo">
					<img src="" alt="logo" />
				</NavLink>
				<ul className="user right">
					<li>
						<NavLink to="#">Marko Markovic</NavLink>
						<div className="invisible"></div>
						<div className="user-menu">
							<ul>
								<li>
									<NavLink to="#" className="link">Change password</NavLink>
								</li>
								<li>
									<NavLink to="#" className="link">Settings</NavLink>
								</li>
								<li>
									<NavLink to="#" className="link">Export all data</NavLink>
								</li>
							</ul>
						</div>
					</li>
					<li className="last">
						<NavLink to="#">Logout</NavLink>
					</li>
				</ul>
				<nav>
					<ul className="menu">
						<li>
							<NavLink to="/" className="btn nav">TimeSheet</NavLink>
						</li>
						<li>
							<NavLink to="/clients" className="btn nav">Clients</NavLink>
						</li>
						<li>
							<NavLink to="/projects" className="btn nav">Projects</NavLink>
						</li>
						<li>
							<NavLink to="/categories" className="btn nav">Categories</NavLink>
						</li>
						<li>
							<NavLink to="/team-members" className="btn nav">Team members</NavLink>
						</li>
					</ul>
					<div className="mobile-menu">
						<NavLink to="#" className="menu-btn">
							<i className="zmdi zmdi-menu"></i>
						</NavLink>
						<ul>
							<li>
								<NavLink to="/">TimeSheet</NavLink>
							</li>
							<li>
								<NavLink to="/clients">Clients</NavLink>
							</li>
							<li>
								<NavLink to="/projects">Projects</NavLink>
							</li>
							<li>
								<NavLink to="/categories">Categories</NavLink>
							</li>
							<li>
								<NavLink to="/team-members">Team members</NavLink>
							</li>
						</ul>
					</div>					
					<span className="line"></span>
				</nav>
			</div>
		</header>
	  );
}
 
export default Header;