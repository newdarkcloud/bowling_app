function saveData(){

	var name = document.getElementById('ball_name').value;
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


	/* Start packing the JSON */
	var text = '{ "Bowling Data" : [' +
	'{ "name": ' + name + 
    	' , "date"' + date +
    	' , "address"' + address +
    	' , "city"' + city +
    	' , "state"' + state +
    	' , "zip"' + zip +
    	' , "home_phone"' + homePhone +
    	' , "cell_phone"' + cellPhone +
    	' , "email"' + email +
    	' , "left_hand"' + leftHand +
    	' , "right_hand"' + rightHand +
    	' , "conv"' + conv +
    	' , "ft"' + ft +
    	' , "ball"' + ball +
    	' , "weight"' + weight +
    	' , "pin"' + pin +
    	' , "layout"' + layout +
    	' , "surface"' + surface +
    	' , "bh_postion"' + bhPosition +
    	' , "size"' + size +
    	' , "depth"' + depth +
    	' , "pap_horizontal"' + horizontal +
    	' , "pap_vertical"' + vertical +
    	' , "offset"' + offset +
    	' , "thumb_style"' + thumb +
    	' , "fingers_style"' + fingers +
    	' , "price"' + price +
    	' , "completed_by"' + completedBy +
    	' }' + ' ]}';

	var bowling_json = JSON.parse(text);
}

function search(firstName, lastName, street, city, state, zipCode, homePhone, cellPhone, email){
//NEED TO IMPLEMENT

}
