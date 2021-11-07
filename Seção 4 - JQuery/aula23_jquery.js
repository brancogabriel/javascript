$(function(){
    $('#l1').click(function(){
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
        $('#i1').show();
    });
    $('#l2').click(function(){
        $('#i1').hide();
        $('#i3').hide();
        $('#i4').hide();
        $('#i2').show();
    });
    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i4').hide();
        $('#i3').show();
    });
    $('#l4').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
    });
});

$(document).ready(function(){
    $('#esconder').click(function(){
        $('h1').hide();
    });
});

$(function(){
    $('#azul').click(function(){
        $('p') //encadeamento em bloco
            .css("background-color","blue") 
            .fadeOut()
            .delay(1000)
            .fadeIn();
    });
    $('#vermelho').click(function(){
        $('p').css("background-color","red");
        $('p').fadeOut();
        $('p').fadeIn();
        $('#mensagem')
            .text("Cor alterada com sucesso")
            .css({color: 'red', border: '1px solid red', backgroundColor: '#F08080'}) //declaração multipla de CSS
            .delay(3000)
            .fadeOut(1000)
            .addClass('green');
        $('button').removeClass('red')
    });
});