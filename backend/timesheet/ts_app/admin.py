from django.contrib import admin
from ts_app.models import Users, Clients, Projects, ProjectLog


class UsersDisplay(admin.ModelAdmin):
	list_display = ("userFullName", "username", "hrsPerWeek", "pswd", "email", "stillActive", "admin", "recoveryLink", "status")

class ClientsDisplay(admin.ModelAdmin):
	list_display = ("clientName", "address", "city", "zipPostal", "country", "status")

class ProjectsDisplay(admin.ModelAdmin):
	list_display = ("projectName", "description", "customer", "projectLead", "stillActive", "status")

class ProjectLogsDisplay(admin.ModelAdmin):
	list_display = ("userFullName", "clientName", "projectName", "logDescription", "hours", "overtime", "todays_date")


admin.site.register(Users, UsersDisplay)
admin.site.register(Clients, ClientsDisplay)
admin.site.register(Projects, ProjectsDisplay)
admin.site.register(ProjectLog, ProjectLogsDisplay)
