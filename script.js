//alert(window.$?1:0);
var topics = ["dog", "cat", "frog", "bird"];
$(document).ready(function () {
    console.log("ready!");
    //$(document.body).append('<button>dog</button>');
    var container = $("<div></div>").attr('id', 'button-container');
    $(document.body).append(container);

    for (var i = 0; i < topics.length; i++) {
        $("#button-container").append(`<button>${topics[i]}</button>`);


    }
    $("#button-container").on("click", "button", function () {
        // Do something
        console.log("hi");
        var APIKey = "EWhF9F6lxc3KTumFIJenGt0KtOLY78Vg"
        var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=EWhF9F6lxc3KTumFIJenGt0KtOLY78Vg&q=dog&limit=10&offset=0&rating=PG-13&lang=en" + APIKey;
        $.ajax({
            url: queryUrl,
            type: "GET",
            dataType: 'json',
            success: function (data) {
                var responses = data.data;
                var documentBody = $(document.body);
                // alert('Data: ' + data.data.length,);
                jQuery('<div/>', {
                    id: 'gif-container'

                }).appendTo(documentBody);
                for (var i = 0; i < responses.length; i++) {
                    var images = responses[i].images;
                    var fixedHeighStill = images.fixed_height_still;
                    var imageUrl = fixedHeighStill.url;
                    var img = $('<img>');
                    img.attr('src', imageUrl);
                    img.appendTo('#gif-container');
                    console.log(imageUrl);

                    //console.log(fixedHeighStill);
                    //console.log(image);

                }
                
                 

                

            },
            error: function (request, error) {
                alert("Request: " + JSON.stringify(request));
            }
        });
    })



});



