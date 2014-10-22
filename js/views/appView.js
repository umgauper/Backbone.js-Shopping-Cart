// js/views/appView.js

// The View...

var app = app || {};

app.appView = Backbone.View.extend({
    el: '#main',
    events: {
        'dblclick img': 'addToCart'
    },
    addToCart: function() {
        alert(this.get); // returns [Object object] ... I think I have to use render to create an instance of the view, passing each model...to connect each Model to its DOM element?
        this.set({inCart: true});
    }
});

var template = _.template($("#item-template").html()); // pre-compile the template
$("#target").after(template(Item));