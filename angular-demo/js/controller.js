angular.module('collegeControllers',['collegeServices'])
  .controller('StudentController',function($scope, dataStudents) {

    function assignToScope( data ) {
      $scope.student = data;
      console.log ( $scope.student );
    }

    function addPersonalDataToStudent( data ) {
      var myStudent = data.data;
      myStudent.age = 25;
      myStudent.location = "Barcelona";
      return myStudent;
    }

    function addWorksDataToStudent( studentData ) {
      studentData.works = "Frontend Engineer";
      return studentData;
    }

    function addColorsToStudent( data ) {
        var studentData = data;
       return dataStudents.getColors()
                .then( function(colors) {
                  studentData.colors = colors;
                  return studentData;
                })
    }

    dataStudents.getStudent()
      .then( addPersonalDataToStudent )
      .then( addWorksDataToStudent )
      .then( addColorsToStudent )
      .then( assignToScope )


    $scope.greeting = function(){
      return "Greetings " + $scope.student.fullName();
    }

    $scope.showMsg = function(){
      alert( "This is the student: " + $scope.student.fullName() );
    }

    $scope.results = true;
    $scope.showResults = function() {
      return ( $scope.results = $scope.results ? false : true )
    }

    $scope.query = '';
    $scope.minMark = 0;

    $scope.aGradeFilter = function(subject) {
      return ( subject.marks >= $scope.minMark  )
    }

  });


