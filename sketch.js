const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

//Title Screen variables
var titleScreenImg, titleScreenText, titleScreenTextImg, pressSpaceText, pressSpaceImg;
var playButton, playButtonImg, playButtonHighlighted;
var titleMusic;

//First Dialogue Scene variables
var houseBgImg, girl, girlAngryImg, girlGoldImg;
var wizard, wizardImg, wizardGoldImg;

//Level 1 variables
var level1BgImg;

//Level 2 variables

//Level 3 variables

//Ending Scene variables

var gameState = 0;

function preload(){
    titleScreenImg = loadImage("Images/Title Screen/titleScreen.png");
    titleScreenTextImg = loadImage("Images/Title Screen/gameTitleText.png");
    pressSpaceImg = loadImage("Images/pressSpaceToPlay.png");

    playButtonImg = loadImage("Images/Title Screen/playButton.png");
    playButtonHighlighted = loadImage("Images/Title Screen/playButtonHighlighted.png");

    titleMusic = loadSound("Music/otherMusic.mp3", true);

    houseBgImg = loadImage("Images/Dialogue/houseInterior.png");
    girlAngryImg = loadImage("Images/Girl/angryGirl.png");
    girlGoldImg = loadImage("Images/Girl/holdingGoldGirl.png");

    wizardImg = loadImage("Images/Wizard/wizard.png");
    wizardGoldImg = loadImage("Images/Wizard/wizardHoldingGold.png");

}

function setup(){
    createCanvas(displayWidth - 4, displayHeight - 4);
    engine = Engine.create();
    world = engine.world;

    gameState = 0;
}

function draw(){
    background("#87ceeb");
    titleMusic.play();
    Engine.update(engine);

    if (gameState === 0){
        background(titleScreenImg);

        titleScreenText = createSprite(displayWidth/2, displayHeight/4, 20, 20);
        titleScreenText.addImage(titleScreenTextImg);
        titleScreenText.scale = 0.7;
        titleScreenText.display();

        pressSpaceText = createSprite(displayWidth/2, displayHeight/2 + 330, 20, 20);
        pressSpaceText.addImage(pressSpaceImg);
        pressSpaceText.display();
        
        if (keyDown("SPACE")){
            gameState = 1;
        }

    }

    if (gameState === 1){
        background(houseBgImg);
        titleMusic.stop();
    }

    //drawSprites();

}


/*Sillicon Valley Project Plan:

Story:

The title screen appears and you press "PLAY" to play the game. Here it begins...

    You own a special gem and diamond and some gold that your grandfather gave to you. They are very special and you would do
anything to protect them. However, a wizard finds out about the treausre and steals everything. You get angry and chase after him.
This happens in your house, and the wizards casts a spell and teleports inside and snatches the treasure.
Then he teleports somewhere else. You see him outside your house, and he ran out of spells to teleport away. You chase him.
There will be dialogue too and you have to press SPACEBAR to continue.

-------------------------------------------------------------------------------------------
BEGINNING DIALOGUE:

Hero: It's such a nice day outside. I wish grandpa were here to enjoy it too...
Hero: I'm glad I have his special treasures. It's like he's here with me.
[insert noise]
Hero: What was that?
[Wizard appears with smoke bomb and sound effect]
Wizard: Ho ho ho! I heard something about special treasures?
Hero: !
Wizard: Ah, I see! I'll take those then!
[Wizard takes treasures]
Wizard: Thanks a lot!
Hero: NOOOO!!!

Hero: !
Hero: I hear something outside...
[scene switches to hero seeing wizard outside]
Wizard: Dang it! I ran out of teleporting spells!
Hero: HEY COME BACK HERE!
Wizard: You're going to have to catch me if you want these treasure back, peasant!


[A screen with levels appears and you have to click on Level 1, since Level 2 and 3 will be locked.]

[Level 1 begins]
-------------------------------------------------------------------------------------------

Here, I will make level 1. It will be like an Infinite Runner Game, but you have to last playing until you reach 1000 points.
The character will be on the left and the wizard will be on the right, and the magic attack spells will be the "obstacles" you have
to jump over. If you get hit, you have to restart the level. I will make the background, which will be a nice horizon of a forest. When you reach the end of level 1, the scene will 
change. You will make it to a castle and the wizard will appear to be trapped, but he will use a spell to make blocks that will help him
climb the tower; it will be like a parkour level (like the Minecraft one I made).

After you complete level one, there will be more dialogue.


-------------------------------------------------------------------------------------------
DIALOGUE AFTER LEVEL 1:

Hero: HEY I'VE GOT YOU!
Wizard: Not for long!
[Wizard makes blocks appear]
Wizard: So long!
[Wizard jumps very high onto the blocks]
Hero: No! *sigh* It looks like I'm going to have to climb, too.
Hero: This is the royal family's castle, so I can't just go inside...
Hero: This is risky, but I can't lose what I have left of my grandfather...
Hero: LET'S GO!

[Level screen appears and you click one Level 2 and Level 1 and 3 will be locked/marked as completed]

[Level 2 begins]
-------------------------------------------------------------------------------------------

Level 2 will be like the ghost tower and Minecraft game I built on Code.org. The hero has to jump on platforms of the castle 
to make it to the top. If you fall, you have to restart the level. You must reach at least 600 points to move on. When you
reach the end of the level, the scene will change and the wizard will be standing on the top of the castle. He will be on
the right, and you will be on the left. You two are going to duel.

Here, there will be more dialogue.


-------------------------------------------------------------------------------------------
DIALOGUE AFTER LEVEL 2:

Hero: It's over, Wizard! Give me back my treasure!
Wizard: So, you've made it this far? Well, well, I'm impressed. But, I'm not going to just hand over these
rare, pricless, valuable treasures. I'm not a fool!
Wizard: I'm keeping them.
Hero: NO! GIVE THEM BACK!
Wizard: What are you going to do? Fight me? Please! I'm a wizard! You have no chance!
Hero: ...
Hero: Actually...
Wizard: Hmm..?
Hero: I CHALLENGE YOU TO A  DUEL!
Wizard: Are you joking? HAHAHAHAHA! ARE YOU BEING SERIOUS?!!
Hero: ...
Wizard: Oh. Very well then. If it's a duel you want, it shall be a duel we have!
Hero: Bring it on!

[the king of the castle enters]
King: WHAT IN THE NAME OF GOLDNAVIA IS GOING ON UP HERE?
Hero: !
Wizard: !
King: Wizard? What is going on? Who is this peasant?
Hero: He stole things that belong to me!
King: Wizard? Is this true?
Wizard: Well...I...
King: You swore an oath to never commit such devious acts! How dare you?
King: You poor child, what is going on now?
Hero: I wasn't thinking, and I may have just challenged a powerful wizard to a duel...
Hero: I have no magic, no weapons, no armor, and I was wondering if you could help me.
Hero: May I use some of your armor and weapons from your armory, your majesty?
King: Of course. I will get you the supplies you need...

[Level screen appears and you click on Level 3. Level 1 and 2 will be marked as completed]

[Level 3 begins]
-------------------------------------------------------------------------------------------

Level 3 is the final showdown. The king gave you armor and a bow. You will use the bow to shoot the wizard.
The wizard has 5 hearts. You also have 5 hearts. You have to shoot the wizard. One hit equals one heart gone.
You will be able to move and jump and the wizard will shoot magic spells at you. When you lose all your hearts,
you have to restart the level. If you manage to defeat the wizard, you win and get your treasures back!!

-------------------------------------------------------------------------------------------
DIALOGUE AFTER LEVEL 3:

Wizard: You have defeated me, young hero. As a wizard, it is my duty to keep a promise, but I failed. 
So, to make up for it, here are your treasures...
Hero: YES! YES! I've got them back! Now I can go home and be relieved I managed to keep my grandfather's 
precious things safe!
Hero: King Norman, thank you for giving me the necessary weapon and armor. Thanks to you I got my treasure back!
King: It's alright, lad. I am happy you got your belongings back!
King: Now then, run along home. It has been a long and tiring day, I bet. You are welcome to speak with me anytime!
Hero: Wow! Thank you, your Majesty! See you again soon!
[Hero goes home]
King: What a nice child.
King: Wizard, I am very disappointed in you. You broke my promise, you disturbed a fellow citizen of my kingdom,
you stole their goods, and attempted to almost kill them! What do you have to say for yourself?
Wizard: I-I'm sorry...
King: Sorry isn't going to cut it! Your horrible actions will result to a severe punishment! You will be
locked away in the dungeon, your magic will be removed, and if you try anything else you may have in your sleeve,
then I will therefore banish you from this kingdom! Do you understand?
Wizard: Yes, Sir...
King: Very well, then. Come along then... 

[ending screen]

-------------------------------------------------------------------------------------------





















What is the game about?
My game will be about a character chasing after a wizard after he stole some treasure

How many levels will the game have?
It will have 2-3 levels.

First, there will be a title screen which I will draw and color myself. I will also make all the assets by hand.
The assets will include characters, dialogue boxes, backgrounds, items, animations, etc.

Characters:
    - the main character
    - the wizard
    - some minions of the wizard (maybe)*/