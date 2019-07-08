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
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input type=\"text\" name=\"email\" />\n      </div>\n      <div>\n        <label>Password</label>\n        <input type=\"password\" name=\"password\" />\n      </div>\n      <button>Submit</button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'me@mail.com' && password === 'pass') {
        req.session = {
            loggedIn: true
        };
        res.redirect('/');
    }
    else {
        res.send('Invalid email password');
    }
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route user');
});
