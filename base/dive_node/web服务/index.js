const http = require("http");

function serialize(name, val, opt = {}) {
    var pairs = [name + "=" +  encodeURIComponent(val)];
    if (opt.maxAge) pairs.push("Max-Age=" + opt.maxAge);
    if (opt.domain) pairs.push("Domain=" + opt.domain);
    if (opt.path) pairs.push("Path=" + opt.path);
    if (opt.expires) pairs.push("Expires=" + opt.expires.toUTCString());
    if (opt.httpOnly) pairs.push("HttpOnly");
    if (opt.secure) pairs.push("Secure");
    return pairs.join("; ");
}

function handleCookie(req, res) {
    res.setHeader("Set-Cookie", [serialize("isVisit", 1), serialize("foo", "bar")]);
}
var sessions = {};
var key = "session_id";
var EXPIRES = 60 * 1000;
function genSession() {
    const session = {};
    session.id = (new Date()).getTime() + Math.random();
    session.cookie = {
        expire:  (new Date()).getTime() + EXPIRES,
    };
    session[session.id] = session.cookie;
    return session;
}

function verifySession(req, res) {
    console.log(req.headers, "----cookies");
    const id =  req.headers.cookie && req.headers.cookie[key];
    if( !id ) {
        req.session = genSession();
    } else {
        const session = session[id];
        if(session) {
            if(session.cookie.expire > (new Date()).getTime()) {
                session.cookie.expire = (new Date()).getTime() + EXPIRES;
                req.session = session;
            } else {
                delete session[id];
                req.session = genSession();
            }
        } else {
            req.session = genSession();
        }
    }
    handleCookie(req, res);
}


const app = http.createServer((req, res) => {
    handleCookie(req, res);
    // res.writeHead(200, { 'Content-type': 'text/plain' });
    verifySession(req, res);
    res.setHeader("Location", "https://baidu.com/");
    const writeHead = res.writeHead;
    res.writeHead = function() {
        let cookies = res.getHeader("Set-Cookie");
        const session = serialize("Set-Cookie", req.session.id);
        cookies = Array.isArray(cookies) ? cookies.concat(session) : [cookies, session];
        res.setHeader("Set-Cookie", cookies);
        return writeHead.apply(this, arguments);
    };
    res.writeHead(302);
    console.log(req.session, "(req.session----");
    // if(req.session.ivVisit) {
    //     res.end('welcome to session');
    // } else {
    //     res.end('first visit');
    // }
    
    res.end("redirect to", "https://baidu.com/");
});




app.listen(1334, () => { console.log("listening on 1334"); });


// redirect function
function redirect(res, url) {
    res.setHeader("Location", url);
    res.writeHead(302);
    res.end("Redirecting to" + url); 
}

const base46 = Buffer.from("Hello").toString("base64");
console.log(base46, encodeURI("hello"));