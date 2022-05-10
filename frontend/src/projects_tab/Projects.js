import Search from '../reusable_components/Search';
import NewProjectForm from './NewProjectForm';
import ProjectDetails from './ProjectDetails';
import CharFilter from '../reusable_components/CharFilter';
import Pagination from '../reusable_components/Pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [firstItemIndex, setFirstItemIndex] = useState(0);	
	const [lastItemIndex, setLastItemIndex] = useState(3);
	const [foundProjects, setFoundProjects] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const [pickedLetter, setPickedLetter] = useState('');

	const fetchProjects = () => {
		let parameters = { params: { firstIndex: firstItemIndex, lastIndex: lastItemIndex, searchInput: searchInput, letter: pickedLetter } }
		axios.get('http://127.0.0.1:8000/api/projects/all', parameters)
		.then((response) => {
			setProjects(response.data);
		});
	}

	useEffect(() => {
		fetchProjects();
	}, [firstItemIndex, foundProjects, pickedLetter]);	

	
	const getSearchInput = (result) => {
			setSearchInput(result);
	}
	
	const getFoundItems = (result) => {
		setFoundProjects(result);
	}

	const getIndexesOfPage = (firstItemIndex, lastItemIndex) => {
		setFirstItemIndex(firstItemIndex);
		setLastItemIndex(lastItemIndex);
	}

	const getPickedLetter = (letter) => {
		setPickedLetter(letter);
	}

	const displayProjectsPerPage = projects.filter(item => item !== projects[projects.length-1]);
	
	if (!projects) return null;
	
	return ( 
		<>
			<h2><i className="ico projects"></i>Projects</h2>
				<div className="grey-box-wrap reports">
					<a href="#new-member" className="link new-member-popup">Create New Project</a>
					<Search data={displayProjectsPerPage} property={'projectName'} getSearchInput={getSearchInput} getFoundItems={getFoundItems}/>
				</div>
			<NewProjectForm />
			<CharFilter getPickedLetter={getPickedLetter}/>
			<div className="accordion-wrap projects">
				{displayProjectsPerPage.map( (project) => (
					<div key={project.id}>
						{projects && <ProjectDetails reloadData={fetchProjects} projects={projects} projectId={project.id} projectName={project.projectName} customer={project.customer} /> }	
					</div>			
				))}
			</div>
					
			{projects.length > 0 ? (
				<Pagination dataLength={projects[projects.length-1].allProjectsLength} getIndexesOfPage={getIndexesOfPage} /> 
			) : ( 
			<h2>No projects to display</h2>
			)}
		</>
	 );
}
 
export default Projects;