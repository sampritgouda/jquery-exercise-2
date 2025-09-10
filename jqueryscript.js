
// doing all changes after contents loaded
$(document).ready(()=>{

    //changing the background color for all sections
    $(".section-bg").addClass("highlight-bg")
c
    //changing the border color #FF1A00 and adding borders to some sections
    $(".section-border").addClass("highlight-border")
    
    //changing the font color to #CC0000
    $(".section-text").addClass("highlight-text")

    //removing the border for all input elements
    $(".form-input").addClass("remove-border")

    /*****************************************************
     *             creating new element                  *
     *****************************************************/
    $("#reference-section").show()
    $("#reference-header").show()
})
