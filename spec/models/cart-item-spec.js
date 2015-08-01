var CartItem = require("../../models/cart_item.js");
describe("cart-item", function() {
  describe("constuctor", function() {
    it("should accept barcode and counts", function() {
      var theCartItem = new CartItem("ITEM000001", 5);
      expect(theCartItem.barcode).toBe("ITEM000001");
      expect(theCartItem.count).toBe(5);
    });
  });
  describe("getName",function(){
    it("should accept name",function(){
      var theCartItem=new CartItem("ITEM000001", 5);
      expect(theCartItem.getName()).toBe("雪碧");
    });
  });
  describe("getPrice",function(){
    it("should accept price",function(){
      var theCartItem=new CartItem("ITEM000001", 5);
      expect(theCartItem.getPrice()).toBe(3.00);
    });
  });
  describe("getUnit",function(){
    it("should accept unit",function(){
      var theCartItem=new CartItem("ITEM000001", 5);
      expect(theCartItem.getUnit()).toBe("瓶");
    });
  });
  describe("getPromotionCount",function(){
    it("should accept PromotionCount",function(){
      var theCartItem=new CartItem("ITEM000001", 5);
      expect(theCartItem.getPromotionCount()).toBe(1);
    });
  });

    describe("getSubTotal",function(){
      it("should accept SubTotal",function(){
        var theCartItem=new CartItem("ITEM000001", 5);
        expect(theCartItem.getSubTotal()).toBe(12.00);
      });
  });
});
