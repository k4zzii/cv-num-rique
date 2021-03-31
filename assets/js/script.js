$(window).scroll(function() {
    let ypos = window.scrollY
    if ( ypos > 1000 ){
        $('.portrait').css({
            'filter': 'blur(0px)', 'transition' : '3s' , 'border-radius': '50%'
        });
    }
    if ( ypos > 1800){
        $('.portrait').css({
            'filter': 'blur(5px)' , 'border-radius': '0%'
        });
    }
    if ( ypos < 900){
        $('.portrait').css({
            'filter': 'blur(5px)', 'transition' : '3s' , 'border-radius': '0%'
        });
    }
    if ( ypos > 180 ){
        $('.sidebar').css({
            'display': 'block',
        });   
    }
    if ( ypos < 180){
        $('.sidebar').css({
            'display': 'none',
        });
    }
    if ( ypos > 250 ){
        $('.sidebar>:nth-child(1)').css({
            'opacity': '100%',
        });
    }
    if ( ypos > 1800){
        $('.sidebar>:nth-child(1)').css({
            'opacity': '50%',
        });
    }
    if ( ypos > 1800 ){
        $('.sidebar>:nth-child(2)').css({
            'opacity': '100%',
        });
    }
    if ( ypos > 2970){
        $('.sidebar>:nth-child(2)').css({
            'opacity': '50%',
        });
    }
    if ( ypos < 1800){
        $('.sidebar>:nth-child(2)').css({
            'opacity': '50%',
        });
    }
    if ( ypos > 1800 ){
        $('.sidebar>:nth-child(2)').css({
            'opacity': '100%',
        });
    }
    if ( ypos > 2970){
        $('.sidebar>:nth-child(2)').css({
            'opacity': '50%',
        });
    }
    if ( ypos < 1800){
        $('.sidebar>:nth-child(2)').css({
            'opacity': '50%',
        });
    }
    if ( ypos > 2970 ){
        $('.sidebar>:nth-child(3)').css({
            'opacity': '100%',
        });
    }
    if ( ypos > 4000){
        $('.sidebar>:nth-child(3)').css({
            'opacity': '50%',
        });
    }
    if ( ypos < 2970){
        $('.sidebar>:nth-child(3)').css({
            'opacity': '50%',
        });
    }
    if ( ypos > 4000 ){
        $('.sidebar>:nth-child(4)').css({
            'opacity': '100%',
        });
    }
    if ( ypos > 5500){
        $('.sidebar>:nth-child(4)').css({
            'opacity': '50%',
        });
    }
    if ( ypos < 4000){
        $('.sidebar>:nth-child(4)').css({
            'opacity': '50%',
        });
    }
    if ( ypos > 5500){
        $('.sidebar>:nth-child(5)').css({
            'opacity': '100%',
        });
    }
    if ( ypos > 6500){
        $('.sidebar>:nth-child(5)').css({
            'opacity': '50%',
        });
    }
    if ( ypos < 5500){
        $('.sidebar>:nth-child(5)').css({
            'opacity': '50%',
        });
    }
    if ( ypos > 1490 ){
        $('.compdiv2').css({
            'width': '60%', 'transition' : '5s'
        });
    }
    if ( ypos > 2520){
        $('.compdiv2').css({
            'width': '0px',
        });
    }
    if ( ypos < 1490){
        $('.compdiv2').css({
            'width': '0px', 'transition' : '3s'
        });
    }
    if ( ypos > 1590 ){
        $('.compdiv4').css({
            'width': '65%', 'transition' : '5s'
        });
    }
    if ( ypos > 2620){
        $('.compdiv4').css({
            'width': '0px',
        });
    }
    if ( ypos < 1590){
        $('.compdiv4').css({
            'width': '0px', 'transition' : '3s'
        });
    }
    if ( ypos > 1690 ){
        $('.compdiv6').css({
            'width': '55%', 'transition' : '5s'
        });
    }
    if ( ypos > 2720){
        $('.compdiv6').css({
            'width': '0px',
        });
    }
    if ( ypos < 1690){
        $('.compdiv6').css({
            'width': '0px', 'transition' : '3s'
        });
    }
    if ( ypos > 1790 ){
        $('.compdiv8').css({
            'width': '62%', 'transition' : '5s'
        });
    }
    if ( ypos > 2820){
        $('.compdiv8').css({
            'width': '0px',
        });
    }
    if ( ypos < 1790){
        $('.compdiv8').css({
            'width': '0px', 'transition' : '3s'
        });
    }
    if ( ypos > 1890 ){
        $('.compdiv10').css({
            'width': '55%', 'transition' : '5s'
        });
    }
    if ( ypos > 2920){
        $('.compdiv10').css({
            'width': '0px',
        });
    }
    if ( ypos < 1890){
        $('.compdiv10').css({
            'width': '0px', 'transition' : '3s'
        });
    }
    if ( ypos > 1990 ){
        $('.compdiv12').css({
            'width': '60%', 'transition' : '5s'
        });
    }
    if ( ypos > 3100){
        $('.compdiv12').css({
            'width': '0px',
        });
    }
    if ( ypos < 1990){
        $('.compdiv12').css({
            'width': '0px', 'transition' : '3s'
        });
    }
    if ( ypos > 2090 ){
        $('.compdiv14').css({
            'width': '67%', 'transition' : '5s'
        });
    }
    if ( ypos > 3100){
        $('.compdiv14').css({
            'width': '0px',
        });
    }
    if ( ypos < 2090){
        $('.compdiv14').css({
            'width': '0px', 'transition' : '3s'
        });
    }
    if ( ypos > 2190 ){
        $('.compdiv16').css({
            'width': '49%', 'transition' : '5s'
        });
    }
    if ( ypos > 3100){
        $('.compdiv16').css({
            'width': '0px',
        });
    }
    if ( ypos < 2190){
        $('.compdiv16').css({
            'width': '0px', 'transition' : '3s'
        });
    }
    if ( ypos > 3000 ){
        let pos = ypos -3000
        $('.bar2').css({
            'height': + pos - 12 + 'px', 'background-color': 'white'
        });
    }
    if ( ypos > 5220){
        $('.bar2').css({
            'height': '2200px',
        });
    }
    if ( ypos < 3200){
        $('.bar2').css({
            'wheight': '0px',
        });
    }
    if ( ypos > 4215){
        $('.bar2').css({
            'background-color': 'red',
        });
    }
    if ( ypos > 4215 ){
        $('.exp1').css({
            'padding-left': '0px', 'transition': '1s', 'opacity': '100%'
        });
    }
    if ( ypos > 4215 ){
        $('.des1exp1').css({
            'padding-left': '0px', 'transition': '1.2s', 'opacity': '100%'
        });
    }
    if ( ypos > 4215 ){
        $('.des2exp1').css({
            'padding-left': '0px', 'transition': '1.4s', 'opacity': '100%'
        });
    }
    if ( ypos > 4215 ){
        $('.des3exp1').css({
            'padding-left': '0px', 'transition': '1.6s', 'opacity': '100%'
        });
    }
    if ( ypos < 3880 ){
        $('.exp1').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 3880 ){
        $('.des1exp1').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 3880 ){
        $('.des2exp1').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 3880 ){
        $('.des3exp1').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5000 ){
        $('.exp1').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5000 ){
        $('.des1exp1').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5000 ){
        $('.des2exp1').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5000 ){
        $('.des3exp1').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 3120 ){
        $('.lycee').css({
            'padding-left': '0px', 'transition': '1s', 'opacity': '100%'
        });
    }
    if ( ypos > 3120 ){
        $('.lieu1').css({
            'padding-left': '0px', 'transition': '1.2s', 'opacity': '100%'
        });
    }
    if ( ypos > 3120 ){
        $('.pschool1').css({
            'padding-left': '0px', 'transition': '1.4s', 'opacity': '100%'
        });
    }
    if ( ypos > 3120 ){
        $('.p2school1').css({
            'padding-left': '0px', 'transition': '1.6s', 'opacity': '100%'
        });
    }
    if ( ypos < 2770 ){
        $('.lycee').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 2770 ){
        $('.lieu1').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 2770 ){
        $('.pschool1').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 2770 ){
        $('.p2school1').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 3865 ){
        $('.lycee').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 3865 ){
        $('.lieu1').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 3865 ){
        $('.pschool1').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 3865 ){
        $('.p2school1').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 3425 ){
        $('.manu1').css({
            'padding-left': '0px', 'transition': '1s', 'opacity': '100%'
        });
    }
    if ( ypos > 3425 ){
        $('.lieu2').css({
            'padding-left': '0px', 'transition': '1.2s', 'opacity': '100%'
        });
    }
    if ( ypos > 3425 ){
        $('.pschool2').css({
            'padding-left': '0px', 'transition': '1.4s', 'opacity': '100%'
        });
    }
    if ( ypos < 3087 ){
        $('.manu1').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 3087 ){
        $('.lieu2').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 3087 ){
        $('.pschool2').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4198 ){
        $('.manu1').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4198 ){
        $('.lieu2').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4198 ){
        $('.pschool2').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 3713 ){
        $('.manu2').css({
            'padding-left': '0px', 'transition': '1s', 'opacity': '100%'
        });
    }
    if ( ypos > 3713 ){
        $('.lieu3').css({
            'padding-left': '0px', 'transition': '1.2s', 'opacity': '100%'
        });
    }
    if ( ypos > 3713 ){
        $('.pschool3').css({
            'padding-left': '0px', 'transition': '1.4s', 'opacity': '100%'
        });
    }
    if ( ypos < 3360 ){
        $('.manu2').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 3360 ){
        $('.lieu3').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 3360 ){
        $('.pschool3').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4480 ){
        $('.manu2').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4480 ){
        $('.lieu3').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4480 ){
        $('.pschool3').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4520 ){
        $('.exp2').css({
            'padding-left': '0px', 'transition': '1s', 'opacity': '100%'
        });
    }
    if ( ypos > 4520 ){
        $('.des1exp2').css({
            'padding-left': '0px', 'transition': '1.2s', 'opacity': '100%'
        });
    }
    if ( ypos > 4520 ){
        $('.des2exp2').css({
            'padding-left': '0px', 'transition': '1.4s', 'opacity': '100%'
        });
    }
    if ( ypos > 4520 ){
        $('.des3exp2').css({
            'padding-left': '0px', 'transition': '1.6s', 'opacity': '100%'
        });
    }
    if ( ypos < 4182 ){
        $('.exp2').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 4182 ){
        $('.des1exp2').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 4182 ){
        $('.des2exp2').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 4182 ){
        $('.des3exp2').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5320 ){
        $('.exp2').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5320 ){
        $('.des1exp2').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5320 ){
        $('.des2exp2').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5320 ){
        $('.des3exp2').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4847 ){
        $('.exp3').css({
            'padding-left': '0px', 'transition': '1s', 'opacity': '100%'
        });
    }
    if ( ypos > 4847 ){
        $('.des1exp3').css({
            'padding-left': '0px', 'transition': '1.2s', 'opacity': '100%'
        });
    }
    if ( ypos > 4847 ){
        $('.des2exp3').css({
            'padding-left': '0px', 'transition': '1.4s', 'opacity': '100%'
        });
    }
    if ( ypos < 4490 ){
        $('.exp3').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 4490 ){
        $('.des1exp3').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 4490 ){
        $('.des2exp3').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 4747 ){
        $('.des1exp3').css({
            'padding-left': '0px', 'transition': '1.2s', 'opacity': '100%'
        });
    }
    if ( ypos > 4747 ){
        $('.des2exp3').css({
            'padding-left': '0px', 'transition': '1.4s', 'opacity': '100%'
        });
    }
    if ( ypos > 5570 ){
        $('.exp3').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5570 ){
        $('.des1exp3').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5570 ){
        $('.des2exp3').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5115 ){
        $('.exp4').css({
            'padding-left': '0px', 'transition': '1s', 'opacity': '100%'
        });
    }
    if ( ypos > 5115 ){
        $('.des1exp4').css({
            'padding-left': '0px', 'transition': '1.2s', 'opacity': '100%'
        });
    }
    if ( ypos > 5115 ){
        $('.des2exp4').css({
            'padding-left': '0px', 'transition': '1.4s', 'opacity': '100%'
        });
    }
    if ( ypos < 4763 ){
        $('.exp4').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 4763 ){
        $('.des1exp4').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos < 4763 ){
        $('.des2exp4').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5870 ){
        $('.exp4').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5870 ){
        $('.des1exp4').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    if ( ypos > 5870 ){
        $('.des2exp4').css({
            'padding-left': '700px', 'opacity': '0%', 'transition': '0s'
        });
    }
    console.log(ypos)
})
    //console.log(ypos)

$('.circle1').click(function() {
    $('.pschool1').css({
            'padding-left': '0px', 'opacity': '100%', 'transition': '0.6s',
    });
    $('.p2school1').css({
        'padding-left': '0px', 'opacity': '100%', 'transition': '0.8s',
    });
    $('.p3school1').css({
        'padding-left': '0px', 'opacity': '100%', 'transition': '1s',
    });
    $('.p4school1').css({
        'padding-left': '0px', 'opacity': '100%', 'transition': '1.2s',
    });
});

$('.here').click(function() {
    $('.pschool2').css({
            'padding-left': '0px', 'opacity': '100%', 'transition': '0.6s',
    });
});

$('.circle5').click(function() {
    $('.pschool3').css({
            'padding-left': '0px', 'opacity': '100%', 'transition': '0.6s',
    });
});

// Fin de la version desktop 