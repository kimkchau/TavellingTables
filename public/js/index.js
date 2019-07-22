// $(document).ready(function() {
//     var htmlString = "";
    
//     $.get("/api/events", function( data ) {
//       console.log(data[0])
//       for(var i = 0; i < data.length; i++){
//         htmlString += `    <div class="col col-1-4">
//           <div class="card">
//             <div class="card_title">
//               <h3>`+data[i].title+`</h3>
//               <hr>
//             </div>
//             <div class="card_content">
//               <hr>
//               <p>Bio:`+data[i].bio+`</p>
//               <p>Guest Limit:`+data[i].limitGuest+`</p>
//               <p>date:
//             </div>
//           </div>
//         </div>`
//       }
//       console.log(htmlString)
//       $("eventTarget").html(htmlString);
//     });
//     });