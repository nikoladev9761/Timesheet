from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
	path('api/users/all', views.user_summary, name="user_summary"),
	path('api/users/details', csrf_exempt(views.user_details), name="user_details"),

	path('api/users/create', csrf_exempt(views.create_user), name="create_user"),
	path('api/users/update', csrf_exempt(views.update_user), name="update_username"),
	path('api/users/delete', csrf_exempt(views.delete_user), name="delete_user"),

	# ------------------------------------------------------------------------------------------
	# path('api/countries', views.get_all_countries, name="get_all_countries"),
	path('api/clients/all', views.client_summary, name="client_summary"),
	path('api/clients/details', csrf_exempt(views.client_details), name="client_details"),
	path('api/clients/create', csrf_exempt(views.create_client), name="create_client"),
	path('api/clients/update', csrf_exempt(views.update_client), name="update_client"),
	path('api/clients/delete', csrf_exempt(views.delete_client), name="delete_client"),

	# ------------------------------------------------------------------------------------------
	path('api/projects/all', views.project_summary, name="project_summary"),
	path('api/projects/details', csrf_exempt(views.project_details), name="project_details"),
	path('api/projects/create', csrf_exempt(views.create_project), name="create_project"),
	path('api/projects/update', csrf_exempt(views.update_project), name="update_project"),
	path('api/projects/delete', csrf_exempt(views.delete_project), name="delete_project"),
]