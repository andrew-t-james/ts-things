"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
var requireAuth = function (req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
};
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n    <div>\n      <div>Logged in</div>\n      <a href=\"/logout\">log out</a>\n    </div>\n  ");
    }
    else {
        res.send("\n    <div>\n      <div>Logged out</div>\n      <a href=\"/login\">log in</a>\n    </div>\n  ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route user');
});
