//js/models/item.js

// The models. Each art piece for sale is a model.
var app = app || {};
var Item = Backbone.Model.extend({
    defaults: {
        order: '',
        price: 0.01,
        inCart: false,
        title: ''

    },
    initialize: function() {
        console.log("app has been initialized");

    }
});


var item1 = new Item({order: 1, price: 30.00});
var item2 = new Item({order: 2, price: 5.00});
var item3 = new Item({order: 3, price: 20.00});
var item4 = new Item({order: 4, price: 20.00});
var item5 = new Item({order: 5, price: 30.00});
var theItems = [];             // Only way I could get the template to work was by putting the items into an array. Surely there's a better way to do this?
theItems.push(item1, item2, item3, item4, item5);


