var int = Math.floor;
var mode = "not yet started";
var rand = Math.random;
var character = "not yet selected";
var characters = ["Alice", "Bob"];
// well, shit. things aren't parametric over this. would have to change
// fields in records, etc.
//var characters = ["Cyclist", "Runner"]

var AliceStory = {
  start: "passageA0",

  "passageA0" :
  { text: "<p>The exhaust from the 67 bus is hot against your side while you're standing at a red light for Beechwood Boulevard, and you wonder why you even took this route.</p> <p>The light for Beechwood turned yellow, and cross-traffic is about to stop.</p>",
    choices: 
      [ "Anticipate your green light and blow through the moment you have a gap.",
        "Wait for the 67 to get ahead of you before you fall in behind it."],
    links: ["passageA00", "passageA01"]
  },

  "passageA00" :
  { text: "<p>You drive down into the pedals and peel out into the intersection before the bus has a chance to get rolling. Wilkins Avenue is uphill for the next block, but you can't stand eating exhaust anymore.</p> <p>The raindrops grow fatter and break against your goggles.</p>",
    choices: [ "Squint between the drops and keep moving.", "Give them a quick wipe."],
    links: [ "passageA000", "passageA001" ]
  },

  "passageA000" :
  { text: "<p>You can still sort of see the road, but you're practically hitting every pothole on the way to your package drop.</p>\
          <p>The rumbling of the 67 bears down on you.</p>",
    choices: ["Pedal faster.", "Take your next left so you can catch a quick break."],
    links: ["ending0", "ending0"]
  },

  "passageA001" :
  { text: "<p>You run the back of your glove over your goggles; the drops clear for a moment, just in time for you to swerve around a pot hole.</p>\
          <p>There's a handful of cars waiting for the light at Shady Avenue.</p>",
    choices: [ "Cut left across the street and turn onto Denniston Street to avoid the holdup.", "Slow to a stop and wait."],
    links: ["ending0", "ending0"]
  },

  "passageA01" :
  { text: "<p>The 67 starts moving with a roar, and you count to five before you click into your pedals and start up Wilkins Avenue behind it.</p> <p>Now the exhaust is hot and in your face.</p>", 
    choices: ["Swing a left onto Denniston Street to get out of the wake.", "Fall further back so you have some breathing room."],
    links: ["passageA010", "passageA011"]
  },
        
  "passageA010" :
  { text: "<p>You suddenly take the side street, slipping through a gap between cars you almost didn't see.</p>\
          <p>One of those cars honks and flips you off.</p>",
    choices: ["Sprint down Denniston Street and hope you're not followed",
      "Pull a handful of coins out of your pocket and fling them at the car"],
    links: ["ending0", "ending0"]
  },

  "passageA011" :
  { text: "<p>As the bus pulls ahead, you can breathe easy again. You can't help but wonder if you're going to make your drop on time, though.</p><p>Do you feel late?</p>",
    choices: ["Yes.", "No."],
    links: ["ending0", "ending0"]
  },

  "ending0" :
  { text: "<p>Ending 0</p>",
    choices: [],
    links: []
  }
}

var BobStory =
{
  start: "passageB0",
  "passageB0" :
  { text : "<p>Your feet thud against the sidewalk, spraying a thin layer of puddle water against your shins. Your socks are already drenched.  Northumberland Street is getting torn up for repairs on the next block; you can see the orange \'ROAD CLOSED\' signs ahead.",
    choices: ["But you figure the sidewalk is still clear.", 
              "Forget it, just hang a right on South Negley Avenue."],
    links: ["passageB00", "passageB01"]
  },

  "passageB00" :
  { text : "You skirt around the barricades for the road and stay on the sidewalk. No one calls out to stop you, so you just keep going.</p><p>Some gravel manages to work its way into your sock as you jog over the uneven ground.</p>", 
    choices: [ "It's not a big deal.", "That's really annoying."], 
    links: ["passageB000", "passageB001"]
  },

  "passageB000" :
  { text: "<p>The worst that'll happen is a blister, and you know you can deal with those. Your stride suffers a little, though, since every step sends a slight jarring of pain into your foot.</p><p> A dog suddenly trots up next to you. It doesn't seem to be with anyone, but it looks friendly.</p>",
    choices: [ "Stop and check out its tags.", "Ignore it and keep moving."],
    links: ["ending0", "ending0"]
  },

  "passageB001" :
  { text: "<p>You can't deal with the rock grinding into your heel anymore, so you stop and take off your shoe so you can dump it out.</p><p>Before you get your shoe back on, a dog comes crashing out of the bushes, yanks your shoe out of your hands, and sprints off.</p>",
    choices: ["Chase after it, one-shoed.", "Take off your other shoe and throw it"],
    links: ["ending0", "ending0"]
  },

  "passageB01":
  { text: "</p>You don't want to take your chances with the DPW today, even if it means a spontaneous hill workout.</p><p>In fact, you can see the Snegley hill looming a block ahead of you.</p>",
    choices: ["Actually, never mind; turn right on Wilkins Avenue instead.",
              "Tell your legs to shut up and sprint for it."], 
    links: ["passageB010", "passageB011"]
  },

  "passageB010":
  { text: "<p>You'll save the hill for another day, and double back down Wilkins.</p><p>\
        The traffic on Wilkins throws a fine spray of water over you.</p>",
    choices: [ "It's refreshing.", "It's aggravating."],
    links: ["ending0", "ending0"]
  },

  "passageB011":
  { text: "<p>Your breathing deepens as you start getting ready for the hill, and you let your stride open up a bit so you can hit the base of it and go.</p><p>\
        The traffic light turns yellow.</p>",
    choices: [ "You can make it.", "You slow down."],
    links: ["ending0", "ending0"]
  },

  "ending0" :
  { text: "<p>Ending 0</p>",
    choices: [],
    links: []
  }
}; //end BobStory


// this will stay constant.
var story = {"Alice":AliceStory, "Bob":BobStory};

// keeps track of where we are in the story.
// these fields will update w/whatever the *current* passage is for each
// character.
var cursors = {}; //{"Alice":AliceStory["passageA0"], "Bob":BobStory["passageB0"]};

function render() {
  // header text
  $("#turns").text(turns + ", Character: " + character);

  if (mode == "done") {
    end_game();
  } 
  else if (mode == "not yet started") {
  // do nothing
  }
  else if (mode == "start") {   
    passage = cursors[character];
    $("#choice"+character+"A").text(passage.choices[0]);
    $("#choice"+character+"B").text(passage.choices[1]);
    mode = "playing";
  } 
  else {
  // choice fields for the *selected* character to set up the next choice.
    choices = cursors[character]["choices"];
    $("#choice"+character+"A").text(choices[0]);
    $("#choice"+character+"B").text(choices[1]);
  }
}

function end_game() {
  console.log("game ended");
  $("#choice"+character+"A").hide();
  $("#choice"+character+"B").hide();
  if (character == "Alice") {
    $("#restartBtnAlice").show();
  } else {
    $("#restartBtnBob").show();
  }
}

function init_game() {
  mode = "not yet started";
  $("#restartBtnAlice").hide();
  $("#restartBtnBob").hide();

  // initialize html. ugly to hardcode this :/
  /*$("#prefixAlice").html("the package feels heavy, but you \
          <div class=\"choice\" id=\"selectAlice\"> keep it balanced</div>\
                against your left hip.");
  $("#prefixBob").html("flasdjfalskdjf");
  */

  // initialize cursors to the "start" field of each story
  for (var ch in story) {
    idx = story[ch].start;
    cursors[ch] = story[ch][idx];
  }
  $("#intro").hide();
  $("#game").show();
  turns = 0;

  render();
}

function randi(n) {
  return int(rand() * n);
}

function randelm(ls) {
  return ls[randi(ls.length)];
}

// - have a "prefix" div for the *set* story so far for each character
// - have a "choice A" div and "choice B" div for the current available
//    choices (only for the selected character)
// - on each choice, append the relevant passage to the *prefix* for each
//  character.
function choose(choice) {
  console.log("choice: "+choice);
  for (var ch in cursors) {
    // get the plaintext of the current prefix.
    prefix = $("#prefix"+ch).html(); // + "<br><br>";

    // check if there is a next scene.
    if (cursors[ch].choices.length != 0) {
      // add the text of the selected choice.
      prefix += cursors[ch].choices[choice]; // + "<br><br>";

      passage_name = cursors[ch].links[choice];
      // update the cursor
      console.log("updating "+ch+"'s cursor to "+passage_name+"\n");
      cursors[ch] = story[ch][passage_name];
      // add the text of the next scene.
      prefix += cursors[ch].text;// + "<br><br>";

      // update the prefix document element.
      // (XXX ideally this would be in render, but then render would need to
      // loop additionally over the characters...)
      $("#prefix"+ch).html(prefix);

      // extra check to fix off by 1
      if (cursors[ch].choices.length == 0) {
        mode = "done";
      }
    } else {
      mode = "done";
    }

  } // end loop over characters  

  turns++;
  render();
}


function pickCharacter(c) {
  character = c;

  // register choice clicky callbacks
  $("#choice"+c+"A").click(function () {
    console.log("chose A");
    choose(0);
  });

  $("#choice"+c+"B").click(function () {
    console.log("chose B");
    choose(1);
  });

  // update prefixes for every character
  for (var ch in cursors) {
    prefix = $("#prefix"+ch).text();
    prefix += cursors[ch].text;
    $("#prefix"+ch).html(prefix);
  }

  mode = "start";
  render();
}


$("#beginBtn").click(init_game);
// $("#restartBtnBob").click(init_game);
$("#restartBtnAlice").click(init_game);
$("#selectAlice").click(function () {pickCharacter(characters[0])});
$("#selectBob").  click(function () {pickCharacter(characters[1])});


/*
$(document).mouseup(function(ev) {
  render();
});
*/


$("#game").hide();
