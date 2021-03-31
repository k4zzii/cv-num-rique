jQuery(function () {
    mobilescreen()

    function mobilescreen() {
        let ww = screen.width;
        if (ww < 1920) {
            let script = $('<script></script>')
            script.attr('src', 'assets/js/mobile.js')
            $('body').append(script);
        } else {
            let script = $('<script></script>')
            script.attr('src', 'assets/js/script.js')
            $('body').append(script);
        }
        console.log(ww)
    }
})