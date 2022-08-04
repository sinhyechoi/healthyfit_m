$('.topLeft').click(function(){
    $('.gnb_open').animate({left:0},300,"swing");
    $('.dark').css({'display':'block'}); 
});

$('.dark').click(function(){
    $('.dark').css({'display':'none'});
    $('.gnb_open').animate({left:-304},300,"swing");
    $('.loginPop').hide(); 
});

$('.btn_teacher').click(function(){
    $(this).find('span').toggleClass('on') 
    $('.teacherWrap').slideToggle(300);
}); 

$('.btn_class').click(function(){
    $(this).find('span').toggleClass('on') 
    $('.classWrap').slideToggle(300);
}); 

$('.log').click(function(){
    $('.gnb_open').animate({left:-304},300,"swing");
    $('.loginPop').show(); 
})