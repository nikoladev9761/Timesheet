class UserService():
	def __init__(self, user_repository):
		self._repo = user_repository

	def get_all_users(self, first_index, last_index) -> list:
		return self._repo.get_all_users(first_index, last_index)
	
	def get_user_details(self, userId):
		return self._repo.get_user_details(userId)

	def update_user(self, userId, userFullName, username, hrsPerWeek, email, stillActive, admin, status):
		self._repo.update_user(userId, userFullName, username, hrsPerWeek, email, stillActive, admin, status)

	def create_user(self, full_name, username, hrsPerWeek, email, stillActive, admin):
		self._repo.create_user(full_name, username, hrsPerWeek, email, stillActive, admin)

	def delete_user(self, userId):
		self._repo.delete_user(userId)