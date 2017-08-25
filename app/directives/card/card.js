angular.module('trello').component('card', {
  templateUrl:'app/directives/card/card.html',
  controller:function(){
    this.color='white';
  },
  controllerAs:'card',
  bindings:{
    text:'=',
    color:'=',
    moveUp:'&',
    moveDown:'&'
  }

})
