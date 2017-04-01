var USERS = [];


function getAndSave() {

	console.log('Saving...');
	
	var $rg_username=$('#register_username').val();
    var $rg_email=$('#register_email').val();
    var $rg_password=$('#register_password').val();
    var $rg_firstname=$('#register_firstname').val();
    var $rg_lastname=$('#register_lastname').val();

    console.info('\n***************************');
    console.info("username:", $rg_username);
    console.info("password:", $rg_password);
    console.info("firstname:", $rg_firstname);
    console.info("lastname:", $rg_lastname);
    console.info("email:", $rg_email);
    console.info('*****************************\n');

    var user = {
    	username: $rg_username,
    	password: $rg_password,
    	firstname: $rg_firstname,
    	lastname: $rg_lastname,
    	email: $rg_email
    };
    
    USERS.push(user);
}