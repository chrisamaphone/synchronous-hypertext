var int = Math.floor;
var mode = "not yet started";
var rand = Math.random;
var character = "not yet selected";
var characters = ["Alice", "Bob"];
// well, shit. things aren't parametric over this. would have to change
// fields in records, etc.
//var characters = ["Cyclist", "Runner"]

var AliceStory = {
  start: "a_",

  "a_" :
  { text: "<p>The exhaust from the 67 bus is hot against your side while you're standing at a red light for Beechwood Boulevard, and you wonder why you even took this route.</p> <p>The light for Beechwood turned yellow, and cross-traffic is about to stop.</p>",
    choices: 
      [ "Anticipate your green light and blow through the moment you have a gap.",
        "Wait for the 67 to get ahead of you before you fall in behind it."],
    links: ["a_0", "a_1"]
  },

  "a_0" :
  { text: "<p>You drive down into the pedals and peel out into the intersection before the bus has a chance to get rolling. Wilkins Avenue is uphill for the next block, but you can't stand eating exhaust anymore.</p> <p>The raindrops grow fatter and break against your goggles.</p>",
    choices: [ "Squint between the drops and keep moving.", "Give them a quick wipe."],
    links: [ "a_00", "a_01" ]
  },

  "a_00" :
  { text: "<p>You can still sort of see the road, but you're practically hitting every pothole on the way to your package drop.</p>\
          <p>The rumbling of the 67 bears down on you.</p>",
    choices: ["Pedal faster.", "Take your next left so you can catch a quick break."],
    links: ["a_000", "a_001"]
  },

  "a_01" :
  { text: "<p>You run the back of your glove over your goggles; the drops clear for a moment, just in time for you to swerve around a pot hole.</p>\
          <p>There's a handful of cars waiting for the light at Shady Avenue.</p>",
    choices: [ "Cut left across the street and turn onto Denniston Street to avoid the holdup.", "Slow to a stop and wait."],
    links: ["a_010", "a_011"]
  },

  "a_1" :
  { text: "<p>The 67 starts moving with a roar, and you count to five before you click into your pedals and start up Wilkins Avenue behind it.</p> <p>Now the exhaust is hot and in your face.</p>", 
    choices: ["Swing a left onto Denniston Street to get out of the wake.", "Fall further back so you have some breathing room."],
    links: ["a_10", "a_11"]
  },
        
  "a_10" :
  { text: "<p>You suddenly take the side street, slipping through a gap between cars you almost didn't see.</p>\
          <p>One of those cars honks and flips you off.</p>",
    choices: ["Sprint down Denniston Street and hope you're not followed.",
      "Pull a handful of coins out of your pocket and fling them at the car."],
    links: ["a_100", "a_101"]
  },

  "a_11" :
  { text: "<p>As the bus pulls ahead, you can breathe easy again. You can't help but wonder if you're going to make your drop on time, though.</p><p>Do you feel late?</p>",
    choices: ["Yes.", "No."],
    links: ["a_110", "a_111"]
  },

  "a_000" :
  {
    text: "<p>As you sprint down the road, the handlebars vibrate against your palms, and\
           you are blinded by the rain dripping over your goggles.</p>\
          <p>A woman stands in the road ahead of you, holding something in her hand and\
            looking distraught.</p>",
    choices: ["Swerve around her.", "Slow to a stop."],
    links: ["a_0000", "a_0001"]
  },

  "a_001" :
  {
    text: "<p>You swing a left turn at the light for Shady Avenue, ignoring the screech of\
          badly-adjusted brakes as a car narrowly avoids bashing into you. At least\
          there isn't a bus riding way too close to you anymore.</p>\
          <p>A dog trots at you from a side street.</p>",
    choices: ["It probably wants to say hi.", "It's probably going to dive at your wheels."],
    links: ["a_0010", "a_0011"]
  },

  "a_010" :
  {
    text: "<p>The traffic's not worth sitting through, and you've got this package\
            weighing you down. It's a little out of the way, but you'd rather keep\
            moving. Moving is productive. Waiting is inefficient.</p>\
            <p>You beat the traffic, but up ahead, you see bright orange signs warning\
            about road work.</p>",
    choices: ["Those are just for cars.", "Maybe you better reroute again."],
    links: ["a_0100", "a_0101"]
  },

  "a_011" :
  {
    text: "<p>You know that you're going to run into traffic whichever road you're on,\
            so you might as well stick to your route here.</p>\
            <p>The light turns before long.</p>",
    choices: ["Looks like that wasn't too bad of a wait.", "You're still impatient."],
    links: ["a_0110", "a_0111"]
  },

  "a_100" :
  {
    text: "<p>Whoever was annoyed at you wasn't annoyed enough to chase you, so you're in\
            the clear. It's a relief to not have a bus breathing down your neck, but now\
            you're off-course.</p>\
            <p>Up ahead, you see bright orange signs warning about road work.</p>",
    choices: ["Those are just for cars.", "Maybe you better reroute again."],
    links: ["a_1000", "a_1001"]
  },

  "a_101" :
  {
    text: "<p>You've always had a short temper when it comes to traffic, and the clatter\
          of your pocket change against the back of the retreating car gives you a\
          sense of satisfaction. Serves them right.</p>\
          <p>Up ahead, you see bright orange signs warning about road work.</p>",
    choices: ["Those are just for cars.", "Maybe you better reroute again."],
    links: ["a_1010", "a_1011"]
  },
  
  "a_110" :
  {
    text: "<p>You're feeling a little anxious that you're not going to make it in time,\
            but what can you even do about it?</p>",
    choices: ["Pedal on with conviction.", "Pedal on with dread."],
    links: ["a_1100", "a_1101"]
  },
  
  "a_111" :
  {
    text: "<p>You've got plenty of time to get there, so don't sweat it. Nothing can come\
            of being in a rush.</p>\
           <p>As you take your time, you feel the weight of the package pulling on your\
              shoulder.</p>",
    choices: ["Shift it a little.", "Leave it where it is."],
    links: ["a_1110", "a_1111"]
  },

  "a_0010" :
  {
    text: "<p>The dog keeps pace with you with a loping gait, its tongue hanging out of a\
            knowing grin. What do dogs even think they know, anyway?</p>\
            <p>You've got a package to deliver, so you can't keep staring at it forever.</p>",
    choices: ["Give it a quick pat on the head and move on", 
              "Order it to stay put so it doesn't get in your way."],
    links: ["00100", "00101"]
  },

  "a_0011" :
  {
    text: "<p>It's better to be cautiously pessimistic about these things, so you brace\
            yourself in case the dog tries something stupid. It doesn't, though; it just\
            slows down and stares at you with its head cocked in confusion.</p>\
            <p>You've got a package to deliver, so you can't keep staring at it forever.</p>",
    choices: ["Give it a quick pat on the head and move on", 
              "Order it to stay put so it doesn't get in your way."],
    links: ["00110", "00111"]
  },

  "a_1000" :
  {
    text: "<p>The barricade only covers the road, so you pop over the curb and roll\
          along down the sidewalk. Despite the road work signs, you can't see any\
          evidence that they're working today.</p>\
          <p>This is probably a decent shortcut.</p>",
    choices:  [ "You'll use it again next time.",
                "You'll save it for a rainy day."],
    links: ["10000", "10001"]
  },
  
  "a_1001" :
  {
    text: "<p>It's probably better if you don't get yourself stuck in an endless maze of\
          roadblocks, so you hang a right on Shady Avenue and wiggle your way back\
          towards Wilkins.</p>\
          <p>There goes any time you thought you\'d save.</p>",
    choices: ["Maintain your optimism.", "Worry."],
    links: ["10010", "10011"]
  },
  
  "a_0100" :
  {
    text: "<p>The barricade only covers the road, so you pop over the curb and roll\
          along down the sidewalk. Despite the road work signs, you can't see any\
          evidence that they're working today.</p><p>\
          This is probably a decent shortcut.</p>",
    choices: ["You'll use it again next time.", "You'll save it for a rainy day."],
    links: ["01000", "01001"]
  },
  
  "a_1010" :
  {
    text:"<p>The barricade only covers the road, so you pop over the curb and roll\
          along down the sidewalk. Despite the road work signs, you can't see any\
          evidence that they're working today.</p><p>\
          This is probably a decent shortcut.</p>",
    choices: ["You'll use it again next time.", "You'll save it for a rainy day."],
    links: ["10100", "10101"]
  },
  
  "a_0101" :
  {
    text:"<p>It's probably better if you don't get yourself stuck in an endless maze of\
          roadblocks, so you hang a right on Shady Avenue and wiggle your way back\
          towards Wilkins.</p><p>\
          There goes any time you thought you'd save.</p>",
    choices: ["Maintain your optimism.", "Worry."],
    links: ["01010", "01011"]
  },

  "a_1011":
  { text:"<p>It's probably better if you don't get yourself stuck in an endless maze of\
          roadblocks, so you hang a right on Shady Avenue and wiggle your way back\
          towards Wilkins.</p>",
    choices: ["Maintain your optimism.", "Worry."],
    links: ["10110", "10111"],
  },
  
  "a_0000":
  { text:"<p>You don't know what that woman is up to, but you narrowly manage to avoid\
          hitting her as you blow through the intersection. She's shouting something\
          at you, but her words are buried by the rain hitting your helmet.</p>",
    choices:["Swing back around and see what's wrong.", "Never mind."],
    links: ["00000", "00001"],
  },
  
  "a_0001":
  { text:"<p>In her hand is a folded up dog leash, and the woman looks relieved as you\
          pull up next to her. She gestures down South Negley Avenue, as if she's\
          expecting you to turn.</p>",
    choices:["Abandon your job and go look for her dog.",
             "Shake your head in apology and pedal on."],
    links:["00010", "00011"],
  },
  
  "a_0110":
  { text:"<p>With endless patience, you flow with the traffic. You do have a\
          particular time to make this drop, but there's no point in worrying about\
          things you can't control.</p>",
    choices:[ "At least the clouds look like they might clear up.",
              "Enjoy spraying through some puddles."],
    links:["01100", "01101"],
  },
  
  "a_0111":
  { text:"<p>You're not happy with the pace things are moving, but Wilkins Avenue is\
          narrow, and you've committed yourself to this route.</p>",
    choices:[ "Hop the curb and blast down the sidewalk.",
              "Ride the double-yellow lines down the middle of the road."],
    links:["01110", "01111"],
  },
    
  "a_1100":
  { text:"<p>There's no point in getting worked up about it, so you just grit your\
          teeth and pedal onward. If you're late for your drop, you're late; you\'ll\
          just come up with some excuse when you get there.</p>",
    choices:[ "At least the clouds look like they might clear up.",
              "Enjoy spraying through some puddles."],
    links:["11000", "11001"],
  },

  "a_1101":
  { text:"<p>The more the traffic gets in your way, the worse you feel, and that package\
          grows into a heavy weight dragging on your shoulder. You hate being late, and\
          you think about everything you could have done earlier today.</p>",
    choices: ["This must have been inevitable.", "You could have done better."],
    links: ["11010", "11011"]
  },
  
  "a_1110":
  { text:"<p>You nudge the package with your elbow, but at the same time, a runner\
          dashes into the intersection in front of you.</p>",
    choices: ["Slam on your brakes.", "Swerve."],
    links: ["11100", "11101"]
  },
  
  "a_11111":
  { text:"<p>You can deal with the weight where it is, but it's cramping up your neck.</p>\
          <p>When you cross the next intersection, you splash some pedestrian.</p>",
    choices:["Shout an apology.", "Don't worry about them."],
    links:["11110", "11111"]
  },
  
  "00000" :
  { text: "<p>\"I lost my dog,\" a woman said to a passing cyclist, who seemed intent to\
ignore her at first. \"Have you seen Roller?\"</p>\
           <p>The cyclist, impatient with a delivery job, only gave her a helpless shrug.</p>\
           <p>Roller had escaped not too long ago, and made friends with a quiet jogger a\
           few streets over. The jogger led him unknowingly towards the meeting between\
           the woman and the cyclist.</p>",
    choices: [],
    links: []
  },
  
  "00001" :
  { text: "<p>\"Hey!\" a woman shouted at a passing cyclist, who blew by without a care.\
           All she wanted was an extra set of eyes to look for her dog.</p>\
           <p>The dog\'s name was Roller, and he had escaped not too long ago and made\
           friends with a quiet jogger a few streets over. The jogger was willing to\
           follow the dog wherever he went.</p>\
           <p>After a few blocks of running together, Roller left his running\
           buddy and went off to find another.</p>\
           <p>In the following days, the woman put up 'MISSING DOG' signs all over the\
           neighborhood.</p>",
    choices: [],
    links: []
  },
  
  "00010" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "00011" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "00100" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "00101" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "00110" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "00111" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "01000" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "01001" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "01010" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "01011" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "01100" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "01101" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "01110" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "01111" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "10000" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "10001" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "10010" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "10011" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "10100" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "10101" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "10110" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "10111" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "11000" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "11001" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "11010" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "11011" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "11100" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "11101" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "11110" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  },
  
  "11111" :
  { text: "<p>Ending dummy text</p>",
    choices: [],
    links: []
  }
}

var BobStory =
{
  start: "z_",
  "z_" :
  { text : "<p>Your feet thud against the sidewalk, spraying a thin layer of puddle water against your shins. Your socks are already drenched.  Northumberland Street is getting torn up for repairs on the next block; you can see the orange \'ROAD CLOSED\' signs ahead.",
    choices: ["But you figure the sidewalk is still clear.", 
              "Forget it, just hang a right on South Negley Avenue."],
    links: ["z_0", "z_1"]
  },

  "z_0" :
  { text : "<p>You skirt around the barricades for the road and stay on the sidewalk. No one calls out to stop you, so you just keep going.</p><p>Some gravel manages to work its way into your sock as you jog over the uneven ground.</p>", 
    choices: [ "It's not a big deal.", "That's really annoying."], 
    links: ["z_00", "z_01"]
  },
  
  "z_1":
  { text: "</p>You don't want to take your chances with the DPW today, even if it means a spontaneous hill workout.</p><p>In fact, you can see the Snegley hill looming a block ahead of you.</p>",
    choices: ["Actually, never mind; turn right on Wilkins Avenue instead.",
              "Tell your legs to shut up and sprint for it."], 
    links: ["z_10", "z_11"]
  },

  "z_00" :
  { text: "<p>The worst that'll happen is a blister, and you know you can deal with those. Your stride suffers a little, though, since every step sends a slight jarring of pain into your foot.</p><p> A dog suddenly trots up next to you. It doesn't seem to be with anyone, but it looks friendly.</p>",
    choices: [ "Stop and check out its tags.", "Ignore it and keep moving."],
    links: ["z_000", "z_001"]
  },

  "z_01" :
  { text: "<p>You can't deal with the rock grinding into your heel anymore, so you stop and take off your shoe so you can dump it out.</p><p>Before you get your shoe back on, a dog comes crashing out of the bushes, yanks your shoe out of your hands, and sprints off.</p>",
    choices: ["Chase after it, one-shoed.", "Take off your other shoe and throw it."],
    links: ["z_010", "z_011"]
  },

  "z_10":
  { text: "<p>You'll save the hill for another day, and double back down Wilkins.</p><p>\
        The traffic on Wilkins throws a fine spray of water over you.</p>",
    choices: [ "It's refreshing.", "It's aggravating."],
    links: ["z_100", "z_101"]
  },

  "z_11":
  { text: "<p>Your breathing deepens as you start getting ready for the hill, and you let your stride open up a bit so you can hit the base of it and go.</p><p>\
        The traffic light turns yellow.</p>",
    choices: ["You can make it.", "You slow down."],
    links: ["z_110", "z_111"]
  },

  "z_000":
  {
    text: "<p>The dog hops sideways as you reach for its tag; this is a fun game that it's\
          obviously played before. You catch a glimpse of the wet metal on a bright\
          green collar, but not much else.</p>\
          <p>It moves a few steps in the direction you were running anyway, then cocks its\
          head back at you.</p>",
    choices: ["Go for a jog with the dog because it'll be fun.",
              "Go for a jog with the dog and hope for another chance to grab its collar."],
    links: ["z_0000", "z_0001"]
  },

  "z_001":
  {
    text: "<p>All the dog seems to want is a running buddy, but without your\
          acknowledgment, it peels away and trots off in the opposite direction.\
          What a strange omen. What day is it again?</p>",
    choices: ["The twenty-fourth.", "The thirty-ninth."],
    links: ["z_0010", "z_0011"]
  },

  "z_0010":
  {
    text: "<p>It's hard to keep track of the days sometimes, because all you ever do is run.\
          Sometimes, you wonder if there's something else you're supposed to do, but\
          today, you just turn your face towards the falling raindrops, let yourself\
          get drenched, and keep running.</p>",
    choices: ["Run.", "Run."],
    links: ["00100", "00101"]
  },

  "z_0011":
  {
    text: "<p>That's right, you needed to pick up a package today. You glance at the\
          steely-grey sky, water droplets stinging your eyes for a moment, as you judge\
          what time it is.</p>",
    choices: ["Run back the way you came.", "Run back the scenic way."],
    links: ["00110", "00111"]
  },

  "z_010":
  {
    text: "<p>You run awkwardly at an uneven gait, alternating between slapping the\
          pavement with rubber and sock. The dog runs back the way you came.</p><p>\
          You have no choice but to follow if you want your shoe back.</p>",
    choices: ["Sprint harder.", "Let the dog go."],
    links: ["z_0101", "z_0100"]
  },

  "z_011":
  {
    text: "<p>You quickly pull off your remaining shoe and sprint a few steps after the\
          dog, then fling it in the hopes that the dog will be distracted enough to\
          drop the one it has. Your shoe-jectile smacks the dog soundly on the\
          rump.</p><p>\
          The dog spins around in surprise, then manages to get both shoes into its\
          mouth and starts trotting towards Wilkins Avenue.</p>",
    choices: ["You don't have much more to lose.", "Curse at the sky."],
    links: ["z_0110", "z_0111"]
  },

  "z_100":
  {
    text: "<p>You welcome the splash of water over you; you've been drenched since you\
          stepped out of the house, so it's not a big deal. If anything, it's helping\
          you stay cool.</p><p>\
          A thought occurs to you. What day is it again?</p>",
    choices: ["The twenty-fourth.", "The thirty-ninth."],
    links: ["z_1000", "z_1001"]
  },

  "z_1000":
  {
    text: "<p>It's hard to keep track of the days sometimes, because all you ever do is run.\
          Sometimes, you wonder if there's something else you're supposed to do, but\
          today, you just turn your face towards the falling raindrops, let yourself\
          get drenched, and keep running.</p><p>\
          It feels so good.</p>",
    choices: ["Run.", "Run."],
    links: ["10000", "10001"]
  },

  "z_1001":
  {
    text: "<p>That's right, you needed to pick up a package today. You glance at the\
          steely-grey sky, water droplets stinging your eyes for a moment, as you judge\
          what time it is.</p>",
    choices: ["Pick up the pace; you might be late.", "You'll be okay."],
    links: ["10010", "10011"]
  },

  "z_101":
  { text : "<p>It seems like no matter how far from the road you run, the road spray\
          still reaches you. Times like these make you wish it would stop raining\
          once in a while.</p><p>\
          You reach Shady Avenue before long, and hang a right since it looks like the\
          road is a little cleaner.</p>",
    choices: ["This is getting aggravating, so you might as well go home.",
              "You're determined to get a good run out of this."],
    links: ["z_1010", "z_1011"]
  },

  "z_110":
  {
    text: "<p>You've got this. Your soggy sneakers dig into the pavement, and you dash\
          across the street before any of the cars get moving. The hill grows in front\
          of you, reaching up towards the grey sky.</p>",
    choices: ["Push.", "Float."],
    links: ["z_1100", "z_1101"]
  },

  "z_111":
  {
    text: "<p>You'd rather not risk hitting the light as it flips over. You become\
          more aware of the squishing in your socks as you slow to a stop.</p><p>\
          Do you still want to try for the hill?</p>",
    choices: ["Yes.", "No."],
    links: ["z_1110", "z_1111"]
  },

  "z_0100":
  { text:"<p>You splash through puddles after the dog as it waves your shoe at you in a\
          taunt. It's almost as if the dog is moderating its pace to stay just out of\
          your reach.</p><p>\
          Up ahead, you see a cyclist coming up the sidewalk.</p>",
    choices: ["Yell at the cyclist to grab the dog.",
              "Don't bother them; this is your problem."],
    links: ["01000", "01001"]
  },

  "z_0101":
  { text:"<p>It's hopeless; that dog is way faster than you, especially with only one shoe.\
          You slow to a walk and let the dog peel off, and resign yourself to trudging\
          home.</p><p>\
          As you reach Shady Avenue, you're almost clipped by a courier flying by.</p>",
    choices: ["Jokingly ask for a ride.", "Yell something rude."],
    links: ["01010", "01011"]
  },

  "z_1010":
  { text:"<p>You're done with this, so you slog your soggy self back towards home.\
          You've got other things to get to today, anyway.</p>",
    choices: ["Like meeting a courier for a package delivery.",
              "Like taking a long hot shower and finding dry clothes."],
    links: ["10100", "10101"]
  },

  "z_1011":
  { text:"<p>Despite everything, you maintain steady resolve to push through and keep\
          running.</p><p>\
          As you cross Shady Avenue, you're almost clipped by a courier flying by.</p>",
    choices: ["Jokingly ask for a ride.", "Yell something rude."],
    links: ["10110", "10111"]
  },

  "z_0000":
  { text:"<p>The dog makes a decent running buddy, and it keeps perfect pace with you.\
          You're breathing in sync, striding in sync, moving across the pavement\
          as if you had always run together.</p><p>\
          When you reach South Negley Avenue, the dog wants to turn left.</p>",
    choices: ["Turn right.", "Turn left."],
    links: ["00000", "00001"]
  },

  "z_0001":
  { text:"<p>You pretend to slip into pace next to the dog, waiting for it to settle\
          down a little. Once the dog seems content to trot along next to you, you\
          snatch at its collar again.</p><p>\
          The tag reads \"ROLLER\", and a phone number in the 412 area code.</p>",
    choices: ["Tell Roller to sit.", "Keep running and look for someone with a phone."],
    links: ["00010", "00011"]
  },

  "z_0110":
  { text:"<p>You can't help but laugh at yourself a little, because you're shoeless\
          in the middle of the street in a rain storm and some dog managed to outsmart\
          you.</p><p>\
          Might as well cut your losses and head home.</p>",
    choices: ["At least the clouds look like they might clear up.",
              "Enjoy stepping through some mud puddles on your way."],
    links: ["01100", "01101"]
  },

  "z_0111":
  { text:"<p>What horrible luck; you raise your fist to the sky as if it was the fault of\
          the clouds. They only respond by pouring more rain onto you. The dog is\
          already nowhere to be seen.</p><p>\
          Might as well cut your losses and head home.</p>",
    choices: ["Take off your soggy socks first.",
              "Slosh through every puddle on the way."],
    links: ["01110", "01111"]
  },
  
  "z_1100":
  { text:"<p>The hill is a part of the earth and you are a plow driving through it. You\
          keep your head low and your shoulders curled, and every step presses\
          down into the pavement.</p>",
    choices: ["You were made for this.",
              "You've worked hard for this."],
    links: ["11000", "11001"]
  },

  "z_1101":
  { text:"<p>The hill is a protrusion into the sky, and the more you run, the closer to\
          the clouds you rise. You tilt your chin up to meet the rain, and your body\
          grows lighter.</p>",
    choices:["You were made for this.", "You've worked hard for this."],
    links: ["11010", "11011"]
  },

  "z_1110":
  { text:"<p>You wait for the light to turn to your favor again, and bolt out into the\
          street as soon as it changes. The hill rises ahead of you.</p>",
    choices:["Take a deep breath.", "Take a good look."],
    links: ["11100", "11101"]
  },

  "z_1111":
  { text:"<p>You\'ve lost your mojo, so you jog in place at the intersection while\
          working out your next move.</p><p>\
          <p>A courier blasts through the intersection and splashes muddy rainwater\
          all over you.</p>",
    choices:["You\'re already drenched anyway.", "That\'s the last straw."],
    links: ["11110", "11111"]
  },

  "ending0" :
  { text: "<p>Dummy ending text</p>",
    choices: [],
    links: []
  }
}; //end BobStory

// add the same endings to Bob's Story as to Alice's.
for (var idx in AliceStory) {
  var first = idx.slice(0,1);
  if (first == "0" || first == "1") {
    BobStory[idx] = AliceStory[idx];
  }
}


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
    // this is for single character mode
//     passage = cursors[character];
//     $("#choice"+character+"A").text(passage.choices[0]);
//     $("#choice"+character+"B").text(passage.choices[1]);
//     $("#choice"+character+"A").show();
//     $("#choice"+character+"B").show();
  // this is for multi character mode
    for (var ch in story) {
      passage = cursors[ch];
      $("#choice"+ch+"A").text(passage.choices[0]);
      $("#choice"+ch+"B").text(passage.choices[1]);
      $("#choice"+ch+"A").show();
      $("#choice"+ch+"B").show();
    }

    mode = "playing";
  } 
  else {
    for (var ch in story) {
      $("#choice"+ch+"A").text(cursors[ch].choices[0]);
      $("#choice"+ch+"B").text(cursors[ch].choices[1]);
    }
  // choice fields for the *selected* character to set up the next choice.
//     choices = cursors[character]["choices"];
//     $("#choice"+character+"A").text(choices[0]);
//     $("#choice"+character+"B").text(choices[1]);
  }
}

function end_game() {
  console.log("game ended");
  for (var ch in story) {
    $("#choice"+ch+"A").hide();
    $("#choice"+ch+"B").hide();
  }
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

//  $("#choiceAliceA").hide();
//  $("#choiceAliceB").hide();
//  $("#choiceBobA").hide();
//  $("#choiceBobB").hide();
//

  for (var ch in story) {
    $("#choice"+ch+"A").show();
    $("#choice"+ch+"B").show();
  }
  
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

    // add the text of the selected choice.
    prefix += "<div class=\"chosen\">"+cursors[ch].choices[choice]+"</div>"; // + "<br><br>";

    // update the cursor
    passage_name = cursors[ch].links[choice];
    console.log("updating "+ch+"'s cursor to "+passage_name+"\n");
    cursors[ch] = story[ch][passage_name];
    prefix += cursors[ch].text;// + "<br><br>";
    // update the prefix document element.
    // (XXX ideally this would be in render, but then render would need to
    // loop additionally over the characters...)
    $("#prefix"+ch).html(prefix);
    
    // check if the new passage is an ending
    if (cursors[ch].choices.length == 0) {
      mode = "done";
    }

  } // end loop over characters  

  turns++;
  render();
}


function pickCharacter(c) {
  character = c;

  // this is for controlling only a single char
//   $("#choice"+c+"A").click(function () {
//     console.log("chose A");
//     choose(0);
//   });
// 
//   $("#choice"+c+"B").click(function () {
//     console.log("chose B");
//     choose(1);
//   });

  // this is for controlling all chars at once:
  for (var ch in story) {
    $("#choice"+ch+"A").click(function () {
        console.log("chose A");
        choose(0);
    });
    
    $("#choice"+ch+"B").click(function () {
      console.log("chose B");
      choose(1);
    });
  }

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
