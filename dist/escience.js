/**
  * @param {String} url - address for the HTML to fetch
  * @return {String} the resulting HTML string fragment
  */
async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function insertDecoration() {
  const contentDiv = document.getElementsByClassName("reveal");
  const decoration = await fetchHtmlAsText("dist/theme/escience_decoration.html");
  for (let i = 0; i < contentDiv.length; i++) {
    contentDiv[i].insertAdjacentHTML("afterbegin", decoration);
  };
  addDecorations();
}

Reveal.on( 'ready', event => {
  insertDecoration();
} );


var decoration = $('#decoration').html();
console.log(decoration);
if ( window.location.search.match( /print-pdf/gi ) ) {
  // for pdf export
  // 3. On Reveal.js ready event, copy decoration <div> into each `.slide-background` <div>
  Reveal.addEventListener( 'ready', function( event ) {
    $('.slide-background').append(decoration);
  });
}
else {
  // for viewing slides
  $('div.reveal').append(decoration);
  //$('#decoration').remove(); // without this the fadeIn/fadeOut below does not work. why is this necessary?
};
function setLogoStyle(style) {
  //style must be one of {"logo_color","logo_white","logo_part_white"}

  //unset everything
  document.getElementById("logo_color").style.opacity = 0;
  document.getElementById("logo_white").style.opacity = 0;
  document.getElementById("logo_part_white").style.opacity = 0;

  //set only what we want
  document.getElementById(style).style.opacity = 1;
};
var overview_shown = false;
function getOpacity(data_state) {
  var opacity = 0.8;
  for (let i = 0; i < 11; i++) {
    if (data_state.includes(i)) { opacity = i/10; console.log("opacity set to " + opacity)}
  };
  return opacity
};
function addDecorations() {
  console.log("== set decorations ==")

  var currentSlide = Reveal.getCurrentSlide();
  console.log(currentSlide.querySelector("footer"));
  if (currentSlide.contains(currentSlide.querySelector('footer')))
  {
    document.getElementById("footer").innerHTML = currentSlide.querySelector('footer').innerHTML;
    document.getElementById("blue_strip").style.right = 0;
    console.log("footer (and blue_strip)");
  } else {
    document.getElementById("blue_strip").style.right = "-" + document.getElementById("blue_strip").offsetWidth + "px";
    console.log("no footer");
  };
  if ( currentSlide.getAttribute('data-state') )
  {
    var data_state = currentSlide.getAttribute('data-state')
    var opacity = getOpacity(data_state);
    console.log("DS" + data_state)
    // pre-set slide designs

    // standard
    if ( data_state.includes("standard"))
    {
      data_state += " logo yellow_flag white_overlay";
    };

    // two_pane
    if ( data_state.includes("two_pane"))
    {
      data_state += " logo yellow_flag white_overlay blue_pane_right";
    };

    // about
    if ( data_state.includes("about"))
    {
      data_state += " logo white_overlay blue_pane_left purple_half_circle_top purple_strip_bottom yellow_half_strip";
    };

    // touch
    if ( data_state.includes("touch"))
    {
      data_state += " logo blue_overlay touch_pane purple_blob right_e_bottom";
    };

    // individual elements

    // purple overlay
    if ( data_state.includes("purple_overlay"))
    {
      document.getElementById("purple_overlay").style.opacity = opacity;
      document.getElementById("purple_overlay").style.transform = "translateY(0)";
      document.getElementById("logo_color").style.opacity = 0;
      document.getElementById("logo_white").style.opacity = 0;
      document.getElementById("logo_part_white").style.opacity = 1;
      currentSlide.classList.remove("has-light-background");
      console.log("purple overlay");
    } else {
      document.getElementById("purple_overlay").style.opacity = 0;
      console.log("no purple overlay");
    };

    // white overlay
    if ( data_state.includes("white_overlay"))
    {
      document.getElementById("white_overlay").style.opacity = opacity;
      document.getElementById("white_overlay").style.transform = "translateY(0)";
      document.getElementById("logo_color").style.opacity = 1;
      document.getElementById("logo_white").style.opacity = 0;
      document.getElementById("logo_part_white").style.opacity = 0;
      currentSlide.classList.add("has-light-background");
      console.log("white overlay");
    } else {
      document.getElementById("white_overlay").style.opacity = 0;
      console.log("no white overlay");
    };

    // black overlay
    if ( data_state.includes("black_overlay"))
    {
      document.getElementById("black_overlay").style.opacity = opacity;
      document.getElementById("black_overlay").style.transform = "translateY(0)";
      document.getElementById("logo_color").style.opacity = 0;
      document.getElementById("logo_white").style.opacity = 0;
      document.getElementById("logo_part_white").style.opacity = 1;
      currentSlide.classList.remove("has-light-background");
      console.log("black overlay");
    } else {
      document.getElementById("black_overlay").style.opacity = 0;
      console.log("no black overlay");
    };

    // blue overlay
    if ( data_state.includes("blue_overlay"))
    {
      document.getElementById("blue_overlay").style.opacity = opacity;
      document.getElementById("blue_overlay").style.transform = "translateY(0)";
      document.getElementById("logo_color").style.opacity = 0;
      document.getElementById("logo_white").style.opacity = 1;
      document.getElementById("logo_part_white").style.opacity = 0;
      currentSlide.classList.remove("has-light-background");
      console.log("blue overlay");
    } else {
      document.getElementById("blue_overlay").style.opacity = 0;
      console.log("no blue overlay");
    };

    // blue pane right
    if ( data_state.includes("blue_pane_right"))
    {
      document.getElementById("blue_pane_right").style.opacity = 1;
      currentSlide.classList.remove("has-dark-background");
      currentSlide.classList.add("has-light-background");
      console.log("blue_pane_right");
    } else {
      document.getElementById("blue_pane_right").style.opacity = 0;
      console.log("no blue_pane_right");
    };

    // blue pane left
    if ( data_state.includes("blue_pane_left"))
    {
      document.getElementById("blue_pane_left").style.opacity = 1;
      setLogoStyle("logo_white");
      currentSlide.classList.remove("has-dark-background");
      currentSlide.classList.add("has-light-background");
      console.log("blue_pane_left");
    } else {
      document.getElementById("blue_pane_left").style.opacity = 0;
      console.log("no blue_pane_left");
    };

    // touch pane
    if ( data_state.includes("touch_pane"))
    {
      document.getElementById("touch_pane").style.opacity = 1;
      setLogoStyle("logo_color");
      currentSlide.classList.remove("has-light-background");
      currentSlide.classList.add("has-dark-background");
      console.log("touch_pane");
    } else {
      document.getElementById("touch_pane").style.opacity = 0;
      console.log("no touch_pane");
    };

    // logo
    if ( data_state.includes("logo"))
    {
      document.getElementById("logo_color").style.left = 3 + "vw";
      document.getElementById("logo_part_white").style.left = 3 + "vw";
      document.getElementById("logo_white").style.left = 3 + "vw";
      console.log("logo");
    } else {
      document.getElementById("logo_color").style.left = -12 + "vw";
      document.getElementById("logo_part_white").style.left = -12 + "vw";
      document.getElementById("logo_white").style.left = -12 + "vw";
      console.log("no logo");
    };

    // yellow strip
    if ( data_state.includes("yellow_strip"))
    {
      document.getElementById("yellow_strip").style.left = 0;
      console.log("yellow_strip");
    } else {
      document.getElementById("yellow_strip").style.left = -10 + "vw";
      console.log("no yellow_strip");
    };

    // yellow flag
    if ( data_state.includes("yellow_flag"))
    {
      document.getElementById("yellow_flag").style.left = 0;
      console.log("yellow_flag");
    } else {
      document.getElementById("yellow_flag").style.left = -10 + "vh";
      console.log("no yellow_flag");
    };

    // purple half circle top
    if ( data_state.includes("purple_half_circle_top"))
    {
      document.getElementById("purple_half_circle_top").style.top = 0;
      setLogoStyle("logo_part_white");
      console.log("purple_half_circle_top");
    } else {
      document.getElementById("purple_half_circle_top").style.top = -17 + "vw";
      console.log("no purple_half_circle_top");
    };

    // purple half circle bottom
    if ( data_state.includes("purple_half_circle_bottom"))
    {
      document.getElementById("purple_half_circle_bottom").style.bottom = 0;
      document.getElementById("yellow_flag").style.bottom = 20 + "vh";
      console.log("purple_half_circle_bottom");
    } else {
      document.getElementById("purple_half_circle_bottom").style.bottom = -10 + "vw";
      document.getElementById("yellow_flag").style.bottom = 5 + "vh";
      console.log("no purple_half_circle_bottom");
    };

    // purple strip bottom
    if ( data_state.includes("purple_strip_bottom"))
    {
      document.getElementById("purple_strip_bottom").style.bottom = 0;
      console.log("purple_strip_bottom");
    } else {
      document.getElementById("purple_strip_bottom").style.bottom = -10 + "vw";
      console.log("no purple_strip_bottom");
    };

    // yellow_half_strip
    if ( data_state.includes("yellow_half_strip"))
    {
      document.getElementById("yellow_half_strip").style.bottom = 0;
      console.log("yellow_half_strip");
    } else {
      document.getElementById("yellow_half_strip").style.bottom = -25 + "vw";
      console.log("no yellow_half_strip");
    };

    // purple blob
    if ( data_state.includes("purple_blob"))
    {
      document.getElementById("purple_blob").style.top = 0;
      console.log("purple_blob");
    } else {
      document.getElementById("purple_blob").style.top = -50 + "vh";
      console.log("no purple_blob");
    };

    // right_e
    if ( data_state.includes("right_e_top"))
    {
      document.getElementById("right_e").style.top = 10 + "vh";
      document.getElementById("right_e").style.right = 0;
      console.log("right_e_top");
    } else if ( data_state.includes("right_e_bottom")){
      document.getElementById("right_e").style.top = 60 + "vh";
      document.getElementById("right_e").style.right = 0;
      console.log("right_e_bottom");
    } else {
      document.getElementById("right_e").style.right = -4 + "vw";
      console.log("no right_e");
    };

    // clear the background so that the overlays don't interfere
    // with underlying iframe
    if ( data_state.includes("clear_background"))
    {
      document.getElementById("purple_overlay").style.transform = "translateY(100vh)";
      document.getElementById("white_overlay").style.transform = "translateY(100vh)";
      document.getElementById("black_overlay").style.transform = "translateY(100vh)";
      document.getElementById("blue_overlay").style.transform = "translateY(100vh)";
      document.getElementById("blue_pane_right").style.transform = "translateY(100vh)";
      document.getElementById("blue_pane_left").style.transform = "translateY(100vh)";
      document.getElementById("touch_pane").style.transform = "translateY(100vh)";
    };
  }
  else
  {
    console.log("nothing special")
  };
};

function removeDecorations() {
  console.log("removeDecorations")
  document.getElementById("purple_overlay").style.opacity = 0;
  document.getElementById("white_overlay").style.opacity = 0;
  document.getElementById("black_overlay").style.opacity = 0;
  document.getElementById("blue_overlay").style.opacity = 0;
  document.getElementById("blue_pane_right").style.opacity = 0;
  document.getElementById("blue_pane_left").style.opacity = 0;
  document.getElementById("touch_pane").style.opacity = 0;
  document.getElementById("logo_color").style.left = -12 + "vw";
  document.getElementById("logo_part_white").style.left = -12 + "vw";
  document.getElementById("logo_white").style.left = -12 + "vw";
  document.getElementById("yellow_strip").style.left = -10 + "vw";
  document.getElementById("yellow_flag").style.left = -10 + "vh";
  document.getElementById("purple_half_circle_top").style.top = -17 + "vw";
  document.getElementById("purple_half_circle_bottom").style.bottom = -10 + "vw";
  document.getElementById("purple_strip_bottom").style.bottom = -10 + "vw";
  document.getElementById("yellow_half_strip").style.bottom = -25 + "vw";
  document.getElementById("purple_blob").style.top = -50 + "vh";
  document.getElementById("right_e").style.right = -4 + "vw";
  document.getElementById("blue_strip").style.right = "-" + document.getElementById("blue_strip").offsetWidth + "px";
};

Reveal.on( 'slidechanged', event => {
  if (overview_shown == false)
  {
    console.log("slide changed");
    addDecorations();
  }
});
Reveal.on( 'overviewshown', event => {
  overview_shown = true;
  removeDecorations();
});
Reveal.on( 'overviewhidden', event => {
  overview_shown = false;
  addDecorations();
});
