$(document).ready(function(){
    // group all code to run when DOM is ready
        var rowArr = $(".time-block");

        // console.log(rowArr);

        var currentHour = moment().format('HH');
        rowArr.each(function() {

            // console.log(this.innerText)
            // console.log($(this).data("hour"))
            
            var thisHour = parseInt($(this).data("hour"));
            
            if (thisHour == currentHour ) {
                $(this).addClass("present");
                // console.log("this row is present " + $(this).data("hour"))
            } else if (thisHour < currentHour) {
                $(this).addClass("past");
                // console.log("this row is past " + $(this).data("hour"))
            } else if (thisHour > currentHour) {
                $(this).addClass("future");
                // console.log("this row is future " + $(this).data("hour"))
            }
        })
    });