export const getGsap = () => {
    gsap.from(".js-descCol" , {
        x:-400,
        opacity:0,
        duration:1
    })
    gsap.from(".js-descColSecond" , {
        x:400,
        opacity:0,
        duration:1
    })
    gsap.from(".js-headerMessage" , {
        y:-100,
        opacity:0,
        duration:1
    })
    gsap.from(".js-headerLogo" , {
        y:110,
        opacity:0,
        duration:1
    })
    gsap.from(".js-headerLink-1" , {
        y:90,
        opacity:0,
        duration:1
    })
    gsap.from(".js-headerLink-2" , {
        y:80,
        opacity:0,
        duration:1
    })
    gsap.from(".js-headerLink-3" , {
        y:70,
        opacity:0,
        duration:1
    })
    gsap.from(".js-headerLink-4" , {
        y:60,
        opacity:0,
        duration:1
    })
    gsap.from(".js-headerLink-5" , {
        y:50,
        opacity:0,
        duration:1
    })
    gsap.from(".js-headerLink-6" , {
        y:40,
        opacity:0,
        duration:1
    })
    var tl = gsap.timeline({paused: true});
    tl.from(".js-item-1", {duration: 1, x: '-100%', opacity: 0})
    .from(".js-item-2", {duration: 1, x: '100%', opacity: 0})
    var links_show = null;
    function scrollTrackingLinks(){
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.js-links').offset().top;
        var eh = $('.js-links').outerHeight();
    
        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
            if (links_show == null || links_show == false) {
                tl.play();
            }
            links_show = true;
        } else {
            links_show = false;
        }
    }
    var tlf = gsap.timeline({paused: true});
    tlf.from(".js-footer-contacts", {duration: 1, y: '100%', opacity: 0})
    .from(".js-footer-copy", {duration: 0.5, y: '200%', opacity: 0})
    .from(".js-footer-links", {duration: 0.75, y: '200%', opacity: 0})
    var footer_show = null;
    function scrollTrackingFooter(){
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.js-footer').offset().top;
        var eh = $('.js-footer').outerHeight();
    
        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
            if (footer_show == null || footer_show == false) {
                tlf.play();
            }
            footer_show = true;
        } else {
            footer_show = false;
        }
    }
    $(window).scroll(function(){
        scrollTrackingLinks();
        scrollTrackingFooter();
    });
        
    $(document).ready(function(){ 
        scrollTrackingLinks();
        scrollTrackingFooter();
    });
}