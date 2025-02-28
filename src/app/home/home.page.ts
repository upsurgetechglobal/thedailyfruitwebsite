import { Component, HostListener, ViewChild } from '@angular/core';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';
import { IonContent, ModalController } from '@ionic/angular';
import { FeedbackPage } from '../feedback/feedback.page';
import { DeliveryLocationPage } from '../delivery-location/delivery-location.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  data: any;
  admin: any;
  address: any;
  text: any;
  isMobile: boolean = false;
  allItem: any = [];
  type: any = 2;

  sample_data = {
    cate: [
      {
        id: 1,
        name: 'Veg',
        img: 'http://localhost/daily_fruit_admin/upload/category/1735795541536.webp',
      },
      {
        id: 2,
        name: 'Vegetable Salad',
        img: 'http://localhost/daily_fruit_admin/upload/category/1736999873609.webp',
      },
    ],
    banner: [
      {
        img: 'http://localhost/daily_fruit_admin/upload/banner/1735883848335.jpg',
        link_to: 0,
        link: null,
      },
      {
        img: 'http://localhost/daily_fruit_admin/upload/banner/1735883881426.jpg',
        link_to: 0,
        link: null,
      },
      {
        img: 'http://localhost/daily_fruit_admin/upload/banner/1735883893498.jpg',
        link_to: 0,
        link: null,
      },
      {
        img: 'http://localhost/daily_fruit_admin/upload/banner/1736177618358.jpg',
        link_to: 0,
        link: null,
      },
    ],
    trend: [
      {
        id: 1,
        name: 'Daily Fruits',
        address: 'Hyderabad',
        img: 'http://localhost/daily_fruit_admin/upload/store/1735886715464.png',
        km: '0.0',
        rating: 0,
        per_person: '70-80',
        currency: 'Rs.',
        deliver: true,
        subscribe: 2,
        max: '0',
      },
    ],
    new: [],
    random: [
      {
        id: 1,
        name: 'Daily Fruits',
        address: 'Hyderabad',
        img: 'http://localhost/daily_fruit_admin/upload/store/1735886715464.png',
        km: '0.0',
        rating: 0,
        per_person: '70-80',
        currency: 'Rs.',
        deliver: true,
        subscribe: 2,
        max: '0',
      },
    ],
    store: [
      {
        id: 1,
        name: 'Daily Fruits',
        address: 'Hyderabad',
        img: 'http://localhost/daily_fruit_admin/upload/store/1735886715464.png',
        km: '0.0',
        rating: 0,
        per_person: '70-80',
        currency: 'Rs.',
        deliver: true,
        subscribe: 2,
        max: '0',
      },
    ],
    admin: {
      id: 1,
      name: 'Admin',
      email: 'sushilasaharan9988@gmail.com',
      username: 'admin',
      currency: 'Rs.',
      currency_code: 'INR',
      password: '$2y$10$lDrNlab/0AxFzvXvcaqJ0.rme1cixxASz6pBsIRebFeUqyv/65122',
      role_id: 0,
      status: 0,
      welcome_title: 'Homemade Meals, Delivered to You',
      welcome_text:
        'Enjoy homemade meals, delivered to your doorstep with just a tap - introducing our tiffin box delivery app.',
      breakfast_img: '1681544062313.avif',
      lunch_img: null,
      dinner_img: null,
      verify_type: 3,
      sms_api: null,
      term_link: 'https://www.lipsum.com/',
      point_who: '10',
      point_use: '20',
      app_name: 'TifinBox',
      country_code: 'India',
      razor_key: 'rzp_test_khAWxVOzJqHRtP',
      flutter_key: 'FLWPUBK_TEST-08f24500ed6b4caa91929aab787ae211-X',
      stripe_key: 'pk_test_fLJjtfQhQoTwRPBjDmWjhsxw004EAIs6uo',
      stripe_sec_key: 'sk_test_zBEwnzJu7ESLQpfeHQJvTCAF00ELCjEvmc',
      push_user_app_id: null,
      push_user_rest_id: null,
      push_user_google_id: null,
      push_store_app_id: null,
      push_store_rest_id: null,
      push_store_google_id: null,
      push_delivery_app_id: null,
      push_delivery_rest_id: null,
      push_delivery_google_id: null,
      web_url: 'https://webtiffin.sushcode.in',
      created_at: '2021-06-29T11:56:17.000000Z',
      updated_at: '2025-01-08T15:37:49.000000Z',
    },
    cart: 0,
  };

  item_data = {
    store: {
      name: 'Daily Fruits',
      address: 'Hyderabad',
      img: 'http://localhost/daily_fruit_admin/upload/store/1735886715464.png',
      phone: '9999999999',
      lat: null,
      lng: null,
      working_day: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      breakfast: 0,
      lunch: 0,
      dinner: 0,
      b_time: '08:00:AM - 10:00:AM',
      l_time: '11:00:AM - 04:00:PM',
      d_time: '05:00:PM - 11:00:PM',
      max_km: '0',
      cates: ['Veg', 'Vegetable Salad'],
      rating: 0,
      ratings: [],
      subscribe: 2,
      offer: [],
      id: 1,
      veg: 0,
      non_veg: 0,
      egg: 0,
      fsi: null,
    },
    item: [
      {
        store_id: 1,
        id: 1,
        name: 'Diabetic Fruit Box',
        desc: "Start your day with a bowl of low-GI fruit.",
        price: '1999',
        img: 'http://localhost/daily_fruit_admin/upload/tifin/1735903084554.jpg',
        breakfast: 1,
        lunch: 0,
        dinner: 1,
        currency: 'Rs.',
        subscribe: 1,
        rating: 0,
        ratings: [],
        status: 0,
        type: 0,
      },
      {
        store_id: 1,
        id: 2,
        name: 'Full Breakfast Tifin',
        desc: "3 Mix Prantha's, Curd, Pickle & Butter",
        price: '80',
        img: 'http://localhost/daily_fruit_admin/upload/tifin/1735903096191.jpg',
        breakfast: 1,
        lunch: 0,
        dinner: 0,
        currency: 'Rs.',
        subscribe: 1,
        rating: 0,
        ratings: [],
        status: 0,
        type: 0,
      },
      {
        store_id: 1,
        id: 3,
        name: 'Non Veg Meal Box',
        desc: 'Chicken Curry, Fish Tikka, Rice & Salad',
        price: '220',
        img: 'http://localhost/daily_fruit_admin/upload/tifin/1735903223126.jpg',
        breakfast: 0,
        lunch: 1,
        dinner: 1,
        currency: 'Rs.',
        subscribe: 0,
        rating: 0,
        ratings: [],
        status: 0,
        type: 0,
      },
    ],
    custom: [],
    cart: 0,
    admin: {
      id: 1,
      name: 'Admin',
      email: 'sushilasaharan9988@gmail.com',
      username: 'admin',
      currency: 'Rs.',
      currency_code: 'INR',
      password: '$2y$10$lDrNlab/0AxFzvXvcaqJ0.rme1cixxASz6pBsIRebFeUqyv/65122',
      role_id: 0,
      status: 0,
      welcome_title: 'Homemade Meals, Delivered to You',
      welcome_text:
        'Enjoy homemade meals, delivered to your doorstep with just a tap - introducing our tiffin box delivery app.',
      breakfast_img: '1681544062313.avif',
      lunch_img: null,
      dinner_img: null,
      verify_type: 3,
      sms_api: null,
      term_link: 'https://www.lipsum.com/',
      point_who: '10',
      point_use: '20',
      app_name: 'TifinBox',
      country_code: 'India',
      razor_key: 'rzp_test_khAWxVOzJqHRtP',
      flutter_key: 'FLWPUBK_TEST-08f24500ed6b4caa91929aab787ae211-X',
      stripe_key: 'pk_test_fLJjtfQhQoTwRPBjDmWjhsxw004EAIs6uo',
      stripe_sec_key: 'sk_test_zBEwnzJu7ESLQpfeHQJvTCAF00ELCjEvmc',
      push_user_app_id: null,
      push_user_rest_id: null,
      push_user_google_id: null,
      push_store_app_id: null,
      push_store_rest_id: null,
      push_store_google_id: null,
      push_delivery_app_id: null,
      push_delivery_rest_id: null,
      push_delivery_google_id: null,
      web_url: 'https://webtiffin.sushcode.in',
      created_at: '2021-06-29T11:56:17.000000Z',
      updated_at: '2025-01-08T15:37:49.000000Z',
    },
    lang: {
      id: 0,
      name: 'English',
      icon: 'http://localhost/daily_fruit_admin/upload/language/en.png',
      text: {
        choose_location: 'Choose Location',
        search_location: 'Search for a place',
        trending_store: 'Trending Stores',
        view_all: 'View All',
        out_of_delivery: 'Out of delivery range',
        max_delivery: 'Max Delivery Radius',
        all_area: "Delivering in all area's",
        per_person: 'Per Person',
        new_arrive: 'New Arrivals',
        recomended: 'Recomended For You',
        all_store: 'All Stores',
        subscribed: 'Subscribed',
        footer_line: "You don't need a silver fork to eat good food",
        no_record: 'No record found for',
        from_cate: 'Search From Categories',
        view_direction: 'View Direction',
        people_subscribe: 'people subscribe this',
        avilable_offer: 'Avilable Discount Offers',
        delivery_days: 'Delivery Days',
        own_box: 'Create your own Box',
        breakfast: 'Breakfast',
        lunch: 'Lunch',
        dinner: 'Dinner',
        delivery_time: 'Delivery timing between',
        day: 'Day',
        add_to_cart: 'Add To Cart',
        cancel: 'Cancel',
        added: 'Item added in cart successfully',
        removed: 'Item removed successfully',
        select_days: 'Please select delivery days to continue',
        cart: 'Manage Cart',
        go_back: 'Go Back',
        cart_desc:
          'Choose your delivery days to receive subscription services and the price will be calculated accordingly. You can also skip a delivery by marking a day off from My Account after this, and the credited amount will go to your wallet.',
        remove: 'Remove',
        day_desc:
          'These price are showing per day. when you select following options it will be changed as per your selections.',
        continue: 'Continue',
        cart_empty: 'Oops! Your Cart is Empty.',
        start_item: 'Start Adding Items',
        correct_detail: 'Please enter correct details',
        logged_in: 'Logged in successfully',
        login_title: 'Login to Continue',
        phone: 'Phone no',
        email: 'Email',
        password: 'Password',
        forgot: 'Forgot Password?',
        reset: 'Reset Here',
        login: 'Login',
        dont_account: 'Dont have an account?',
        signup_here: 'Signup Here',
        agree_term: 'Please agree terms & conditions for continue',
        account_created: 'Account created successfully',
        signup_title: 'Create Your Free Account',
        signup_desc: 'For quick access & fast ordering, create your account.',
        name: 'First and Last Name',
        ref_code:
          'use this refral code for signup and get 200 instant ecash in your wallet.',
        iagree: 'i agree to the',
        term: 'Terms & Conditions',
        signup: 'Signup',
        forgot_title: 'Forgot Your Password?',
        forgot_desc: 'Dont worry! You can reset it from here.',
        reset_password: 'Reset Password',
        verify_email: 'Verify your email address',
        verify_phone: 'Verify your phone number',
        email_code_sent: 'A verify code has been sent on your email.',
        phone_code_sent: 'A verify code has been sent on your phone.',
        valid_otp: 'Please enter valid OTP',
        new_code_sent: 'A new code has been sent.Please check',
        verify: 'Verify',
        dont_otp: "Did'nt Receive the code?",
        resend_code: 'Resend Code',
        sub_time: 'Please select Subscription time',
        all_field: 'Please fill all the required fields',
        payment_cancel: 'Payment cancelled',
        checkout_title: 'Checkout',
        delivery_address: 'Delivery Address',
        checkout_desc:
          'Choose your subscription time, before subscribe to longer one you can try for short time also. Any time you can cancel it.',
        starting_date_desc:
          'Choose your starting date, when you want to start your subscription.',
        start_date: 'Starting Date',
        sub_time_title: 'Subscription Time',
        start: 'Start',
        valid: 'Valid Till',
        total_day_count: 'Total Days Count',
        amount: 'Amount',
        payable_amount: 'Total Payable Amount',
        discount_offers: 'Discount Offers',
        you_save: 'You have save',
        checkout_button: 'Checkout',
        total_amount: 'Total Amount',
        wallet_amount: 'Wallet Amount You Have',
        you_have_to: 'You have to add',
        add_more: 'more to place this order.',
        summery: 'Summery',
        no_offer: 'Sorry! No discount offer avilable right now',
        select_payment_method: 'Select Payment Method',
        credit: 'Credit/Debit Card',
        upi: 'UPI or Internate Banking',
        flutter: 'Pay With Flutterwave',
        payment_added: 'Payment Added Successfully',
        saved_address: "Select from Saved Address's",
        add_new_address: 'Add New Address',
        home: 'Home',
        office: 'Office',
        other: 'Other',
        com_address: 'Complete Address',
        floor: 'Floor (optional)',
        landmark: 'Nearby Landmark (optional)',
        search_place: 'Search for a place',
        save_address: 'Save Address',
        pin_point: 'Select your pin point',
        success_title: 'Order Places Successfully.',
        success_desc:
          'Your order has been placed successfully. You can access your order detail from your account.',
        my_order: 'My Orders',
        account_delete:
          'Your account and account related data deleted successfully. We will happy to see you again.',
        ref_title: 'Refer & Earn',
        wallet: 'Wallet',
        subscription: 'Orders',
        my_account: 'My Account',
        account_setting: 'Account Setting',
        wallet_balance: 'Wallet Balance',
        change_lang: 'Change Language',
        address_book: 'Address Book',
        delete_account: 'Delete My Account',
        logout: 'Logout',
        avil_balance: 'Avilable Balance in Wallet',
        wallet_title: 'Wallet',
        trans: 'Transactions',
        add_fund: 'Add Funds',
        fund_desc: 'Add funds to your wallet for interrupted transactions.',
        add: 'Add',
        enter_amount: 'Please enter amount',
        no_sub: 'Opps! No subscription found.',
        lets_start: 'Lets Start',
        manage_sub: 'Click on Manage Subscription for complete detail',
        my_sub: 'My Orders',
        managesub: 'Manage Subscription',
        sub_price: 'Price',
        give_rating: 'Give Rating',
        sub_stop: 'Subscription Stopped Successfully.',
        stop_sub: 'Stop Subscription',
        del_cal: 'Delivery Calendar',
        date_desc:
          'Here is your delivery calendar, you can select the dates and can mark them if you dont want delivery on that days. Amount will be auto creadit in your wallet.',
        date: 'Date',
        status: 'Status',
        on_way: 'On the way',
        reorder: 'Click here for reorder',
        cancel_sub:
          'Oops! Sorry to hear that you want to cancel your subscription. No worries, you can always resubscribe whenever you like.',
        pending_days: 'Pending Days',
        return_amount: 'Returnable Amount',
        dont_send: 'Do not send delivery on these dates',
        custom_title: 'Create your own customized box here.',
        address_removed: 'Address removed successfully.',
        no_address: 'Sorry! You dont have any saved address.',
        welcome: 'Welcome',
        guest: 'Guest',
        menu_home: 'Home',
        menu_account: 'My Account',
        menu_wallet: 'Wallet',
        menu_sub: 'Orders',
        menu_cart: 'Cart',
        menu_lang: 'Change Language',
        how_it_work: 'How it Works',
        about_us: 'About Us',
        faq: "FAQ's",
        contact_us: 'Contact us',
        other_link: 'Other Links',
        about_title: 'About Us',
        faq_title: "FAQ's",
        contact_title: 'Contact Us',
        contact_desc:
          'Send us your message or feedback. We will contact you soon.',
        send: 'Send',
        contact_msg:
          'Thank You! We have received your message. We will contact you soon.',
        notes_order: 'Any notes or comment about order',
        find_meal: 'Lets find your meal',
        eat_happy: 'Eat what makes you happy',
        night_mode: 'Night Mode',
        rate_desc:
          'Please give your valuable feedback, We will use this for improve our service.',
        select_rating: 'Select Rating',
        submit: 'Submit',
        your_name: 'Your Name',
        change_password: 'Change Password',
        update_profile_pic: 'Update Profile Picture',
        remove_img: 'Remove Image',
        update: 'Update',
        new_pass: 'New Password',
        con_pass: 'Confirm Password',
        your_msg: 'Your Message',
        '': '',
      },
      type: 0,
    },
  };
  showScrollTopButton = false;
  @ViewChild('content', { static: false }) content: any;
  constructor(
    public server: ServerService,
    public otherService: OtherService,
    private modalCtrl: ModalController
  ) {
    this.address = localStorage.getItem('current_address')
      ? localStorage.getItem('current_address')
      : 'Civil Lines, New Delhi';

    const text = localStorage.getItem('app_lang');

    if (text !== null) {
      this.text = JSON.parse(text);
      this.text = this.text.text;
      // this.text.menu_sub = 'My Orders'

    }

    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }

  ionViewWillEnter() {
    this.otherService.statusBar('#304b58', 1);
  }
  onScroll(event: any) {
    this.showScrollTopButton = event.detail.scrollTop > 300; // Show after scrolling 300px
  }

  scrollToTop() {
    this.content.scrollToTop(500); // Scroll to top in 500ms
  }

  ngOnInit() {
    this.openLocationModal();
    this.loadData();
    this.highlyRecommended();
  }

  async openLocationModal() {
    const modal = await this.modalCtrl.create({
      component: DeliveryLocationPage,
      animated: true,
      cssClass: 'custom-modal', // Add a custom class here
    });
    await modal.present();
  
    const { data } = await modal.onWillDismiss();
    // console.log('Selected Location:', data);
  }
  

  async loadData() {
    this.server.homepage().subscribe((response: any) => {
      this.data = response.data;
      console.log(' this.data', this.data)
    // this.data = this.sample_data;
    localStorage.setItem('cates', JSON.stringify(this.data.cate));
    localStorage.setItem('admin_setting', JSON.stringify(this.data.admin));
    });
  }

  async highlyRecommended() {
    this.server.item(1).subscribe((response:any) => {
    localStorage.setItem('admin_setting', JSON.stringify(response.data.admin));
    localStorage.setItem('app_lang', JSON.stringify(response.data.lang));
    localStorage.setItem('lang_id', '0');

    this.text = response.data.lang.text;
    this.allItem = response.data;
    // this.allItem = this.item_data;
    console.log(' this.allItem', this.allItem)

    // this.setItem();
    });
  }
  detail(item: any) {
    this.server.item(1).subscribe((response:any) => {
      localStorage.setItem('store_data', JSON.stringify(response.data.store));
    })
    localStorage.setItem('item_data', JSON.stringify(item));
    localStorage.setItem('item_type', this.type);

    return this.otherService.redirect('detail');
  }

  async openModel(item: any, type: any) {
    const modal = await this.modalCtrl.create({
      component: FeedbackPage,
      animated: true,
      mode: 'ios',
      componentProps: {
        data: { item: item, type: type },
      },
    });

    modal.onDidDismiss().then((data) => {});

    return await modal.present();
  }

  // async setItem()
  // {
  //   for(var i =0;i<this.data.item.length;i++)
  //     {
  //       if(this.chkFilter(this.data.item[i]))
  //       {
  //         this.allItem.push(this.data.item[i]);
  //       }
  //     }
  // }

  async bannerLink(banner: any) {
    if (banner.link_to == 2) {
      window.open(banner.link, '_blank');
    } else {
      if (!banner.link) {
        this.otherService.redirect('view/all');
      } else {
        this.otherService.redirect('item/' + banner.link);
      }
    }
  }

  async handleRefresh(event: any) {
    this.loadData();

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
