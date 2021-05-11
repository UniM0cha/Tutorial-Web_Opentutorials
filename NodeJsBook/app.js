const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
// app.set(키, 값)
// 키 = 'port' : 포트 설정
// process.env.PORT : 
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie',
}));


app.use((req, res, next) => {
    console.log('모든 요청에 에베베');
    next();
});

// app.get(주소, 라우터)
app.get('/', (req, res, next) => {
    // res.send('hello, express');
    console.log('gd');
    next();
}, (req, res) => {
    throw new Error('에러다 이놈아');
});

app.use((req, res, next) => {
    console.log('모든 요청에 에베베');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});

