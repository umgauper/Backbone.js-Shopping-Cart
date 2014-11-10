app.CartItemView = Backbone.View.extend({
    template:_.template($("#cart-item-template").html()),
    className: 'itemInCart',
    initialize: function() {
        console.log("CartItemView is initialized.");
        this.render();
        this.listenTo(this.model, 'change', this.updateView);
    },
    render: function() {
        this.$el.append(this.template(this.model.toJSON())); // put the <td>s from template into <tr>
        if(!this.model.get("inCart")) { // If the item isn't already in the cart, append its view to the table.
            $("tbody").append(this.$el);
            }
    },
    updateView: function() {
        this.$el.html(this.template(this.model.toJSON())); // Overwrite current view with the template rendered with the new model data.
    },
    events: {
        'click .remove': 'removeItem'
    },
    removeItem: function() {
        this.$el.remove();  // remove the view and reset model data.
        this.model.set({qty: 0});
        this.model.set({subtotal: 0});
        this.model.set({inCart: false});
        $("#totalCost").html("Total: " + app.items.totalCost());
    }
});
