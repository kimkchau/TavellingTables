var htmlString ="";


$.ajax({
    url: "/api/events",
    method: "GET"
  }).then(function(res){

      for(var i = 0; i < res.length; i++){
          var date = res[i].date.substring(0,res[i].date.indexOf("T"))
          var guestCheck;
          if(res[i].guest === null){
              guestCheck =0;
          }
          htmlString += `    <div class="col col-1-4">
          <div class="card">
            <div class="card_title">
              <h1>`+res[i].title+`</h1>
              <hr>
            </div>
            <div class="card_content">
              <hr>
              <p>Meal Course:`+res[i].bio+`</p>
              <p>guest limit:`+guestCheck+`/`+res[i].limitGuest+`</p>
              <p>date:`+date+`</p>
            </div>
          </div>
        </div>`
      }
      $("#eventTarget").html(htmlString)
  })