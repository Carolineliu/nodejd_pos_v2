var Item=require('../../models/item.js');
describe("item",function(){
  describe("constuctor",function(){
    it("should be return barcode,count,price and unit",function(){
      var item=new Item('ITEM000000', '可口可乐', '瓶', 3.00);
      expect(item.barcode).toBe('ITEM000000');
      expect(item.name).toBe("可口可乐");
      expect(item.unit).toBe("瓶");
      expect(item.price).toBe(3.00);
    });
  });
});
