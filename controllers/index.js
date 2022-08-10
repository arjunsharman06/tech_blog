const router = require('express').Router();
const apiRouter = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/api', apiRouter);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
