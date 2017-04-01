/**
 * Created by Onofrio Falco on 17/03/2017.
 */
$(document).ready(function() {

    //vars
    var $formRegister = $('#register-form');
    var $divForms = $('#div-forms');
    var $modalAnimateTime = 300;
    var $msgAnimateTime = 150;
    var $msgShowTime = 2000;

    //validation rules
    var $is_valid_username = true;
    var $is_valid_password = true;
    var $is_valid_email = true;


    //on submit handler
    $("#register-form").submit(function(e) {
        //fields to validate
        var $rg_username=$('#register_username').val();
        var $rg_email=$('#register_email').val();
        var $rg_password=$('#register_password').val();

        /* STARTS VALIDATION */
        if ($rg_username == "") {
            showMessage('required_username', 'register_username');
            $is_valid_username = false;
        } else {
            if ($rg_username.length < 3) {
                showMessage('invalid_username', 'register_username');
                $is_valid_username = false;
            }
        }
        if ($rg_password == "") {
            showMessage('required_password', 'register_password');
            $is_valid_password = false;
        } else {
            if ($rg_password < 6) {
                showMessage('invalid_password', 'register_password');
                $is_valid_password = false;
            }
        }
        if ($rg_email == "") {
            showMessage('required_email', 'register_email');
            $is_valid_email = false;
        } else {
            var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (regex.test(rg_email) === false) {
                showMessage('invalid_email', 'register_email');
                $is_valid_email = false;
            }
        }
        if ($is_valid_email == false && $is_valid_password == false && $is_valid_username == false) {
            //VALIDATION ERROR
            msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "error", "glyphicon-remove", "Errore durante la registrazione.");
        } else {
            //VALIDATION SUCCESS
            $("input").removeClass('required-field');
            msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "success", "glyphicon-ok", "Registrazione completata.");
        }

        return false; 
    });


    /* USEFUL METHODS */
    function modalAnimate($oldForm, $newForm) {
        var $oldH = $oldForm.height();
        var $newH = $newForm.height();
        $divForms.css("height",$oldH);
        $oldForm.fadeToggle($modalAnimateTime, function(){
            $divForms.animate({height: $newH}, $modalAnimateTime, function(){
                $newForm.fadeToggle($modalAnimateTime);
            });
        });
    }
    
    function msgFade($msgId, $msgText) {
        $msgId.fadeOut($msgAnimateTime, function() {
            $(this).text($msgText).fadeIn($msgAnimateTime);
        });
    }
    
    function msgChange($divTag, $iconTag, $textTag, $divClass, $iconClass, $msgText) {
        var $msgOld = $divTag.text();
        msgFade($textTag, $msgText);
        $divTag.addClass($divClass);
        $iconTag.removeClass("glyphicon-chevron-right");
        $iconTag.addClass($iconClass + " " + $divClass);
        setTimeout(function() {
            msgFade($textTag, $msgOld);
            $divTag.removeClass($divClass);
            $iconTag.addClass("glyphicon-chevron-right");
            $iconTag.removeClass($iconClass + " " + $divClass);
        }, $msgShowTime);
    }

    function showMessage($spanToShow, $whichInput) {
        $('input[id$="' + $whichInput + '"]').addClass('input-required');
        $('span[id$="' + $spanToShow + '"]').css({
            'color': 'red',
            'font-size': '12px',
            'display': 'block'
        });
    }

});