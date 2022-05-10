import { Link } from "react-router-dom";

const Footer = () => {
	return ( 
		<footer className="footer">
			<div className="wrapper">
				<ul>
					<li>
						<span></span>
					</li>
				</ul>
				<ul className="right">
					<li>
						<Link to="#">Terms of Use</Link>
					</li>
					<li>
						<Link to="#" className="last">Privacy policy</Link>
					</li>
				</ul>
			</div>
		</footer>
	 );
}
 
export default Footer;