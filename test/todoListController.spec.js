describe('TodoListController', function(){
  beforeEach(module('todoList'));

  var ctrl

  beforeEach(inject(function($controller){
    ctrl = $controller('TodoListController');
  }));

  it('initialises with an empty todo list', function(){
    expect(ctrl.todoList).toBeUndifined
  });
});
