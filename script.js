(function($) {
    $(document).ready(function() {
        var $chatbox = $('.chatbox'),
            $chatboxTitle = $('.chatbox__title'),
            $chatboxTitleClose = $('.chatbox__title__close'),
            $chatboxCredentials = $('.chatbox__credentials');
        $chatboxTitle.on('click', function() {
            enterButtonEvent();
            $chatbox.toggleClass('chatbox--tray');
        });
        $chatboxTitleClose.on('click', function(e) {
            e.stopPropagation();
            $chatbox.addClass('chatbox--closed');
        });
        $chatbox.on('transitionend', function() {
            if ($chatbox.hasClass('chatbox--closed')) $chatbox.remove();
        });
        
    });

    
    
})(jQuery);

function enterButtonEvent() {
    $("#btn-input").keypress(function(e) {
        if(e.which == 13) {
            sendMsg();
        }
    });
}
function sendMsg() {
   var notes=jQuery("#btn-input").val();
   
   if(notes.length>0){
   var content='<div class="chatbox__body__message chatbox__body__message--left"><div class="chatbox_timing"><ul><li><a href="#"><i class="fa fa-calendar"></i>'+getDate()+'</a></li><li><a href="#"><i class="fa fa-clock-o"></i>' +getTime()+'</a></li></ul></div><div class="clearfix"></div><div class="ul_section_full"><ul class="ul_msg"><li><strong>Your Note</strong></li><li>'+notes+'</li></ul><div class="clearfix"></div><ul class="ul_msg2"><li><a href="#"><i class="fa fa-pencil"></i> </a></li><li><a href="#"><i class="fa fa-trash chat-trash"></i></a></li></ul></div></div>';
    $(".chatbox__body").append(content);
    jQuery("#btn-input").val('');
   }
}

function getDate() {
    var currentdate = new Date(); 
    var date =" "+currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear()   
   return date;
}

function getTime() {
    var currentTime = new Date(); 
    var time=currentTime.getHours() + ":"  
             + currentTime.getMinutes() 
    return time;
}