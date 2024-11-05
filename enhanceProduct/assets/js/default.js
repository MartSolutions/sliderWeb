$(document).ready(function(){
    let totalHeight = $('#all-content').height();
    console.log('Altura total del all-content:', totalHeight);

    let totalBody = $('body').height();
    console.log('Altura total del body:', totalBody);

    let totalWindow = $(window).height();
    console.log('Altura total del viewport:', totalWindow);

    
    var scrollTop = 0;

    $('#all-content').on('scroll', function() {
        scrollTop = $('#all-content').scrollTop(); // Obtiene la posición de desplazamiento
        var percent = (scrollTop * 100) / totalWindow ;
        
        if(percent >= 0 && percent <= 100){
            var availableW = ($("body").width() - $(".product").width()) - 15
            $('#first .product').css('right', ((availableW * ( percent/100)))+'px')
            $('#first .product').css('top', 'calc(15vh + '+ (percent / 5)+'%)')
            $('#first .description').css('margin-left', percent+'%')
            $('#first .btn').css('margin-bottom', '-'+percent+'%')
            $('#two .description').css('margin-left', 100 - percent+'%')

        }

        // El segundo contenedor se encuentra en el viewport
        if(percent > 100 && percent <= 200){
            console.log(percent)
            $('#first .product').css('right', (-(availableW * ( percent/100)))+'px')
            
           
        }

    });


});
