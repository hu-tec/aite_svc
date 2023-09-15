$(document).ready(function () {
    $('.filter button.folder').on('click', function () {
        $(this).closest('header').toggleClass('folded')
            .siblings().slideToggle(200);
    });
});