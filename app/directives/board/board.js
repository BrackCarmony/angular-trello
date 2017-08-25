angular.module('trello').component('board', {
  templateUrl:'app/directives/board/board.html',
  controller:function(){
    this.lists = [[{text:"This is my first card", color:'red'},{text:"This is my Second card", color:'teal'},{text:"This is my third card", color:'mintcream'}]];
    this.changeList = (cardToMove) => {
      this.lists.forEach((list, listIndex, allLists)=>{
        let cardIndex = list.indexOf(cardToMove)
        if (listIndex>-1){
          list.splice(cardIndex, 1);
          allLists[listIndex+1].push(cardIndex);
        }
      })
    }
  },
  controllerAs:'board'

})
