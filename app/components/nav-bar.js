import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['nav-container'],
    actions: {
        toggleNav(){
            $("#nav-bar").toggleClass('open-nav');
        }
    },
    onInsert: function () {
        var $ = window.$;
        $('[data-scroll]').click(function (e) {
            var href = $(e.target).attr('href'),
                scrollPosition = $('.content').scrollTop(),
                scrollTop = scrollPosition +$(href).position().top + 50;
            $('.content').animate({
                    scrollTop: Math.abs(scrollTop) -50
                },'slow');
            return false;
        });
    }.on('didInsertElement')
});
