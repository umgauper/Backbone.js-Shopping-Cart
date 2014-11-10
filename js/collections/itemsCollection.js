app.ItemsCollection = Backbone.Collection.extend({
    model: app.item,
    inCart: function() {
        return this.filter(function (item) {
        return item.get("inCart");
        });
    },
    totalCost: function() {
        var totalCost = 0;
        _.each(app.items.inCart(), function(item) {
        totalCost += item.get("subtotal");
        });
        return totalCost;
    }
});

app.items = new app.ItemsCollection();
app.items.add([app.item1, app.item2, app.item3, app.item4, app.item5]);

