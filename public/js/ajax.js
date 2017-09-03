// AJAX post route of new campground







// new comment post route
$('#new_comment').submit(function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    var formAction = $(this).attr('action')
    $.post(formAction, formData, function(data) {
        debugger;
        console.log(data);
    });
});