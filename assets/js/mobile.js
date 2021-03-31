$(window).scroll(function() {
    let ypos = window.scrollY
    $('.sidebar').css({
        'display': 'none'
    })
    if ( ypos > 150 ){
        $('.portrait').css({
            'filter': 'blur(0px)', 'transition' : '3s' , 'border-radius': '50%'
        });
    }
    if ( ypos < 90){
        $('.portrait').css({
            'filter': 'blur(5px)' , 'border-radius': '0%'
        });
    }
    if ( ypos > 900){
        $('.portrait').css({
            'filter': 'blur(5px)', 'transition' : '3s' , 'border-radius': '0%'
        });
    }
    if ( ypos > 1530 ){
        $('.compdiv2').css({
            'width': '247px', 'transition' : '3s'
        });
    }
    if ( ypos > 2380 ){
        $('.compdiv2').css({
            'width': '0px',
        });
    }
    if ( ypos < 1530 ){
        $('.compdiv2').css({
            'width': '0px',
        });
    }
    if ( ypos > 1630 ){
        $('.compdiv4').css({
            'width': '282px', 'transition' : '3s'
        });
    }
    if ( ypos > 2480 ){
        $('.compdiv4').css({
            'width': '0px',
        });
    }
    if ( ypos < 1630 ){
        $('.compdiv4').css({
            'width': '0px',
        });
    }
    if ( ypos > 1730 ){
        $('.compdiv6').css({
            'width': '229px', 'transition' : '3s'
        });
    }
    if ( ypos > 2580 ){
        $('.compdiv6').css({
            'width': '0px',
        });
    }
    if ( ypos < 1730 ){
        $('.compdiv6').css({
            'width': '0px',
        });
    }
    if ( ypos > 1830 ){
        $('.compdiv8').css({
            'width': '268px', 'transition' : '3s'
        });
    }
    if ( ypos > 2680 ){
        $('.compdiv8').css({
            'width': '0px',
        });
    }
    if ( ypos < 1830 ){
        $('.compdiv8').css({
            'width': '0px',
        });
    }
    if ( ypos > 1930 ){
        $('.compdiv10').css({
            'width': '254px', 'transition' : '3s'
        });
    }
    if ( ypos > 2780 ){
        $('.compdiv10').css({
            'width': '0px',
        });
    }
    if ( ypos < 1930 ){
        $('.compdiv10').css({
            'width': '0px',
        });
    }
    if ( ypos > 2030 ){
        $('.compdiv12').css({
            'width': '243px', 'transition' : '3s'
        });
    }
    if ( ypos > 2880 ){
        $('.compdiv12').css({
            'width': '0px',
        });
    }
    if ( ypos < 2030 ){
        $('.compdiv12').css({
            'width': '0px',
        });
    }
    if ( ypos > 2130 ){
        $('.compdiv14').css({
            'width': '229px', 'transition' : '3s'
        });
    }
    if ( ypos > 2980 ){
        $('.compdiv14').css({
            'width': '0px',
        });
    }
    if ( ypos < 2130 ){
        $('.compdiv14').css({
            'width': '0px',
        });
    }
    if ( ypos > 2230 ){
        $('.compdiv16').css({
            'width': '194px', 'transition' : '3s'
        });
    }
    if ( ypos > 3080 ){
        $('.compdiv16').css({
            'width': '0px',
        });
    }
    if ( ypos < 2230 ){
        $('.compdiv16').css({
            'width': '0px',
        });
    }

    if ( ypos > 2800 ){
        let pos = ypos -2800
        $('.bar2').css({
            'height': + pos - 12 + 'px', 'background-color': 'white'
        });
    }
    if ( ypos > 5016){
        $('.bar2').css({
            'height': '2200px',
        });
    }
    if ( ypos < 3200){
        $('.bar2').css({
            'wheight': '0px',
        });
    }
    if ( ypos > 3917){
        $('.bar2').css({
            'background-color': 'red',
        });
    }
    if ( ypos > 2913 ){
        $('.lycee').css({
            'padding-left': '0px', 'transition': '1s', 'opacity': '100%'
        });
    }
    if ( ypos > 2913 ){
        $('.lieu1').css({
            'padding-left': '0px', 'transition': '1.2s', 'opacity': '100%'
        });
    }
    if ( ypos > 2913 ){
        $('.pschool1').css({
            'padding-left': '0px', 'transition': '1.4s', 'opacity': '100%'
        });
    }
    if ( ypos > 2913 ){
        $('.p2school1').css({
            'padding-left': '0px', 'transition': '1.6s', 'opacity': '100%'
        });
    }
    if ( ypos < 2615 ){
        $('.lycee').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 2615 ){
        $('.lieu1').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 2615 ){
        $('.pschool1').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 2615 ){
        $('.p2school1').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 3635 ){
        $('.lycee').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 3635 ){
        $('.lieu1').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 3635 ){
        $('.pschool1').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 3635 ){
        $('.p2school1').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 3215 ){
        $('.manu1').css({
            'padding-left': '0px', 'transition': '1s', 'opacity': '100%'
        });
    }
    if ( ypos > 3215 ){
        $('.lieu2').css({
            'padding-left': '0px', 'transition': '1.2s', 'opacity': '100%'
        });
    }
    if ( ypos > 3215 ){
        $('.pschool2').css({
            'padding-left': '0px', 'transition': '1.4s', 'opacity': '100%'
        });
    }
    if ( ypos < 2808 ){
        $('.manu1').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 2808 ){
        $('.lieu2').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 2808 ){
        $('.pschool2').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 3930 ){
        $('.manu1').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 3930 ){
        $('.lieu2').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 3930 ){
        $('.pschool2').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 3513 ){
        $('.manu2').css({
            'padding-left': '0px', 'transition': '1s', 'opacity': '100%'
        });
    }
    if ( ypos > 3513 ){
        $('.lieu3').css({
            'padding-left': '0px', 'transition': '1.2s', 'opacity': '100%'
        });
    }
    if ( ypos > 3513 ){
        $('.pschool3').css({
            'padding-left': '0px', 'transition': '1.4s', 'opacity': '100%'
        });
    }
    if ( ypos < 3105 ){
        $('.manu2').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 3105 ){
        $('.lieu3').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 3105 ){
        $('.pschool3').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4177 ){
        $('.manu2').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4177 ){
        $('.lieu3').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4177 ){
        $('.pschool3').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 3917 ){
        $('.exp1').css({
            'padding-left': '0px', 'transition': '1s', 'opacity': '100%'
        });
    }
    if ( ypos > 3917 ){
        $('.des1exp1').css({
            'padding-left': '0px', 'transition': '1.2s', 'opacity': '100%'
        });
    }
    if ( ypos > 3917 ){
        $('.des2exp1').css({
            'padding-left': '0px', 'transition': '1.4s', 'opacity': '100%'
        });
    }
    if ( ypos > 3917 ){
        $('.des3exp1').css({
            'padding-left': '0px', 'transition': '1.6s', 'opacity': '100%'
        });
    }
    if ( ypos < 3585 ){
        $('.exp1').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 3585 ){
        $('.des1exp1').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 3585 ){
        $('.des2exp1').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 3585 ){
        $('.des3exp1').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4669 ){
        $('.exp1').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4669 ){
        $('.des1exp1').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4669 ){
        $('.des2exp1').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4669 ){
        $('.des3exp1').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4216 ){
        $('.exp2').css({
            'padding-left': '0px', 'transition': '1s', 'opacity': '100%'
        });
    }
    if ( ypos > 4216 ){
        $('.des1exp2').css({
            'padding-left': '0px', 'transition': '1.2s', 'opacity': '100%'
        });
    }
    if ( ypos > 4216 ){
        $('.des2exp2').css({
            'padding-left': '0px', 'transition': '1.4s', 'opacity': '100%'
        });
    }
    if ( ypos > 4216 ){
        $('.des3exp2').css({
            'padding-left': '0px', 'transition': '1.6s', 'opacity': '100%'
        });
    }
    if ( ypos < 3878 ){
        $('.exp2').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 3878 ){
        $('.des1exp2').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 3878 ){
        $('.des2exp2').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 3878 ){
        $('.des3exp2').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4930 ){
        $('.exp2').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4930 ){
        $('.des1exp2').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4930 ){
        $('.des2exp2').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4930 ){
        $('.des3exp2').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4518 ){
        $('.exp3').css({
            'padding-left': '0px', 'transition': '1s', 'opacity': '100%'
        });
    }
    if ( ypos > 4518 ){
        $('.des1exp3').css({
            'padding-left': '0px', 'transition': '1.2s', 'opacity': '100%'
        });
    }
    if ( ypos > 4518 ){
        $('.des2exp3').css({
            'padding-left': '0px', 'transition': '1.4s', 'opacity': '100%'
        });
    }
    if ( ypos > 4518 ){
        $('.des3exp3').css({
            'padding-left': '0px', 'transition': '1.6s', 'opacity': '100%'
        });
    }
    if ( ypos < 4142 ){
        $('.exp3').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 4142 ){
        $('.des1exp3').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 4142 ){
        $('.des2exp3').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 4142 ){
        $('.des3exp3').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5175 ){
        $('.exp3').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5175 ){
        $('.des1exp3').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5175 ){
        $('.des2exp3').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5175 ){
        $('.des3exp3').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }

    if ( ypos > 4819 ){
        $('.exp4').css({
            'padding-left': '0px', 'transition': '1s', 'opacity': '100%'
        });
    }
    if ( ypos > 4819 ){
        $('.des1exp4').css({
            'padding-left': '0px', 'transition': '1.2s', 'opacity': '100%'
        });
    }
    if ( ypos > 4819 ){
        $('.des2exp4').css({
            'padding-left': '0px', 'transition': '1.4s', 'opacity': '100%'
        });
    }
    if ( ypos > 4819 ){
        $('.des3exp4').css({
            'padding-left': '0px', 'transition': '1.6s', 'opacity': '100%'
        });
    }
    if ( ypos < 4480 ){
        $('.exp4').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 4480 ){
        $('.des1exp4').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 4480 ){
        $('.des2exp4').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 4480 ){
        $('.des3exp4').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5475 ){
        $('.exp4').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5475 ){
        $('.des1exp4').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5475 ){
        $('.des2exp4').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5475 ){
        $('.des3exp4').css({
            'padding-left': '50px', 'opacity': '0%', 'transition': '0s'
        });
    }
    console.log(ypos)
})