var programTemplate = _.template(
        "<div class='post'>" +
        //"<a href='<%= DwldFile %>'" +
        "<a class='postTitle'><%= Title %></a>" +
        "<img src='<%= ImagePath %>'/>" +
        //"</a>" +
        "<br>"+
        "<a href='<%= Instructions %>' target='_blank'>Installation Instructions</a>" +
        "</div>"
        );
