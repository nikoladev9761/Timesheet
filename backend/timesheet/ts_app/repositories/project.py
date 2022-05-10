from ts_app.models import Users, Projects

class ProjectRepo():

	def get_all_projects(self, first_index, last_index , search_input_proj, letter_proj):
		max_length = Projects.objects.values('id').filter(status=True).count()
		
		if search_input_proj == '':
			
			get_all_projects = list(Projects.objects.values('id', 'projectName', 'customer').filter(status=True))[int(first_index):int(last_index)]
			get_all_projects.append({'allProjectsLength': max_length})

		elif len(search_input_proj) >= 2:
			get_projects_list = list(Projects.objects.values('id', 'projectName', 'customer').filter(status=True))
			get_all_projects = [project for project in get_projects_list if search_input_proj in str(project.values()).lower()]
			search_length = len(get_all_projects)
			get_all_projects.append({'allProjectsLength': search_length})


		if search_input_proj == '' and len(letter_proj) >= 1:	
			get_projects_list = list(Projects.objects.values('id', 'projectName', 'customer').filter(status=True))
			filtered = [project for project in get_projects_list if letter_proj in str(project.get('projectName')).lower()]
			new_length = len(filtered)
			get_all_projects = filtered[int(first_index):int(last_index)]
			get_all_projects.append({'allProjectsLength': new_length})

		return get_all_projects
		

	def get_project_details(self, projectId):
		lead_id = Projects.objects.values('projectLead').filter(id=projectId)[0].get('projectLead')	
		lead_name = Users.objects.values('userFullName').filter(id=lead_id, admin=True)[0]
		
		project_data = Projects.objects.values('id', 'projectName', 'description', 'customer', 'projectLead', 'stillActive', 'status').filter(id=projectId)[0]
		project_data.update(lead_name)

		return [project_data]

		
	def update_project(self, projectId, projectName, description, customer , projectLead, stillActive, status):
		if stillActive == 'true':
			stillActive = True
		elif stillActive == 'false':
			stillActive = False
		Projects.objects.filter(id=projectId).update(projectName=projectName , description=description, customer = customer, projectLead = projectLead, stillActive=stillActive, status=status)
		
	def create_project(self, projectName, customer, description, projectLead):
		Projects(projectName = projectName, description = description, customer = customer, projectLead = projectLead).save()
		
	def delete_project(self, projectId):
		Projects.objects.filter(id=projectId).update(status=False)