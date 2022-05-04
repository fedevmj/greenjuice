$(document).ready(function () {
  // 모달창
  let modal_close = $(".modal-close");
  let modal = $(".modal");

  modal_close.click(function () {
    modal.hide();
  });

  // 펼침기능
  let link_list = $(".link-list");
  let link_bt = $(".link-bt");
  link_bt.click(function () {
    link_list.stop().slideToggle(300);
    link_bt.find("span").toggleClass("link-bt-span-active");
  });

  // 위로가기 기능
  let gotop = $(".gotop");
  gotop.click(function () {
    $("html, body").stop().animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  // 위로가기 사라짐 효과
  $(window).scroll(function () {
    // 스크롤 바가 이동한 거리 체크
    let sc = $(window).scrollTop();
    if (sc >= 50) {
      gotop.addClass("gotop-active");
    } else {
      gotop.removeClass("gotop-active");
    }
  });
});

window.onload = function () {
  // 비주얼 슬라이드
  let sw_visual = new Swiper(".sw-visual", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 2000,
      disableOninteraction: false,
    },
    pagination: {
      el: ".sw-visual-pg",
      type: "fraction",
    },
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
  });

  // 서비스 슬라이드
  let sw_service = new Swiper(".sw-service", {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 4,
    pagination: {
      el: ".sw-service-pg",
      clickable: true,
    },
  });

  // 오늘의 상품 좋아요 기능 관련_link
  let today_good = $(".today-wrap .good a");
  $.each(today_good, function (index) {
    let good_heart = $(this).find(".good-heart");
    good_heart.click(function (event) {
      event.stopPropagation();
      event.preventDefault();
      $(this).toggleClass("good-heart-active");
    });
  });

  // 베스트 제품 관련 코드
  // 2. 객체 생성자 함수 방식코드

  function BestGood(_rank, _like, _title, _price, _ml, _image, _link) {
    this.rank = _rank;
    this.like = _like;
    this.title = _title;
    this.price = _price;
    this.ml = _ml;
    this.image = _image;
    this.link = _link;
  }

  // 10 대 제품

  let good11 = new BestGood(
    1,
    false,
    "매일아침 튼튼플러스",
    "1500원",
    "100ml",
    "images/1-1.jpg",
    "#"
  );
  let good12 = new BestGood(
    2,
    false,
    "아이러브 루테인",
    "2,700원",
    "130ml",
    "images/1-2.jpg",
    "#"
  );
  let good13 = new BestGood(
    3,
    false,
    "당근즙",
    "2,900원",
    "130ml",
    "images/1-3.jpg",
    "#"
  );
  let good14 = new BestGood(
    4,
    false,
    "러브미 케일&셀러리",
    "1,900원",
    "130ml",
    "images/1-4.jpg",
    "#"
  );
  let good15 = new BestGood(
    5,
    false,
    "핸디밀 프로틴 PRO",
    "2,400원",
    "150ml",
    "images/1-5.jpg",
    "#"
  );
  // 20대 제품
  let good21 = new BestGood(
    1,
    false,
    "식물성유산균쌀요거트",
    "2,100원",
    "150ml",
    "images/2-1.jpg",
    "#"
  );
  let good22 = new BestGood(
    2,
    false,
    "러브미 케일&셀러리",
    "1,900원",
    "130ml",
    "images/2-2.jpg",
    "#"
  );
  let good23 = new BestGood(
    3,
    false,
    "식물성유산균 위&캡슐",
    "2,100원",
    "130ml",
    "images/2-3.jpg",
    "#"
  );
  let good24 = new BestGood(
    4,
    false,
    "노니&깔라만시",
    "2,300원",
    "130ml",
    "images/2-4.jpg",
    "#"
  );
  let good25 = new BestGood(
    5,
    false,
    "식물성유산균 오메가&치아씨드",
    "2,100원",
    "130ml",
    "images/2-5.jpg",
    "#"
  );
  // 30대 제품
  let good31 = new BestGood(
    1,
    false,
    "위러브플러스",
    "2,700원",
    "130ml",
    "images/3-1.jpg",
    "#"
  );
  let good32 = new BestGood(
    2,
    false,
    "러브미 케일&셀러리",
    "1,900원",
    "130ml",
    "images/3-2.jpg",
    "#"
  );
  let good33 = new BestGood(
    3,
    false,
    "노니&깔라만시",
    "2,300원",
    "130ml",
    "images/3-3.jpg",
    "#"
  );
  let good34 = new BestGood(
    4,
    false,
    "마시는 새싹",
    "2,200원",
    "130ml",
    "images/3-4.jpg",
    "#"
  );
  let good35 = new BestGood(
    5,
    false,
    "식물성유산균 위&캡슐",
    "2,100원",
    "130ml",
    "images/3-5.jpg",
    "#"
  );
  // 40대 제품
  let good41 = new BestGood(
    1,
    false,
    "위러브플러스",
    "2,700원",
    "130ml",
    "images/4-1.jpg",
    "#"
  );
  let good42 = new BestGood(
    2,
    false,
    "노니&깔라만시",
    "2,300원",
    "130ml",
    "images/4-2.jpg",
    "#"
  );
  let good43 = new BestGood(
    3,
    false,
    "유기명일엽녹즙",
    "2,600원",
    "130ml",
    "images/4-3.jpg",
    "#"
  );
  let good44 = new BestGood(4, false, "", "원", "", "images/no_img.png", "#");
  let good45 = new BestGood(
    5,
    false,
    "마시는 새싹",
    "2,200원",
    "130ml",
    "images/4-5.jpg",
    "#"
  );
  // 50대 제품
  let good51 = new BestGood(
    1,
    false,
    "위러브플러스",
    "2,700원",
    "130ml",
    "images/5-1.jpg",
    "#"
  );
  let good52 = new BestGood(
    2,
    false,
    "노니&깔라만시",
    "2,300원",
    "130ml",
    "images/5-2.jpg",
    "#"
  );
  let good53 = new BestGood(
    3,
    false,
    "돌미나리와 민들레",
    "2,600원",
    "130ml",
    "images/5-3.jpg",
    "#"
  );
  let good54 = new BestGood(
    4,
    false,
    "식물성유산균 오메가&치아씨드",
    "2,100원",
    "130ml",
    "images/5-4.jpg",
    "#"
  );
  let good55 = new BestGood(
    5,
    false,
    "유기명일엽녹즙",
    "2,600원",
    "130ml",
    "images/5-5.jpg",
    "#"
  );

  // 1. 객체 리터럴 방식코드
  let good_10 = [good11, good12, good13, good14, good15];
  let good_20 = [good21, good22, good23, good24, good25];
  let good_30 = [good31, good32, good33, good34, good35];
  let good_40 = [good41, good42, good43, good44, good45];
  let good_50 = [good51, good52, good53, good54, good55];

  // 3. 코드 구현
  // 3.1. 제품 카테고리 메뉴를 저장
  let best_cate = $(".best-cate li a");
  // 3.2. 각 순위 제품 저장
  let best_good = $(".best .good");

  // 배경 박스
  let best_cate_bg = $(".best-cate-bg");
  let best_cate_bg_pos = [];

  for (let i = 0; i < best_cate.length; i++) {
    // 55는 오렌지색 박스 높이 & i는 index의 역할 & 70은 title(베스트제품)의 높이.
    // title에는 오렌지색 박스가 적용되지 않으므로 무조건 +70.
    let temp = 55 * i + 70;
    best_cate_bg_pos[i] = temp;
  }

  // 활성화된 번호를 저장한다.
  let best_cate_index;

  // 4. 카테고리를 클릭해서 내용을 변경
  $.each(best_cate, function (index, item) {
    $(this).click(function (event) {
      event.preventDefault();

      // 여기서 클릭은 다른 내용으로의 갱신을 의미하므로 같은 번호를 클릭한다면 리턴한다.
      if (best_cate_index == index) {
        return;
      }

      // 실제 내용을 배치합니다.
      showBest(index);
    });
  });

  // 실제 내용을 보여주는 함수
  function showBest(_index) {
    // 현재 보고 있는 번호를 기억한다.
    best_cate_index = _index;

    let best_data;

    // 메뉴 배경 위치 잡기 : 오렌지색 박스
    best_cate_bg.css("top", best_cate_bg_pos[_index]);
    // 메뉴 색상 바꾸기 : active된 연령대 글자색 #fff로 변경
    best_cate.removeClass("best-cate-active");
    best_cate.eq(_index).addClass("best-cate-active");
    // 화살표 아이콘 바꾸기
    if (_index == 0) {
      best_cate
        .eq(0)
        .find("i")
        .stop()
        .animate(
          {
            opacity: 0,
          },
          150,
          function () {
            best_cate.eq(0).find("i").addClass("best-10-active");
          }
        )
        .animate(
          {
            opacity: 1,
          },
          150
        );

      best_cate.eq(4).find("i").removeClass("best-50-active");
    } else if (_index == 4) {
      best_cate
        .eq(4)
        .find("i")
        .stop()
        .animate(
          {
            opacity: 0,
          },
          150,
          function () {
            best_cate.eq(4).find("i").addClass("best-50-active");
          }
        )
        .animate(
          {
            opacity: 1,
          },
          150
        );
      best_cate.eq(0).find("i").removeClass("best-10-active");
    } else {
      best_cate.eq(0).find("i").removeClass("best-10-active");
      best_cate.eq(4).find("i").removeClass("best-50-active");
    }

    // animate({stylesheet속성}, 애니메이션지속시간, 애니메이션 완료 후 실행 함수)

    if (_index == 0) {
      best_data = good_10;
    } else if (_index == 1) {
      best_data = good_20;
    } else if (_index == 2) {
      best_data = good_30;
    } else if (_index == 3) {
      best_data = good_40;
    } else if (_index == 4) {
      best_data = good_50;
    }

    $.each(best_good, function (index, item) {
      // let good = best_good.eq(index);
      let good = $(this);
      good.find("a").attr("href", best_data[index].link);
      good.find(".good-img").attr("src", best_data[index].image);
      good.find(".good-name").text(best_data[index].title);
      good.find(".good-price > b").text(best_data[index].price);
      good.find(".good-price > em").text("(" + best_data[index].ml + ")");

      if (best_data[index].like == true) {
        good.find(".good-heart").addClass("good-heart-active");
      } else {
        good.find(".good-heart").removeClass("good-heart-active");
      }

      // 연령대를 클릭할떄 마다 Click 자꾸 등록이 된다.
      // 그래서 한번 클릭에도 여러번 클릭 된 결과가
      // 화면에 적용이 된다.

      good
        .find(".good-heart")
        .off("click")
        .on("click", function (event) {
          event.stopPropagation();
          event.preventDefault();

          if (best_data[index].like == false) {
            // 데이터를 읽었을 때 false
            $(this).addClass("good-heart-active");
            best_data[index].like = true;
          } else {
            // 데이터를 읽었을 때 true
            $(this).removeClass("good-heart-active");
            best_data[index].like = false;
          }
        });
    });
  }

  // 최초 무조건 기능을 위해서 실행해 준다.
  showBest(1);
};
