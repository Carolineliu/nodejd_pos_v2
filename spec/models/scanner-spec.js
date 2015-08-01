var Scanner = require("../../models/scanner.js");
describe("test Scanner",function(){
  describe("test Scanner scan",function(){
    it("it should be get barcode and count",function(){
      var scan=new Scanner();
      expect(scan.scan("ITEM000001-5").barcode).toBe("ITEM000001");
      expect(scan.scan("ITEM000001-5").count).toBe(5);

    });
  });

});
