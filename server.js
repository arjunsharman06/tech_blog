const express = require('express');
const sequelize = require('./config/connection');
const controllers = require('./controllers/');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(controllers);

// Sync the DB and listening on the PORT
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
