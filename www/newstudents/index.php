<!DOCTYPE html>
<html style="zoom: 89%;">
<head>
  <link href="https://fonts.gstatic.com"
        rel="preconnect">
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet">
  <style>
  @page {
  size: Letter;

  }
  @media print {
    .pagebreak { page-break-before: always; } /* page-break-after works, as well */
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
  td {
  font-family: 'Roboto', sans-serif;
  }


  </style>
  <title></title>
</head><body onload="window.print()">
<body>
  <div class="-container">
    <h1>Welcome to Academy of Learning, <?php echo $_GET["FirstName"]; ?>!</h1>
    <p>For Reference, here are your login credentials:</p>
    <table>
      <tr>
        <td><u><b>School Computer Login</b></u></td>
        <td><u><b>Attendance & Typing</b></u></td>
        <td><u><b>Learning Hub</b></u></td>
      </tr>
      <tr>
        <td><b>Username:</b> <?php echo $_GET["FirstName"]; ?>.<?php echo $_GET["LastName"]; ?>@aolccbc.com</td>
        <td><b>Username:</b> <?php echo $_GET["FirstName"]; ?>.<?php echo $_GET["LastName"]; ?></td>
        <td><b>Username:</b> <?php echo $_GET["Email"]; ?></td>
      </tr>
      <tr>
        <td><b>Password:</b> <?php echo $_GET["Pass"]; ?></td>
        <td><b>Password:</b> <?php echo $_GET["Pass"]; ?></td>
        <td><b>Password:</b> <?php echo $_GET["Pass"]; ?></td>
      </tr>
    </table>
    <ol>
      <li>
        <h3>Logging into the school computer.</h3>
      </li>
      <p>**Skip this step if working from home**</p>
      <ol>
        <li>Ensure the Computer, Monitor, Keyboard and Mouse are all turned on.</li>
        <li>At the Welcome screen, click anywhere on the screen to bring up the login screen.</li>
        <li>Enter your Lab Computer username and password then press the [ENTER] key on the keyboard.</li>
      </ol>
      <li>
        <h3>AOLCCBC.COM</h3>
      </li>
      <ol>
        <li>Click on the start button.</li>
        <li>Type aolccbc.com and hit enter - this will launch the school website in your web browser.</li>
      </ol>
      <li>
        <h3>Attendance Tracker</h3>
      </li>
      <p>Note: you are responsible for logging your attendance.<br>
      We recommend writing down your attendance in case of issues.</p>
      <ol>
        <li>Find the “Student Resources” menu. If it is not visible, click the menu button, then “Student Resources”. Then click the "Attendance Tracker" link.</li>
        <li>On the attendance tracker page, enter your student username and password and click the Select Course button.</li>
        <li>In the Dropdown list, select the course you are working on and click "Sign In".<br>
        <i>NOTE: To sign out, follow steps 1-5, but click "Sign Out" instead</i></li>
        <li>Close this tab by clicking the X or using the keyboard shortcut [CTRL]+W.</li>
      </ol>
      <li>
        <h3>Accessing your courses (myAOLCC)</h3>
      </li>
      <ol>
        <li>Now that you are back on the campus home page, click on myAOLCC</li>
        <li>Log in using your Learning Hub Credentials</li>
        <li>If prompted, Save your username and password to make logging into the learning hub quicker.</li>
        <li>If a course was just activated for you, you will see a notification at the top of the page.<br>
        Please click "ACCEPT".<br>
        <i>NOTE: If you "DECLINE" a course, there will be a delay in getting the course added to your account. Please contact your facilitator if you do this.</i></li>
      </ol>
      <li>
        <h3>Typing Trainer</h3>
      </li>
      <ol>
        <li>Click the start button.</li>
        <li>If you are at the campus, click on "Connect to Typing Trainer" - Otherwise, click on "Typing Trainer"</li>
        <li>Log in with your username and password from above.</li>
      </ol>
    </ol>
  </div>
  <div class="pagebreak"></div>
  <div>
    <div>
      <div>
        <table align='right' style='border: 1px solid black;'>
          <tr>
            <td><?php echo $_GET["FirstName"]; ?>&nbsp;<?php echo $_GET["LastName"]; ?><br>
            <?php echo $_GET["Contract"]; ?></td>
          </tr>
        </table>
      </div><br />
      &nbsp;<br />
      <h1 align='center'>Student Campus Orientation Checklist</h1>
      <p align='center'>Please check off the following items to ensure that each new student is getting a standardized and comprehensive orientation to our Campus:</p>
      <table align='center'>
        <tr>
          <td align='center'
              colspan='3'>&#11036; Welcome / Introduce yourself / Business Cards</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&#11036;Logging onto the desktop</td>
          <td>&nbsp;</td>
          <td>&#11036;Student Record</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&#11036;Disease Prevention Procedures</td>
          <td>&nbsp;</td>
          <td>&#11036;Daily Progress (min one lesson/day)</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#11036; Masks - Mandatory</td>
          <td>&nbsp;</td>
          <td>&#11036;Exams/Exam Dates/Exam Marks</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#11036; Hand Washing</td>
          <td>&nbsp;</td>
          <td>&#11036;Attendance log-in</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#11036; Wipe Down Stations</td>
          <td>&nbsp;</td>
          <td>&#11036;Remote Learning</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#11036; Illness</td>
          <td>&nbsp;</td>
          <td>&#11036;Student Data Folder</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&#11036;Washrooms</td>
          <td>&nbsp;</td>
          <td>&#11036; MyAOLCC</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&#11036;Learning Coach Desk</td>
          <td>&nbsp;</td>
          <td>&#11036;Typing Trainer (If Applicable)</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&#11036;Cell phone use</td>
          <td>&nbsp;</td>
          <td>&#11036;Encourage the asking of questions</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&#11036;Breaks - Lunch Room Closed</td>
          <td>&nbsp;</td>
          <td>&#11036;Allocation of computers</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&#11036;Perfumes, Colognes, &amp; smoking</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td align='center'
              colspan='3'>&#11036; Good luck</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td span="6">Orientation completed by: _______________________</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Date: ___/____/20____</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
      </table>
    </div>
  </div>
</body>
</html>
