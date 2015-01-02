/**
* Created with LoginMenuWithFrameTest.
* User: AngelODeath
* Date: 2015-01-02
* Time: 04:33 PM
*/

$(function() {
    var seachvalue = $('input#searchval');
    var searchbutton = $("a#search");
    
    searchbutton.click(function() {
        console.log('Sending ajax request to /users');
        $.ajax({
            url: 'users',
            type: 'GET',
            data: {
                'search-value': seachvalue.val()
            },
            dataType: 'text/html',
            success: function(result) {
                console.log(result);
            }
        });
    });
    
})