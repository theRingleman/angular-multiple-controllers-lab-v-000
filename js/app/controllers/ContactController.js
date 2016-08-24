function ContactController($scope) {
  var vm = this;

  this.name = "Sam";
  this.email = "sam@example.com";
  this.phone = "555-5555"

  this.changeName = function() {
    vm.name = "Hehe"
  }
}

angular
  .module("app")
  .controller("ContactController", ContactController);
