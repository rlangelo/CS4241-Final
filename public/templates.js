var programTemplate = _.template(
        "<div class='program'>" +
        "<p></p>" +
        "<a href='<%= DwldFile %>' download>" +
        "<img src='<%= ImagePath %>' style='width:128px;height:128px;'/>" +
        "</a>" +
        "<p></p>" +
        "<a href='<%= Instructions %>' target='_blank'>Installation Instructions</a>" +
        "</div>"
        );
    
