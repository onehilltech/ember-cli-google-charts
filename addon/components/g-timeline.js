import XYChart from '../lib/g-xychart';
import Ember from 'ember';

export default XYChart.extend({
    classNames: ['g-timeline'],

    packages: ['timeline'],

    chartOptionsMapping:{
        showBarLabels: 'timeline.showBarLabels'
    },

    createChart(){
        return new google.visualization.Timeline (this.element);
    }
});