jQuery(document).ready(function(){

    jQuery(".submit").click(function(){
        var name = jQuery('input#name').val();
        var address = jQuery('textarea#address').val();
        // $.ajax({
        //     'url' : 'process.php',
        //     'data' :{
        //         'name' : name,
        //         'address' : address,
        //     },
        //     'type' : 'POST',
        //     'success' : function(output){
        //         jQuery(".info").html(output)
        //     }
        // });

        $.post('process.php',{'name' : name, 'address' : address}, function(output){
            jQuery(".info").html(output)
        });

        return false;
    });


    // jQuery('.something').click(function(){
    //     $.ajax({
    //         'url' : 'process.php',
    //         'success' : function(jekuno){
    //             jQuery('.info').html(jekuno);
    //         },
    //         'type' : 'POST',
    //         'data' : {
    //             'naame' : 'noman',
    //             'address' : 'uttora'
    //         }
    //     });
    // }); 
});