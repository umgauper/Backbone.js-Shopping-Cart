app.ItemView = Backbone.View.extend({
    template: _.template($("#item-template").html()),
    initialize: function() {
        this.render()
    },
    render: function() {
        this.$el.append(this.template(this.model.toJSON()));
        $("#display").append(this.el);
        return this;
    },
    events: {
        'click .addToCart': 'moveToCart'
    },
    moveToCart: function(e) {
        var title = this.model.get("title");
        var price = this.model.get("price");
        var theDivID = this.id;
        var qty = $("#" + theDivID + " input").val();
        $("table").append("<tr><td>" + title + "</td><td>" + price + "</td><td>" + qty + "</td></tr>");
        this.model.set({inCart: !this.model.get("inCart")});
    }
});


var itemView1 = new app.ItemView({model: item1, className: 'item', id: 'item1'});
var itemView2 = new app.ItemView({model: item2, className: 'item', id: 'item2'});
var itemView3 = new app.ItemView({model: item3, className: 'item', id: 'item3'});
var itemView4 = new app.ItemView({model: item4, className: 'item', id: 'item4'});
var itemView5 = new app.ItemView({model: item5, className: 'item', id: 'item5'});

