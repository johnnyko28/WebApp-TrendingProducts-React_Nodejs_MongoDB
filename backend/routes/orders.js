const router = require('express').Router();
let Orders = require('../models/orders.model');

router.route('/').get((req, res) => {
  Orders.aggregate([
    { $match: {
      "Time": {$gte: new Date(Date.now() - 2*24*60*60*1000).toLocaleString("en-US", {timeZone: "America/Los_Angeles"}), $lte: new Date(Date.now()).toLocaleString("en-US", {timeZone: "America/Los_Angeles"})},
      }
    }, 
    { $group: {
        _id: "$Item Name",
        count: { $sum: 1 },
        time: { $first : "$Time" }
      }
    }, 
    { $sort: {
        count: -1
      }
    }
  ])
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;