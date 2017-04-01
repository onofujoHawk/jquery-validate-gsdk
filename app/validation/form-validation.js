/**
 * Created by Onofrio Falco on 17/03/2017.
 */
$(document).ready(function() {

	$("#register_form").validate({
		//validation rules
		rules: {
			register_firstname: "required",
			register_lastname: "required",
			register_email: {
				required: true,
				email: true
			},
			register_firstname: {
				required: true,
				minlength: 4
			},
			register_password: {
				required: true,
				minlength: 5
			}
		},
		//validation error messages
		messages: {
			register_firstname: "Inserisci il tuo nome",
			register_lastname: "Inserisci il tuo cognome",
			register_password: {
				required: "Inserisci una password",
				minlength: "La tua password deve essere lunga almeno 4 caratteri"
			},
			register_email: "Fornisci un indirizzo email valido",
			register_username: {
				required: "Inserisci il tuo username",
				minlength: "Il tuo username deve essere lungo almeno 5 caratteri"
			}
		},
		//submit handler
		submitHandler: function(form) {
			form.submit();
		}
	});
});