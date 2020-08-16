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
    // Create object where each key is a time of day.
    // Every value, this object starts as an empty string.
    var hourObj = {
        "09": "",
        "10": "",
        "11": "",
        "12": "", 
        "13": "",
        "14": "",
        "15": "",
        "16": "",
        "17": "",
    }


    // When save button is clicked, contents of text area are saved to local storage.
    
    $(".saveBtn").on("click", function() {
        // Save text area content to a variable.
        // Connect save button and textarea so that information can be passed into function.
        var rowHour = $(this).parent().attr("data-hour");
        var value = $(this).siblings("textarea").val();

        // console.log(rowHour, value);
    // Ex: hourObj = {9am: "Wake Up", 10am: "", 11am: "Make Breakfast"...}
    // var value = "make coffee"
    var savedData = JSON.parse(localStorage.getItem("hourObj"));
    if (savedData !== null){
        savedData[rowHour] = value
        localStorage.setItem("hourObj", JSON.stringify(savedData) );
        
    } else {
        hourObj[rowHour] = value
        localStorage.setItem("hourObj", JSON.stringify(hourObj));
    }


    })

    var savedData = JSON.parse(localStorage.getItem("hourObj"));
    

    $(".time-block .col-md-10").each(function(index, value){
    // console.log(value);
    console.log(index);
    
        if (0 === index){
            console.log(savedData["09"]);
            $(value).val(savedData["09"])
        } else {
            var temp = index;
            temp = temp + 9;
            console.log(toString(temp));
            console.log(savedData[toString(temp)]);
            $(value).val(savedData[`${temp}`]);
        
        }

    }) 