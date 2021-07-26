// Bring in the express Router module
const router = require('express').Router();
// The API routes directory (i.e. routes to /api)
const apiRoutes = require('./api');

// initiates use of /api routes
router.use('/api', apiRoutes);

// message when a route is not set up
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// export router
module.exports = router;