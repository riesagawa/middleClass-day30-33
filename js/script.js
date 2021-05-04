$(function(){
  //drawer
  jQuery('.dro-icon').on('click',function(e){
    e.preventDefault();
    // alert('click');
    jQuery('.dro-icon').toggleClass('is-active2');
    jQuery('.dro-content').toggleClass('is-active2');
    jQuery('.dro-background').toggleClass('is-active2');
    return false;
  });
  jQuery('.dro-background').on('click',function(e){
    e.preventDefault();
    // alert('click');
    jQuery('.dro-icon').toggleClass('is-active2');
    jQuery('.dro-content').toggleClass('is-active2');
    jQuery('.dro-background').toggleClass('is-active2');
    return false;
  });


  //smoothscroll
  // #から始まるURLがクリックされた時
  $('a[href^="#"]').click(function(){
    //移動速度を指定（ミリ秒）
    let speed = 400;
    // hrefで指定されたidを取得
    let id = $(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlにしてトップへ戻るようにする
    let target = $("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = $(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    $("html,body").animate(
      {
        //ヘッダーの高さを引いてスクロール
        scrollTop:position - $( '#js-header' ).outerHeight()
      },speed
    );
    return false;
  });

  //wowjs
  // new WOW().init();

  //Q&Aのアコーディオン
  $('.qa__item__head').on('click',function(){
    $(this).next().slideToggle();
    $(this).toggleClass('is-open');
    // $(this).children('.qa__box__icon').toggleClass('is-open');
    // alert('click');
  });

  // googleform の送信
  let $form = $('#js-form')
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $('#js-success').slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $('#js-error').slideDown()
        }
      } 
    });
    return false; 
  }); 

  // formの全項目の入力確認
  let $submit = $('#js-submit')
  $('#js-form input , #js-form textarea').on('change',function(){
    if(
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      //プライバシーポリシー同意のチェック
      $('#js-form input[name="entry.1771935731"]')
      .prop('checked') === true
    ){
      //全て入力された時
      $submit.prop('disabled',false)
      $submit.addClass('-active')
    }else{
      //全て入力されていない時
      $submit.prop('disabled',true)
      $submit.removeClass('-active')
    }
  });

  // results
  const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 40,
    width: 400,
    loop: true,
    loopedSlides: 6,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination', //クラス名をあてる
      clickable: true,
      type: 'bullets',
    },
    breakpoints: {
      768: {
				spaceBetween: 21,
				width: 274,
      }
    }
  });
  



  
})