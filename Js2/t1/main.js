let users_arr = [];

db.collection('users').get().then( function(res){
      res.forEach( function(doc){
        users_arr.push(doc.data()); 
      })      

      console.log(users_arr);
})

console.log(users_arr);