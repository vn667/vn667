  $(document).ready(function(){      
    
     window.addEventListener("popstate",
         function(e) {
         location="https://vn221.com"      
     }, false);

    pushHistory();
    window.addEventListener("popstate", function (e) {
         pushHistory();
      
        

    }, false);


        });   

    function pushHistory() {
        var state = {
            title: "title",
            url: "#"
        };
        window.history.pushState(state, "title", "#");
    }
