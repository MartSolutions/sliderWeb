// $(document).ready(function() {
//     let $content = $('#all-content');
//     let $slider = $('');
//     let $bodyBG = $('#all-products');
    
//     // Configura el scroll inicial de #slider al máximo para empezar desde abajo
//     $slider.scrollTop($slider[0].scrollHeight);

//     // Evento de scroll en #content
//     $content.on('scroll', function() {
//         let contentScrollTop = $content.scrollTop();
//         let contentMaxScroll = $content[0].scrollHeight - $content.height();
//         let sliderMaxScroll = $slider[0].scrollHeight - $slider.height();
//         let bodyBGMaxScroll = $bodyBG[0].scrollWidth - $bodyBG.width();

//         // Calcula la posición inversa proporcional al scroll en #content para #slider
//         let inverseScrollSlider = sliderMaxScroll - (contentScrollTop * sliderMaxScroll / contentMaxScroll);
        
//         // Calcula la posición proporcional en dirección horizontal para .bodyBG
//         let proportionalScrollBodyBG = (contentScrollTop * bodyBGMaxScroll / contentMaxScroll);

//         // Aplica el scroll a #slider y .bodyBG
//         $slider.scrollTop(inverseScrollSlider);
//         $bodyBG.scrollLeft(proportionalScrollBodyBG);
//     });
// });

// $(document).ready(function() {
//     $('#all-content').on('scroll', function() {
//       // Calculamos el porcentaje de desplazamiento en el eje vertical
//       let scrollPercent = $(this).scrollTop() / (this.scrollHeight - $(this).height());
//       console.log(scrollPercent)

//       // Aplicamos ese porcentaje al eje horizontal en #all-products
//       let horizontalScrollPosition = scrollPercent * ($('#all-products')[0].scrollWidth - $('#all-products').width());
//       $('#all-products').scrollLeft(horizontalScrollPosition);
//       $('.cookie').css('transform','rotate('+100*scrollPercent+'deg)');
//     });
// });

// $(document).ready(function() {
//     // Establecemos el scroll horizontal al final de #all-products al cargar la página
//     $('#all-products').scrollLeft($('#all-products')[0].scrollWidth);
//     var scrollY = $('#all-products').width() / 3
//     var maxScrollV = $('#all-content').height()
//     console.log(maxScrollV)
//     $('#all-content').on('scroll', function() {
//         var scrollPosition = $(this).scrollTop()
//         var percent = ($(this).scrollTop() * 100) / maxScrollV;
//         console.log(percent + '%')
//         console.log(scrollPosition)
//         $('#all-products').scrollLeft((percent / 100) * scrollY+'px')
//     });
//   });

// $(document).ready(function() {
//     $('#all-content').on('scroll', function() {
//       // Calcula el porcentaje de scroll vertical
//       let scrollPercent = $(this).scrollTop() / (this.scrollHeight - $(this).height());
  
//       // Calcula el ángulo de rotación en grados (ajustable)
//       let rotationAngle = scrollPercent * -360; // Cambia "360" para ajustar la cantidad de rotación
//         $("#all-products").scrollLeft(-100 * scrollPercent+'px')
//       // Aplica la rotación en el eje Z a cada elemento con la clase .cookie
//       $('.cookie').css('transform', `rotateZ(${rotationAngle}deg)`);
//     });
//   });

// $(document).ready(function() {
//     $('#all-content').on('scroll', function() {
//       // Calculamos el porcentaje de scroll vertical
//       let scrollPercent = $(this).scrollTop() / (this.scrollHeight - $(this).height());
  
//       // Aplicamos el porcentaje al desplazamiento horizontal de #all-products
//       let maxScrollLeft = $('#all-products')[0].scrollWidth - $('#all-products').width();
//       let horizontalScrollPosition = scrollPercent * maxScrollLeft;
//       let rotationAngle = scrollPercent * -360;
//       $('.cookie').css('transform', `rotateZ(${rotationAngle}deg)`);

//       // Establecemos la posición horizontal sin animación para que sea simultáneo
//       $('#all-products').scrollLeft(horizontalScrollPosition);
//     });
//   });
  
$(document).ready(function() {
    $('#all-content').on('scroll', function() {
      // Obtenemos el desplazamiento vertical actualpasas
      let scrollTop = $(this).scrollTop();
      var height = $(this).height();
      var percent = (scrollTop * 100) / height;
      // if(percent > 100){
      //   percent -= 100
      // }
      console.log(percent)
      // Calculamos el porcentaje de desplazamiento vertical en función de la altura del contenedor
      let maxScrollTop = this.scrollHeight - $(this).height();
      let scrollPercent = scrollTop / maxScrollTop;
  
      // Aplicamos el porcentaje al desplazamiento horizontal en tiempo real
      let maxScrollLeft = $('#all-products')[0].scrollWidth - $('#all-products').width();
      let horizontalScrollPosition = scrollPercent * maxScrollLeft;
      $('.glass').css({
        'transform':'scale('+ 150 - percent +') translateY('+50 - (percent / 2)+'%)',
      });
      
      // Aplicamos la rotación en el eje Z basada en el porcentaje de scroll
      let rotationAngle = scrollPercent * -360;
      $('.cookie').css('transform', `rotateZ(${rotationAngle}deg)`);
      let opacity = 1 - (percent * 10 / 100);
      console.log('opacity: '+opacity)
     $("#enhance .content-prop").css('opacity', opacity )
      // Sincronizamos el scroll horizontal en tiempo real
      $('#all-products').scrollLeft(horizontalScrollPosition);
      let trx = 1
      let scl = 0.9 + (0.001  * ( percent));
      console.log('scale: '+scl)
      $("#first .packs").css('opacity',opacity)
      $("#first .packs").css('transform','translateX(-'+percent * 10 +'%)')

      // $("#first .glass").css('transform','translate(-'+trx+'%, '+trx+'%) scale('+scl+')')
      $("#first .glass").css('transform','translateY(-'+percent+'%) translateX('+percent+'%)')

      $("#two .glass").css('transform','translateX('+ (-100 + percent)+'%)')

    });
  });
  
  