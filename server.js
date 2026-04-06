const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || "secretkey";
function requireAuth(req, res, next) {
   ...
}
function requireManager(req, res, next) {
   ...
}

function requireAdmin(req, res, next) {
   ...
}
