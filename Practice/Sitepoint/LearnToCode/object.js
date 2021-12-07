const list = {
     items: [],
     
     add(item){
       this.items.push(item);
       return this.items
     },
     
     remove(item){
       i = this.items.indexOf(item);
       if(i>-1){
         this.items.splice(i,1);
       }
        return this.items;
     }
   };
   
   list.add('apples');
   list.add('bananas');
   list.add('carrots');
   console.log(list.items);
   list.remove('bananas');
   console.log(list.items);
   console.log(list);