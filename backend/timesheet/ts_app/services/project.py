class ProjectService():
	def __init__(self, project_repository):
		self._repo = project_repository

	def get_all_projects(self, first_index, last_index, search_input, letter) -> list:
		return self._repo.get_all_projects(first_index, last_index, search_input, letter)

	def get_project_details(self, projectId) -> list:
		return self._repo.get_project_details(projectId)

	def update_project(self, projectId, projectName, description, customer , projectLead, stillActive, status):
		self._repo.update_project(projectId, projectName, description, customer , projectLead, stillActive, status)

	def create_project(self, projectName, customerId, description, projectLeadId):
		self._repo.create_project(projectName, customerId, description, projectLeadId)

	def delete_project(self, projectId):
		self._repo.delete_project(projectId)