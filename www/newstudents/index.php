<html>
<head>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
<style>
@page {
  size: Letter landscape;
}
@font-face {
  font-family: 'Roboto', sans-serif;
}
h1 {
  font-family: 'Roboto', sans-serif;

}
h2 {
  font-family: 'Roboto', sans-serif;
}
p {
  font-family: 'Roboto', sans-serif;
}
li {
  font-family: 'Roboto', sans-serif;
}
@media print {
    .pagebreak { page-break-before: always; } /* page-break-after works, as well */
    body {
    column-count: 2;
    -webkit-column-count: 2;
    -moz-column-count: 2;
    -webkit-column-width: 100px; /* Chrome, Safari, Opera */
    -moz-column-width: 100px; /* Firefox */
  column-width: 100px;
  }
    
h1 {
  font-size:medium;

}
h2 {
  font-size:small;
}
p {
  font-size:smaller;
}
li {
  font-size: smaller;
}
.screenshot {
  max-width:50%;
}
}
</style>

</head>
    <body onload="window.print()">
<div class="col-container">
<h1>Welcome to Academy of Learning, <?php echo $_GET["FirstName"]; ?>!</h1>

<p>To get started with your learning journey, please follow the below instructions.</p>

<ol>
<h2><li>Logging into the school computer.</li></h2>
    <ol>
<li>Ensure the Computer, Monitor, Keyboard and Mouse are all turned on.</li>
<li>At the Welcome screen, click anywhere on the screen to bring up the login screen.</li>
<li>Enter your Username, hit the tab key and enter your Password then press the [ENTER] key on the keyboard.</li>
 <ul>
   <li><b>Username: </b> <?php echo $_GET["FirstName"]; ?>.<?php echo $_GET["LastName"]; ?>@o.aolccbc.com</li>
   <li><b>Password: </b> <?php echo $_GET["Pass"]; ?></li>
</ul>

  </ol>


  <h2> <li>Attendance Tracker</li></h2>
  <p>Note: you are responsible for logging your attendance.<br />We recommend writing down your attendance in case of issues.</p>
  <ol>
    <li>Open your web browser (Microsoft Edge or Google Chrome) or click the start button</li>
    <li>In the search bar, enter aolccbc.com and then press [ENTER] to go to the school’s home page.</li>
    <li>Find the “Student Resources” menu. If it is not visible, click the <img src="menu.png"> menu button, then “Student Resources”. Then click the “Attendance Tracker” link.</li>
    <li>On the attendance tracker page, enter your student username and password and click the Select Course button.</li>
    <ul>
      <li><b>Username:</b> <?php echo $_GET["FirstName"]; ?>.<?php echo $_GET["LastName"]; ?></li>
      <li><b>Password:</b> <?php echo $_GET["Pass"]; ?></li>
</ul>
<li>In the Dropdown list, select the course you are working on and click "Sign In".<br /> <i>NOTE: To sign out, follow steps 1-5, but click "Sign Out" instead</i></li>
<li>Close this tab by clicking the X or using the keyboard shortcut [CTRL]+W.

</ol>
<h2> <li>Accessing your courses (myAOLCC) </li></h2>
<ol>
<p>Effective February 17<sup>th</sup> until March 31<sup>st</sup>, you will need to access the <i>new</i> Learning Hub via the URL <a href="mynew.aolcc.ca">mynew.aolcc.ca</a>.</p>
<p>After April 1<sup>st</sup>, the URL will be <a href="my.aolcc.ca">my.aolcc.ca</a>
<li>Now that you are back on the campus home page, click on myAOLCC 2.0 (Note: after March 31<sup>st</sup>, 2021, you can click myAOLCC)<p><i>Note:You can skip steps 2-5 once you have completed them for the first time</i></p></li>
<li>Open a new tab (You can press [CTRL]+T to do this) and go to your personal email account webmail address (gmail.com, yahoo.ca, outlook.com, etc.)
  <p><i>Note: If you do not have an email address, you can use the school email we gave you. Just go to Outlook.com and log in with as: </i><br />
  <ul>
  <li><b>Username: </b> <?php echo $_GET["FirstName"]; ?>.<?php echo $_GET["LastName"]; ?>@o.aolccbc.com</li>
   <li><b>Password: </b> <?php echo $_GET["Pass"]; ?></li>

</ul>
</li>
<li>Log into your email account and find the new account email you would have just received.
</li>
<li>Follow the prompts to create your password for the learning hub. If you choose your own, we recommend scratching out the suggested password below and write down the one you chose.
<ul>
<li><b>Email:</b> <?php echo $_GET["Email"]; ?></li>
<li><b>Password:</b> <?php echo $_GET["Pass"]; ?></li>
</ul>
<li>Log out of your email and close the tab.</li>
<li>Log into myAOLCC with the email and password in step 5.</li>

<li>If prompted, Save your username and password to make logging into the learning hub quicker.</li>
<li>If a course was just activated for you, you will see a notification at the top of the page.<br />
Please click "ACCEPT". <br />
<i>NOTE: If you "DECLINE" a course, there will be a delay in getting the course added to your account. Please contact your facilitator if you do this.</i></li>
</ol>
<h2><li>Typing Trainer</li></h2>
<ol>
<li> Click the start button.</li>
<li> If you are at the campus, click on "Connect to Typing Trainer" - Otherwise, click on "Typing Trainer"</li>
<li> Log in with your username and password:
<ul>
  <li><b>Username: </b> <?php echo $_GET["FirstName"]; ?>.<?php echo $_GET["LastName"]; ?></li>
   <li><b>Password: </b> <?php echo $_GET["Pass"]; ?></li>

</ul></li>

<p>Note: if any of the above steps do not work, please ask your facilitator either in person or by phone at <?php echo $_GET["SchoolPhone"]; ?> or email <a href="mailto:<?php echo $_GET["SchoolEmail"]; ?>"><?php echo $_GET["SchoolEmail"]; ?></a></p>
</ol>
</ol>
</div>
</body>
</html>