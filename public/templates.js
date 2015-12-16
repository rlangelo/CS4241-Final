var programTemplate = _.template(
        "<div class='post'>" +
        "<p class='postTitle'><%= Title %></p>" +
        "<a href='<%= DwldFile %>' download>" +
        "<img src='<%= ImagePath %>' style='width:300px;height:300px;'/>" +
        "</a>" +
        "<p></p>" +
        "<a href='<%= Instructions %>' target='_blank'>Installation Instructions</a>" +
        "</div>"
        );
