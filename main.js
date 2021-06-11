//ham menu
$('.ham').click(function(){
    $('.ham').toggleClass('rotate')
    $('#items').toggleClass('display')
});
//trimming
$('#trimButton').click(function(){
    $('#trim4before').fadeOut(850,function(){
        $('#trim4').css("height","300px")
    })
    $('#trim3before').fadeOut(750,function(){
        $('#trim3').css("height","300px")
    })
    $('#trim2before').fadeOut(650,function(){
        $('#trim2').css("height","300px")
    })
    $('#trim1before').fadeOut(500,function(){
        $('#trim1').css("height","300px")
    })
})
$('#resetButton').click(function(){
    $('#trimZone').load(location.href + " #trimZone");
})