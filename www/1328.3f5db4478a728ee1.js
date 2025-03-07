"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1328,2068,5704],{3923:(T,y,p)=>{p.d(y,{$o:()=>l,_G:()=>_,Vq:()=>f,SQ:()=>s});var l=function(d){return d.Loaded="applePayLoaded",d.FailedToLoad="applePayFailedToLoad",d.Completed="applePayCompleted",d.Canceled="applePayCanceled",d.Failed="applePayFailed",d.DidSelectShippingContact="applePayDidSelectShippingContact",d.DidCreatePaymentMethod="applePayDidCreatePaymentMethod",d}(l||{}),_=function(d){return d.Loaded="googlePayLoaded",d.FailedToLoad="googlePayFailedToLoad",d.Completed="googlePayCompleted",d.Canceled="googlePayCanceled",d.Failed="googlePayFailed",d}(_||{}),f=function(d){return d.Loaded="paymentFlowLoaded",d.FailedToLoad="paymentFlowFailedToLoad",d.Opened="paymentFlowOpened",d.Created="paymentFlowCreated",d.Completed="paymentFlowCompleted",d.Canceled="paymentFlowCanceled",d.Failed="paymentFlowFailed",d}(f||{}),s=function(d){return d.Loaded="paymentSheetLoaded",d.FailedToLoad="paymentSheetFailedToLoad",d.Completed="paymentSheetCompleted",d.Canceled="paymentSheetCanceled",d.Failed="paymentSheetFailed",d}(s||{})},5704:(T,y,p)=>{p.r(y),p.d(y,{PaymentPage:()=>m});var l=p(467),_=p(177),f=p(4341),s=p(4742),d=p(5083),t=p(3923);const v=(0,d.F3)("Stripe",{web:()=>p.e(1651).then(p.bind(p,1651)).then(o=>new o.StripeWeb)});var P=p(1594),n=p(9350),e=p(4438),C=p(3656),R=p(9568),F=p(1626),b=p(2068);function k(o,u){if(1&o){const r=e.RV6();e.j41(0,"ion-button",4),e.bIt("click",function(){e.eBV(r);const c=e.XpG();return e.Njj(c.close())}),e.EFF(1),e.k0s()}if(2&o){const r=e.XpG();e.R7$(),e.JRh(r.text.cancel)}}function D(o,u){1&o&&e.nrm(0,"ion-spinner",13)}function j(o,u){if(1&o){const r=e.RV6();e.j41(0,"ion-item",8),e.bIt("click",function(){e.eBV(r);const c=e.XpG(2);return e.Njj(c.paymentSheet())}),e.j41(1,"ion-thumbnail",9),e.nrm(2,"img",12),e.k0s(),e.j41(3,"ion-label"),e.EFF(4),e.k0s(),e.DNE(5,D,1,0,"ion-spinner",11),e.k0s()}if(2&o){const r=e.XpG(2);e.R7$(4),e.JRh(r.text.credit),e.R7$(),e.Y8G("ngIf",1==r.payment_method)}}function M(o,u){1&o&&e.nrm(0,"ion-spinner",13)}function g(o,u){if(1&o){const r=e.RV6();e.j41(0,"ion-content",5)(1,"h3"),e.EFF(2),e.j41(3,"ion-badge",6),e.EFF(4),e.k0s()(),e.nrm(5,"br")(6,"br"),e.DNE(7,j,6,2,"ion-item",7),e.nrm(8,"br"),e.j41(9,"ion-item",8),e.bIt("click",function(){e.eBV(r);const c=e.XpG();return e.Njj(c.payWithRazorpay())}),e.j41(10,"ion-label"),e.EFF(11),e.k0s(),e.j41(12,"ion-thumbnail",9),e.nrm(13,"img",10),e.k0s(),e.DNE(14,M,1,0,"ion-spinner",11),e.k0s(),e.nrm(15,"br")(16,"br")(17,"br")(18,"br"),e.j41(19,"b"),e.EFF(20,"For stripe use these Test card detail : "),e.k0s(),e.j41(21,"p"),e.EFF(22,"Card No : 4242 4242 4242 4242"),e.k0s(),e.j41(23,"p"),e.EFF(24,"Exp. 12/25 CVV : 321"),e.k0s()()}if(2&o){const r=e.XpG();e.R7$(2),e.SpI("",r.text.select_payment_method," "),e.R7$(2),e.Lme("",r.setting.currency,"",r.data.amount,""),e.R7$(3),e.Y8G("ngIf",r.setting.stripe_key),e.R7$(4),e.SpI(" ",r.text.upi,""),e.R7$(3),e.Y8G("ngIf",2==r.payment_method)}}let m=(()=>{var o;class u{constructor(a,c,h,x){this.navParams=a,this.otherService=c,this.http=h,this.server=x,this.data=a.get("data");const S=localStorage.getItem("admin_setting"),I=localStorage.getItem("user_data");null!==S&&(this.setting=JSON.parse(S)),null!==I&&(this.user=JSON.parse(I));const O=localStorage.getItem("app_lang");null!==O&&(this.text=JSON.parse(O),this.text=this.text.text),v.initialize({publishableKey:this.data.stripe_key}),this.meta={counsumer_id:778383,consumer_mac:"sdjksfhsd887f8s"},this.customizations={title:"Wallet Recharge",description:"Wallet Recharge",logo:"https://dicont.s3.amazonaws.com/static/flow-logos/flutterwave-logo.png"},this.customerDetails={name:this.user.name,email:this.user.email,phone_number:this.user.phone}}ngOnInit(){}updateWallet(a=null){var c=this;return(0,l.A)(function*(){const h={amount:c.data.amount,user_id:localStorage.getItem("user_id"),trans_id:a,payment_method:c.payment_method,notes:"Wallet Recharge"};c.server.updateWallet(h).subscribe(x=>{c.payment_method=null,c.otherService.toast(c.text.payment_added),c.close(a)})})()}close(a=null){var c=this;return(0,l.A)(function*(){c.otherService.closeModel(a)})()}httpPost(){const a={user:localStorage.getItem("user_id"),total:this.data.amount};return this.http.post(this.server.getApiUrl()+"stripePayment",a).pipe((0,P.$)())}paymentSheet(){var a=this;return(0,l.A)(function*(){a.payment_method=1;try{v.addListener(t.SQ.Completed,()=>{console.log("PaymentSheetEventsEnum.Completed")});const c=a.httpPost();console.log(c);const{paymentIntent:h,ephemeralKey:x,customer:S}=yield function i(o,u){const r="object"==typeof u;return new Promise((a,c)=>{let x,h=!1;o.subscribe({next:S=>{x=S,h=!0},error:c,complete:()=>{h?a(x):r?a(u.defaultValue):c(new n.G)}})})}(c);yield v.createPaymentSheet({paymentIntentClientSecret:h,customerId:S,customerEphemeralKeySecret:x,merchantDisplayName:a.setting.app_name});const I=yield v.presentPaymentSheet();console.log("result: ",I),I&&I.paymentResult===t.SQ.Completed?a.updateWallet(a.splitAndJoin(h)):a.otherService.toast(a.text.payment_cancel)}catch{a.otherService.toast(a.text.payment_cancel)}})()}splitAndJoin(a){const c=a.split("_").slice(0,2).join("_");return console.log(c),c}payWithRazorpay(){var a=this;return(0,l.A)(function*(){RazorpayCheckout.open({description:"Pay Now",image:"https://cdn.iconscout.com/icon/free/png-512/bhim-3-69845.png",currency:"INR",key:a.setting.razor_key,amount:100*a.data.amount,name:a.user.name,prefill:{email:a.user.email,contact:a.user.phone},theme:{color:"#2196f3"},modal:{ondismiss:function(){alert("dismissed")}}},S=>{a.updateWallet(Date.now())},S=>{a.otherService.toast(a.text.payment_cancel)})})()}}return(o=u).\u0275fac=function(a){return new(a||o)(e.rXU(C.y8),e.rXU(R.G),e.rXU(F.Qq),e.rXU(b.Z))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-payment"]],decls:5,vars:2,consts:[[1,"ion-no-border"],["slot","end"],["color","medium",3,"click",4,"ngIf"],["class","ion-padding",4,"ngIf"],["color","medium",3,"click"],[1,"ion-padding"],["color","dark",2,"float","right","margin-top","5px"],["lines","none","detail","",3,"click",4,"ngIf"],["lines","none","detail","",3,"click"],["slot","start"],["src","assets/razor.png"],["name","crescent","slot","end",4,"ngIf"],["src","assets/stripe.png"],["name","crescent","slot","end"]],template:function(a,c){1&a&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.DNE(3,k,2,1,"ion-button",2),e.k0s()()(),e.DNE(4,g,25,6,"ion-content",3)),2&a&&(e.R7$(3),e.Y8G("ngIf",c.text),e.R7$(),e.Y8G("ngIf",c.data&&c.text))},dependencies:[s.bv,s.In,s.Jm,s.QW,s.W9,s.eU,s.uz,s.he,s.w2,s.Zx,s.ai,_.MD,_.bT,f.YN],styles:["ion-item[_ngcontent-%COMP%]{border-radius:5px;--min-height:60px;border:1px solid #f1f1f1}ion-toolbar[_ngcontent-%COMP%]{--background: white}ion-thumbnail[_ngcontent-%COMP%]{width:32px;height:32px}"]}),u})()},2068:(T,y,p)=>{p.d(y,{Z:()=>d});var l=p(6354);var f=p(4438),s=p(1626);let d=(()=>{var t;class v{constructor(n){this.http=n,this.url="http://ec2-13-203-97-31.ap-south-1.compute.amazonaws.com/admin/api/"}welcome(){return this.http.get(this.url+"welcome").pipe((0,l.T)(n=>n))}homepage(){return this.http.get(this.url+"homepage?lat="+localStorage.getItem("current_lat")+"&lng="+localStorage.getItem("current_lng")+"&cart_no="+localStorage.getItem("cart_no")+"&lid="+localStorage.getItem("lang_id")).pipe((0,l.T)(n=>n))}view(n){return this.http.get(this.url+"view?lat="+localStorage.getItem("current_lat")+"&lng="+localStorage.getItem("current_lng")+"&type="+n+"&lid="+localStorage.getItem("lang_id")).pipe((0,l.T)(i=>i))}item(n){return this.http.get(this.url+"getItem?store_id="+n+"&cart_no="+localStorage.getItem("cart_no")+"&lid="+localStorage.getItem("lang_id")).pipe((0,l.T)(i=>i))}add_to_cart(n){return this.http.post(this.url+"add_to_cart",n).pipe((0,l.T)(i=>i))}getCart(n=0){return this.http.get(this.url+"getCart?cart_no="+localStorage.getItem("cart_no")+"&cart_remove_id="+n+"&lid="+localStorage.getItem("lang_id")).pipe((0,l.T)(i=>i))}signup(n){return this.http.post(this.url+"signup",n).pipe((0,l.T)(i=>i))}login(n){return this.http.post(this.url+"login",n).pipe((0,l.T)(i=>i))}resendCode(n){return this.http.get(this.url+"resendCode?id="+n).pipe((0,l.T)(i=>i))}verifyOtp(n,i){return this.http.post(this.url+"verifyOtp?id="+i,n).pipe((0,l.T)(e=>e))}forgot(n){return this.http.post(this.url+"forgot",n).pipe((0,l.T)(i=>i))}resetPassword(n,i){return this.http.post(this.url+"resetPassword?id="+i,n).pipe((0,l.T)(e=>e))}checkoutData(){return this.http.get(this.url+"checkoutData?user_id="+localStorage.getItem("user_id")+"&cart_no="+localStorage.getItem("cart_no")+"&lid="+localStorage.getItem("lang_id")).pipe((0,l.T)(n=>n))}saveAddress(n){return this.http.post(this.url+"saveAddress",n).pipe((0,l.T)(i=>i))}getAddress(){return this.http.get(this.url+"getAddress?user_id="+localStorage.getItem("user_id")+"&lid="+localStorage.getItem("lang_id")).pipe((0,l.T)(n=>n))}getAmount(n){return this.http.post(this.url+"getAmount",n).pipe((0,l.T)(i=>i))}updateDays(n){return this.http.post(this.url+"updateDays?cart_no="+localStorage.getItem("cart_no"),n).pipe((0,l.T)(i=>i))}placeOrder(n){return this.http.post(this.url+"placeOrder",n).pipe((0,l.T)(i=>i))}updateWallet(n){return this.http.post(this.url+"updateWallet",n).pipe((0,l.T)(i=>i))}getWallet(n=0){return this.http.get(this.url+"getWallet?user_id="+localStorage.getItem("user_id")+"&amount="+n+"&lid="+localStorage.getItem("lang_id")).pipe((0,l.T)(i=>i))}subscription(){return this.http.get(this.url+"subscription?user_id="+localStorage.getItem("user_id")+"&lid="+localStorage.getItem("lang_id")).pipe((0,l.T)(n=>n))}mark(n){return this.http.post(this.url+"mark",n).pipe((0,l.T)(i=>i))}undo(n){return this.http.get(this.url+"undo?id="+n).pipe((0,l.T)(i=>i))}account(){return this.http.get(this.url+"account?user_id="+localStorage.getItem("user_id")+"&lid="+localStorage.getItem("lang_id")).pipe((0,l.T)(n=>n))}deleteAccount(){return this.http.get(this.url+"deleteAccount?user_id="+localStorage.getItem("user_id")+"&lid="+localStorage.getItem("lang_id")).pipe((0,l.T)(n=>n))}deleteAddress(n){return this.http.get(this.url+"deleteAddress?user_id="+localStorage.getItem("user_id")+"&id="+n+"&lid="+localStorage.getItem("lang_id")).pipe((0,l.T)(i=>i))}updateData(n){return this.http.post(this.url+"updateData?user_id="+localStorage.getItem("user_id"),n).pipe((0,l.T)(i=>i))}stop(n){return this.http.get(this.url+"stop?user_id="+localStorage.getItem("user_id")+"&detail_id="+n+"&lid="+localStorage.getItem("lang_id")).pipe((0,l.T)(i=>i))}customCart(n){return this.http.post(this.url+"customCart",n).pipe((0,l.T)(i=>i))}review(n){return this.http.post(this.url+"review",n).pipe((0,l.T)(i=>i))}search(n){return this.http.get(this.url+"search?q="+n+"&lid="+localStorage.getItem("lang_id")).pipe((0,l.T)(i=>i))}language(){return this.http.get(this.url+"language").pipe((0,l.T)(n=>n))}page(){return this.http.get(this.url+"page?lid="+localStorage.getItem("lang_id")).pipe((0,l.T)(n=>n))}contact(n){return this.http.post(this.url+"contact",n).pipe((0,l.T)(i=>i))}getApiUrl(){return this.url}}return(t=v).\u0275fac=function(n){return new(n||t)(f.KVO(s.Qq))},t.\u0275prov=f.jDH({token:t,factory:t.\u0275fac,providedIn:"root"}),v})()},1328:(T,y,p)=>{p.r(y),p.d(y,{WalletPage:()=>M});var l=p(467),_=p(177),f=p(4341),s=p(4742),d=p(5704),t=p(4438),v=p(2068),P=p(9568);function n(g,m){if(1&g&&(t.j41(0,"ion-title"),t.EFF(1),t.k0s()),2&g){const o=t.XpG();t.R7$(),t.JRh(o.text.wallet_title)}}function i(g,m){1&g&&t.nrm(0,"ion-skeleton-text",12),2&g&&t.Y8G("animated",!0)}function e(g,m){if(1&g&&(t.j41(0,"div",6),t.nrm(1,"ion-skeleton-text",7),t.j41(2,"ion-row")(3,"ion-col",8),t.nrm(4,"ion-skeleton-text",9),t.k0s(),t.j41(5,"ion-col",8),t.nrm(6,"ion-skeleton-text",10),t.k0s()(),t.DNE(7,i,1,1,"ion-skeleton-text",11),t.k0s()),2&g){const o=t.XpG(2);t.R7$(),t.Y8G("animated",!0),t.R7$(3),t.Y8G("animated",!0),t.R7$(2),t.Y8G("animated",!0),t.R7$(),t.Y8G("ngForOf",o.fakeData)}}function C(g,m){1&g&&t.nrm(0,"ion-icon",28)}function R(g,m){1&g&&t.nrm(0,"ion-icon",29)}function F(g,m){if(1&g&&(t.j41(0,"ion-item",23)(1,"ion-label"),t.EFF(2),t.j41(3,"span",24),t.EFF(4),t.nI1(5,"date"),t.k0s(),t.j41(6,"small",25),t.EFF(7),t.k0s()(),t.DNE(8,C,1,0,"ion-icon",26)(9,R,1,0,"ion-icon",27),t.k0s()),2&g){const o=m.$implicit,u=t.XpG(4);t.R7$(2),t.Lme("",u.setting.currency,"",o.amount," "),t.R7$(2),t.JRh(t.i5U(5,6,o.created_at,"dd-MM-yyyy")),t.R7$(3),t.JRh(o.notes),t.R7$(),t.Y8G("ngIf",0==o.type),t.R7$(),t.Y8G("ngIf",1==o.type)}}function b(g,m){if(1&g&&(t.j41(0,"div"),t.DNE(1,F,10,9,"ion-item",22),t.k0s()),2&g){const o=t.XpG(3);t.R7$(),t.Y8G("ngForOf",o.data.trans)}}function k(g,m){if(1&g){const o=t.RV6();t.j41(0,"div")(1,"p"),t.EFF(2),t.k0s(),t.nrm(3,"br"),t.j41(4,"ion-input",30),t.mxI("ngModelChange",function(r){t.eBV(o);const a=t.XpG(3);return t.DH7(a.amount,r)||(a.amount=r),t.Njj(r)}),t.k0s(),t.nrm(5,"br"),t.j41(6,"ion-button",31),t.bIt("click",function(){t.eBV(o);const r=t.XpG(3);return t.Njj(r.add())}),t.EFF(7),t.k0s()()}if(2&g){const o=t.XpG(3);t.R7$(2),t.JRh(o.text.fund_desc),t.R7$(2),t.R50("ngModel",o.amount),t.R7$(3),t.JRh(o.text.add)}}function D(g,m){if(1&g){const o=t.RV6();t.j41(0,"div"),t.nrm(1,"br"),t.j41(2,"ion-item",13),t.nrm(3,"ion-icon",14),t.j41(4,"ion-label")(5,"span",15),t.EFF(6),t.k0s(),t.j41(7,"h3",16),t.EFF(8),t.k0s()()(),t.nrm(9,"br"),t.j41(10,"ion-segment",17),t.mxI("ngModelChange",function(r){t.eBV(o);const a=t.XpG(2);return t.DH7(a.type,r)||(a.type=r),t.Njj(r)}),t.j41(11,"ion-segment-button",18)(12,"ion-label"),t.EFF(13),t.k0s()(),t.j41(14,"ion-segment-button",19)(15,"ion-label"),t.EFF(16),t.k0s()()(),t.j41(17,"div",20),t.DNE(18,b,2,1,"div",21)(19,k,8,3,"div",21),t.k0s()()}if(2&g){const o=t.XpG(2);t.R7$(6),t.JRh(o.text.avil_balance),t.R7$(2),t.Lme("",o.setting.currency,"",o.data.wallet,""),t.R7$(2),t.R50("ngModel",o.type),t.R7$(),t.Y8G("value",1),t.R7$(2),t.JRh(o.text.trans),t.R7$(),t.Y8G("value",2),t.R7$(2),t.JRh(o.text.add_fund),t.R7$(),t.Y8G("ngSwitch",o.type),t.R7$(),t.Y8G("ngSwitchCase",1),t.R7$(),t.Y8G("ngSwitchCase",2)}}function j(g,m){if(1&g&&(t.j41(0,"ion-content")(1,"ion-grid",4),t.DNE(2,e,8,4,"div",5)(3,D,20,11,"div",2),t.k0s()()),2&g){const o=t.XpG();t.R7$(),t.Y8G("fixed",!0),t.R7$(),t.Y8G("ngIf",!o.data),t.R7$(),t.Y8G("ngIf",o.data)}}let M=(()=>{var g;class m{constructor(u,r,a){this.server=u,this.otherService=r,this.modalCtrl=a,this.type=1,this.fakeData=[1,2,3,4,5,6,7];const c=localStorage.getItem("admin_setting");null!==c&&(this.setting=JSON.parse(c));const h=localStorage.getItem("app_lang");null!==h&&(this.text=JSON.parse(h),this.text=this.text.text)}ngOnInit(){}ionViewDidEnter(){this.loadData()}loadData(u=0){var r=this;return(0,l.A)(function*(){r.server.getWallet(u).subscribe(a=>{r.data=a.data,console.log(r.data),r.amount=null})})()}add(){this.amount?this.openModel({amount:this.amount,stripe_key:this.data.stripe}):this.otherService.toast(this.text.enter_amount)}openModel(u){var r=this;return(0,l.A)(function*(){const a=yield r.modalCtrl.create({component:d.PaymentPage,animated:!0,mode:"ios",componentProps:{data:u}});return a.onDidDismiss().then(c=>{c.data?r.loadData():r.otherService.toast(r.text.payment_cancel)}),yield a.present()})()}}return(g=m).\u0275fac=function(u){return new(u||g)(t.rXU(v.Z),t.rXU(P.G),t.rXU(s.W3))},g.\u0275cmp=t.VBU({type:g,selectors:[["app-wallet"]],decls:6,vars:2,consts:[[1,"ion-no-border"],["color","dark"],[4,"ngIf"],["slot","start"],[3,"fixed"],["class","ion-padding",4,"ngIf"],[1,"ion-padding"],[1,"sek1",3,"animated"],["size","6"],[1,"sek2",3,"animated"],[1,"sek3",3,"animated"],["class","sek4",3,"animated",4,"ngFor","ngForOf"],[1,"sek4",3,"animated"],["lines","none","mode","md",1,"wallet"],["name","wallet","slot","start","color","light",2,"font-size","60px"],[1,"title"],[1,"wallet"],["value","1","color","dark","mode","md",3,"ngModelChange","ngModel"],[3,"value"],["color","dark",3,"value"],[1,"ion-padding","bottom",3,"ngSwitch"],[4,"ngSwitchCase"],["lines","full",4,"ngFor","ngForOf"],["lines","full"],[2,"float","right"],[1,"notes"],["name","add-outline","color","success","slot","start",4,"ngIf"],["name","remove-circle-outline","color","danger","slot","start",4,"ngIf"],["name","add-outline","color","success","slot","start"],["name","remove-circle-outline","color","danger","slot","start"],["label","Enter Amount","label-placement","floating","fill","outline","type","tel","maxlength","10","name","amount","mode","md",3,"ngModelChange","ngModel"],["mode","ios","expand","block","color","dark",3,"click"]],template:function(u,r){1&u&&(t.j41(0,"ion-header",0)(1,"ion-toolbar",1),t.DNE(2,n,2,1,"ion-title",2),t.j41(3,"ion-buttons",3),t.nrm(4,"ion-back-button"),t.k0s()()(),t.DNE(5,j,4,3,"ion-content",2)),2&u&&(t.R7$(2),t.Y8G("ngIf",r.text),t.R7$(3),t.Y8G("ngIf",r.text))},dependencies:[s.bv,s.Jm,s.QW,s.hU,s.W9,s.lO,s.eU,s.iq,s.$w,s.uz,s.he,s.ln,s.Gp,s.eP,s.ds,s.BC,s.ai,s.Je,s.Gw,s.el,_.MD,_.Sq,_.bT,_.ux,_.e1,_.vh,f.YN,f.BC,f.tU,f.vS],styles:[".wallet[_ngcontent-%COMP%]{--min-height: 100px;--padding-start: 20px;--padding-end: 20px;--background:var(--ion-color-dark);color:#fff;border-radius:10px;width:90%;margin:auto}ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}.bottom[_ngcontent-%COMP%]{background-color:#fff;width:90%;margin:20px auto auto;border-radius:10px}ion-segment[_ngcontent-%COMP%]{background-color:#fff;width:90%;margin:auto;border-radius:10px}.sek1[_ngcontent-%COMP%]{width:100%;height:100px;border-radius:10px}.sek2[_ngcontent-%COMP%], .sek3[_ngcontent-%COMP%]{width:100%;height:40px;border-radius:10px}.sek4[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:10px;margin-top:20px}.wallet[_ngcontent-%COMP%]{margin-top:10px;font-size:28px;font-weight:600;color:#fff}.notes[_ngcontent-%COMP%]{display:block;margin-top:5px;color:gray}"]}),m})()}}]);