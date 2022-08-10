const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// Get All User
router.get('/', (req, res) => {
  User.findAll({
    attributes: {
      exclude: ['password'],
    },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Get User by Id
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res
          .status(404)
          .json({ message: `No user found with id = ${req.params.id}` });
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create User
router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create Update User
router.put('/:id', (req, res) => {
  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData[0]);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create Delete User
router.delete('/:id', (res, req) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(505).json(err);
    });
});

module.exports = router;
