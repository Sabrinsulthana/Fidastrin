
<html lang="en-US">
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Type" content="text/html">
  <title>decentralize mutual funds</title>
  <meta name="author" content="Jake Rocheleau">
  <link rel="shortcut icon" href="http://designshack.net/favicon.ico">
  <link rel="icon" href="http://designshack.net/favicon.ico">
  <link rel="stylesheet" type="text/css" media="all" href="../app/stylesheets/app.css">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  
  <script type="text/javascript" src="../app/javascripts/jquery-1.10.2.min.js"></script>
 
  <script src="../app.js"></script>
</head>
<body>
    <style type="text/css">
   
    h2{
         color:plum;
     }
    body {
      background: linear-gradient(132deg, #6975b9, #11d4e2);
      background-size: 400% 400%;
      animation: BackgroundGradient 30s ease infinite;
  }
  @keyframes BackgroundGradient {
      0% {background-position: 0% 50%;}
      50% {background-position: 100% 50%;}
      100% {background-position: 0% 50%;}
  }
  .container{
      background-size: 100px;
      height: 250px;
      width: 500px;
  }
  .dropdown {
            background-color: rgb(20, 205, 238);
            color: rgb(46, 240, 240);
            padding: 0px;
            font-size: 10px;
            border: none;
            cursor: pointer;
        }
   .dropdown {
            position: relative;
            display: inline-block;
        }
        
 .dropdown-content {
            display: none;
            position: absolute;
            background-color: #21e7e7;
            min-width: 100px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }
        
        .dropdown-content a {
            color: rgb(17, 184, 235);
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }
        
        .dropdown-content a:hover {background-color: #22eedd}
        
        .dropdown:hover .dropdown-content {
            display: block;
        }
        
        .dropdown:hover .dropbtn {
            background-color: rgb(23, 169, 226);
        }
   
</style>

    <nav>
        <ul><center>
           <h2 style="float:left">PORTFOLIO MANAGER PAGE</h2>
           <div style="float:right"><li><a href="#PTO" class="team-marker active">VIEW PURCHASE TOKEN</a></li></div>
           <!--<div style="float:right"> <li><a href="../app/purchasetoken.html" class="about-marker active">PURCHASE TOKEN</a></li>-->
        
                  <div class="dropdown" style="float:right">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">PURCHASE TOKEN</button>
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                          <li><a href="#"><a href="../app/purchasetoken.html">Token 1</a></a></li>
                          <li><a href="#">Token 2</a></li>
                        </ul>
       </div>
           <div style="float:right"><li><a href="#DIVS" class="team-marker active">DIVIDENDS</a></li></div>
           <div style="float:right"> <li><a href="#tokes" class="about-marker active">ACCOUNT</a></li></div>
            <div style="float:right"> <li><a href="../app/index.html" class="about-marker active">HOME</a></li></div>
        
    </center></ul>
    </nav> 
          <section  class="section">
              <h2>REGISTER</h2>
          <div class="container">
               <div class="button button2">
          <p><center><b>Enter Ether Value:</b></p>
            <input type="text" id="reg">  
        
            <button class="buttons button1" onclick="App.register();">Stake</button>
        </div>
    </section>
      
      
      
        <br><br><br><br><br><br><br><br>
        <div>
        <section id="tokes" class="section">
            <h2>PORTFOLIO ACCOUNT</h2>
        <div class="container">
                <div class="button button2">
            Portfolio Address: <input type="text" id="ads" readonly>
            Available Tokens<input type="text" id="at" readonly>
        </div>     
  </section>
  <br><br><br><br><br><br>
  <section id="DIVS" class="section" >
      <h2>DIVIDENDS</h2>
      <div class="container">
            <div class="button button2">
  <button   class="buttons button1" id="divs" onclick="App.div();">Dividends</button>
  </div>
</div>
  <br><br><br><br><br><br><br><br><br><br>
</section>
        
  <br><br><br><br><br><br><br><br><br><br>
  <div>
      <section id="PTO" class="section">
          <h2>PURCHASE TOKEN DETAILS</h2>
         <div class="button button2">
          Contract Address<input type="text" id="1" readonly>
          Available Token<input type="text" id="5" readonly>        
        
          <button   class="buttons button1" onclick="App.cadds();App.tokval()">VIEWDETAILS</button>
     </div> 


 
</script>
</body>
</html>
