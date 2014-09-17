$(document).ready(function() {
    for (var i = 0; i < 1000; i++) {
        $("body").append("<div></div>");
    }
    $(document).on("mouseenter", "div", function() {
        $(this).fadeTo(500,0);
    });
});