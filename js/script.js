$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});


  // スライドショーの画像リスト
  var slideImages = [
    "./img/back/main.png",
    "./img/back/private.png",
    "./img/back/relax.png",
    // 他の画像ファイルのパスを追加する
  ];
    // スライドショーの現在のインデックス
    var currentIndex = 0;
  
    // スライドショーの要素を取得
    var slideshow = document.querySelector(".main-visual");
  
    // 初回のスライド表示を開始する
    changeSlide();
  
    // 画像を切り替える関数
    function changeSlide() {
      // インデックスが画像の数を超えた場合は最初の画像に戻る
      if (currentIndex >= slideImages.length) {
        currentIndex = 0;
      }
  
  
      // 0.5秒後にフェードアウトのアニメーションを終了し、背景画像を切り替える
      setTimeout(function() {
  
        // 背景画像を切り替える
        slideshow.style.backgroundImage = "url(" + slideImages[currentIndex] + ")";
  
        // 0.5秒後にフェードインのアニメーションを終了し、次のスライドを表示する
        setTimeout(function() {
  
          // インデックスをインクリメント
          currentIndex++;
  
          // 次のスライドを一定の間隔で表示する（5000ミリ秒＝5秒）
          setTimeout(changeSlide, 5000);
        }, 500);
      }, 500);
    }
  // 初回のスライド表示を開始する
  changeSlide();
