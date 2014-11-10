//js/models/item.js

// The models. Each art piece for sale is a model.
var app = {};
app.item = Backbone.Model.extend({
    defaults: {
        order: '',
        title: '',
        price: 0.01,
        inCart: false,
        qty: 0,
        subtotal: 0

    }

});

app.item1 = new app.item({order: 1, title: "Margaret", price: 30.00});
app.item2 = new app.item({order: 2, title: "John", price: 25.00});
app.item3 = new app.item({order: 3, title: "Eve", price: 20.00});
app.item4 = new app.item({order: 4, title: "Rebecca", price: 20.00});
app.item5 = new app.item({order: 5, title: "Jen", price: 30.00});


