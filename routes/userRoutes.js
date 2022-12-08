// represents the router class
const express = require("express");
const {
  register,
  getUser,
} = require("../controller/usersController");

const router = express.Router();

/*
{
    "username": "{{$username}}",
    "password": "{{$password}}",
}
*/
router.post("/register", register);
router.get("/user", getUser);

module.exports = {
  routes: router
};
