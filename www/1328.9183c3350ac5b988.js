"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1328,5704],{3923:(W,f,d)=>{d.d(f,{$o:()=>u,_G:()=>_,Vq:()=>g,SQ:()=>s});var u=function(l){return l.Loaded="applePayLoaded",l.FailedToLoad="applePayFailedToLoad",l.Completed="applePayCompleted",l.Canceled="applePayCanceled",l.Failed="applePayFailed",l.DidSelectShippingContact="applePayDidSelectShippingContact",l.DidCreatePaymentMethod="applePayDidCreatePaymentMethod",l}(u||{}),_=function(l){return l.Loaded="googlePayLoaded",l.FailedToLoad="googlePayFailedToLoad",l.Completed="googlePayCompleted",l.Canceled="googlePayCanceled",l.Failed="googlePayFailed",l}(_||{}),g=function(l){return l.Loaded="paymentFlowLoaded",l.FailedToLoad="paymentFlowFailedToLoad",l.Opened="paymentFlowOpened",l.Created="paymentFlowCreated",l.Completed="paymentFlowCompleted",l.Canceled="paymentFlowCanceled",l.Failed="paymentFlowFailed",l}(g||{}),s=function(l){return l.Loaded="paymentSheetLoaded",l.FailedToLoad="paymentSheetFailedToLoad",l.Completed="paymentSheetCompleted",l.Canceled="paymentSheetCanceled",l.Failed="paymentSheetFailed",l}(s||{})},5704:(W,f,d)=>{d.r(f),d.d(f,{PaymentPage:()=>D});var u=d(467),_=d(177),g=d(4341),s=d(4742),l=d(5083),e=d(3923);const y=(0,l.F3)("Stripe",{web:()=>d.e(1651).then(d.bind(d,1651)).then(m=>new m.StripeWeb)});var x=d(1594),b=d(9350),a=d(4438),R=d(3656),C=d(9568),F=d(1626),S=d(2068);function k(m,i){if(1&m){const c=a.RV6();a.j41(0,"ion-button",4),a.bIt("click",function(){a.eBV(c);const n=a.XpG();return a.Njj(n.close())}),a.EFF(1),a.k0s()}if(2&m){const c=a.XpG();a.R7$(),a.JRh(c.text.cancel)}}function M(m,i){if(1&m){const c=a.RV6();a.j41(0,"ion-content",5)(1,"h3",6),a.EFF(2,"You have insufficient balance in your wallet. Please add "),a.j41(3,"strong"),a.EFF(4),a.k0s(),a.EFF(5," to continue."),a.k0s(),a.nrm(6,"br")(7,"br"),a.j41(8,"ion-row")(9,"ion-col",7),a.nrm(10,"img",8),a.k0s(),a.nrm(11,"br"),a.j41(12,"ion-col",9)(13,"ion-button",10),a.bIt("click",function(){a.eBV(c);const n=a.XpG();return a.Njj(n.addAmountToWallet())}),a.EFF(14),a.nI1(15,"currency"),a.k0s()()()()}if(2&m){const c=a.XpG();a.R7$(4),a.Lme("",c.setting.currency,"",c.data.amount,""),a.R7$(10),a.SpI("Add ",a.i5U(15,3,c.data.amount,"INR")," to Wallet")}}let D=(()=>{var m;class i{constructor(t,n,o,r){this.navParams=t,this.otherService=n,this.http=o,this.server=r,this.options={key:"",amount:0,name:"",description:"The Daily Fruit",image:"",order_id:"",handler:function(O){var I=new CustomEvent("payment.success",{detail:O,bubbles:!0,cancelable:!0});window.dispatchEvent(I)},prefill:{name:"",email:"",contact:""},notes:{address:""},theme:{color:"#3399cc"}},this.message="Not yet stared",this.paymentId="",this.error="",this.data=t.get("data"),this.user_id=localStorage.getItem("user_id");const p=localStorage.getItem("admin_setting"),h=localStorage.getItem("user_data");null!==p&&(this.setting=JSON.parse(p)),null!==h&&(this.user=JSON.parse(h));const v=localStorage.getItem("app_lang");null!==v&&(this.text=JSON.parse(v),this.text=this.text.text),y.initialize({publishableKey:this.data.stripe_key}),this.meta={counsumer_id:778383,consumer_mac:"sdjksfhsd887f8s"},this.customizations={title:"Wallet Recharge",description:"Wallet Recharge",logo:"https://dicont.s3.amazonaws.com/static/flow-logos/flutterwave-logo.png"},this.customerDetails={name:this.user.name,email:this.user.email,phone_number:this.user.phone}}ngOnInit(){}addAmountToWallet(){var t=this;return(0,u.A)(function*(){if(t.data.amount){const n={user_id:t.user_id,amount:t.data.amount,notes:"Add To Wallet\xa0Razorpay"};(yield t.server.createRazorpayOrder(n)).subscribe(o=>{t.options.key=o.razor_key.replace(/\r\n/g,""),t.options.order_id=o.order_id,t.options.amount=Number(o.amount),t.options.name="The Daily Fruit",t.options.prefill.name="The Daily Fruit",t.options.prefill.email="support@thedailyfruit.in",t.options.prefill.contact="9998887776",t.payNow()})}else t.otherService.toast(t.text.enter_amount)})()}payNow(){if(typeof Razorpay>"u")console.error("Razorpay is not loaded yet.");else{var t=new Razorpay(this.options);t.open(),t.on("payment.failed",function(n){console.error("Payment failed",n.error)})}}onPaymentSuccess(t){var n=this;return(0,u.A)(function*(){let o=t.detail,r={razorpay_order_id:null==o?void 0:o.razorpay_order_id,razorpay_payment_id:null==o?void 0:o.razorpay_payment_id,razorpay_signature:null==o?void 0:o.razorpay_signature};(yield n.server.verifyRazorpayOrder(r)).subscribe(p=>{n.otherService.triggerLoadData.emit(),n.otherService.closeModel(p)}),n.message="Success Payment"})()}updateWallet(t=null){var n=this;return(0,u.A)(function*(){const o={amount:n.data.amount,user_id:localStorage.getItem("user_id"),trans_id:t,payment_method:n.payment_method,notes:"Wallet Recharge"};n.server.updateWallet(o).subscribe(r=>{n.payment_method=null,n.otherService.toast(n.text.payment_added),n.close(t)})})()}close(t=null){var n=this;return(0,u.A)(function*(){n.otherService.closeModel(t)})()}httpPost(){const t={user:localStorage.getItem("user_id"),total:this.data.amount};return this.http.post(this.server.getApiUrl()+"stripePayment",t).pipe((0,x.$)())}paymentSheet(){var t=this;return(0,u.A)(function*(){t.payment_method=1;try{y.addListener(e.SQ.Completed,()=>{});const n=t.httpPost(),{paymentIntent:o,ephemeralKey:r,customer:p}=yield function P(m,i){const c="object"==typeof i;return new Promise((t,n)=>{let r,o=!1;m.subscribe({next:p=>{r=p,o=!0},error:n,complete:()=>{o?t(r):c?t(i.defaultValue):n(new b.G)}})})}(n);yield y.createPaymentSheet({paymentIntentClientSecret:o,customerId:p,customerEphemeralKeySecret:r,merchantDisplayName:t.setting.app_name});const h=yield y.presentPaymentSheet();h&&h.paymentResult===e.SQ.Completed?t.updateWallet(t.splitAndJoin(o)):t.otherService.toast(t.text.payment_cancel)}catch{t.otherService.toast(t.text.payment_cancel)}})()}splitAndJoin(t){return t.split("_").slice(0,2).join("_")}payWithRazorpay(){return(0,u.A)(function*(){})()}}return(m=i).\u0275fac=function(t){return new(t||m)(a.rXU(R.y8),a.rXU(C.G),a.rXU(F.Qq),a.rXU(S.Z))},m.\u0275cmp=a.VBU({type:m,selectors:[["app-payment"]],hostBindings:function(t,n){1&t&&a.bIt("payment.success",function(r){return n.onPaymentSuccess(r)},!1,a.tSv)},decls:5,vars:2,consts:[[1,"ion-no-border"],["slot","end"],["color","medium",3,"click",4,"ngIf"],["class","ion-padding",4,"ngIf"],["color","medium",3,"click"],[1,"ion-padding"],[2,"color","black"],["size","12",2,"text-align","center"],["src","assets/razorpay.gif",2,"width","40%","height","auto","border-radius","25px"],["size","12"],["mode","ios","expand","block","color","dark","id","open-modal","expand","block",3,"click"]],template:function(t,n){1&t&&(a.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),a.DNE(3,k,2,1,"ion-button",2),a.k0s()()(),a.DNE(4,M,16,6,"ion-content",3)),2&t&&(a.R7$(3),a.Y8G("ngIf",n.text),a.R7$(),a.Y8G("ngIf",n.data&&n.text))},dependencies:[s.bv,s.Jm,s.QW,s.hU,s.W9,s.eU,s.ln,s.ai,_.MD,_.bT,_.oe,g.YN],styles:["ion-item[_ngcontent-%COMP%]{border-radius:5px;--min-height:60px;border:1px solid #f1f1f1}ion-toolbar[_ngcontent-%COMP%]{--background: white}ion-thumbnail[_ngcontent-%COMP%]{width:32px;height:32px}"]}),i})()},1328:(W,f,d)=>{d.r(f),d.d(f,{WalletPage:()=>m});var u=d(467),_=d(177),g=d(4341),s=d(4742),l=d(5704),e=d(4438),y=d(2068),x=d(9568);function b(i,c){if(1&i&&(e.j41(0,"ion-title"),e.EFF(1),e.k0s()),2&i){const t=e.XpG();e.R7$(),e.JRh(t.text.wallet_title)}}function P(i,c){1&i&&e.nrm(0,"ion-skeleton-text",12),2&i&&e.Y8G("animated",!0)}function a(i,c){if(1&i&&(e.j41(0,"div",6),e.nrm(1,"ion-skeleton-text",7),e.j41(2,"ion-row")(3,"ion-col",8),e.nrm(4,"ion-skeleton-text",9),e.k0s(),e.j41(5,"ion-col",8),e.nrm(6,"ion-skeleton-text",10),e.k0s()(),e.DNE(7,P,1,1,"ion-skeleton-text",11),e.k0s()),2&i){const t=e.XpG(2);e.R7$(),e.Y8G("animated",!0),e.R7$(3),e.Y8G("animated",!0),e.R7$(2),e.Y8G("animated",!0),e.R7$(),e.Y8G("ngForOf",t.fakeData)}}function R(i,c){1&i&&e.nrm(0,"ion-icon",27)}function C(i,c){1&i&&e.nrm(0,"ion-icon",28)}function F(i,c){if(1&i&&(e.j41(0,"ion-item",22)(1,"ion-label",18),e.EFF(2),e.j41(3,"span",23),e.EFF(4),e.nI1(5,"date"),e.k0s(),e.j41(6,"small",24),e.EFF(7),e.k0s()(),e.DNE(8,R,1,0,"ion-icon",25)(9,C,1,0,"ion-icon",26),e.k0s()),2&i){const t=c.$implicit,n=e.XpG(4);e.R7$(2),e.Lme("",n.setting.currency,"",t.amount," "),e.R7$(2),e.JRh(e.i5U(5,6,t.created_at,"dd-MM-yyyy")),e.R7$(3),e.JRh(t.notes),e.R7$(),e.Y8G("ngIf",0==t.type),e.R7$(),e.Y8G("ngIf",1==t.type)}}function S(i,c){if(1&i&&(e.j41(0,"div"),e.DNE(1,F,10,9,"ion-item",21),e.k0s()),2&i){const t=e.XpG(3);e.R7$(),e.Y8G("ngForOf",t.data.trans)}}function k(i,c){if(1&i){const t=e.RV6();e.j41(0,"div")(1,"ion-label",18),e.EFF(2),e.k0s(),e.nrm(3,"br")(4,"br"),e.j41(5,"ion-input",29),e.mxI("ngModelChange",function(o){e.eBV(t);const r=e.XpG(3);return e.DH7(r.amount,o)||(r.amount=o),e.Njj(o)}),e.k0s(),e.nrm(6,"br"),e.j41(7,"ion-button",30),e.bIt("click",function(){e.eBV(t);const o=e.XpG(3);return e.Njj(o.add())}),e.EFF(8),e.k0s()()}if(2&i){const t=e.XpG(3);e.R7$(2),e.JRh(t.text.fund_desc),e.R7$(3),e.R50("ngModel",t.amount),e.R7$(3),e.JRh(t.text.add)}}function M(i,c){if(1&i){const t=e.RV6();e.j41(0,"div"),e.nrm(1,"br"),e.j41(2,"ion-item",13),e.nrm(3,"ion-icon",14),e.j41(4,"ion-label")(5,"div",15)(6,"span"),e.EFF(7),e.k0s(),e.nrm(8,"br"),e.j41(9,"span"),e.EFF(10),e.k0s()()()(),e.nrm(11,"br"),e.j41(12,"ion-segment",16),e.mxI("ngModelChange",function(o){e.eBV(t);const r=e.XpG(2);return e.DH7(r.type,o)||(r.type=o),e.Njj(o)}),e.j41(13,"ion-segment-button",17)(14,"ion-label",18),e.EFF(15),e.k0s()(),e.j41(16,"ion-segment-button",17)(17,"ion-label",18),e.EFF(18),e.k0s()()(),e.j41(19,"div",19),e.DNE(20,S,2,1,"div",20)(21,k,9,3,"div",20),e.k0s()()}if(2&i){const t=e.XpG(2);e.R7$(3),e.xc7("font-size",t.isMobile?"30px":"60px"),e.R7$(3),e.xc7("font-size",t.isMobile?"15px":"20px"),e.R7$(),e.JRh(t.text.avil_balance),e.R7$(2),e.xc7("font-size",t.isMobile?"15px":"20px"),e.R7$(),e.Lme("",t.setting.currency,"",t.data.wallet,""),e.R7$(2),e.R50("ngModel",t.type),e.R7$(),e.Y8G("value",1),e.R7$(2),e.JRh(t.text.trans),e.R7$(),e.Y8G("value",2),e.R7$(2),e.JRh(t.text.add_fund),e.R7$(),e.Y8G("ngSwitch",t.type),e.R7$(),e.Y8G("ngSwitchCase",1),e.R7$(),e.Y8G("ngSwitchCase",2)}}function D(i,c){if(1&i&&(e.j41(0,"ion-content")(1,"ion-grid",4),e.DNE(2,a,8,4,"div",5)(3,M,22,17,"div",2),e.k0s()()),2&i){const t=e.XpG();e.R7$(),e.Y8G("fixed",!0),e.R7$(),e.Y8G("ngIf",!t.data),e.R7$(),e.Y8G("ngIf",t.data)}}let m=(()=>{var i;class c{constructor(n,o,r){this.server=n,this.otherService=o,this.modalCtrl=r,this.type=1,this.fakeData=[1,2,3,4,5,6,7],this.isMobile=!1,this.options={key:"",amount:0,name:"",description:"The Daily Fruit",image:"",order_id:"",handler:function(v){var O=new CustomEvent("payment.success",{detail:v,bubbles:!0,cancelable:!0});window.dispatchEvent(O)},prefill:{name:"",email:"",contact:""},notes:{address:""},theme:{color:"#3399cc"}},this.message="Not yet stared",this.paymentId="",this.error="";const p=localStorage.getItem("admin_setting");this.user_id=localStorage.getItem("user_id"),null!==p&&(this.setting=JSON.parse(p));const h=localStorage.getItem("app_lang");null!==h&&(this.text=JSON.parse(h),this.text=this.text.text)}ngOnInit(){}onResize(n){this.checkScreenSize()}checkScreenSize(){this.isMobile=window.innerWidth<=768}ionViewDidEnter(){this.loadData()}loadData(n=0){var o=this;return(0,u.A)(function*(){o.server.getWallet(n).subscribe(r=>{o.data=r.data,o.amount=null})})()}add(){var n=this;return(0,u.A)(function*(){if(n.amount){const o={user_id:n.user_id,amount:n.amount,notes:"Add To Wallet\xa0Razorpay"};(yield n.server.createRazorpayOrder(o)).subscribe(r=>{n.options.key=r.razor_key.replace(/\r\n/g,""),n.options.order_id=r.order_id,n.options.amount=Number(r.amount),n.options.name="The Daily Fruit",n.options.prefill.name="The Daily Fruit",n.options.prefill.email="support@thedailyfruit.in",n.options.prefill.contact="9998887776",n.payNow()})}else n.otherService.toast(n.text.enter_amount)})()}payNow(){if(typeof Razorpay>"u")console.error("Razorpay is not loaded yet.");else{var n=new Razorpay(this.options);n.open(),n.on("payment.failed",function(o){console.error("Payment failed",o.error)})}}onPaymentSuccess(n){var o=this;return(0,u.A)(function*(){let r=n.detail,p={razorpay_order_id:null==r?void 0:r.razorpay_order_id,razorpay_payment_id:null==r?void 0:r.razorpay_payment_id,razorpay_signature:null==r?void 0:r.razorpay_signature};(yield o.server.verifyRazorpayOrder(p)).subscribe(h=>{window.location.reload()}),o.message="Success Payment"})()}openModel(n){var o=this;return(0,u.A)(function*(){const r=yield o.modalCtrl.create({component:l.PaymentPage,animated:!0,mode:"ios",componentProps:{data:n}});return r.onDidDismiss().then(p=>{p.data?o.loadData():o.otherService.toast(o.text.payment_cancel)}),yield r.present()})()}}return(i=c).\u0275fac=function(n){return new(n||i)(e.rXU(y.Z),e.rXU(x.G),e.rXU(s.W3))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-wallet"]],hostBindings:function(n,o){1&n&&e.bIt("resize",function(p){return o.onResize(p)},!1,e.tSv)("payment.success",function(p){return o.onPaymentSuccess(p)},!1,e.tSv)},decls:6,vars:2,consts:[[1,"ion-no-border"],["color","dark"],[4,"ngIf"],["slot","start"],[3,"fixed"],["class","ion-padding",4,"ngIf"],[1,"ion-padding"],[1,"sek1",3,"animated"],["size","6"],[1,"sek2",3,"animated"],[1,"sek3",3,"animated"],["class","sek4",3,"animated",4,"ngFor","ngForOf"],[1,"sek4",3,"animated"],["lines","none","mode","md",1,"wallet"],["name","wallet","slot","start","color","light"],[2,"display","block","gap","8px"],["value","1","color","dark","mode","md",3,"ngModelChange","ngModel"],[3,"value"],[1,"item-label"],[1,"ion-padding","bottom",3,"ngSwitch"],[4,"ngSwitchCase"],["lines","full",4,"ngFor","ngForOf"],["lines","full"],[2,"float","right"],[1,"notes"],["name","add-outline","color","success","slot","start",4,"ngIf"],["name","remove-circle-outline","color","danger","slot","start",4,"ngIf"],["name","add-outline","color","success","slot","start"],["name","remove-circle-outline","color","danger","slot","start"],["label","Enter Amount","label-placement","floating","fill","outline","type","tel","maxlength","10","name","amount","mode","md",3,"ngModelChange","ngModel"],["mode","ios","expand","block","color","dark",3,"click"]],template:function(n,o){1&n&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1),e.DNE(2,b,2,1,"ion-title",2),e.j41(3,"ion-buttons",3),e.nrm(4,"ion-back-button"),e.k0s()()(),e.DNE(5,D,4,3,"ion-content",2)),2&n&&(e.R7$(2),e.Y8G("ngIf",o.text),e.R7$(3),e.Y8G("ngIf",o.text))},dependencies:[s.bv,s.Jm,s.QW,s.hU,s.W9,s.lO,s.eU,s.iq,s.$w,s.uz,s.he,s.ln,s.Gp,s.eP,s.ds,s.BC,s.ai,s.Je,s.Gw,s.el,_.MD,_.Sq,_.bT,_.ux,_.e1,_.vh,g.YN,g.BC,g.tU,g.vS],styles:[".wallet[_ngcontent-%COMP%]{--min-height: 100px;--padding-start: 20px;--padding-end: 20px;--background:var(--ion-color-dark);color:#fff;border-radius:10px;width:90%;margin:auto}ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}.bottom[_ngcontent-%COMP%]{background-color:#fff;width:90%;margin:20px auto auto;border-radius:10px}ion-segment[_ngcontent-%COMP%], ion-segment-button[_ngcontent-%COMP%]{background-color:#fff;width:90%;margin:auto;border-radius:10px;color:#000!important}ion-item[_ngcontent-%COMP%]{--background: white}.item-label[_ngcontent-%COMP%]{color:#000}.sek1[_ngcontent-%COMP%]{width:100%;height:100px;border-radius:10px}.sek2[_ngcontent-%COMP%], .sek3[_ngcontent-%COMP%]{width:100%;height:40px;border-radius:10px}.sek4[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:10px;margin-top:20px}.wallet[_ngcontent-%COMP%]{margin-top:10px;font-size:28px;font-weight:600;color:#fff}.notes[_ngcontent-%COMP%]{display:block;margin-top:5px;color:gray}ion-input[_ngcontent-%COMP%]{color:#000!important}"]}),c})()}}]);