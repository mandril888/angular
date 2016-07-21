angular.module('myControllersContainer',[])


	.controller('infoStudents',function($scope) {

		var students = [
		{
			name : 'Angel',
			email: 'angel.sannicolas@gmail.com',
			github: 'https://github.com/KaeserSan'
		},
		{
			name : 'Arturo',
			email: 'arturo.rubio.89.8@gmail.com',
			github: 'https://github.com/mandril888'
		},
		{
			name : 'Carl',
			email: 'carl.45.cr@gmail.com',
			github: 'https://github.com/carl32cr'
		},
		{
			name : 'Leo',
			email: 'leo@leovidal.es',
			github: 'https://github.com/leovidalgithub'
		},
		{
			name : 'Núria',
			email: 'soriano.nuria@gmail.com',
			github: 'https://github.com/nuria-flia'
		},
		{
			name : 'Anna',
			email: 'avilatusell@gmail.com',
			github: 'https://github.com/avilatusell'
		},
		{
			name : 'Ana',
			email: 'imaginarte3d@gmail.com',
			github: 'https://github.com/Tsuna-mi'
		}
	]

	$scope.students = students;
	
	});

	

