import express from "express";// const express = require("express");랑 같습니다.
import routes from "../routes";
// import Web3 from "Web3";
// import product_contract from "'../contract/product/contract.js'"

// let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
// let smartContract = new web3.eth.Contract(product_contract.abi, product_contract.address);

const globalRouter = express.Router();

// home controller
globalRouter.get(routes.home, (req, res) => res.render("home", {title:"홈"}));
// login. controller
globalRouter.get(routes.login, (req, res) => res.render("login", {title : "로그인페이지" }));

//globalRouter.get(routes.login, (req, res) => res.render("login", {title : "로그인페이지" })); 
//globalRouter.get(routes.login, function(req,res){res.sender("login",{title:"로그인페이지"})};
//위 주석 두개는 모두 같은 의미.



// globalRouter.post(routes.login, (req, res) => {
//     web3.eth.getAccounts().then(function (accounts) {
//         var i;
//         for (i = 0; i < accounts.length; i++) {
//             if (req.body.eth_account == accounts[i]) {
//                 req.session.account = req.body.eth_account;
//                 res.render('loginProcess', { title: "login....", eth_account: req.body.eth_account });
//             }
//         }
//         try{
//             if (i == accounts.length) {
//             res.redirect('/login');
//         }
//         }catch(e){
//             console.log(e)
//         }
// });

// logout controller
globalRouter.get(routes.logout, (req, res) => res.render("감사합니다."));
// join controller
globalRouter.get(routes.join, (req, res) => res.render("회원가입"));
// upload controller
globalRouter.get(routes.upload, (req, res) => res.render("물품등록"));
// users controller
globalRouter.get(routes.users, (req, res) => res.render("내 상세 페이지"));

export default globalRouter;