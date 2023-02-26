# Tamagotchi App

For this activity you are going to create your own basic Tamagotchi clone using constructors.

## Instructions

* Remember Tamagotchis? They were those little toys that contained "digital pets" that you could feed, pet, play with, and care for.

* Create a constructor called "DigitalPal" which will create six properties and 10 methods:

  * The first property is `hungry` and it initially starts out as `false`.

  * The second property is `sleepy` and it initially starts out as `false`.

  * The third property is `bored` and it initially starts out as `true`.

  * The fourth property is `age` and it initially starts out at `0`.

  * The fifth property is `outside` and it is initially set to `false`.

  * The sixth property is `houseCondition` and it is initially set to `100`—but not for long.

  --- 

  * The first method is `feed()`: If hungry is `true`, print "That was yummy!", set hungry to `false`, and then set sleepy to true. If hungry is false, print "No thanks! I'm full."

  * The second method is `sleep()`: If sleepy is `true`, print `Zzzzzzzz`, set sleepy to `false`, then set bored to true, and then run`increaseAge()` If sleepy is false, print "No way! I'm not tired."

  * The third method is `play()`: If bored is `true`, print "Yay! Let's play!", set bored to `false`, and then set hungry to `true`. If bored is false, print "Not right now. Later?"

  * The fourth method is `increaseAge()`: This method is called by the`sleep()` method when the DigitalPal goes to sleep and increases the DigitalPal's age by `1` while also printing "Happy Birthday to me! I am "+age+" old!"

  * The fifth method is `bark()`: This method prints out "Woof! Woof!" when run.

  * The sixth method is `goOutside()`: If outside is `false`, it prints "Yay! I love the outdoors!", sets outside to `true`, and runs`bark()` If outside is `true`, it prints "We're already outside though..."

  * The seventh method is `goInside()`: If outside is `true`, it prints "Do we have to? Fine..." and sets outside to `false`. If outside is `false`, it prints "I'm already inside..."
	
  * The eighth method is `meow()`: This method prints out "Meow! Meow!" when run.

  * The ninth method is `destroyFurniture()`: This method decreases `houseCondition` by `10` and prints "MUAHAHAHAHA! TAKE THAT FURNITURE!" to the screen. It also sets bored to `false` and sleepy to `true`. If `houseCondition` is equal to `0`, then this should not run anymore.

  * The tenth method is `buyNewFurniture()`: This method increases `houseCondition` by `50` and prints "Are you sure about that?" to the screen.

* Create a variable named `dog` that is set to a new DigitalPal.

* Make a second variable named `cat` that is set to a new DigitalPal.

* Play around with your newly created digital pets for a bit and see what else you could add in order to make them even more exciting!

* BONUS: Make it so your Tamagotchis run off of user input from the command line. It may sound easy at first, but this can actually be quite challenging. We will be going over this in more detail during the next class.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
