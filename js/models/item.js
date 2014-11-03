//js/models/item.js

// The models. Each art piece for sale is a model.
var app = app || {};
var Item = Backbone.Model.extend({
    defaults: {
        order: '',
        price: 0.01,
        inCart: false,
        title: ''

    }

});


var item1 = new Item({order: 1, title: "Margaret", price: 30.00});
var item2 = new Item({order: 2, title: "John", price: 5.00});
var item3 = new Item({order: 3, title: "Eve", price: 20.00});
var item4 = new Item({order: 4, title: "Rebecca", price: 20.00});
var item5 = new Item({order: 5, title: "Jen", price: 30.00});

var ItemsCollection = Backbone.Collection.extend({model: Item});

var items = new ItemsCollection([item1, item2, item3, item4, item5]);

