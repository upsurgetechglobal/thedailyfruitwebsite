"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2068,4364],{4364:(v,m,c)=>{c.r(m),c.d(m,{OtpPage:()=>r});var i=c(177),g=c(4341),a=c(4742),t=c(4438),f=c(2068),h=c(9568);function S(l,_){if(1&l){const u=t.RV6();t.j41(0,"ion-row",18)(1,"ion-col",19)(2,"ion-input",20,1),t.bIt("ionInput",function(o){t.eBV(u);const s=t.sdS(6),p=t.XpG();return t.Njj(p.otpChange(o,s,""))}),t.k0s()(),t.j41(4,"ion-col",19)(5,"ion-input",21,2),t.bIt("ionInput",function(o){t.eBV(u);const s=t.sdS(3),p=t.sdS(9),d=t.XpG();return t.Njj(d.otpChange(o,p,s))}),t.k0s()(),t.j41(7,"ion-col",19)(8,"ion-input",22,3),t.bIt("ionInput",function(o){t.eBV(u);const s=t.sdS(6),p=t.sdS(12),d=t.XpG();return t.Njj(d.otpChange(o,p,s))}),t.k0s()(),t.j41(10,"ion-col",19)(11,"ion-input",23,4),t.bIt("ionInput",function(o){t.eBV(u);const s=t.sdS(9),p=t.XpG();return t.Njj(p.otpChange(o,"",s))}),t.k0s()()()}}function I(l,_){1&l&&(t.j41(0,"p",24),t.nrm(1,"ion-spinner",25),t.k0s())}function e(l,_){if(1&l&&(t.j41(0,"ion-button",26),t.EFF(1),t.k0s()),2&l){const u=t.XpG();t.R7$(),t.JRh(u.text.verify)}}let r=(()=>{var l;class _{constructor(n,o){this.server=n,this.otherService=o,this.OTP="",this.hasClick=!1,this.isMobile=!1;const s=localStorage.getItem("user_res");null!==s&&(this.res=JSON.parse(s));const p=localStorage.getItem("app_lang");null!==p&&(this.text=JSON.parse(p),this.text=this.text.text),this.title=3==this.res.codeSent?this.text.verify_email:this.text.verify_phone,this.desc=3==this.res.codeSent?this.text.email_code_sent:this.text.phone_code_sent,this.checkScreenSize()}onResize(n){this.checkScreenSize()}checkScreenSize(){this.isMobile=window.innerWidth<=768}ngOnInit(){}ionViewWillEnter(){this.otherService.statusBar("#ffc927",2)}otpChange(n,o,s){if(n.target.value.length<1&&s)s.setFocus();else{if(!(o&&n.target.value.length>0))return 0;o.setFocus()}return 0}verify(n){if(!(n.otp_1&&n.otp_2&&n.otp_3&&n.otp_4))return this.otherService.toast(this.text.valid_otp);this.hasClick=!0,this.server.verifyOtp(n,this.res.user.id).subscribe(o=>{this.hasClick=!1,"done"!=o.msg?this.otherService.toast(o.error):0==this.res.user.status?(localStorage.setItem("user_id",o.user.id),localStorage.setItem("user_data",JSON.stringify(o.user)),this.otherService.toast(this.text.account_created),localStorage.getItem("cart_no")&&null!=localStorage.getItem("cart_no")?this.otherService.redirect("cart","root"):this.otherService.redirect("account","root")):(localStorage.setItem("temp_user_id",o.user.id),this.otherService.redirect("password","root"))})}resend(){this.hasClick=!0,this.server.resendCode(this.res.user.id).subscribe(n=>{this.hasClick=!1,this.otherService.toast(this.text.new_code_sent)})}}return(l=_).\u0275fac=function(n){return new(n||l)(t.rXU(f.Z),t.rXU(h.G))},l.\u0275cmp=t.VBU({type:l,selectors:[["app-otp"]],hostBindings:function(n,o){1&n&&t.bIt("resize",function(p){return o.onResize(p)},!1,t.tSv)},decls:26,vars:11,consts:[["form","ngForm"],["otp1",""],["otp2",""],["otp3",""],["otp4",""],[1,"ion-no-border"],["color","dark"],[1,"ion-padding",3,"fullscreen"],[3,"fixed"],[3,"size"],["src","assets/otp2.svg",2,"width","80%","margin-left","10%"],[3,"ngSubmit"],[2,"font-size","14px","color","gray"],["style","text-align: center;",4,"ngIf"],["align","center",4,"ngIf"],["mode","ios","expand","block","color","dark","type","submit",4,"ngIf"],["align","center",2,"color","gray","font-size","14px"],[3,"click"],[2,"text-align","center"],["size","3"],["type","tel","maxlength","1","name","otp_1","ngModel","",3,"ionInput"],["type","tel","maxlength","1","name","otp_2","ngModel","",3,"ionInput"],["type","tel","maxlength","1","name","otp_3","ngModel","",3,"ionInput"],["type","tel","maxlength","1","name","otp_4","ngModel","",3,"ionInput"],["align","center"],["name","crescent"],["mode","ios","expand","block","color","dark","type","submit"]],template:function(n,o){if(1&n){const s=t.RV6();t.j41(0,"ion-header",5)(1,"ion-toolbar",6)(2,"ion-buttons"),t.nrm(3,"ion-back-button"),t.k0s()()(),t.j41(4,"ion-content",7)(5,"ion-grid",8)(6,"ion-row")(7,"ion-col",9),t.nrm(8,"img",10),t.k0s(),t.j41(9,"ion-col",9)(10,"form",11,0),t.bIt("ngSubmit",function(){t.eBV(s);const d=t.sdS(11);return t.Njj(o.verify(d.value))}),t.j41(12,"h2"),t.EFF(13),t.k0s(),t.j41(14,"p",12),t.EFF(15),t.k0s(),t.nrm(16,"br"),t.DNE(17,S,13,0,"ion-row",13)(18,I,2,0,"p",14),t.nrm(19,"br"),t.DNE(20,e,2,1,"ion-button",15),t.nrm(21,"br"),t.j41(22,"p",16),t.EFF(23),t.j41(24,"a",17),t.bIt("click",function(){return t.eBV(s),t.Njj(o.resend())}),t.EFF(25),t.k0s()()()()()()()}2&n&&(t.R7$(4),t.Y8G("fullscreen",!0),t.R7$(),t.Y8G("fixed",!0),t.R7$(2),t.Y8G("size",o.isMobile?12:6),t.R7$(2),t.Y8G("size",o.isMobile?12:6),t.R7$(4),t.JRh(o.title),t.R7$(2),t.JRh(o.desc),t.R7$(2),t.Y8G("ngIf",!o.hasClick),t.R7$(),t.Y8G("ngIf",o.hasClick),t.R7$(2),t.Y8G("ngIf",!o.hasClick),t.R7$(3),t.SpI("",o.text.dont_otp," "),t.R7$(2),t.JRh(o.text.resend_code))},dependencies:[a.bv,a.Jm,a.QW,a.hU,a.W9,a.lO,a.eU,a.$w,a.ln,a.w2,a.ai,a.Gw,a.el,i.MD,i.bT,g.YN,g.qT,g.BC,g.cb,g.tU,g.vS,g.cV],styles:["ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-footer[_ngcontent-%COMP%]{background:#fff;border-top-right-radius:30px;border-top-left-radius:30px}h4[_ngcontent-%COMP%]{font-weight:700}p[_ngcontent-%COMP%]{color:gray}ion-input[_ngcontent-%COMP%]{border-radius:10px!important}ion-input[_ngcontent-%COMP%]{display:inline-block;width:50px;height:50px;margin:10px;border-radius:50%;--background:#e1e1e1;--padding-start:7px}"]}),_})()},2068:(v,m,c)=>{c.d(m,{Z:()=>f});var i=c(6354);var a=c(4438),t=c(1626);let f=(()=>{var h;class S{constructor(e){this.http=e,this.url="http://localhost/daily_fruit_admin/api/"}welcome(){return this.http.get(this.url+"welcome").pipe((0,i.T)(e=>e))}homepage(){return this.http.get(this.url+"homepage?lat="+localStorage.getItem("current_lat")+"&lng="+localStorage.getItem("current_lng")+"&cart_no="+localStorage.getItem("cart_no")+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(e=>e))}view(e){return this.http.get(this.url+"view?lat="+localStorage.getItem("current_lat")+"&lng="+localStorage.getItem("current_lng")+"&type="+e+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(r=>r))}item(e){return this.http.get(this.url+"getItem?store_id="+e+"&cart_no="+localStorage.getItem("cart_no")+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(r=>r))}add_to_cart(e){return this.http.post(this.url+"add_to_cart",e).pipe((0,i.T)(r=>r))}getCart(e=0){return this.http.get(this.url+"getCart?cart_no="+localStorage.getItem("cart_no")+"&cart_remove_id="+e+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(r=>r))}signup(e){return this.http.post(this.url+"signup",e).pipe((0,i.T)(r=>r))}login(e){return this.http.post(this.url+"login",e).pipe((0,i.T)(r=>r))}resendCode(e){return this.http.get(this.url+"resendCode?id="+e).pipe((0,i.T)(r=>r))}verifyOtp(e,r){return this.http.post(this.url+"verifyOtp?id="+r,e).pipe((0,i.T)(l=>l))}forgot(e){return this.http.post(this.url+"forgot",e).pipe((0,i.T)(r=>r))}resetPassword(e,r){return this.http.post(this.url+"resetPassword?id="+r,e).pipe((0,i.T)(l=>l))}checkoutData(){return this.http.get(this.url+"checkoutData?user_id="+localStorage.getItem("user_id")+"&cart_no="+localStorage.getItem("cart_no")+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(e=>e))}saveAddress(e){return this.http.post(this.url+"saveAddress",e).pipe((0,i.T)(r=>r))}getAddress(){return this.http.get(this.url+"getAddress?user_id="+localStorage.getItem("user_id")+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(e=>e))}getAmount(e){return this.http.post(this.url+"getAmount",e).pipe((0,i.T)(r=>r))}updateDays(e){return this.http.post(this.url+"updateDays?cart_no="+localStorage.getItem("cart_no"),e).pipe((0,i.T)(r=>r))}placeOrder(e){return this.http.post(this.url+"placeOrder",e).pipe((0,i.T)(r=>r))}updateWallet(e){return this.http.post(this.url+"updateWallet",e).pipe((0,i.T)(r=>r))}getWallet(e=0){return this.http.get(this.url+"getWallet?user_id="+localStorage.getItem("user_id")+"&amount="+e+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(r=>r))}subscription(){return this.http.get(this.url+"subscription?user_id="+localStorage.getItem("user_id")+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(e=>e))}mark(e){return this.http.post(this.url+"mark",e).pipe((0,i.T)(r=>r))}undo(e){return this.http.get(this.url+"undo?id="+e).pipe((0,i.T)(r=>r))}account(){return this.http.get(this.url+"account?user_id="+localStorage.getItem("user_id")+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(e=>e))}deleteAccount(){return this.http.get(this.url+"deleteAccount?user_id="+localStorage.getItem("user_id")+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(e=>e))}deleteAddress(e){return this.http.get(this.url+"deleteAddress?user_id="+localStorage.getItem("user_id")+"&id="+e+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(r=>r))}updateData(e){return this.http.post(this.url+"updateData?user_id="+localStorage.getItem("user_id"),e).pipe((0,i.T)(r=>r))}stop(e){return this.http.get(this.url+"stop?user_id="+localStorage.getItem("user_id")+"&detail_id="+e+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(r=>r))}customCart(e){return this.http.post(this.url+"customCart",e).pipe((0,i.T)(r=>r))}review(e){return this.http.post(this.url+"review",e).pipe((0,i.T)(r=>r))}search(e){return this.http.get(this.url+"search?q="+e+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(r=>r))}language(){return this.http.get(this.url+"language").pipe((0,i.T)(e=>e))}page(){return this.http.get(this.url+"page?lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(e=>e))}contact(e){return this.http.post(this.url+"contact",e).pipe((0,i.T)(r=>r))}getApiUrl(){return this.url}}return(h=S).\u0275fac=function(e){return new(e||h)(a.KVO(t.Qq))},h.\u0275prov=a.jDH({token:h,factory:h.\u0275fac,providedIn:"root"}),S})()}}]);