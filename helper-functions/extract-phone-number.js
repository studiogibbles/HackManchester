/* eslint */
var sample = {
    "sid": "SM1f0e8ae6ade43cb3c0ce4525424e404f",
    "date_created": "Fri, 13 Aug 2010 01:16:24 +0000",
    "date_updated": "Fri, 13 Aug 2010 01:16:24 +0000",
    "date_sent": null,
    "account_sid": "AC228b97a5fe4138be081eaff3c44180f3",
    "to": "+15305431221",
    "from": "+15104564545",
    "body": "A Test Message",
    "status": "queued",
    "flags":["outbound"],
    "api_version": "2010-04-01",
    "price": null,
    "uri": "\/2010-04-01\/Accounts\/AC228ba7a5fe4238be081ea6f3c44186f3\/SMS\/Messages\/SM1f0e8ae6ade43cb3c0ce4525424e404f.json"
};

function extractNumber (json) {
  return +sample.from;
}

console.log(extractNumber());

module.exports = extractNumber;
