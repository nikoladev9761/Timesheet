from ts_app.models import Clients

class ClientRepo():

	def get_all_clients(self, first_index, last_index, search_input, letter):
		max_length = Clients.objects.values('id').filter(status=True).count()
		
		if search_input == '':
			get_all_clients = list(Clients.objects.values('id', 'clientName').filter(status=True))[int(first_index):int(last_index)]
			get_all_clients.append({'allClientsLength': max_length})
		
		elif len(search_input) >= 2:
			get_clients_list = list(Clients.objects.values('id', 'clientName').filter(status=True))
			get_all_clients = [client for client in get_clients_list if search_input in str(client.get('clientName')).lower()]
			search_length = len(get_all_clients)
			get_all_clients.append({'allClientsLength': search_length})
		
	
		if search_input == '' and len(letter) >= 1:	
			get_clients_list = list(Clients.objects.values('id', 'clientName').filter(status=True))
			filtered = [client for client in get_clients_list if letter in str(client.get('clientName')).lower()]
			new_length = len(filtered)
			get_all_clients = filtered[int(first_index):int(last_index)]
			get_all_clients.append({'allClientsLength': new_length})
			
		return get_all_clients


	def get_client_details(self, clientId):
		return list(Clients.objects.values('id', 'clientName', 'address', 'city', 'zipPostal', 'country', 'status').filter(id=clientId))

	def update_client(self, clientId , clientName, address, city, zipPostal, country, status):
		Clients.objects.filter(id=clientId).update(clientName=clientName , address=address, city=city, zipPostal=zipPostal, country=country, status=status)
		
	def create_client(self, clientName, address, city, zipPostal, country):
		Clients(clientName = clientName, address = address, city = city, zipPostal = zipPostal, country = country).save()
		
	def delete_client(self, clientId):
		Clients.objects.filter(id=clientId).update(status=False)