let serverURL;
let serverPort;
let editing = false;

$.ajax({
  url:`config.json`,
  type:'GET',
  dataType: 'json',
  success: function(keys){
    serverURL = keys['SERVER_URL'],
    serverPort = keys['SERVER_PORT']
  },
  error: function(err){
    console.log(err);
    console.log('Something went wrong');
  }
});
//
// getList = () => {
//   $.ajax({
//     url:`${serverURL}:${serverPort}/allLists`,
//     type: 'GET',
//     dataType: 'json',
//     success: function(list){
//       console.log(list);
//       for (var i = 0; i < list.length; i++) {
//         $("#listBox").append(`
//           <li class="list-group-item d-flex justify-content-between align-items-center">
//              <div class="listName">${list[i].name}
//              </div>
//              <div class="dueDate">
//                ${list[i].dueDate}
//              </div>
//              <div>
//                <button class="btn btn-warning editBtn">Edit</button>
//                <button class="btn btn-danger deleteBtn">Delete</button>
//              </div>
//            </li>`);
//       }
//     },
//     error: function(err){
//       console.log(err);
//       console.log('Something went wrong');
//     }
//   });
// }
$("#addBtn").click(function(){
  event.preventDefault();
  let listItem = $('#listName').val();
  let dueDate = $('#dueDate').val();

  if ((listName.lengh === 0)|| (dueDate.length === 0)) {
    console.log('add your to do list');
  } else {
    console.log(`${listItem} - ${dueDate}`);
  }
})
