from django.http import JsonResponse
from django.http import HttpResponse
from .repositories.user import UserRepo
from .repositories.client import ClientRepo
from .repositories.project import ProjectRepo
from .services.user import UserService
from .services.client import ClientService
from .services.project import ProjectService

user_repo = UserRepo()
client_repo = ClientRepo()
project_repo = ProjectRepo()

user_service = UserService(user_repo)
client_service = ClientService(client_repo)
project_service = ProjectService(project_repo)
# --------------------------------------------------------------------
def user_summary(request):
	first_index = request.GET.get('firstIndex', None)
	last_index = request.GET.get('lastIndex', None)
	get_all_users = user_service.get_all_users(first_index, last_index)
	
	return JsonResponse(data=get_all_users, safe=False, status=200)

def user_details(request):
		userId = request.GET.get('id', None)
		details = user_service.get_user_details(userId)

		return JsonResponse(data=list(details), safe=False , status=200)

def update_user(request):
	if request.method == "POST":
		userId = request.POST.get('id', None)
		userFullName = request.POST.get('userFullName', None)
		username = request.POST.get('username', None)
		hrsPerWeek = request.POST.get('hrsPerWeek', None)
		email = request.POST.get('email', None)
		stillActive = request.POST.get('stillActive', None)
		admin = request.POST.get('admin', None)
		status = request.POST.get('status', None)

		user_service.update_user(userId , userFullName, username, hrsPerWeek, email, stillActive, admin, status)
		updated_user = user_service.get_user_details(userId)

		return JsonResponse(data=list(updated_user), safe=False, status=200)

def create_user(request):
	if request.method == "POST":
		full_name = request.POST.get('full_name', None)
		username = request.POST.get('username', None)
		hrsPerWeek = request.POST.get('hrsPerWeek', None)
		email = request.POST.get('email', None)
		stillActive = request.POST.get('stillActive', None)
		admin = request.POST.get('admin', None)
		user_service.create_user(full_name, username, hrsPerWeek, email, stillActive, admin)

		return HttpResponse(status=201)

def delete_user(request):
	if request.method == "POST":
		userId = request.POST.get('id', None)
		user_service.delete_user(userId)

		return HttpResponse(status=204)

# --------------------------------------------------------------------
def client_summary(request):
	search_input = request.GET.get('searchInput', '')
	letter = request.GET.get('letter', '')
	first_index = request.GET.get('firstIndex', None)
	last_index = request.GET.get('lastIndex', None)
	get_all_clients = client_service.get_all_clients(first_index, last_index, search_input, letter)
	
	return JsonResponse(get_all_clients, safe=False, status=200)

def client_details(request):
		clientId = request.GET.get('clientId', None)
		details = client_service.get_client_details(clientId)

		return JsonResponse(data=details, safe=False, status=200)

def update_client(request):
	if request.method == "POST":	
		clientId = request.POST.get('id', None)
		clientName = request.POST.get('clientName', None)
		address = request.POST.get('address', None)
		city = request.POST.get('city', None)
		zipPostal = request.POST.get('zipPostal', None)
		country = request.POST.get('country', None)
		status = request.POST.get('status', None)
		client_service.update_client(clientId , clientName, address, city, zipPostal, country, status)

		return HttpResponse(status=200)

def create_client(request):
	if request.method == "POST":
		clientName = request.POST.get('clientName', None)
		address = request.POST.get('address', None)
		city = request.POST.get('city', None)
		zipPostal = request.POST.get('zipPostal', None)
		country = request.POST.get('country', None)
		client_service.create_client(clientName, address, city, zipPostal, country)

		return HttpResponse(status=201)

def delete_client(request):
	if request.method == "POST":
		clientId = request.POST.get('id', None)
		client_service.delete_client(clientId)

		return HttpResponse(status=204)

# --------------------------------------------------------------------
def project_summary(request):
	search_input = request.GET.get('searchInput', '')
	letter = request.GET.get('letter', '')
	first_index = request.GET.get('firstIndex', None)
	last_index = request.GET.get('lastIndex', None)

	get_all_projects = project_service.get_all_projects(first_index, last_index, search_input, letter)

	return JsonResponse(get_all_projects, safe=False, status=200)

def project_details(request):
	projectId = request.GET.get('projectId', None)
	details = project_service.get_project_details(projectId)
	
	return JsonResponse(data=details, safe=False, status=200)

def create_project(request):
	if request.method == "POST":
		projectName = request.POST.get('projectName', None)
		description = request.POST.get('description', None)
		customer = request.POST.get('customer', None)
		projectLead = request.POST.get('projectLead', None)
		project_service.create_project(projectName, customer, description, projectLead)

		return HttpResponse(status=201)

def update_project(request):
	if request.method == "POST":	
		projectId = request.POST.get('id', None)
		projectName = request.POST.get('projectName', None)
		description = request.POST.get('description', None)
		customer = request.POST.get('customer', None)
		projectLead = int(request.POST.get('projectLead', None))
		stillActive = request.POST.get('stillActive', None)
		status = request.POST.get('status', None)
		project_service.update_project(projectId , projectName, description, customer, projectLead, stillActive, status)

		return HttpResponse(status=200)

def delete_project(request):
	if request.method == "POST":
		projectId = request.POST.get('id', None)
		project_service.delete_project(projectId)

		return HttpResponse(status=204)