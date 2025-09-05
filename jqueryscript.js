
// doing all changes after contents loaded
$(document).ready(()=>{

    //calling function to create the html element
    create_element()

    //changing the background color for all sections
    $(".mypage-header-container,.middle-content, .js-container , .submit-button").addClass("highlight-bg")

    //changing the border color #FF1A00 and adding borders to some sections
    $(".wrapper-container , .submit-button , .mypage-header-container, .side-content").addClass("highlight-border")
    
    //changing the font color to #CC0000
    $(".resume-header-text, .js-section ,.wrapper-container ,.section-header , .form-label").addClass("highlight-text")

    //removing the border for all input elements
    $(".form-input").addClass("remove-border")

})

/*****************************************************
 *             creating new element                  *
 *****************************************************/

function create_element(){

    /****************************************
     *        STEP 1: creating sidebar      *
     ****************************************/

    //creating sidebar header
    var sidebar_header = $("<div></div>").addClass("sidebar-header").append($("<h3></h3>").text("References"))

    // creating sidebar container
    var sidebar_element = $("<aside></aside>").addClass("side-content").append(sidebar_header)
    sidebar_element.addClass("add-margin-bottom")
    $("#mypage-leftnav").append(sidebar_element)

    
    /****************************************
     *     STEP 2: creating middle element  *
     ****************************************/
    var middle_content_header = $("<h3></h3>").addClass("center-content-heading").text("References")
    var middle_content_header_container = $("<div></div>").addClass("hidden").append(middle_content_header)


    //middle text content for reference
    let content_text = "Seashore Enterprises187 Clive Road, House Springs, Missouri 63940(636) 423-2759" +
                        "Ryan was my direct manager from March 2018 until March 2020"

    // creating middle content                   
    var middle_content = $("<p></p>").addClass("description").text(content_text)
    var middle_content_container = $("<div></div>").addClass("content").append(middle_content)

    //appending to front-end
    $(".center-content").append(middle_content_header_container, middle_content_container);


}