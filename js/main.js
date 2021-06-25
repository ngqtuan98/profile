$(document).ready(function () {

    let $mountX = 0,
        $mountY = 0,
        $left = 0,
        $top = 0;

    $(document).mousemove(e => {
        $mountX = e.clientX;
        $mountY = e.clientY;
    });

    setInterval(() => {
        $left += ($mountX - $left) / 12;
        $top += ($mountY - $top) / 12;
        $("#cursor").css({ left: $left + "px", top: $top + "px" })
    }, 10);

});