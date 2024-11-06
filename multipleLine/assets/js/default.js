// $(document).ready(function(){
//     let totalHeight = $('#content').height();
//     console.log('Altura total del all-content:', totalHeight);
//     var scrollTop = 0
//     $('#content').on('scroll', function() {
//         scrollTop = $('#content').scrollTop(); // Obtiene la posición de desplazamiento
//         console.log("Scroll document: "+ scrollTop + 'px' )
//         $('#slider').scrollTop(scrollTop);
//         //Cuando el scroll aun no ha llegado al segundo contenedor
//         if(scrollTop >= 0 && scrollTop <= totalHeight){
//         console.log("Scroll document: "+ scrollTop + 'px' )
//         //
//         }
//     });
// });

// $(document).ready(function() {
//     let totalHeight = $('#content').height();
//     let $content = $('#content');
//     let $slider = $('#slider');

//     // Evento de scroll en #content
//     $content.on('scroll', function() {
//         let scrollTop = $content.scrollTop();

//         // Calcula el scroll inverso para #slider
//         let inverseScroll = (totalHeight) - scrollTop;

//         // Mueve el scroll de #slider de forma suave
//         $slider.stop().animate({ scrollTop: inverseScroll }, 300); // Duración en milisegundos
//     });
// });

// $(document).ready(function() {
//     let totalHeight = $('#content').height();
//     let $content = $('#content');
//     let $slider = $('#slider');
    
//     // Configura el scroll inicial de #slider al máximo para empezar desde abajo
//     $slider.scrollTop($slider[0].scrollHeight);

//     // Evento de scroll en #content
//     $content.on('scroll', function() {
//         let scrollTop = $content.scrollTop();

//         // Calcula el scroll inverso para #slider
//         let inverseScroll = totalHeight - scrollTop;

//         // Mueve el scroll de #slider de forma suave
//         $slider.stop().animate({ scrollTop: inverseScroll }, 300); // Duración en milisegundos
//     });
// });


// $(document).ready(function() {
//     let $content = $('#content');
//     let $slider = $('#slider');
    
//     // Configura el scroll inicial de #slider al máximo para empezar desde abajo
//     $slider.scrollTop($slider[0].scrollHeight);

//     // Evento de scroll en #content
//     $content.on('scroll', function() {
//         let contentScrollTop = $content.scrollTop();
//         let contentMaxScroll = $content[0].scrollHeight - $content.height();
//         let sliderMaxScroll = $slider[0].scrollHeight - $slider.height();

//         // Calcula la posición inversa proporcional al scroll en #content
//         let inverseScroll = sliderMaxScroll - (contentScrollTop * sliderMaxScroll / contentMaxScroll);

//         // Mueve el scroll de #slider de forma suave y proporcional
//         $slider.stop().animate({ scrollTop: inverseScroll }, 300); // Duración en milisegundos
//     });
// });

// $(document).ready(function() {
//     let $content = $('#content');
//     let $slider = $('#slider');
    
//     // Configura el scroll inicial de #slider al máximo para empezar desde abajo
//     $slider.scrollTop($slider[0].scrollHeight);

//     // Evento de scroll en #content
//     $content.on('scroll', function() {
//         let contentScrollTop = $content.scrollTop();
//         let contentMaxScroll = $content[0].scrollHeight - $content.height();
//         let sliderMaxScroll = $slider[0].scrollHeight - $slider.height();

//         // Calcula la posición inversa proporcional al scroll en #content
//         let inverseScroll = sliderMaxScroll - (contentScrollTop * sliderMaxScroll / contentMaxScroll);

//         // Mueve el scroll de #slider directamente para un efecto continuo
//         $slider.scrollTop(inverseScroll);
//     });
// });


$(document).ready(function() {
    let $content = $('#content');
    let $slider = $('#slider');
    let $bodyBG = $('.bodyBG');
    
    // Configura el scroll inicial de #slider al máximo para empezar desde abajo
    $slider.scrollTop($slider[0].scrollHeight);

    // Evento de scroll en #content
    $content.on('scroll', function() {
        let contentScrollTop = $content.scrollTop();
        let contentMaxScroll = $content[0].scrollHeight - $content.height();
        let sliderMaxScroll = $slider[0].scrollHeight - $slider.height();
        let bodyBGMaxScroll = $bodyBG[0].scrollWidth - $bodyBG.width();

        // Calcula la posición inversa proporcional al scroll en #content para #slider
        let inverseScrollSlider = sliderMaxScroll - (contentScrollTop * sliderMaxScroll / contentMaxScroll);
        
        // Calcula la posición proporcional en dirección horizontal para .bodyBG
        let proportionalScrollBodyBG = (contentScrollTop * bodyBGMaxScroll / contentMaxScroll);

        // Aplica el scroll a #slider y .bodyBG
        $slider.scrollTop(inverseScrollSlider);
        $bodyBG.scrollLeft(proportionalScrollBodyBG);
    });
});
