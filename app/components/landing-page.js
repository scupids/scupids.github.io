import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['hero-container'],
    actions: {
        closeMenu(){
            $('#nav-bar').removeClass('open-nav');
        }
    },
    onInsert: function () {
        var $ = window.$;
        $('.content').scroll(function () {
            var scrollPosition = $('.content').scrollTop(),
                scrollTop = $('#wwa').position().top;

            $('#nav-bar').toggleClass('reveal', scrollPosition > scrollTop / 3);
            $('.hero-content').toggleClass('reveal', (scrollPosition <= scrollTop / 3));
            $('.member-container').toggleClass('reveal', (scrollPosition > 2 * scrollTop / 3));

            return false;
        });
    }.on('didInsertElement')
});
