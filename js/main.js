$(document).ready(function () {

    // let $mountX = 0,
    //     $mountY = 0,
    //     $left = 0,
    //     $top = 0;

    // $(document).mousemove(e => {
    //     $mountX = e.clientX;
    //     $mountY = e.clientY;
    // });

    // setInterval(() => {
    //     $left += ($mountX - $left) / 12;
    //     $top += ($mountY - $top) / 12;
    //     $("#cursor").css({ left: $left + "px", top: $top + "px" })
    // }, 10);

    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

    var posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            posX += (mouseX - posX) / 5;
            posY += (mouseY - posY) / 5;

            TweenMax.set(follower, {
                css: {
                    left: posX - 25,
                    top: posY - 25
                }
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    $(document).on("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    $(".portfolio-item img").on("mouseenter", function () {
        cursor.addClass("active");
        follower.addClass("active");
    });

    $(".portfolio-item img").on("mouseleave", function () {
        cursor.removeClass("active");
        follower.removeClass("active");
    });

});