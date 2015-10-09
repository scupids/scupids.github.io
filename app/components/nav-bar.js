import Ember from 'ember';

export default Ember.Component.extend({
    onInsert: function () {
        $('[data-scroll]').click(function (e) {
            var href = $(e.target).attr('href'),
                totalHeight = document.querySelector('.page-content').scrollHeight,
                scrollPosition = $('.content').scrollTop(),
                scrollTop = scrollPosition +$(href).position().top + 50
            $('.content').animate({
                    scrollTop: Math.abs(scrollTop) -50
                },'slow');
            return false;
        });
    }.on('didInsertElement')
});
