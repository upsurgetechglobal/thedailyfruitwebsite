"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4364],{4364:(I,u,a)=>{a.r(u),a.d(u,{OtpPage:()=>v});var h=a(177),l=a(4341),r=a(4742),t=a(4438),g=a(2068),d=a(9568);function f(s,_){if(1&s){const c=t.RV6();t.j41(0,"ion-row",18)(1,"ion-col",19)(2,"ion-input",20,1),t.bIt("ionInput",function(e){t.eBV(c);const o=t.sdS(6),i=t.XpG();return t.Njj(i.otpChange(e,o,""))}),t.k0s()(),t.j41(4,"ion-col",19)(5,"ion-input",21,2),t.bIt("ionInput",function(e){t.eBV(c);const o=t.sdS(3),i=t.sdS(9),p=t.XpG();return t.Njj(p.otpChange(e,i,o))}),t.k0s()(),t.j41(7,"ion-col",19)(8,"ion-input",22,3),t.bIt("ionInput",function(e){t.eBV(c);const o=t.sdS(6),i=t.sdS(12),p=t.XpG();return t.Njj(p.otpChange(e,i,o))}),t.k0s()(),t.j41(10,"ion-col",19)(11,"ion-input",23,4),t.bIt("ionInput",function(e){t.eBV(c);const o=t.sdS(9),i=t.XpG();return t.Njj(i.otpChange(e,"",o))}),t.k0s()()()}}function m(s,_){1&s&&(t.j41(0,"p",24),t.nrm(1,"ion-spinner",25),t.k0s())}function O(s,_){if(1&s&&(t.j41(0,"ion-button",26),t.EFF(1),t.k0s()),2&s){const c=t.XpG();t.R7$(),t.JRh(c.text.verify)}}let v=(()=>{var s;class _{constructor(n,e){this.server=n,this.otherService=e,this.OTP="",this.hasClick=!1,this.isMobile=!1;const o=localStorage.getItem("user_res");null!==o&&(this.res=JSON.parse(o));const i=localStorage.getItem("app_lang");null!==i&&(this.text=JSON.parse(i),this.text=this.text.text),this.title=3==this.res.codeSent?this.text.verify_email:this.text.verify_phone,this.desc=3==this.res.codeSent?this.text.email_code_sent:this.text.phone_code_sent,this.checkScreenSize()}onResize(n){this.checkScreenSize()}checkScreenSize(){this.isMobile=window.innerWidth<=768}ngOnInit(){}ionViewWillEnter(){this.otherService.statusBar("#ffc927",2)}otpChange(n,e,o){if(n.target.value.length<1&&o)o.setFocus();else{if(!(e&&n.target.value.length>0))return 0;e.setFocus()}return 0}verify(n){if(!(n.otp_1&&n.otp_2&&n.otp_3&&n.otp_4))return this.otherService.toast(this.text.valid_otp);this.hasClick=!0,this.server.verifyOtp(n,this.res.user.id).subscribe(e=>{this.hasClick=!1,"done"!=e.msg?this.otherService.toast(e.error):0==this.res.user.status?(localStorage.setItem("user_id",e.user.id),localStorage.setItem("user_data",JSON.stringify(e.user)),this.otherService.toast(this.text.account_created),localStorage.getItem("cart_no")&&null!=localStorage.getItem("cart_no")?this.otherService.redirect("cart","root"):this.otherService.redirect("account","root")):(localStorage.setItem("temp_user_id",e.user.id),this.otherService.redirect("password","root"))})}resend(){this.hasClick=!0,this.server.resendCode(this.res.user.id).subscribe(n=>{this.hasClick=!1,this.otherService.toast(this.text.new_code_sent)})}}return(s=_).\u0275fac=function(n){return new(n||s)(t.rXU(g.Z),t.rXU(d.G))},s.\u0275cmp=t.VBU({type:s,selectors:[["app-otp"]],hostBindings:function(n,e){1&n&&t.bIt("resize",function(i){return e.onResize(i)},!1,t.tSv)},decls:26,vars:11,consts:[["form","ngForm"],["otp1",""],["otp2",""],["otp3",""],["otp4",""],[1,"ion-no-border"],["color","dark"],[1,"ion-padding",3,"fullscreen"],[3,"fixed"],[3,"size"],["src","assets/otp2.svg",2,"width","80%","margin-left","10%"],[3,"ngSubmit"],[2,"font-size","14px","color","gray"],["style","text-align: center;",4,"ngIf"],["align","center",4,"ngIf"],["mode","ios","expand","block","color","dark","type","submit",4,"ngIf"],["align","center",2,"color","gray","font-size","14px"],[3,"click"],[2,"text-align","center"],["size","3"],["type","tel","maxlength","1","name","otp_1","ngModel","",3,"ionInput"],["type","tel","maxlength","1","name","otp_2","ngModel","",3,"ionInput"],["type","tel","maxlength","1","name","otp_3","ngModel","",3,"ionInput"],["type","tel","maxlength","1","name","otp_4","ngModel","",3,"ionInput"],["align","center"],["name","crescent"],["mode","ios","expand","block","color","dark","type","submit"]],template:function(n,e){if(1&n){const o=t.RV6();t.j41(0,"ion-header",5)(1,"ion-toolbar",6)(2,"ion-buttons"),t.nrm(3,"ion-back-button"),t.k0s()()(),t.j41(4,"ion-content",7)(5,"ion-grid",8)(6,"ion-row")(7,"ion-col",9),t.nrm(8,"img",10),t.k0s(),t.j41(9,"ion-col",9)(10,"form",11,0),t.bIt("ngSubmit",function(){t.eBV(o);const p=t.sdS(11);return t.Njj(e.verify(p.value))}),t.j41(12,"h2"),t.EFF(13),t.k0s(),t.j41(14,"p",12),t.EFF(15),t.k0s(),t.nrm(16,"br"),t.DNE(17,f,13,0,"ion-row",13)(18,m,2,0,"p",14),t.nrm(19,"br"),t.DNE(20,O,2,1,"ion-button",15),t.nrm(21,"br"),t.j41(22,"p",16),t.EFF(23),t.j41(24,"a",17),t.bIt("click",function(){return t.eBV(o),t.Njj(e.resend())}),t.EFF(25),t.k0s()()()()()()()}2&n&&(t.R7$(4),t.Y8G("fullscreen",!0),t.R7$(),t.Y8G("fixed",!0),t.R7$(2),t.Y8G("size",e.isMobile?12:6),t.R7$(2),t.Y8G("size",e.isMobile?12:6),t.R7$(4),t.JRh(e.title),t.R7$(2),t.JRh(e.desc),t.R7$(2),t.Y8G("ngIf",!e.hasClick),t.R7$(),t.Y8G("ngIf",e.hasClick),t.R7$(2),t.Y8G("ngIf",!e.hasClick),t.R7$(3),t.SpI("",e.text.dont_otp," "),t.R7$(2),t.JRh(e.text.resend_code))},dependencies:[r.bv,r.Jm,r.QW,r.hU,r.W9,r.lO,r.eU,r.$w,r.ln,r.w2,r.ai,r.Gw,r.el,h.MD,h.bT,l.YN,l.qT,l.BC,l.cb,l.tU,l.vS,l.cV],styles:["ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-footer[_ngcontent-%COMP%]{background:#fff;border-top-right-radius:30px;border-top-left-radius:30px}h4[_ngcontent-%COMP%]{font-weight:700}p[_ngcontent-%COMP%]{color:gray}ion-input[_ngcontent-%COMP%]{border-radius:10px!important}ion-input[_ngcontent-%COMP%]{display:inline-block;width:50px;height:50px;margin:10px;border-radius:50%;--background:#e1e1e1;--padding-start:7px}"]}),_})()}}]);