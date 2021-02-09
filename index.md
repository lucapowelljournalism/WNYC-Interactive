<!DOCTYPE html>
<html>

  <head>
    <title>The Staten Island Police Files</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="style.css" rel="stylesheet">
    <script type="text/javascript" src="data.json"></script>


  </head>

  <body>
    
    <!--HEADER IMAGE-->
    <div class="header-background">
      <div class="title">
        <div class="title-text">
          <h1> The Staten Island Police Files</h1>
          <h6 >Hundreds of officers' misconduct findings show the inner disciplinary workings of the NYPD.</h6>
          <h6><a style="font-style:italic" href="#database">Click to skip to database</a></h6>
        </div>
      </div>
    </div>

    <!--MAIN CONTENT-->
    <div class="container content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti minus optio atque quis voluptas at repellat adipisci quidem dicta sint nobis, porro praesentium id doloremque quas libero corporis nam.</p>
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti minus optio atque quis voluptas at repellat adipisci quidem dicta sint nobis, porro praesentium id doloremque quas libero corporis nam.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti minus optio atque quis voluptas at repellat adipisci quidem dicta sint nobis, porro praesentium id doloremque quas libero corporis nam.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti minus optio atque quis voluptas at repellat adipisci quidem dicta sint nobis, porro praesentium id doloremque quas libero corporis nam.</p>

    </div>

    <div id="second-grafs" class="container content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti minus optio atque quis voluptas at repellat adipisci quidem dicta sint nobis, porro praesentium id doloremque quas libero corporis nam.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda error vero amet repudiandae eius nulla explicabo. Cum ea deleniti reiciendis corrupti, temporibus, error non aspernatur similique iusto et quos. Nobis!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda error vero amet repudiandae eius nulla explicabo. Cum ea deleniti reiciendis corrupti, temporibus, error non aspernatur similique iusto et quos. Nobis!</p>
      <p style="font-style: italic;" class="mobile-explainer">Click on a tile to see an instance of misconduct</p>
      <p style="font-style: italic;" class="desktop-explainer">Hover over a tile to see an instance of misconduct</p>
    </div>
    
    <div id="vizbuttons" class="container content vizbuttons">
        <button id="previous-button" style="padding: 15px; opacity: .5;" onclick="clear()">Previous</button>
        <button id="next-button" style="padding: 15px;" onclick="Visualize()">Begin</button>
    </div>

    <div id="graphic" class="graphic boxes">
      <!--    Javascript writes divs to here    !-->
      <div id="caption1" class="caption" style="display:none;" >
        <p>The department had 13 cases of excessive force.</p>
      </div>
      <div id="caption2" class="caption" style="display:none;" >
        <p>The department had 7 cases of misconduct related to officers driving under the influence (DWI).</p>
      </div>
      <div id="caption3" class="caption" style="display:none;" >
        <p>The department substantiated 20 instances of officers lying or issuing misleading or inaccurate statements.</p>
      </div>
      <div id="caption4" class="caption" style="display:none;" >
        <p>The department had 15 cases of firearm related misconduct, such as when an officer accidentally shoots a gun. In one instance, an officer let an 18-year old take his firearm in order to take a photo with it.</p>
      </div>
      <div id="caption5" class="caption" style="display:none;" >
        <p>Two substantiated investigations were related to domestic violence. In one case, an officer threatened a woman with arrest in an attempt to get her not to press charges against another resident, presumably her partner. </p>
      </div>
      <div id="caption6" class="caption" style="display:none;" >
        <p>Another twenty cases involved off-duty misconduct. Many of these involved officers leaving the scenes of a crimes, in some cases under the influence.</p>
      </div>
      <div id="caption7" class="caption" style="display:none;" >
        <p>28 findings were FADO, which stands for Force, Abuse of Authority, Discourtesy and Offensive Language.</p>
      </div>
      <div id="caption8" class="caption" style="display:none;" >
        <p>The remaining 400 plus misconduct findings were minor misconduct violations, including anything from missing a department phone to skipping traffic court.</p>
      </div>
      <div id="caption9" class="caption" style="display:none;" >
        <p>The remaining 400 plus misconduct findings were minor misconduct violations, including anything from missing a department phone to skipping traffic court.</p>
      </div>
    </div>

    <div id="third-grafs" class="container content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti minus optio atque quis voluptas at repellat adipisci quidem dicta sint nobis, porro praesentium id doloremque quas libero corporis nam.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda error vero amet repudiandae eius nulla explicabo. Cum ea deleniti reiciendis corrupti, temporibus, error non aspernatur similique iusto et quos. Nobis!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda error vero amet repudiandae eius nulla explicabo. Cum ea deleniti reiciendis corrupti, temporibus, error non aspernatur similique iusto et quos. Nobis!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda error vero amet repudiandae eius nulla explicabo. Cum ea deleniti reiciendis corrupti, temporibus, error non aspernatur similique iusto et quos. Nobis!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda error vero amet repudiandae eius nulla explicabo. Cum ea deleniti reiciendis corrupti, temporibus, error non aspernatur similique iusto et quos. Nobis!</p>
    </div>

    <!--div class="table-title container content">
      <h1>Search the Data</h1>
      <h6 style="font-style:italic">Enter an officer's last name</h6>
    </div>

    <!--div id="database" class="container database">
      <div class="react-table"></div>
    </div-->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://watchjs.tcm.io/js/watch.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/debug.addIndicators.min.js"></script>
    <script src="main.js"></script>


    <script src="database-main/js/table.js" defer></script>

  </body>

</html>