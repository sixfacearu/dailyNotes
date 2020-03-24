var cardId=0;
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
            if($('.chatbox').hasClass("chatbox--tray")==false){
                $chatbox.toggleClass('chatbox--tray');
            }
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
   var shortNotes=notes;
   var content=null;
   if(notes.length>0){
   shortNotes =(notes.length>20)? notes.substring(0, 20) + " ...":notes;
   content='<div class="chatbox__body__message chatbox__body__message--left" id="card_body'+cardId+'"><div class="chatbox_timing"><ul><li><a href="#"><i class="fa fa-calendar"></i>'+getDate()+'</a></li><li><a href="#"><i class="fa fa-clock-o"></i>' +getTime()+'</a></li></ul></div><div class="clearfix"></div><div class="ul_section_full"><ul class="ul_msg"><li><strong>Your Note</strong></li><li>'+shortNotes+'</li></ul><div class="clearfix"></div><ul class="ul_msg2"><li><a href="#"><i class="fa fa-pencil"></i> </a></li><li><a href="#" id='+cardId+'><i class="fa fa-trash chat-trash"></i></a></li></ul></div></div>';
    $(".chatbox__body").append(content);
    jQuery("#btn-input").val('');
    addEventListener(cardId);
    cardId=cardId+1;
   }
}

function addEventListener(id) {
    if(document.getElementById(id)){
        var parent="card_body"+id;
        jQuery("#"+parent+" > div.ul_section_full > ul.ul_msg2 > li:nth-child(2) > #"+id).click(function(){
            jQuery("#"+parent+" > div.ul_section_full > ul.ul_msg2 > li:nth-child(2) > #"+id)[0].offsetParent.remove();
        });
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