from django.db import models

class Users (models.Model):
	userFullName = models.CharField(max_length=30)
	username = models.CharField(max_length=20, unique=True)
	pswd = models.CharField(max_length=20, null=True, blank=True)
	email = models.EmailField(max_length=254, unique=True)
	hrsPerWeek = models.FloatField(default=40)
	stillActive = models.BooleanField(default=True)
	admin = models.BooleanField(default=False)
	recoveryLink = models.CharField(max_length=60, null=True, blank=True)
	status = models.BooleanField(default=True)

class Clients (models.Model):
	clientName = models.CharField(max_length=30, unique=True)
	address = models.CharField(max_length=20)
	city = models.CharField(max_length=20)
	zipPostal = models.CharField(max_length=10)
	country = models.CharField(max_length=50)
	status = models.BooleanField(default=True) 

class Projects (models.Model):
	projectName = models.CharField(max_length=30, unique=True)
	description = models.CharField(max_length=200)
	customer = models.ForeignKey(Clients, to_field='clientName', on_delete=models.CASCADE)
	projectLead = models.ForeignKey(Users, on_delete=models.CASCADE) 
	stillActive = models.BooleanField(default=True)
	status = models.BooleanField(default=True)

class ProjectLog (models.Model):
	userFullName = models.ForeignKey(Users, on_delete=models.CASCADE)
	clientName = models.ForeignKey(Clients, to_field='clientName', on_delete=models.CASCADE)
	projectName = models.ForeignKey(Projects, to_field='projectName', on_delete=models.CASCADE)
	logDescription = models.CharField(max_length=200, blank=True)
	hours = models.FloatField()
	overtime = models.FloatField()
	todays_date = models.DateField(auto_now_add=True)