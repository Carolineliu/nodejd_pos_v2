var DateTime = require("../../models/date.js");
describe("date", function() {
  it("getdate", function() {
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
    var datetime = new DateTime();
    expect(datetime.getDate()).toBe(formattedDateString);
  });

});
