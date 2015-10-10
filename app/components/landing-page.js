import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['hero-container'],
    onInsert: function () {
        $('.content').scroll(function(e){
            var scrollPosition = $('.content').scrollTop(),
                scrollTop = $('#team').position().top;

            $('.nav-container').toggleClass('reveal', scrollPosition > scrollTop / 2);
            $('.hero-content').toggleClass('reveal', !(scrollPosition > scrollTop / 3));
            $('.member-container').toggleClass('reveal', (scrollPosition > 2*scrollTop / 3));

            return false;
        });
    }.on('didInsertElement')
});