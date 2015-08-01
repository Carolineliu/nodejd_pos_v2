var Promotion = require('../../models/promotion.js');
describe("Promotion", function() {
  describe("constuctor", function() {
    it("should be return barcode,type", function() {
      var promotion =new Promotion('BUY_TWO_GET_ONE_FREE','ITEM000005');
      expect(promotion.type).toBe('BUY_TWO_GET_ONE_FREE');
      expect(promotion.barcodes).toBe('ITEM000005');
    });
  });
});
