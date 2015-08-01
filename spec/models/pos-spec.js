var Pos = require("../../models/pos.js");
//var DateTime = require("../../models/date.js");
var Cart = require("../../models/cart.js");
var CartItem = require("../../models/cart_item.js");

describe("pos", function() {
  describe("getItemString", function() {
    it("print promotion information ", function() {
       spyOn(console, 'log');
      var currentDate = new Date(),
        year = dateDigitToString(currentDate.getFullYear()),
        month = dateDigitToString(currentDate.getMonth() + 1),
        date = dateDigitToString(currentDate.getDate()),
        hour = dateDigitToString(currentDate.getHours()),
        minute = dateDigitToString(currentDate.getMinutes()),
        second = dateDigitToString(currentDate.getSeconds()),
        formattedDateString = year + '年' + month + '月' + date + '日 ' + hour +
        ':' + minute + ':' + second;
      function dateDigitToString(num) {
        return num < 10 ? '0' + num : num;
      }
      var expectText =
        '***<没钱赚商店>收据***\n' +
        '打印时间：' + formattedDateString + '\n' +
        '----------------------\n' +
        '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
        '----------------------\n' +
        '挥泪赠送商品：\n' +
        '名称：雪碧，数量：1瓶\n' +
        '----------------------\n' +
        '总计：12.00(元)\n' +
        '节省：3.00(元)\n' +
        '**********************';
        var thecart=new Cart();
        var carts=thecart.add(new CartItem("ITEM000001",5));
      var print = new Pos();
     expect(print.getItemString(thecart)).toBe(expectText);

    });
  });
});
