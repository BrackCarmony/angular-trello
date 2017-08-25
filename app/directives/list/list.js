angular.module('trello').component('list', {
  templateUrl:'app/directives/list/list.html',
  controller:function(){
    // this.cards = [{text:'test1',color:'red'},{text:'test2',color:'blue'}];
    this.swap = (i1, i2)=>{
      if (i1>=0&&i2>=0&&i1<this.cards.length&&i2<this.cards.length){
        var tempCard = this.cards[i1];
        this.cards[i1]= this.cards[i2];
        this.cards[i2]= tempCard;
      }

    }
  },
  controllerAs:'list',
  bindings:{
    cards:'=',
    changeList:'&'
  }

})
