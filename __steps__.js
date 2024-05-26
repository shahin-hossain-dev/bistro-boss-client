//Module 68

/**
 * 1. create and database & post api in server
 * 2. hit the api form client sign up page with useAxiosPublic
 * 3. set dashboard in private route
 * 4. google login, setup with separate component called socialLogin
 * 5. check user exist then interst database user
 * 6. hit the post /user api with google login data using public axios form socialLogin component
 * 7. create extra contact route in dashboard for different user role set.
 * 8. create some admin route, patch user update ot admin role from allUsers page
 * 9. secure admin role with jwt token (setup token) from server side
 * 10. set token client side when user authenticate in website, authprovider থেকে token কে সেট করতে হবে।
 * ১১. ‍ all user component থেকে token কে backend এ পাঠাতে হবে।
 * ১২. backend থেকে token কে ধরতে হবে।
 * 12. token কে varify করতে হবে। এবং client side এ useAxios Secure এর মধ্যে interceptor, request & response কে setup করতে হবে।
 */

/**
 * --------------
 * MODULE 70
 * --------------
 * 1. payment page create in dashboard
 * 2. set route, link pay button in cart page
 * 3. setup Stripe on Payment page & form in Checkout form page
 * 4. crate stripe account
 * 5. get api key form stripe website, api key set in .env
 * 6.create checkoutForm & mount in payment page
 *
 * server:
 * 7. server side setup stripe with post api
 * 8. send post request from client site checkoutForm
 */

/**
 * STRIPE
 * 1. install stripe
 * 2. create card element
 * 3. create stripe account get publishable key
 * 4. use publishable key and use stripe to get card info and error
 */
