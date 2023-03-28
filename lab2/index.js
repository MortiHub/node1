const { DateTime } = require('luxon');
const newYear = DateTime.fromObject({ year: DateTime.now().year + 1, });
var diff = Math.floor(newYear.diffNow(['days']).toObject().days);
console.log(`Осталось ${diff} дней до Нового года!`);