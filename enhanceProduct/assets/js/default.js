$(document).ready(function(){
    let totalHeight = $('#all-content').height();
    console.log('Altura total del all-content:', totalHeight);

    let totalBody = $('body').height();
    let bodyW = $('body').width();
    console.log('Altura total del body:', totalBody);

    let totalWindow = $(window).height();
    console.log('Altura total del viewport:', totalWindow);

    
    var scrollTop = 0;

    $('#all-content').on('scroll', function() {
        scrollTop = $('#all-content').scrollTop(); // Obtiene la posición de desplazamiento
        var percent = (scrollTop * 100) / totalHeight ;
        console.error("Scroll document: "+ scrollTop + 'px' )
        
        
        //Cuando el scroll aun no ha llegado al segundo contenedor
        if(scrollTop >= 0 && scrollTop <= totalHeight){
            var percent = (scrollTop * 100) / totalHeight;
            var availableW = ($("body").width() - $(".product").width()) - 15
            $('#first .product').css('right', ((availableW * ( percent/100)))+'px')
            $('#first .product').css('top', 'calc(15vh + '+ (percent / 5)+'%)')
            $('#first .description').css('margin-left', percent+'%')
            $('#first .btn').css('margin-bottom', '-'+percent+'%')
            $('#two .description').css('margin-left', 100 - percent+'%')
            console.log("Primer contenedor:"+ percent)
        }

        // El segundo contenedor se encuentra en el viewport
        if(scrollTop > (totalHeight) && scrollTop <= (2*totalHeight)){
            var percent = ((scrollTop * 100)  / totalHeight) -100 ;
            $('#two .description').css('margin-left', '-'+percent+'%')
            $('#two .btn').css('margin-bottom', '-'+percent+'%')
            $('#three .description').css('margin-left', -100 + percent+'%')
        //    console.log("Segundo contenedor:"+ percent)           
            var r_str = $('.product').css('right')
            var t_str = $('.product').css('top')
            var r_num = parseFloat(r_str.replace('px', ''));
            var t_num = parseFloat(t_str.replace('px', ''));
            var r_per = (r_num * 100) / bodyW;
            var t_per = (r_num * 100) / bodyW;

            console.log("AvailableW:"+ availableW)    
            console.log("% top del producto:"+ t_per)    
            console.log("Move to right:"+ (r_per + percent) /100)    
            
            $('#first .product').css('right', r_per * (1 - percent / 100)+ '%')
            var rotate = (percent/3) - (1/3)
            var scale = 1+((percent/100)/2.5)
            $('#first .product').css('transform', 'scale('+scale+') rotateZ(-'+rotate+'deg)')
            console.log('rotate: '+ rotate)
        }

        // El tercer contenedor se encuentra en el viewport
        if(scrollTop > (2*totalHeight) && scrollTop <= (3*totalHeight)){
            

        }




    });


});
