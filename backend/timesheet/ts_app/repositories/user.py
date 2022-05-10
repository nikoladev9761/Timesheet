from ts_app.models import Users

class UserRepo():

	def get_all_users(self, first_index, last_index):
		if first_index:		
			max_length = Users.objects.values('id').filter(status=True).count()
			all_users = list(Users.objects.values('id', 'userFullName').filter(status=True))[int(first_index):int(last_index)]
			all_users.append({'allUsersLength': max_length})
		else:
			all_users = list(Users.objects.values('id', 'userFullName').filter(status=True))
			
		return all_users

		
	def get_user_details(self, userId):
		return Users.objects.values('id', 'userFullName', 'username', 'hrsPerWeek', 'email', 'stillActive', 'admin', 'status').filter(id=userId)

	def update_user(self, userId, userFullName, username, hrsPerWeek, email, stillActive, admin, status):
		if stillActive == 'true':
			stillActive = True
		elif stillActive == 'false':
			stillActive = False
			
		if admin == 'true':
			admin = True
		elif admin == 'false':
			admin = False
		return Users.objects.filter(id=userId).update(userFullName = userFullName , username = username, hrsPerWeek = hrsPerWeek, email = email, stillActive = stillActive, admin = admin, status = status)
		
		
	def create_user(self, full_name, username, hrsPerWeek, email, stillActive, admin):
		Users(userFullName = full_name, username = username, hrsPerWeek=hrsPerWeek, email = email, stillActive = stillActive, admin = admin).save()

	def delete_user(self, userId):
		Users.objects.filter(id=userId).update(status=False)