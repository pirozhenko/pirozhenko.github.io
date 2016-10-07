var app = {

        settings: {
            workOne: document.querySelector('.js-first-work'),
            workTwo: document.querySelector('.js-second-work'),
            workThird: document.querySelector('.js-third-work'),
            about: document.querySelector('.js-about'),
            scills: document.querySelector('.js-scills'),
            arrow: document.querySelector('.js-arrow')


        },

        arrowScroll: function() {
            var scrollToTop = window.setInterval(function() {
                var pos = window.pageYOffset;
                if ( pos > 0 ) {
                    window.scrollTo( 0, pos - 20 );
                } else {
                    window.clearInterval( scrollToTop );
                }
            }, 10);
            
        },


        init: function() {

            window.onscroll = function () {
                if(window.scrollY > 1100) {
                    app.settings.workOne.removeClass('animated fadeOutLeft').addClass('animated fadeInLeft --active');
                    app.settings.workTwo.removeClass('animated fadeOutUp').addClass('animated fadeInUp --active');
                    app.settings.workThird.removeClass('animated fadeOutRight').addClass('animated fadeInRight --active');
                } else if (window.scrollY < 1100) {
                    app.settings.workOne.removeClass('animated fadeInLeft').addClass('animated fadeOutLeft');
                    app.settings.workTwo.removeClass('animated fadeInUp --active').addClass('animated fadeOutUp');
                    app.settings.workThird.removeClass('animated fadeInRight --active').addClass('animated fadeOutRight');
                }

                if(window.scrollY > 250) {
                    app.settings.about.addClass('--active');
                    app.settings.arrow.addClass('--active')
                } else if (window.scrollY < 250) {
                    app.settings.about.removeClass('--active');
                    app.settings.arrow.removeClass('--active');
                }

                if(window.scrollY > 1700) {
                    app.settings.scills.removeClass('animated zoomOut').addClass('animated rollIn');
                } else if (window.scrollY < 1700) {
                    app.settings.scills.removeClass('animated rollIn').addClass('animated zoomOut');
                }
            };

            this.settings.arrow.addEventListener('click', function(e) {
                    e.preventDefault();
                    app.arrowScroll(e);
                });
            Element.prototype.hasClass = function (className) {
                return new RegExp(' ' + className + ' ').test(' ' + this.className + ' ');
            };

            Element.prototype.addClass = function (className) {
                if (!this.hasClass(className)) {
                    this.className += ' ' + className;
                }
                return this;
            };

            Element.prototype.removeClass = function (className) {
                var newClass = ' ' + this.className.replace(/[\t\r\n]/g, ' ') + ' ';
                if (this.hasClass(className)) {
                    while (newClass.indexOf( ' ' + className + ' ') >= 0) {
                        newClass = newClass.replace(' ' + className + ' ', ' ');
                    }
                this.className = newClass.replace(/^\s+|\s+$/g, ' ');
                }
                return this;
            };
        }

}

app.init();

