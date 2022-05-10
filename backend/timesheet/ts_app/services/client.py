class ClientService():
	def __init__(self, client_repository):
		self._repo = client_repository
	
	def get_all_clients(self, first_index, last_index, search_input, letter) -> list:
		return  self._repo.get_all_clients(first_index, last_index, search_input, letter)
	
	def get_client_details(self, clientId) -> list:
		return self._repo.get_client_details(clientId)

	def update_client(self, clientId , clientName, address, city, zipPostal, country, status):
		return self._repo.update_client(clientId , clientName, address, city, zipPostal, country, status)

	def create_client(self, clientName, address, city, zipPostal, country):
		return self._repo.create_client(clientName, address, city, zipPostal, country) 

	def delete_client(self, clientId):
		return self._repo.delete_client(clientId)