
function supsAPIService($resource) {
	const api = {
		sups: $resource('/api/sups/:id/', 
			{ id: '@id' },
			{
				update: {
					method: 'PUT',
				},
			}),
	};
	
	return api;
}

export default supsAPIService;