export default `
<html lang="en"><head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="Pragma" name="Cache-Control" content="no-cache">
  <meta http-equiv="Cache-Control" name="Cache-Control" content="no-cache">
  <link rel="stylesheet" href="/css/web_defaultapp.css" type="text/css">
  <link rel="stylesheet" href="/css/web_defaultprint.css" type="text/css" media="print">
  <title>Your schedule</title>
  <meta http-equiv="Content-Script-Type" name="Default_Script_Language" content="text/javascript">
  <script async="" src="//www.googletagmanager.com/gtm.js?id=GTM-SDML"></script><script language="JavaScript" type="text/javascript">
  <!-- Hide JavaScript from older browsers
  window.onunload = function() {submitcount=0;}
  var submitcount=0;
  function checkSubmit() {
    if (submitcount == 0)
    {
      submitcount++;
      return true;
    }
    else
    {
      alert("Your changes have already been submitted.");
      return false;
    }
  }
  //  End script hiding -->
</script>
  <script language="JavaScript" type="text/javascript">
    <!-- Hide JavaScript from older browsers
    //  Function to open a window
    function windowOpen(window_url) {
      helpWin = window.open(window_url,'','toolbar=yes,status=no,scrollbars=yes,menubar=yes,resizable=yes,directories=no,location=no,width=350,height=400');
      if (document.images) {
        if (helpWin) helpWin.focus()
      }
    }
    //  End script hiding -->
  </script>
  <script language="JavaScript" type="text/javascript">
    function SetCookie(cookieName,cookieValue,nDays) {
      var today = new Date();
      var expire = new Date();
      if (nDays==null || nDays==0) nDays=1;
      expire.setTime(today.getTime() + 3600000*24*nDays);
      document.cookie = cookieName+"="+escape(cookieValue)
        + ";expires="+expire.toGMTString();
    }
    function ReadCookie(cookieName) {
      var theCookie=" "+document.cookie;
      var ind=theCookie.indexOf(" "+cookieName+"=");
      if (ind==-1) ind=theCookie.indexOf(";"+cookieName+"=");
      if (ind==-1 || cookieName=="") return "";
      var ind1=theCookie.indexOf(";",ind+1);
      if (ind1==-1) ind1=theCookie.length;
      return unescape(theCookie.substring(ind+cookieName.length+2,ind1));
    }
    var ind2=document.referrer.indexOf("twbkwbis");
    if (ReadCookie('refer') == null || (ind2==-1 referrer != ReadCookie('refer') referrer != '') )  SetCookie( 'refer', document.referrer, 1 );
    //  End script hiding -->
  </script>
</head>
<body>
<!-- Google Tag Manager BSS-->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-SDML"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script> var dataLayer = dataLayer || [];(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'='+l:'';j.async=true;j.src=
  '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-SDML');</script>
<!-- End Google Tag Manager -->
<div class="headerwrapperdiv">
  <div class="pageheaderdiv1">
    <a href="#main_content" onmouseover="window.status='Go to Main Content'; return true" onmouseout="window.status=''; return true" onfocus="window.status='Go to Main Content'; return true" onblur="window.status=''; return true" class="skiplinks">Go to Main Content</a>
    <h1> </h1></div><div class="headerlinksdiv">
<span class="pageheaderlinks2">
<map name="Module_Navigation_Links_H" title="Module Navigation Links">
<p>
<a href="#skip_Module_Navigation_Links_H" onmouseover="window.status='Skip Module Navigation Links'; return true" onmouseout="window.status=''; return true" onfocus="window.status='Skip Module Navigation Links'; return true" onblur="window.status=''; return true" class="skiplinks">Skip Module Navigation Links</a>
</p><table class="plaintable" summary="This is main table for displaying Tab Items." width="100%" cellspacing="0" cellpadding="0" border="0">
<tbody><tr>
<td class="pldefault">
<table class="plaintable" summary="This table displays Tab Items." cellspacing="0" cellpadding="0" border="0">
<tbody><tr>
<td class="taboff" height="22">
<a href="/owa_prod/twbkwbis.P_GenMenu?name=bmenu.P_MainMnu">Main Menu</a>
</td>
<td class="bgtaboff" height="22" valign="top" align="right">
<img src="/wtlgifs/web_tab_corner_right.gif" alt="Tab Corner Right" class="headerImg" title="Tab Corner Right" name="web_tab_corner_right" hspace="0" vspace="0" border="0" height="20" width="8">
</td>
<td class="tabon" height="22">
<a href="/owa_prod/twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu">Student Self Service</a>
</td>
<td class="bgtabon" height="22" valign="top" align="right">
<img src="/wtlgifs/web_tab_corner_right.gif" alt="Tab Corner Right" class="headerImg" title="Tab Corner Right" name="web_tab_corner_right" hspace="0" vspace="0" border="0" height="20" width="8">
</td>
<td class="tabon" height="22">
<a href="/owa_prod/twbkwbis.P_GenMenu?name=bmenu.Admissions">Admissions</a>
</td>
<td class="bgtabon" height="22" valign="top" align="right">
<img src="/wtlgifs/web_tab_corner_right.gif" alt="Tab Corner Right" class="headerImg" title="Tab Corner Right" name="web_tab_corner_right" hspace="0" vspace="0" border="0" height="20" width="8">
</td>
<td class="tabon" height="22">
<a href="/owa_prod/twbkwbis.P_GenMenu?name=bmenu.P_RegMnu">Registration</a>
</td>
<td class="bgtabon" height="22" valign="top" align="right">
<img src="/wtlgifs/web_tab_corner_right.gif" alt="Tab Corner Right" class="headerImg" title="Tab Corner Right" name="web_tab_corner_right" hspace="0" vspace="0" border="0" height="20" width="8">
</td>
<td class="tabon" height="22">
<a href="/owa_prod/twbkwbis.P_GenMenu?name=bmenu.P_FinAidMnu" onmouseover="window.status='Financial Aid'; return true" onmouseout="window.status=''; return true" onfocus="window.status='Financial Aid'; return true" onblur="window.status=''; return true">Financial Aid</a>
</td>
<td class="bgtabon" height="22" valign="top" align="right">
<img src="/wtlgifs/web_tab_corner_right.gif" alt="Tab Corner Right" class="headerImg" title="Tab Corner Right" name="web_tab_corner_right" hspace="0" vspace="0" border="0" height="20" width="8">
</td>
</tr>
</tbody></table>
</td>
</tr>
<tr>
<td class="bgtabon" width="100%" colspan="2"><img src="/wtlgifs/web_transparent.gif" alt="Transparent Image" class="headerImg" title="Transparent Image" name="web_transparent" hspace="0" vspace="0" border="0" height="3" width="10"></td></tr></tbody></table>
</map>
</span>
  <a name="skip_Module_Navigation_Links_H"></a>
</div>
  <table class="plaintable" summary="This table displays Menu Items and Banner Search textbox." width="100%">
    <tbody><tr>
      <td class="pldefault">
        <div class="headerlinksdiv2">
        </div>
      </td>
      <td class="pldefault"><p class="rightaligntext">
<span class="pageheaderlinks">
<a href="/owa_prod/twbkwbis.P_GenMenu?name=bmenu.P_RegMnu" class="submenulinktext2" id="ssbbackurl">RETURN TO MENU</a>
|
<a href="/owa_prod/twbksite.P_DispSiteMap?menu_name_in=bmenu.P_MainMnu&amp;depth_in=2&amp;columns_in=3" accesskey="2" class="submenulinktext2">SITE MAP</a>
|
<a href="/owa_prod/twbkfrmt.P_DispHelp?pagename_in=bwskfshd.P_CrseSchd" accesskey="H" onclick="popup = window.open('/owa_prod/twbkfrmt.P_DispHelp?pagename_in=bwskfshd.P_CrseSchd', 'PopupPage','height=500,width=450,scrollbars=yes,resizable=yes'); return false" target="_blank" onmouseover="window.status='';  return true" onmouseout="window.status=''; return true" onfocus="window.status='';  return true" onblur="window.status=''; return true" class="submenulinktext2">HELP</a>
|
<a href="twbkwbis.P_Logout" accesskey="3" class="submenulinktext2">LOGOUT</a>
</span>
      </p></td>
    </tr>
    </tbody></table>
</div>
<div class="pagetitlediv">
  <table class="plaintable" summary="This table displays title and static header displays." width="100%">
    <tbody><tr>
      <td class="pldefault">
        <h2>Your schedule</h2>
      </td>
      <td class="pldefault">
        &nbsp;
      </td>
      <td class="pldefault"><p class="rightaligntext" p="">
      </p><div class="staticheaders">
        ID and Name<br>
        Jan 07, 2025 05:09 pm<br>
      </div>
      </td>
    </tr>
    <tr>
      <td class="bg3" width="100%" colspan="3"><img src="/wtlgifs/web_transparent.gif" alt="Transparent Image" class="headerImg" title="Transparent Image" name="web_transparent" hspace="0" vspace="0" border="0" height="3" width="10"></td>
    </tr>
    </tbody></table>
  <a name="main_content"></a>
</div>
<div class="pagebodydiv">
  <!--  ** END OF twbkwbis.P_OpenDoc **  -->
  <form action="/owa_prod/bwskfshd.p_proc_crse_schd" method="post">
    <table class="plaintable" summary="This layout table is used to present the goto date input field and submit button." width="100%">
      <tbody><tr>
        <td class="pldefault"><p class="rightaligntext" p="">
        </p></td><td class="pldefault"><p class="rightaligntext">
        <label for="goto_id"><span class="fieldlabeltext">Go to (MM/DD/YYYY):</span></label>
        <input type="text" name="goto_date_in" size="11" maxlength="10" id="goto_id">
        <input type="hidden" name="start_date_in" value="01/07/2025">
        <input type="submit" value="Submit">
      </p></td>
      </tr>
      </tbody></table>
  </form>
  <b>Block: COMP 1 F - 5500 Computer Systems</b>
  <table class="plaintable" summary="This layout table is used to present the goto previous and next week anchors along with the current week information." width="80%">
    <tbody><tr>
      <td colspan="1" class="pldefault"><a href="/owa_prod/bwskfshd.P_CrseSchd?start_date_in=12/30/2024" onmouseover="window.status='Previous Week';  return true" onfocus="window.status='Previous Week';  return true" onmouseout="window.status='';  return true" onblur="window.status='';  return true">Previous Week</a></td>
      <td colspan="4" class="pldead">&nbsp;</td>
      <td colspan="3" class="pldefault"><span class="fieldlargetext">Week of Jan 06, 2025</span><span class="fieldmediumtext"> (2 of 21)</span></td>
      <td colspan="1" class="pldead">&nbsp;</td>
      <td colspan="1" class="pldefault"><p class="rightaligntext"><a href="/owa_prod/bwskfshd.P_CrseSchd?start_date_in=01/13/2025" onmouseover="window.status='Next Week';  return true" onfocus="window.status='Next Week';  return true" onmouseout="window.status='';  return true" onblur="window.status='';  return true">Next Week</a></p></td>
    </tr>
    </tbody></table>
  <table class="datadisplaytable" summary="This layout table is used to present the weekly course schedule." width="80%">
    <tbody><tr>
      <th class="ddheader" scope="col">&nbsp;</th>
      <th class="ddheader" scope="col">&nbsp;&nbsp;&nbsp;Monday&nbsp;&nbsp;&nbsp;</th>
      <th class="ddheader" scope="col">&nbsp;&nbsp;&nbsp;Tuesday&nbsp;&nbsp;&nbsp;</th>
      <th class="ddheader" scope="col">&nbsp;&nbsp;&nbsp;Wednesday&nbsp;&nbsp;&nbsp;</th>
      <th class="ddheader" scope="col">&nbsp;&nbsp;&nbsp;Thursday&nbsp;&nbsp;&nbsp;</th>
      <th class="ddheader" scope="col">&nbsp;&nbsp;&nbsp;Friday&nbsp;&nbsp;&nbsp;</th>
      <th class="ddheader" scope="col">&nbsp;&nbsp;&nbsp;Saturday&nbsp;&nbsp;&nbsp;</th>
      <th class="ddheader" scope="col">&nbsp;&nbsp;&nbsp;Sunday&nbsp;&nbsp;&nbsp;</th>
    </tr>
    <tr>
      <th rowspan="4" class="ddlabel" scope="row">800</th>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td rowspan="7" class="ddlabel"><a href="/owa_prod/bwskfshd.P_CrseSchdDetl?term_in=202510&amp;crn=87569">COMP 1800<br>Projects 1<br>CRN 87569 Lecture<br>830-1020<br>DTC 645</a></td>
      <td class="dddefault">&nbsp;</td>
      <td rowspan="7" class="ddlabel"><a href="/owa_prod/bwskfshd.P_CrseSchdDetl?term_in=202510&amp;crn=87561">COMP 1537<br>Web Development 1<br>CRN 87561 Lecture<br>830-1020<br>DTC 581</a></td>
      <td rowspan="7" class="ddlabel"><a href="/owa_prod/bwskfshd.P_CrseSchdDetl?term_in=202510&amp;crn=86123">COMP 1113<br>Applied Mathematics<br>CRN 86123 Lecture<br>830-1020<br>DTC 645</a></td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <th rowspan="4" class="ddlabel" scope="row">900</th>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <th rowspan="4" class="ddlabel" scope="row">1000</th>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td rowspan="7" class="ddlabel"><a href="/owa_prod/bwskfshd.P_CrseSchdDetl?term_in=202510&amp;crn=86130">COMP 1712<br>Biz Analysis and System Design<br>CRN 86130 Lecture<br>1030-1220<br>DTC 655</a></td>
      <td rowspan="7" class="ddlabel"><a href="/owa_prod/bwskfshd.P_CrseSchdDetl?term_in=202510&amp;crn=86133">COMP 1712<br>Biz Analysis and System Design<br>CRN 86133 Lab<br>1030-1220<br>DTC 686</a></td>
      <td rowspan="7" class="ddlabel"><a href="/owa_prod/bwskfshd.P_CrseSchdDetl?term_in=202510&amp;crn=86126">COMP 1510<br>Programming Methods<br>CRN 86126 Lecture<br>1030-1220<br>DTC 655</a></td>
      <td rowspan="7" class="ddlabel"><a href="/owa_prod/bwskfshd.P_CrseSchdDetl?term_in=202510&amp;crn=86122">COMP 1113<br>Applied Mathematics<br>CRN 86122 Lab<br>1030-1220<br>DTC 682</a></td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <th rowspan="4" class="ddlabel" scope="row">1100</th>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <th rowspan="4" class="ddlabel" scope="row">1200</th>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td rowspan="7" class="ddlabel"><a href="/owa_prod/bwskfshd.P_CrseSchdDetl?term_in=202510&amp;crn=87575">COMP 1800<br>Projects 1<br>CRN 87575 Lab<br>1230-1420<br>DTC 682</a></td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <th rowspan="4" class="ddlabel" scope="row">1300</th>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td rowspan="7" class="ddlabel"><a href="/owa_prod/bwskfshd.P_CrseSchdDetl?term_in=202510&amp;crn=87567">COMP 1537<br>Web Development 1<br>CRN 87567 Lab<br>1330-1520<br>DTC 665</a></td>
      <td rowspan="3" class="ddlabel"><a href="/owa_prod/bwskfshd.P_CrseSchdDetl?term_in=202510&amp;crn=86121">COMP 1100<br>CST Program Fundamentals<br>CRN 86121 Lecture<br>1330-1420<br>DTC 645</a></td>
      <td rowspan="7" class="ddlabel"><a href="/owa_prod/bwskfshd.P_CrseSchdDetl?term_in=202510&amp;crn=86119">COMM 1116<br>Business Communications 1<br>CRN 86119 Lab<br>1330-1520<br>DTC 678</a></td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <th rowspan="4" class="ddlabel" scope="row">1400</th>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td rowspan="7" class="ddlabel"><a href="/owa_prod/bwskfshd.P_CrseSchdDetl?term_in=202510&amp;crn=86125">COMP 1510<br>Programming Methods<br>CRN 86125 Lab<br>1430-1620<br>DTC 665</a></td>
      <td class="dddefault">&nbsp;</td>
      <td rowspan="3" class="ddlabel"><a href="/owa_prod/bwskfshd.P_CrseSchdDetl?term_in=202510&amp;crn=86126">COMP 1510<br>Programming Methods<br>CRN 86126 Lecture<br>1430-1520<br>DTC 645</a></td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <th rowspan="4" class="ddlabel" scope="row">1500</th>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td rowspan="3" class="ddlabel"><a href="/owa_prod/bwskfshd.P_CrseSchdDetl?term_in=202510&amp;crn=86125">COMP 1510<br>Programming Methods<br>CRN 86125 Lab<br>1530-1620<br>DTC 655</a></td>
      <td rowspan="7" class="ddlabel"><a href="/owa_prod/bwskfshd.P_CrseSchdDetl?term_in=202510&amp;crn=86120">COMM 1116<br>Business Communications 1<br>CRN 86120 Lecture<br>1530-1720<br>DTC 645</a></td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <th rowspan="4" class="ddlabel" scope="row">1600</th>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td rowspan="3" class="ddlabel"><a href="/owa_prod/bwskfshd.P_CrseSchdDetl?term_in=202510&amp;crn=89196">COMP 1510<br>Programming Methods<br>CRN 89196 Tutorial<br>1630-1720<br>DTC 655</a></td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <th rowspan="4" class="ddlabel" scope="row">1700</th>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    <tr>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
      <td class="dddefault">&nbsp;</td>
    </tr>
    </tbody></table>
  <br>
  <span class="warningtext">Courses without assigned meeting times:</span>
  <br>
  <br>
</div></body></html>
`
