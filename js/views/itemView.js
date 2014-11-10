app.ItemView = Backbone.View.extend({
    className: 'item',
    template: _.template($("#item-template").html()),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.append(this.template(this.model.toJSON()));
        $("#display").append(this.el);
        return this;
    },
   events: {
        'click .addToCart': 'addToCart'
   },
    addToCart: function() {
        var theDivID = this.id;
        var qty = parseInt($("#" + theDivID + " input").val()) || 1;
        var newQty = qty + this.model.get("qty");
        this.model.set({qty: newQty});
        this.model.set({subtotal: newQty * this.model.get("price")});
        if(!this.model.get("inCart")) {
            new app.CartItemView({model: this.model, tagName: 'tr'});
            this.model.set({inCart: true});
        }
        $("#totalCost").html("Total: $" + app.items.totalCost() + ".00");
    }
});

app.itemView1 = new app.ItemView({model: app.item1, id: 'item1'});
app.itemView2 = new app.ItemView({model: app.item2, id: 'item2'});
app.itemView3 = new app.ItemView({model: app.item3, id: 'item3'});
app.itemView4 = new app.ItemView({model: app.item4, id: 'item4'});
app.itemView5 = new app.ItemView({model: app.item5, id: 'item5'});

