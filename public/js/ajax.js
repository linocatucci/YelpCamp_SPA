// AJAX post route of new campground


// new comment post route
$('#new_comment').submit(function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    var formAction = $(this).attr('action');
    $.post(formAction, formData, function(data) {
        $('#show_comment_block').append(`
        <div class='row' id='show_comment_block'>
        <div class='col-md-12'>
            <hr>
            <strong> <%= comment.author.username %></strong>
            <span class='pull-right'><%=moment(${data.created_at}).fromNow()%></span>
            <p>
                ${data.text}
            </p>

            <% if (currentUser && currentUser.username === comment.author.username ){ %>
                <a class="btn btn-xs btn-warning" href="/campgrounds/<%=campground._id %>/comments/${data._id}/edit">Edit</a>
                <form id="delete_form" action="/campgrounds/<%=campground._id %>/comments/${data._id}?_method=DELETE" method="POST">
                    <input type="submit" class="btn btn-xs btn-danger" value="Delete">
                </form>
                <% } %>
        </div>
    </div>
        `)
    });
});