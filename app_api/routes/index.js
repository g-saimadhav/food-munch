var express = require('express');
var router = express.Router();
var foodmunch = require('../controller/locations');
var Reviews = require('../controller/reviews');
router.get('/locations', foodmunch.locationsListByDistance);
router.post('/locations', foodmunch.locationsCreate);
router.get('/locations/:locationid', foodmunch.locationsReadOne);
router.put('/locations/:locationid', foodmunch.locationsUpdateOne);
router.delete('/locations/:locationid', foodmunch.locationsDeleteOne);
// reviews
router.post('/locations/:locationid/reviews', Reviews.reviewsCreate);
router.get('/locations/:locationid/reviews/:reviewid',
Reviews.reviewsReadOne);

router.put('/locations/:locationid/reviews/:reviewid',
Reviews.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid',
Reviews.reviewsDeleteOne);
module.exports = router;