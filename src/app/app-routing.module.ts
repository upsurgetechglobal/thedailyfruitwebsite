import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'item/:id',
    loadComponent: () => import('./item/item.page').then( m => m.ItemPage)
  },
  {
    path: 'detail',
    loadComponent: () => import('./detail/detail.page').then( m => m.DetailPage)
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome.page').then( m => m.WelcomePage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.page').then( m => m.CartPage)
  },
  {
    path: 'subscribed-cart',
    loadComponent: () => import('./subscribed-cart/subscribed-cart.page').then( m => m.SubscribedCartPage)
  },
  {
    path: 'coustom',
    loadComponent: () => import('./coustom/coustom.page').then( m => m.CoustomPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'otp',
    loadComponent: () => import('./otp/otp.page').then( m => m.OtpPage)
  },
  {
    path: 'setting',
    loadComponent: () => import('./setting/setting.page').then( m => m.SettingPage)
  },
  {
    path: 'checkout/:type',
    canActivate: [AuthGuard],
    loadComponent: () => import('./checkout/checkout.page').then( m => m.CheckoutPage)
  },
  {
    path: 'address',
    loadComponent: () => import('./address/address.page').then( m => m.AddressPage)
  },
  {
    path: 'payment',
    loadComponent: () => import('./payment/payment.page').then( m => m.PaymentPage)
  },
  {
    path: 'success',
    loadComponent: () => import('./success/success.page').then( m => m.SuccessPage)
  },
  {
    path: 'account',
    // canActivate: [AuthGuard],
    loadComponent: () => import('./account/account.page').then( m => m.AccountPage)
  },
  {
    path: 'search',
    loadComponent: () => import('./search/search.page').then( m => m.SearchPage)
  },
  {
    path: 'location',
    loadComponent: () => import('./location/location.page').then( m => m.LocationPage)
  },
  {
    path: 'map',
    loadComponent: () => import('./map/map.page').then( m => m.MapPage)
  },
  {
    path: 'view/:type',
    loadComponent: () => import('./view/view.page').then( m => m.ViewPage)
  },
  {
    path: 'forgot',
    loadComponent: () => import('./forgot/forgot.page').then( m => m.ForgotPage)
  },
  {
    path: 'password',
    loadComponent: () => import('./password/password.page').then( m => m.PasswordPage)
  },
  {
    path: 'payment',
    loadComponent: () => import('./payment/payment.page').then( m => m.PaymentPage)
  },
  {
    path: 'sum',
    loadComponent: () => import('./sum/sum.page').then( m => m.SumPage)
  },
  {
    path: 'wallet',
    loadComponent: () => import('./wallet/wallet.page').then( m => m.WalletPage)
  },
  {
    path: 'confirm',
    loadComponent: () => import('./confirm/confirm.page').then( m => m.ConfirmPage)
  },
  {
    path: 'offer',
    loadComponent: () => import('./offer/offer.page').then( m => m.OfferPage)
  },
  {
    path: 'subscription',
    canActivate: [AuthGuard],
    loadComponent: () => import('./subscription/subscription.page').then( m => m.SubscriptionPage)
  },
  {
    path: 'dates',
    loadComponent: () => import('./dates/dates.page').then( m => m.DatesPage)
  },
  {
    path: 'book',
    loadComponent: () => import('./book/book.page').then( m => m.BookPage)
  },
  // {
  //   path: 'language',
  //   loadComponent: () => import('./language/language.page').then( m => m.LanguagePage)
  // },
  {
    path: 'custom',
    loadComponent: () => import('./custom/custom.page').then( m => m.CustomPage)
  },
  {
    path: 'rating/:id/:type/:name/:sname',
    loadComponent: () => import('./rating/rating.page').then( m => m.RatingPage)
  },
  {
    path: 'feedback',
    loadComponent: () => import('./feedback/feedback.page').then( m => m.FeedbackPage)
  },
  {
    path: 'how',
    loadComponent: () => import('./how/how.page').then( m => m.HowPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.page').then( m => m.ContactPage)
  },
  {
    path: 'faq',
    loadComponent: () => import('./faq/faq.page').then( m => m.FaqPage)
  },
  // {
  //   path: 'tabs',
  //   loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)
  // },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
