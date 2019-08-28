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

$("#addBtn").click(function(){
  event.preventDefault();
  let listItem = $('#listName').val();
  let dueDate = $('#dueDate').val();

  if ((listName.lengh === 0)|| (dueDate.length === 0)) {
    console.log('add your to do list');
  } else {
    if(editing === true){
      const id = $("#listID").val();
      $.ajax({
        url:`${serverURL}:${serverPort}/editList/${id}`,
        type:'PATCH',
        data: {
          list:listItem,
          dueDate: dueDate
        },
        success: function(result){
          $("#listName").val(null);
          $("#dueDate").val(null);
          $("#listID").val(null);
          $("#addBtn").text('EDIT').removeClass('btn-success');
          $("#heading").text('Edit your to do list');
          editing = false;
        },
        error: function(err){
          console.log(err);
          console.log('Something went wrong');
        }
      })  //ajax end
  } else {
    console.log(`${listItem} - ${dueDate}`);
    $.ajax({
      url:`${serverURL}:${serverPort}/list`,
      type:'POST',
      data:{
        list:listItem,
        dueDate: dueDate
      },
      success:function(result){
        $("#listBox").append(`
          <li class="list-group-item d-flex justify-content-between align-items-center">
             <div class="listName">${listItem}
             </div>
             <div class="dueDate">
               ${dueDate}
             </div>
             <div>
               <button class="btn btn-warning editBtn">Edit</button>
               <button class="btn btn-danger deleteBtn">Delete</button>
             </div>
           </li>`);
      },
      error:function(err){
        console.log(err);
        console.log('Something went wrong');
      }
    }) //ajax done
  } //else done
 }
}); //addBTN end
