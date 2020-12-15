const express = require ('express');
const Got = require ('../models/gotModel');
const router = new express.Router ();

router.get ('/list', async (req, res) => {
  try {
    const list = await Got.find ();

    const battleArray = [];
    list.map (val => {
      battleArray.push (val.location);
    });
    res.status (200).send (battleArray);
  } catch (e) {
    res.status (400).send (e);
  }
});
router.get ('/count', async (req, res) => {
  try {
    const list = await Got.find ();
    const count = list.length.toString ();
    res.status (200).send (count);
  } catch (e) {
    res.status (400).send (e);
  }
});

router.get ('/search', async (req, res) => {
  const length = Object.keys (req.query).length;
  try {
    let list = undefined;

    if (length === 0) {
      list = await Got.find (req.query);
    } else {
      const searchObj = {};

      for (prop in req.query) {
        searchObj[prop] = {$regex: `^${req.query[prop]}`, $options: 'i'};
      }
      console.log (searchObj);
      list = await Got.find (searchObj);
    }
    res.status (200).send (list);
  } catch (e) {
    res.status (400).send (e);
  }
});

module.exports = router;
