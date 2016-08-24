function StaffController($scope) {
  var vm = this;

  vm.name = "Jeremiah";
  vm.email = "jer@example.com";
  vm.phone = "555-5555";
}

angular
  .module("app")
  .controller("StaffController", StaffController)
