function saveData(){

	var name = document.getElementById('ball_name').value;
	var address = document.getElementById('ball_address').value;
	var date = document.getElementById('ball_date').value;
	var city = document.getElementById('ball_city').value;
	var state = document.getElementById('ball_state').value;
	var zip = document.getElementById('ball_zip').value;
	var homePhone = document.getElementById('ball_home_phone').value;
	var cellPhone = document.getElementById('ball_cell_phone').value;
	var email = document.getElementById('ball_email').value;
	var leftHand = document.getElementById('ball_lh').value;
	var rightHand = document.getElementById('ball_rh').value;
	var conv = document.getElementById('ball_conv').value;
	var ft = document.getElementById('ball_id').value;
	var ball = document.getElementById('ball').value;
	var weight = document.getElementById('ball_weight').value;
	var pin = document.getElementById('ball_pin').value;
	var layout = document.getElementById('ball_layout').value;
	var surface = document.getElementById('ball_surface').value;
	var bhPosition = document.getElementById('ball_bh').value;
	var size = document.getElementById('ball_size').value;
	var depth = document.getElementById('ball_depth').value;
	var horizontal = document.getElementById('ball_pap_h').value;
	var vertical = document.getElementById('ball_pap_v').value;
	var offset = document.getElementById('ball_pap_clt').value;
	var thumb = document.getElementById('ball_thumb').value;
	var fingers = document.getElementById('ball_fingers').value;
	var price = document.getElementById('ball_price').value;
	var completedBy = document.getElementById('ball_employee').value;

	if(name==="" || address==="" || date==="" || city==="" || state==="" ||
		zip==="" || homePhone==="" || cellPhone==="" || email==="" || leftHand==="" ||
		rightHand==="" || conv==="" || ft==="" ||  ball==="" || weight==="" || 
		pin==="" || layout==="" || surface==="" || bhPosition==="" || size==="" ||
		depth==="" || horizontal==="" || vertical==="" || offset==="" || thumb==="" ||
		fingers==="" || price==="" || completedBy===""){
	
	}
	else{

	/* Start packing the JSON */
	var bowlingData =
		{"ball_name" : name,
		"ball_date" : date,
		"ball_address" : address,
		"ball_city" : city,
		"ball_state" : state,
		"ball_zip" : zip,
		"ball_home_phone" : homePhone,
		"ball_cell_phone" : cellPhone,
		"ball_email" : email,
		"ball_lh" : leftHand,
		"ball_rh" : rightHand,
		"ball_conv" : conv,
		"ball_id" : ft,
		"ball" : ball,
		"ball_weight" : weight,
		"ball_pin" : pin,
		"ball_layout" : layout,
		"ball_surface" : surface,
		"ball_bh" : bhPosition,
		"ball_size" : size,
		"ball_depth" : depth,
    	"ball_pap_h" : horizontal,
		"ball_pap_v" : vertical,
		"ball_pap_clt" : offset,
		"ball_thumb" : thumb,
		"ball_fingers" : fingers,
		"ball_price" : price,
		"ball_employee" : completedBy };

	jQuery.ajax("api/new", { "data" : bowlingData });
	location.reload();
}
}


function search(){
//NEED TO IMPLEMENT
    var name = document.getElementById('ball_name').value;
    var data = {"ball_name":name};
    console.log(data);
	jQuery.ajax({

        url: 'api/read',

        type: "GET",

        data: data,//data,

        success: function (data) {
            $('.output').html("");
            if (!data) return;
            var resultset = JSON.parse(data);
            if (!resultset[0]) return;
            console.log(resultset);
			$('.output').html("<table><tr>");
            jQuery.each(resultset[0], function(key,val) {
                if (key != "_id") $('.output').append("<th>" + key + "</th>");
            });
            $('.output').append("</tr>");
            resultset.forEach( function (value,index,array) {
                $('.output').append("<tr>");
                jQuery.each(value, function(key,val) {
                    if (key != "_id") $('.output').append("<td>" + val + "</td>");
                });
                $('.output').append("</tr>");
            })
            $('.output').append("</table>");

        },

        error: function () {
            $('body').html("Error happened");
        }

    });
	

}
