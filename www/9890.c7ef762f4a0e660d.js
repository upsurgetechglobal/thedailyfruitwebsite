"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5704,5864,9890],{3923:(A,I,s)=>{s.d(I,{$o:()=>x,_G:()=>k,Vq:()=>F,SQ:()=>c});var x=function(n){return n.Loaded="applePayLoaded",n.FailedToLoad="applePayFailedToLoad",n.Completed="applePayCompleted",n.Canceled="applePayCanceled",n.Failed="applePayFailed",n.DidSelectShippingContact="applePayDidSelectShippingContact",n.DidCreatePaymentMethod="applePayDidCreatePaymentMethod",n}(x||{}),k=function(n){return n.Loaded="googlePayLoaded",n.FailedToLoad="googlePayFailedToLoad",n.Completed="googlePayCompleted",n.Canceled="googlePayCanceled",n.Failed="googlePayFailed",n}(k||{}),F=function(n){return n.Loaded="paymentFlowLoaded",n.FailedToLoad="paymentFlowFailedToLoad",n.Opened="paymentFlowOpened",n.Created="paymentFlowCreated",n.Completed="paymentFlowCompleted",n.Canceled="paymentFlowCanceled",n.Failed="paymentFlowFailed",n}(F||{}),c=function(n){return n.Loaded="paymentSheetLoaded",n.FailedToLoad="paymentSheetFailedToLoad",n.Completed="paymentSheetCompleted",n.Canceled="paymentSheetCanceled",n.Failed="paymentSheetFailed",n}(c||{})},9890:(A,I,s)=>{s.r(I),s.d(I,{CartPage:()=>U});var x=s(467),k=s(177),F=s(4341),c=s(4742),n=s(7414),T=s(3804),O=s(7564),S=s(5864),G=s(5704),t=s(4438),o=s(2068),$=s(9568);function N(r,f){if(1&r&&(t.j41(0,"ion-title")(1,"a",5),t.EFF(2),t.k0s()()),2&r){const a=t.XpG();t.R7$(2),t.JRh(a.text.go_back)}}function m(r,f){1&r&&t.nrm(0,"ion-skeleton-text",7),2&r&&t.Y8G("animated",!0)}function y(r,f){if(1&r&&(t.j41(0,"div")(1,"ion-grid",4),t.DNE(2,m,1,1,"ion-skeleton-text",6),t.k0s()()),2&r){const a=t.XpG();t.R7$(),t.Y8G("fixed",!0),t.R7$(),t.Y8G("ngForOf",a.fakeData)}}function p(r,f){1&r&&(t.j41(0,"ion-col",15),t.nrm(1,"img",16),t.k0s())}function b(r,f){if(1&r){const a=t.RV6();t.j41(0,"ion-item",17)(1,"ion-label",18)(2,"span",19),t.EFF(3),t.k0s(),t.j41(4,"ion-badge",20),t.EFF(5),t.k0s(),t.j41(6,"span",21),t.EFF(7),t.j41(8,"a",22),t.bIt("click",function(){const i=t.eBV(a).$implicit,l=t.XpG(3);return t.Njj(l.remove(i.id))}),t.EFF(9),t.k0s()()()()}if(2&r){const a=f.$implicit,e=t.XpG(3);t.R7$(3),t.Lme("",a.name," - ",a.type,""),t.R7$(2),t.Lme("",a.currency,"",a.price," "),t.R7$(2),t.SpI("",a.days," "),t.R7$(2),t.JRh(e.text.remove)}}function v(r,f){if(1&r){const a=t.RV6();t.j41(0,"ion-button",23),t.bIt("click",function(){t.eBV(a);const i=t.XpG(3);return t.Njj(i.continue())}),t.EFF(1),t.k0s()}if(2&r){const a=t.XpG(3);t.R7$(),t.JRh(a.text.continue)}}function M(r,f){1&r&&(t.j41(0,"ion-button",24),t.nrm(1,"ion-spinner",25),t.k0s())}function X(r,f){if(1&r){const a=t.RV6();t.j41(0,"ion-row"),t.DNE(1,p,2,0,"ion-col",8),t.j41(2,"ion-col",9)(3,"div",10),t.DNE(4,b,10,6,"ion-item",11),t.j41(5,"ion-textarea",12),t.mxI("ngModelChange",function(i){t.eBV(a);const l=t.XpG(2);return t.DH7(l.notes,i)||(l.notes=i),t.Njj(i)}),t.k0s(),t.nrm(6,"br"),t.DNE(7,v,2,1,"ion-button",13)(8,M,2,0,"ion-button",14),t.k0s()()()}if(2&r){const a=t.XpG(2);t.R7$(),t.Y8G("ngIf",!a.isMobile),t.R7$(),t.Y8G("size",a.isMobile?12:6),t.R7$(2),t.Y8G("ngForOf",a.data),t.R7$(),t.FS9("label",a.text.notes_order),t.R50("ngModel",a.notes),t.R7$(2),t.Y8G("ngIf",!a.hasClick),t.R7$(),t.Y8G("ngIf",a.hasClick)}}function L(r,f){if(1&r){const a=t.RV6();t.j41(0,"ion-item")(1,"ion-row")(2,"ion-col",43),t.nrm(3,"img",44),t.k0s(),t.j41(4,"ion-col",45)(5,"span",46),t.EFF(6),t.k0s()(),t.j41(7,"ion-col",47)(8,"div",48)(9,"button",49),t.bIt("click",function(){t.eBV(a);const i=t.XpG().$implicit,l=t.XpG(3);return t.Njj(l.decrement(i))}),t.EFF(10,"-"),t.k0s(),t.j41(11,"div",50),t.EFF(12),t.k0s(),t.j41(13,"button",51),t.bIt("click",function(){t.eBV(a);const i=t.XpG().$implicit,l=t.XpG(3);return t.Njj(l.increment(i))}),t.EFF(14,"+ "),t.k0s()()(),t.j41(15,"ion-col",52)(16,"span",46),t.EFF(17),t.nI1(18,"currency"),t.k0s()(),t.j41(19,"ion-col",53)(20,"ion-icon",54),t.bIt("click",function(){t.eBV(a);const i=t.XpG().$implicit,l=t.XpG(3);return t.Njj(l.remove(i.id))}),t.k0s()()()()}if(2&r){const a=t.XpG().$implicit;t.R7$(3),t.FS9("src",a.img,t.B4B),t.R7$(3),t.JRh(a.name),t.R7$(6),t.JRh(a.qty),t.R7$(5),t.JRh(t.i5U(18,4,a.price,"INR"))}}function g(r,f){if(1&r&&(t.j41(0,"ion-list"),t.DNE(1,L,21,7,"ion-item",3),t.k0s()),2&r){const a=t.XpG(3);t.R7$(),t.Y8G("ngIf",a.data)}}function C(r,f){if(1&r&&(t.j41(0,"small",55),t.nrm(1,"br"),t.EFF(2),t.k0s()),2&r){const a=t.XpG(3);t.R7$(2),t.JRh(a.address.address)}}function u(r,f){if(1&r&&(t.j41(0,"small",56),t.EFF(1),t.nI1(2,"currency"),t.k0s()),2&r){const a=t.XpG(3);t.R7$(),t.Lme("",a.text.you_save," ",t.i5U(2,2,a.save,"INR"),"")}}function _(r,f){if(1&r){const a=t.RV6();t.j41(0,"ion-icon",57),t.bIt("click",function(i){t.eBV(a);const l=t.XpG(3);return t.Njj(l.removeDiscount(i))}),t.k0s()}}function d(r,f){if(1&r&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"currency"),t.k0s()),2&r){const a=t.XpG(4);t.R7$(),t.JRh(t.i5U(2,1,a.total,"INR"))}}function P(r,f){if(1&r&&(t.j41(0,"s"),t.EFF(1),t.nI1(2,"currency"),t.k0s()),2&r){const a=t.XpG(4);t.R7$(),t.JRh(t.i5U(2,1,a.total,"INR"))}}function R(r,f){if(1&r&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"currency"),t.k0s()),2&r){const a=t.XpG(4);t.R7$(),t.JRh(t.i5U(2,1,a.total-a.save,"INR"))}}function D(r,f){if(1&r&&(t.j41(0,"h3",31),t.EFF(1,"Total Payable Amount\xa0:\xa0"),t.DNE(2,d,3,4,"span",3),t.EFF(3,"\xa0"),t.DNE(4,P,3,4,"s",3),t.EFF(5,"\xa0"),t.DNE(6,R,3,4,"span",3),t.k0s()),2&r){const a=t.XpG(3);t.R7$(2),t.Y8G("ngIf",!a.payble_amount),t.R7$(2),t.Y8G("ngIf",a.payble_amount),t.R7$(2),t.Y8G("ngIf",a.payble_amount)}}function j(r,f){if(1&r){const a=t.RV6();t.j41(0,"ion-button",58),t.bIt("click",function(){t.eBV(a);const i=t.XpG(3);return t.Njj(i.placeOrder())}),t.EFF(1),t.k0s()}if(2&r){const a=t.XpG(3);t.R7$(),t.JRh(a.text.checkout_button)}}function w(r,f){if(1&r){const a=t.RV6();t.j41(0,"ion-row")(1,"ion-col",26)(2,"ion-card-header",27)(3,"ion-card-title"),t.EFF(4,"Selected Products"),t.k0s()(),t.j41(5,"ion-card-content",28),t.DNE(6,g,2,1,"ion-list",29),t.j41(7,"ion-row")(8,"ion-col",30)(9,"h3",31),t.EFF(10,"Total Amount\xa0:\xa0"),t.j41(11,"span"),t.EFF(12),t.nI1(13,"currency"),t.k0s()()()()()(),t.j41(14,"ion-col",32)(15,"div",33)(16,"ion-row")(17,"ion-col",30)(18,"h3",31),t.EFF(19,"Total Amount\xa0:\xa0"),t.j41(20,"span"),t.EFF(21),t.nI1(22,"currency"),t.k0s()()()(),t.j41(23,"ion-row")(24,"ion-col",30)(25,"p",34),t.EFF(26),t.k0s(),t.j41(27,"ion-item",35),t.bIt("click",function(){t.eBV(a);const i=t.XpG(2);return t.Njj(i.getAddress())}),t.j41(28,"label"),t.EFF(29),t.DNE(30,C,3,1,"small",36),t.k0s(),t.nrm(31,"ion-icon",37),t.k0s()()(),t.j41(32,"ion-row")(33,"ion-col",30)(34,"p",34),t.EFF(35),t.k0s(),t.j41(36,"ion-item",35),t.bIt("click",function(){t.eBV(a);const i=t.XpG(2);return t.Njj(i.getOffer())}),t.j41(37,"label"),t.EFF(38),t.DNE(39,u,3,5,"small",38),t.k0s(),t.nrm(40,"ion-icon",39),t.DNE(41,_,1,0,"ion-icon",40),t.k0s()()(),t.j41(42,"ion-row")(43,"ion-col",30),t.DNE(44,D,7,3,"h3",41),t.nrm(45,"br"),t.DNE(46,j,2,1,"ion-button",42),t.k0s()()()()()}if(2&r){const a=t.XpG(2);t.R7$(6),t.Y8G("ngForOf",a.data),t.R7$(6),t.JRh(t.i5U(13,12,a.total,"INR")),t.R7$(9),t.JRh(t.i5U(22,15,a.total,"INR")),t.R7$(5),t.JRh(a.text.delivery_address_desc),t.R7$(3),t.SpI("",a.text.delivery_address," "),t.R7$(),t.Y8G("ngIf",a.address),t.R7$(5),t.JRh(a.text.discount_desc),t.R7$(3),t.SpI("",a.text.discount_offers," "),t.R7$(),t.Y8G("ngIf",a.save),t.R7$(2),t.Y8G("ngIf",a.save),t.R7$(3),t.Y8G("ngIf",a.validate()),t.R7$(2),t.Y8G("ngIf",!a.isMobile)}}function B(r,f){if(1&r&&(t.j41(0,"div"),t.DNE(1,X,9,7,"ion-row",3),t.j41(2,"ion-card"),t.DNE(3,w,47,18,"ion-row",3),t.k0s()()),2&r){const a=t.XpG();t.R7$(),t.Y8G("ngIf",a.data&&a.isMobile),t.R7$(2),t.Y8G("ngIf",a.data&&!a.isMobile)}}function z(r,f){if(1&r&&(t.j41(0,"div"),t.nrm(1,"br")(2,"br")(3,"img",59),t.j41(4,"h1",60),t.EFF(5),t.k0s(),t.j41(6,"div",61)(7,"ion-button",62),t.EFF(8),t.k0s()()()),2&r){const a=t.XpG();t.R7$(5),t.JRh(a.text.cart_empty),t.R7$(2),t.Y8G("expand",a.isMobile?"block":""),t.R7$(),t.JRh(a.text.start_item)}}(0,T.kz)();let U=(()=>{var r;class f{constructor(e,i,l,h){this.server=e,this.otherService=i,this.modalCtrl=l,this.router=h,this.fakeData=[1,2,3,4],this.selectedDay=[],this.hasClick=!1,this.isMobile=!1,this.payble_amount=0,this.show=!0;const E=localStorage.getItem("app_lang");null!==E&&(this.text=JSON.parse(E),this.text=this.text.text),"null"==localStorage.getItem("cart_no")||null==localStorage.getItem("cart_no")?(this.cart_no=Math.floor(2e9*Math.random())+1,localStorage.setItem("cart_no",this.cart_no)):this.cart_no=localStorage.getItem("cart_no"),this.checkScreenSize(),this.user_id=localStorage.getItem("user_id")}onResize(e){this.checkScreenSize()}checkScreenSize(){this.isMobile=window.innerWidth<=768}ngOnInit(){this.otherService.triggerLoadData.subscribe(()=>{this.user_id=localStorage.getItem("user_id"),this.getSavedAddress()})}ionViewDidEnter(){this.otherService.statusBar("#ffffff",2),this.loadData()}loadData(){var e=this;return(0,x.A)(function*(){e.server.getCart().subscribe(i=>{e.data=i.data,e.data.map(l=>{l.selected_price=Number(l.price)*l.qty}),e.CalculateTotal(),e.getSavedAddress(),e.working_days=i.working_day,e.selectedDay=i.days,console.log(e.data)})})()}increment(e){const i=this.data.find(l=>l.id===e.id);i.qty+=1,i.selected_price=Number(e.price)*Number(i.qty),this.CalculateTotal(),this.addToCart(e,"increment")}decrement(e){if(e.qty>1){const i=this.data.find(l=>l.id===e.id);i.qty-=1,i.selected_price=Number(e.price)*Number(i.qty),this.CalculateTotal(),this.addToCart(e,"decrement")}}addToCart(e,i){this.server.add_to_cart({cart_no:this.cart_no,item_id:e.item_id,mode:i,qty:1,store_id:e.store_id}).subscribe(h=>{this.hasClick=!1})}CalculateTotal(){this.total=this.data.reduce((e,i)=>e+(Number(i.selected_price)||0),0)}getSavedAddress(){this.server.checkoutData().subscribe(e=>{this.checkout_data=e.data,this.savedAddress=this.checkout_data.address})}getAddress(){var e=this;return(0,x.A)(function*(){if(e.user_id){var i;const l={data:e.savedAddress,store_id:null!==(i=e.data)&&void 0!==i&&null!==(i=i.store)&&void 0!==i&&i.id?e.data.store.id:1},h=yield e.modalCtrl.create({component:O.AddressPage,animated:!0,mode:"ios",componentProps:l});return h.onDidDismiss().then(E=>{e.startDate(),E.data.id&&(e.address=E.data)}),yield h.present()}e.router.navigate(["/login"])})()}formatDate(e){return e.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric",weekday:"short"}).replace(",","").replace(/ /,"-")}startDate(){var e=this;return(0,x.A)(function*(){if(e.start_date=e.formatDate(new Date),e.sub_time=1,!e.sub_time)return e.otherService.toast(e.text.sub_time);if(!e.start_date)return;e.otherService.showLoading();const i={plan:e.sub_time,start_date:e.start_date,cart_no:localStorage.getItem("cart_no"),user_id:localStorage.getItem("user_id"),store_id:e.checkout_data.store.id};console.log(i),e.server.getAmount(i).subscribe(l=>{e.cal=l,console.log("this.cal",e.cal),e.otherService.hideLoading(),console.log(e.cal.summery)})})()}getOffer(){var e=this;return(0,x.A)(function*(){const i=yield e.modalCtrl.create({component:S.OfferPage,animated:!0,mode:"ios",componentProps:{data:e.checkout_data.offer}});return i.onDidDismiss().then(l=>{l.data.code&&(e.offer=l.data,e.applyOffer())}),yield i.present()})()}applyOffer(){var e=this;return(0,x.A)(function*(){if(1==e.offer.type){const i=e.cal.total*e.offer.value/100;e.payble_amount=e.total-i,e.save=i.toFixed(1)}else e.payble_amount=e.total-e.offer.value,e.save=e.offer.value})()}validate(){return!!this.address}placeOrder(){var e=this;return(0,x.A)(function*(){e.validate()?e.total>e.checkout_data.user.wallet?e.openpaymentsModel({amount:e.total-e.checkout_data.user.wallet,stripe_key:e.checkout_data.stripe_id}):e.checkout():e.otherService.toast(e.text.all_field)})()}openpaymentsModel(e){var i=this;return(0,x.A)(function*(){const l=yield i.modalCtrl.create({component:G.PaymentPage,animated:!0,mode:"ios",componentProps:{data:e}});return l.onDidDismiss().then(h=>{h.data?i.checkout():i.otherService.toast(i.text.payment_cancel)}),yield l.present()})()}checkout(){var e=this;return(0,x.A)(function*(){e.hasClick=!0;const i={user_id:localStorage.getItem("user_id"),cart_no:localStorage.getItem("cart_no"),cal:e.cal,address:e.address.id,plan:e.sub_time,total:e.save?e.total-Number(e.save):e.total,discount:e.save,store_id:e.checkout_data.store.id,notes:localStorage.getItem("order_notes")&&"undefined"!=localStorage.getItem("order_notes")?localStorage.getItem("order_notes"):null};console.log(i),e.server.placeOrder(i).subscribe(l=>{1==l.done?(e.show=!1,localStorage.removeItem("order_notes"),e.otherService.triggerLoadData.emit(),e.otherService.redirect("success")):e.otherService.toast(l.error),e.hasClick=!1})})()}removeDiscount(e){e.stopPropagation(),this.save=0,this.payble_amount=0}remove(e){var i=this;return(0,x.A)(function*(){i.otherService.confirm().then(l=>{"ok"===l&&i.server.getCart(e).subscribe(h=>{i.data=h.data,i.data.map(E=>{E.selected_price=E.price}),i.CalculateTotal(),i.otherService.triggerLoadData.emit(),i.otherService.toast(i.text.removed)})})})()}selectDay(e,i){var l=this;return(0,x.A)(function*(){let h=l.checkSelected(e,i);h?(h=999==h?0:h,l.selectedDay.splice(h,1)):l.selectedDay.push({day:e,id:i.id})})()}checkSelected(e,i,l=!1){for(var h=0;h<this.selectedDay.length;h++)if(this.selectedDay[h].day===e&&this.selectedDay[h].id==i.id)return 0==h?999:h;return!1}continue(){var e=this;return(0,x.A)(function*(){localStorage.setItem("order_notes",e.notes),e.hasClick=!0,e.server.updateDays({days:e.selectedDay}).subscribe(i=>{e.hasClick=!1,e.otherService.redirect("checkout/0")})})()}}return(r=f).\u0275fac=function(e){return new(e||r)(t.rXU(o.Z),t.rXU($.G),t.rXU(c.W3),t.rXU(n.Ix))},r.\u0275cmp=t.VBU({type:r,selectors:[["app-cart"]],hostBindings:function(e,i){1&e&&t.bIt("resize",function(h){return i.onResize(h)},!1,t.tSv)},decls:10,vars:5,consts:[[1,"ion-no-border"],["color","dark"],["slot","start"],[4,"ngIf"],[3,"fixed"],["routerLink","/tabs/home",2,"float","right","font-size","14px","color","white !important","margin-top","5px"],["class","sek",3,"animated",4,"ngFor","ngForOf"],[1,"sek",3,"animated"],["size","6",4,"ngIf"],[2,"background-color","#edf2fa","border-radius","10px !important","margin-top","20px",3,"size"],[1,"ion-padding"],["lines","none",4,"ngFor","ngForOf"],["name","notes","label-placement","floating","fill","outline","mode","md",1,"msg",3,"ngModelChange","label","ngModel"],["mode","ios","color","dark","expand","block",3,"click",4,"ngIf"],["mode","ios","expand","block","color","dark","type","button",4,"ngIf"],["size","6"],["src","assets/ch.avif"],["lines","none"],[1,"ion-text-wrap"],[2,"font-weight","bold","font-size","20px"],["color","dark",2,"float","right"],[1,"cart_desc"],[2,"float","right","color","red !important",3,"click"],["mode","ios","color","dark","expand","block",3,"click"],["mode","ios","expand","block","color","dark","type","button"],["name","crescent"],["size","8"],[1,"card_title"],[1,"scrollable-content"],[4,"ngFor","ngForOf"],["size","12"],[1,"total"],["size","4"],[2,"padding","20px"],[1,"desc"],["lines","none",1,"address",3,"click"],["class","address_1",4,"ngIf"],["name","location-outline","slot","start","color","dark"],["class","discount",4,"ngIf"],["name","receipt-outline","slot","start","color","dark"],["name","trash","slot","end","class","remove_discount",3,"click",4,"ngIf"],["class","total",4,"ngIf"],["mode","ios","expand","block","color","dark","id","open-modal","expand","block",3,"click",4,"ngIf"],["size","1"],[3,"src"],["size","5",1,"cart_item"],[1,"iname_price"],["size","3",1,"cart_item"],[1,"quantity-field"],[1,"value-button","decrease-button",3,"click"],[1,"number"],[1,"value-button","increase-button",3,"click"],["size","2",1,"cart_item"],["size","1",1,"cart_item"],["name","trash",1,"trash_icon",3,"click"],[1,"address_1"],[1,"discount"],["name","trash","slot","end",1,"remove_discount",3,"click"],["mode","ios","expand","block","color","dark","id","open-modal","expand","block",3,"click"],["src","assets/empty.webp",2,"width","70%","margin-left","15%"],["align","center"],[1,"ion-padding",2,"text-align","center"],["routerLink","/tabs/home","mode","ios","color","dark",3,"expand"]],template:function(e,i){1&e&&(t.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),t.nrm(3,"ion-back-button"),t.k0s(),t.DNE(4,N,3,1,"ion-title",3),t.k0s()(),t.j41(5,"ion-content")(6,"ion-grid",4),t.DNE(7,y,3,2,"div",3)(8,B,4,2,"div",3)(9,z,9,3,"div",3),t.k0s()()),2&e&&(t.R7$(4),t.Y8G("ngIf",i.text),t.R7$(2),t.Y8G("fixed",!!i.isMobile),t.R7$(),t.Y8G("ngIf",!i.data),t.R7$(),t.Y8G("ngIf",i.data&&i.data.length>0),t.R7$(),t.Y8G("ngIf",i.data&&0==i.data.length))},dependencies:[c.bv,c.In,c.Jm,c.QW,c.b_,c.I9,c.ME,c.tN,c.hU,c.W9,c.lO,c.eU,c.iq,c.uz,c.he,c.nf,c.ln,c.ds,c.w2,c.nc,c.BC,c.ai,c.Gw,c.el,c.N7,c.oY,k.MD,k.Sq,k.bT,k.oe,F.YN,F.BC,F.vS,n.Wk],styles:["ion-textarea[_ngcontent-%COMP%]{background-color:#fff}ion-item[_ngcontent-%COMP%]{margin-bottom:10px}.day[_ngcontent-%COMP%]{background-color:var(--ion-color-light);padding:10px;width:auto!important;text-align:center;border-radius:5px}.selected[_ngcontent-%COMP%]{background-color:var(--ion-color-dark);color:#fff;padding:10px;width:auto!important;text-align:center;border-radius:5px}.dayDiv[_ngcontent-%COMP%]{background-color:#fff;padding:10px;margin-bottom:20px}.sek[_ngcontent-%COMP%]{width:96%;height:50px;border-radius:10px;margin-left:2%;margin-top:8%}.desc[_ngcontent-%COMP%]{font-size:14px;color:gray;padding:0 10px}.cart_desc[_ngcontent-%COMP%]{display:block;margin-top:5px;color:gray;font-size:15px}.msg[_ngcontent-%COMP%]{height:100px;margin-top:20px}.iname[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:var(--ion-color-dark)}.iname_price[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.total[_ngcontent-%COMP%]{font-weight:600;font-size:20px;text-align:right;color:#000}.trash_icon[_ngcontent-%COMP%]{margin-top:5px;color:#d00101;cursor:pointer;font-size:20px}.quantity-field[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:80px;height:30px}.quantity-field[_ngcontent-%COMP%]   .value-button[_ngcontent-%COMP%]{border:1px solid #ddd;margin:0;width:40px;height:100%;padding:0;background:#eee;outline:none;cursor:pointer}.quantity-field[_ngcontent-%COMP%]   .value-button[_ngcontent-%COMP%]:hover{background:#e6e6e6}.quantity-field[_ngcontent-%COMP%]   .value-button[_ngcontent-%COMP%]:active{background:#d2d2d2}.quantity-field[_ngcontent-%COMP%]   .decrease-button[_ngcontent-%COMP%]{margin-right:-4px;border-radius:8px 0 0 8px;color:#d00101;font-size:25px;cursor:pointer}.quantity-field[_ngcontent-%COMP%]   .increase-button[_ngcontent-%COMP%]{margin-left:-4px;border-radius:0 8px 8px 0;color:green;font-size:25px;cursor:pointer}.number[_ngcontent-%COMP%]{border-top:1px solid #ddd;border-bottom:1px solid #ddd;text-align:center;background-color:1px solid #fff;margin:0;width:60px;height:100%;padding:0;outline:none;display:inline;font-size:20px}.address[_ngcontent-%COMP%]{--min-height: 60px !important;--padding-start: 20px;--padding-end: 20px;font-size:18px;border:1px dashed var(--ion-color-dark);width:100%;border-radius:10px;border-width:1px}.scrollable-content[_ngcontent-%COMP%]{height:78vh;overflow-y:auto;border-right:3px solid var(--ion-color-light);scrollbar-width:thin;scrollbar-color:transparent transparent}.scrollable-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;height:0}.card_title[_ngcontent-%COMP%]{width:100%;font-weight:700;background-color:var(--ion-color-dark);padding:10px;border-radius:10px}.card_title[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:var(--ion-color-light)}.cart_item[_ngcontent-%COMP%]{margin-top:15px}ion-card[_ngcontent-%COMP%]{margin:1rem;box-shadow:0 5px 15px #0000001a}ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-light) }.discount[_ngcontent-%COMP%]{display:block;margin-top:5px;color:red}.remove_discount[_ngcontent-%COMP%]{color:red;font-size:16px;cursor:pointer;margin-top:30px}"]}),f})()},5864:(A,I,s)=>{s.r(I),s.d(I,{OfferPage:()=>N});var x=s(467),k=s(177),F=s(4341),c=s(4742),n=s(4438),T=s(9568),O=s(3656);function S(m,y){if(1&m){const p=n.RV6();n.j41(0,"ion-button",4),n.bIt("click",function(){n.eBV(p);const v=n.XpG();return n.Njj(v.close())}),n.EFF(1),n.k0s()}if(2&m){const p=n.XpG();n.R7$(),n.JRh(p.text.cancel)}}function G(m,y){if(1&m&&(n.j41(0,"p",8),n.EFF(1),n.k0s()),2&m){const p=n.XpG(2);n.R7$(),n.JRh(p.text.no_offer)}}function t(m,y){if(1&m){const p=n.RV6();n.j41(0,"ion-item",11),n.bIt("click",function(){const v=n.eBV(p).$implicit,M=n.XpG(3);return n.Njj(M.setOffer(v))}),n.j41(1,"ion-avatar",12),n.nrm(2,"img",13),n.k0s(),n.j41(3,"ion-label",14)(4,"b"),n.EFF(5),n.k0s(),n.j41(6,"span",15),n.EFF(7),n.k0s()()()}if(2&m){const p=y.$implicit;n.R7$(5),n.JRh(p.code),n.R7$(2),n.JRh(p.desc)}}function o(m,y){if(1&m&&(n.j41(0,"div")(1,"ion-note",9),n.EFF(2),n.k0s(),n.nrm(3,"br")(4,"br"),n.DNE(5,t,8,2,"ion-item",10),n.k0s()),2&m){const p=n.XpG(2);n.R7$(2),n.JRh(p.text.avilable_offer),n.R7$(3),n.Y8G("ngForOf",p.data)}}function $(m,y){if(1&m&&(n.j41(0,"ion-content",5),n.DNE(1,G,2,1,"p",6)(2,o,6,2,"div",7),n.k0s()),2&m){const p=n.XpG();n.R7$(),n.Y8G("ngIf",p.data&&0==p.data.length),n.R7$(),n.Y8G("ngIf",p.data&&p.data.length>0)}}let N=(()=>{var m;class y{constructor(b,v){this.otherService=b,this.navParams=v,this.data=v.get("data");const M=localStorage.getItem("app_lang");null!==M&&(this.text=JSON.parse(M),this.text=this.text.text)}ngOnInit(){}close(b=null){var v=this;return(0,x.A)(function*(){v.otherService.closeModel(b)})()}setOffer(b){var v=this;return(0,x.A)(function*(){v.otherService.closeModel(b)})()}}return(m=y).\u0275fac=function(b){return new(b||m)(n.rXU(T.G),n.rXU(O.y8))},m.\u0275cmp=n.VBU({type:m,selectors:[["app-offer"]],decls:5,vars:2,consts:[[1,"ion-no-border"],["slot","end"],["color","medium",3,"click",4,"ngIf"],["class","ion-padding",4,"ngIf"],["color","medium",3,"click"],[1,"ion-padding"],["align","center",4,"ngIf"],[4,"ngIf"],["align","center"],[2,"color","black"],["lines","none","detail","",3,"click",4,"ngFor","ngForOf"],["lines","none","detail","",3,"click"],["slot","start"],["src","assets/discount-icon.png"],[1,"ion-text-wrap"],[2,"display","block","margin-top","5px"]],template:function(b,v){1&b&&(n.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n.DNE(3,S,2,1,"ion-button",2),n.k0s()()(),n.DNE(4,$,3,2,"ion-content",3)),2&b&&(n.R7$(3),n.Y8G("ngIf",v.text),n.R7$(),n.Y8G("ngIf",v.data&&v.text))},dependencies:[c.bv,c.mC,c.Jm,c.QW,c.W9,c.eU,c.uz,c.he,c.JI,c.ai,k.MD,k.Sq,k.bT,F.YN],styles:["ion-item[_ngcontent-%COMP%]{margin-top:20px;--min-height: 50px !important;border-radius:5px}ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-light)}"]}),y})()},5704:(A,I,s)=>{s.r(I),s.d(I,{PaymentPage:()=>L});var x=s(467),k=s(177),F=s(4341),c=s(4742),n=s(5083),T=s(3923);const O=(0,n.F3)("Stripe",{web:()=>s.e(1651).then(s.bind(s,1651)).then(g=>new g.StripeWeb)});var S=s(1594),G=s(9350),o=s(4438),$=s(3656),N=s(9568),m=s(1626),y=s(2068);function p(g,C){if(1&g){const u=o.RV6();o.j41(0,"ion-button",4),o.bIt("click",function(){o.eBV(u);const d=o.XpG();return o.Njj(d.close())}),o.EFF(1),o.k0s()}if(2&g){const u=o.XpG();o.R7$(),o.JRh(u.text.cancel)}}function b(g,C){1&g&&o.nrm(0,"ion-spinner",13)}function v(g,C){if(1&g){const u=o.RV6();o.j41(0,"ion-item",8),o.bIt("click",function(){o.eBV(u);const d=o.XpG(2);return o.Njj(d.paymentSheet())}),o.j41(1,"ion-thumbnail",9),o.nrm(2,"img",12),o.k0s(),o.j41(3,"ion-label"),o.EFF(4),o.k0s(),o.DNE(5,b,1,0,"ion-spinner",11),o.k0s()}if(2&g){const u=o.XpG(2);o.R7$(4),o.JRh(u.text.credit),o.R7$(),o.Y8G("ngIf",1==u.payment_method)}}function M(g,C){1&g&&o.nrm(0,"ion-spinner",13)}function X(g,C){if(1&g){const u=o.RV6();o.j41(0,"ion-content",5)(1,"h3"),o.EFF(2),o.j41(3,"ion-badge",6),o.EFF(4),o.k0s()(),o.nrm(5,"br")(6,"br"),o.DNE(7,v,6,2,"ion-item",7),o.nrm(8,"br"),o.j41(9,"ion-item",8),o.bIt("click",function(){o.eBV(u);const d=o.XpG();return o.Njj(d.payWithRazorpay())}),o.j41(10,"ion-label"),o.EFF(11),o.k0s(),o.j41(12,"ion-thumbnail",9),o.nrm(13,"img",10),o.k0s(),o.DNE(14,M,1,0,"ion-spinner",11),o.k0s(),o.nrm(15,"br")(16,"br")(17,"br")(18,"br"),o.j41(19,"b"),o.EFF(20,"For stripe use these Test card detail : "),o.k0s(),o.j41(21,"p"),o.EFF(22,"Card No : 4242 4242 4242 4242"),o.k0s(),o.j41(23,"p"),o.EFF(24,"Exp. 12/25 CVV : 321"),o.k0s()()}if(2&g){const u=o.XpG();o.R7$(2),o.SpI("",u.text.select_payment_method," "),o.R7$(2),o.Lme("",u.setting.currency,"",u.data.amount,""),o.R7$(3),o.Y8G("ngIf",u.setting.stripe_key),o.R7$(4),o.SpI(" ",u.text.upi,""),o.R7$(3),o.Y8G("ngIf",2==u.payment_method)}}let L=(()=>{var g;class C{constructor(_,d,P,R){this.navParams=_,this.otherService=d,this.http=P,this.server=R,this.data=_.get("data");const D=localStorage.getItem("admin_setting"),j=localStorage.getItem("user_data");null!==D&&(this.setting=JSON.parse(D)),null!==j&&(this.user=JSON.parse(j));const w=localStorage.getItem("app_lang");null!==w&&(this.text=JSON.parse(w),this.text=this.text.text),O.initialize({publishableKey:this.data.stripe_key}),this.meta={counsumer_id:778383,consumer_mac:"sdjksfhsd887f8s"},this.customizations={title:"Wallet Recharge",description:"Wallet Recharge",logo:"https://dicont.s3.amazonaws.com/static/flow-logos/flutterwave-logo.png"},this.customerDetails={name:this.user.name,email:this.user.email,phone_number:this.user.phone}}ngOnInit(){}updateWallet(_=null){var d=this;return(0,x.A)(function*(){const P={amount:d.data.amount,user_id:localStorage.getItem("user_id"),trans_id:_,payment_method:d.payment_method,notes:"Wallet Recharge"};d.server.updateWallet(P).subscribe(R=>{d.payment_method=null,d.otherService.toast(d.text.payment_added),d.close(_)})})()}close(_=null){var d=this;return(0,x.A)(function*(){d.otherService.closeModel(_)})()}httpPost(){const _={user:localStorage.getItem("user_id"),total:this.data.amount};return this.http.post(this.server.getApiUrl()+"stripePayment",_).pipe((0,S.$)())}paymentSheet(){var _=this;return(0,x.A)(function*(){_.payment_method=1;try{O.addListener(T.SQ.Completed,()=>{console.log("PaymentSheetEventsEnum.Completed")});const d=_.httpPost();console.log(d);const{paymentIntent:P,ephemeralKey:R,customer:D}=yield function t(g,C){const u="object"==typeof C;return new Promise((_,d)=>{let R,P=!1;g.subscribe({next:D=>{R=D,P=!0},error:d,complete:()=>{P?_(R):u?_(C.defaultValue):d(new G.G)}})})}(d);yield O.createPaymentSheet({paymentIntentClientSecret:P,customerId:D,customerEphemeralKeySecret:R,merchantDisplayName:_.setting.app_name});const j=yield O.presentPaymentSheet();console.log("result: ",j),j&&j.paymentResult===T.SQ.Completed?_.updateWallet(_.splitAndJoin(P)):_.otherService.toast(_.text.payment_cancel)}catch{_.otherService.toast(_.text.payment_cancel)}})()}splitAndJoin(_){const d=_.split("_").slice(0,2).join("_");return console.log(d),d}payWithRazorpay(){var _=this;return(0,x.A)(function*(){RazorpayCheckout.open({description:"Pay Now",image:"https://cdn.iconscout.com/icon/free/png-512/bhim-3-69845.png",currency:"INR",key:_.setting.razor_key,amount:100*_.data.amount,name:_.user.name,prefill:{email:_.user.email,contact:_.user.phone},theme:{color:"#2196f3"},modal:{ondismiss:function(){alert("dismissed")}}},D=>{_.updateWallet(Date.now())},D=>{_.otherService.toast(_.text.payment_cancel)})})()}}return(g=C).\u0275fac=function(_){return new(_||g)(o.rXU($.y8),o.rXU(N.G),o.rXU(m.Qq),o.rXU(y.Z))},g.\u0275cmp=o.VBU({type:g,selectors:[["app-payment"]],decls:5,vars:2,consts:[[1,"ion-no-border"],["slot","end"],["color","medium",3,"click",4,"ngIf"],["class","ion-padding",4,"ngIf"],["color","medium",3,"click"],[1,"ion-padding"],["color","dark",2,"float","right","margin-top","5px"],["lines","none","detail","",3,"click",4,"ngIf"],["lines","none","detail","",3,"click"],["slot","start"],["src","assets/razor.png"],["name","crescent","slot","end",4,"ngIf"],["src","assets/stripe.png"],["name","crescent","slot","end"]],template:function(_,d){1&_&&(o.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),o.DNE(3,p,2,1,"ion-button",2),o.k0s()()(),o.DNE(4,X,25,6,"ion-content",3)),2&_&&(o.R7$(3),o.Y8G("ngIf",d.text),o.R7$(),o.Y8G("ngIf",d.data&&d.text))},dependencies:[c.bv,c.In,c.Jm,c.QW,c.W9,c.eU,c.uz,c.he,c.w2,c.Zx,c.ai,k.MD,k.bT,F.YN],styles:["ion-item[_ngcontent-%COMP%]{border-radius:5px;--min-height:60px;border:1px solid #f1f1f1}ion-toolbar[_ngcontent-%COMP%]{--background: white}ion-thumbnail[_ngcontent-%COMP%]{width:32px;height:32px}"]}),C})()}}]);