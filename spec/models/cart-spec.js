var Cart = require("../../models/cart.js");
var CartItem = require("../../models/cart_item.js");

describe("cart", function() {
  describe("function add", function() {
    it("should accept array", function() {
      var thecart = new Cart();
      thecart.add({barcode:"ITEM000001",count:1});
      expect(thecart.cartItems[0].barcode).toBe('ITEM000001');
      thecart.add({barcode:"ITEM000001",count:1});
      expect(thecart.cartItems[0].barcode).toBe('ITEM000001');
      expect(thecart.cartItems[0].count).toBe(2);
    });
  });
  describe("function getTotal",function(){
    it("should get totalprice",function(){
      var thecart = new Cart();
      thecart.add(new CartItem("ITEM000000",5));
      thecart.add(new CartItem("ITEM000001",5));
      expect(thecart.getTotal()).toBe(24);
    });
  });
  describe("function getSaving",function(){
    it("should get saving",function(){
      var thecart=new Cart();
      thecart.add(new CartItem("ITEM000000",4));
      thecart.add(new CartItem("ITEM000001",6));
      thecart.add(new CartItem("ITEM000002",3));
      thecart.add(new CartItem("ITEM000003",2));
      expect(thecart.getSaving()).toBe(9);
    });
  });
});
