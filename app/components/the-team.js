import Ember from 'ember';
export default Ember.Component.extend({
    classNames: ['team-container', 'page-full-height'],
    peopleContent: {
        1: "A single dimensional creature, notable for his frail skeletal morphology and multifaceted creativity. Lives in the vicinity of charcoal, yet flaunts colorful fingers that can generate beautiful vistas on screen.",
        2: "A nerdy creature, mostly found in solitude. Commonly known for his rotund frame and sophophilic brain. Known to mark his territory around any technology that comes his way.",
        3: "A fierce organism often seen on work desks, fidgeting with her hair or wrestling with the keyboard. Well acclaimed to work like an ant for stupendous hours, churning out robust strands of code doggedly.",
        4: "An observant being known to love sleep and daydreaming. When not hanging in the web of code, he is found of this demanding world."
    },
    people: Ember.computed('params.[]', function () {
        return [
            {
                name: 'Vipul Garg',
                id: 1,
                img: '/imgs/team/vipul.jpg'
			},
            {
                name: 'Abhishek Gupta',
                id: 2,
                img: '/imgs/team/abhishek.jpg'
            },
            {
                name: 'Niyati Agarwal',
                id: 3,
                img: '/imgs/team/niyati.jpg'
            },
            {
                name: 'Pratik Jain',
                id: 4,
                img: '/imgs/team/pratik.jpg'
            }
        ];
    })
});
