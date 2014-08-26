$(document).ready(function() {
    $('form#randomizer').click(function(event) {
	event.preventDefault();
        var answers = [
        "Being fabulous is a right not a privilege", 
        "You = Blair. Your haters = Serena.", 
        "Tell anybody who doesn't think you're amazing to swerve", 
        "You don't need a reason to take a selfie today", 
        "Sashay away", 
        "Seriously, you look good", 
        "You can dismantle the patriarchy and have cute hair at the same time", 
        "You have plenty of time to make today a good day",
        "Get ready to stunt on your enemies",
        "Tell anybody that will listen about your greatness",
        "If you outshine someone else today, tell them to deal with it",
        "Tell your enemies to come back later; you're busy being a boss",
        "You are a platinum-selling, self-titled album",
        "You're so cool there should be a 70s cult classic named after you",
        "Flip your hair just because",
        "This is your story: You're the star, director, writer and caterer",
        "You don't need anybody's permission to be yourself",
        "I also believe your letter from Hogwarts got lost in the mail",
        "You could stoop to their level, but you use your powers for good",
        "Picture your favorite food. Acquire favorite food. Regret nothing.",
        "Evict your negative thoughts",
        "You have always been good enough",
        "No, they're the ones who aren't worthy of you",
        "They wish they could compete with you",
        "Surround yourself with the best people and the best tasting food",
        "Your love is enough",
        "Be patient because your winter is coming and your enemies aren't ready",
        "Congrats on successfully masquerading as an adult today",
        "Nobody does it like you",
        "In five years you will look back at this moment and LOL",
        "You are an epic underdog story in progress",
        "Spoiler alert: You win in the end",
        "Declare yourself the best ever - you don't need proof",
        "Your epic fails are more interesting than some people's entire lives",
        "Life goals before trolls",
        "Literally pat yourself on the back right now",
        "You are killing your outfit today",
        "You look so much better than you think you do",
        "A bad day does not equal a bad life",
        "You are custom made, not one-size-fits-all",
        "Take pride in your good-looking self",
        "If they hate you because you're happy, then you're doing something right",
        "Never apologize for being yourself",
        "If anybody doubts you today, punch them in the kidney",
        "Tomorrow's a new opportunity to be even more fabulous",
        "Feel free to rub your success in someone's face today",
        "You have the power of Grayskull",
        "Make everybody wonder why you look so happy today",
        "Okay, the new plan is to kick butt and take names. Forget the old plan",
        "Don't let today end without a cupcake in your stomach",
        "Go to bed tonight knowing you did your absolute best",
        "Don't lower yourself because they can't rise to the occasion",
        "You da real MVP",
        "Rejection from society is what created the X-Men",
        "If your enemies didn't hate you, they'd have nothing to do all day long",
        "Keep it together because it will make other people jealous",
        "If your life were a John Hughes movie you'd be the popular kid",
        "Unlike most celebrities, you look better in person",
        "Just be glad you're not Piper Chapman in Season 2, Episode 1"
        ];
        var random = answers[Math.floor(Math.random() * answers.length)];
        $('div#answers').text(random).fadeIn('slow').delay(3500).fadeOut('slow');
    });
});

jQuery.fn.redraw = function() {
return this.hide(0, function(){jQuery(this).show()});
};
jQuery(document).ready(function() {
jQuery('body').redraw();
});