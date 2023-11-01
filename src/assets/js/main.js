(function ($) {
  "use strict";
// JS Index
  //----------------------------------------
  // 1. sticky menu js
  // 2.  preloader

  //-------------------------------------------------


  // 1. preloader
  //---------------------------------------------------------------------------
  // $(window).load(function(){
  //     $('#preloader').fadeOut('slow',function(){$(this).remove();});
  // });


    // Header Sticky
    $(window).on('scroll',function() {
      if ($(this).scrollTop() >170){
          $('.header-sticky').addClass("is-sticky");
      }
      else{
          $('.header-sticky').removeClass("is-sticky");
      }
  });
     // Hover dropdown menu JS
  //    $( '.dropdown-menu a.dropdown-toggle' ).on( 'click', function ( e ) {
  //     var $el = $( this );
  //     var $parent = $( this ).offsetParent( ".dropdown-menu" );
  //     if ( !$( this ).next().hasClass( 'show' ) ) {
  //         $( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
  //     }
  //     var $subMenu = $( this ).next( ".dropdown-menu" );
  //     $subMenu.toggleClass( 'show' );

  //     $( this ).parent( "li" ).toggleClass( 'show' );

  //     $( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
  //         $( '.dropdown-menu .show' ).removeClass( "show" );
  //     } );

  //     if ( !$parent.parent().hasClass( 'navbar-nav' ) ) {
  //         $el.next().css( { "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 } );
  //     }
  //     return false;
  // });


  // 3. Scroll To down Js
  //---------------------------------------------------------------------------
  // function smoothSctollTop() {
  //     $('.smooth-scroll a').on('click', function (event) {
  //         var target = $(this.getAttribute('href'));
  //             if (target.length) {
  //             event.preventDefault();
  //             $('html, body').stop().animate({
  //                 scrollTop: target.offset().top - 0
  //             }, 1500);

  //         }
  //     });
  // }

  // smoothSctollTop();

















})(jQuery);

