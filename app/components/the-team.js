import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['team-container', 'page-full-height'],
    people: Ember.computed('params.[]', function () {
        return [
            {
                name: 'Vipul Garg',
                img: '/imgs/team/vipul.jpg',
            },
            {
                name: 'Abhishek Gupta',
                img: '/imgs/team/abhishek.jpg',
            },
            {
                name: 'Niyati Agarwal',
                img: '/imgs/team/niyati.jpg',
            },
            {
                name: 'Pratik Jain',
                img: '/imgs/team/pratik.jpg',
            }
        ];
    })
});
