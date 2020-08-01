// home(global)
const home = "/";
const login = "/login";
const logout = "/logout"; //진행중
const join = "/join";
const upload = "/upload"; 
const users = "/users" //mypage 와 같은 유저 정보와 등록리스트를 볼수있는 페이지  //ㅇㅋ

const routes = {
    home : home,
    login : login,
    logout : logout, //진행중
    join : join,
    upload : upload,
    users : users, //진행중
}

export default routes;  //app.js로 보내기위해서 상수 routes 에 객채형 스트링타입을 넣어서 만들었습니다.