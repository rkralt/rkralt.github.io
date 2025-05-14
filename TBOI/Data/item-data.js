const ITEM_DATA = [
  {
    id: 1,
    name: 'Sad onion',
    quality: '3',
    summary: 'Tears up',
    description: '+0.7 Tears up'
  },
  {
    id: 2,
    name: 'Inner eye',
    quality:'2',
    summary: 'Triple shot',
    description: 'Tears now shoot three at a time\n\nTears down significantly - Tears * 0.51'
  },
  {
    id: 3,
    name: 'Spoon bender',
    quality:'3',
    summary: 'Homing shots',
    description: 'Gives isaac\'s tears a homing effect'
  },
  {
    id: 4,
    name: 'Crickets head',
    quality:'4',
    summary: 'DMG up',
    description: '+0.5 damage up \n\nx1.5 Damage multiplier (does not stack with magic mushroom)\n\nCan be found in golden chest\n\nUsed to be called Max\'s head before rebirth'
  },
  {
    id: 5,
    name: 'My reflection',
    quality:'2',
    summary: 'Boomerang tears',
    description: 'gives tears a boomerang effect +1.5 Damage up\n\n+0.6 Shot speed up\n\n-1 Luck down\n\nx1.6 + 1.5 Range up'
  },
  {
    id: 6,
    name: 'Number one',
    quality:'2',
    summary: 'Tears up',
    description: 'Gives you a very high tear rate in exchange for a big range down \n\n+1.5 Tears up \n\n-2.5 Range down'
  },
  {
    id: 7,
    name: 'Blood of the martyr',
    quality:'3',
    summary: 'DMG up',
    description: '+1.0 Damage up \n\nx1.5 damage multiplier if you also have Book of belial'
  },
  {
    id: 8,
    name: 'Brother bobby',
    quality:'1',
    summary: 'Friends till the end',
    description: 'A familiar which follows Isaac and shoots normal tears which do 3.5 damage \n\n1/3 Conjoined transformation'
  },
  {
    id: 9,
    name: 'Skatole',
    quality:'0',
    summary: 'Fly love',
    description: 'A lot of fly enemies are no longer aggrassive towards Isaac \n\nAttack fly, Dart fly, Eternal fly and Ring fly are transformed into a neutral black fly \n\nBoom fly, Red Boom fly and Drowned Boom fly move slower, but still deal contact damage \n\nMoter, Level 2 fly, Full fly, Pooter and Super Pooter move slower and deal no contact damage \n\nCan only be obtained from the shell game in the arcade \n\n1/3 Beelzebub transformation \n\n1/3 Oh Crap transformation'
  },
  {
    id: 10,
    name: 'Halo of flies',
    quality:'2',
    summary: 'Projectile protection',
    description: 'Gives Isaac 2 orbital flies  which block enemy shots \n\n1/3 beezlebub transformation'
  },
  {
    id: 11,
    name: '1UP',
    quality:'2',
    summary: 'Extra life',
    description: 'Gives the player an extra life\n\nRespawn at full red health\n\nFirst to revive if your holding multiple revive items'
  },
  {
    id: 12,
    name: 'Magic mushroom',
    quality:'4',
    summary: 'All stats up!',
    description: '+1 HP\n\n+0.3 Damage up\n\n+1.5 Range up\n\n+0.3 Speed up\n\nx1.5 Damage multiplier, does not stack with Cricket\'s head, Blood of the martyr and/or Book of belial\n\nIncreases player sprite, but doesn\'t increase the hitbox\n\nFull health\n\n1/3 Fun guy transformation\n\n1/3 Stompy transformation'
  }
  ,
  {
    id: 13,
    name: 'The virus',
    quality:'2',
    summary: 'Poison touch',
    description: '+0.2 Speed up\n\nEnemies touching you take 12 damage, then a poison effect is applied for 6-7 ticks, dealing damage equal to the amount of red hearts you have\n\n1/3 Spun transformation'
  }
  ,
  {
    id: 14,
    name: 'Roid rage',
    quality:'2',
    summary: 'Speed and range up',
    description: '+0.3 Speed up\n\n+1.5 Range up\n\n+0.5 Shot Height\n\n1/3 Spun transformation'
  }
  ,
  {
    id: 15,
    name: '<3',
    quality:'2',
    summary: 'HP up',
    description: '+1 HP\n\nFully restores red heart containers'
  }
  ,
  {
    id: 16,
    name: 'Raw liver',
    quality:'2',
    summary: 'HP up',
    description: '+2 HP\n\nHeals one red health container'
  }
  ,
  {
    id: 17,
    name: 'Skeleton key',
    quality:'3',
    summary: '99 keys',
    description: 'Gives the player 99 keys'
  }
  ,
  {
    id: 18,
    name: 'A dollar',
    quality:'3',
    summary: '$$$',
    description: 'Gives the player 100 coins'
  }
  ,
  {
    id: 19,
    name: 'BOOM!',
    quality:'10 bombs',
    summary: '0',
    description: '+10 bombs'
  }
  ,
  {
    id: 20,
    name: 'Transendence',
    quality:'3',
    summary: 'We all float down here...',
    description: 'Gives the player the ability to fly'
  }
  ,
  {
    id: 21,
    name: 'The compass',
    quality:'2',
    summary: 'The end is near',
    description: 'Shows most icons on the map\n\nDoes not show the layout of the map\n\nDoes not show the location of secret or super secret rooms\n\nDoes not show if curse of the lost is in effect'
  }
  ,
  {
    id: 22,
    name: 'Lunch',
    quality:'1',
    summary: 'HP up',
    description: '+1 HP\n\nHeals one red health container'
  }
  ,
  {
    id: 23,
    name: 'Dinner',
    quality:'1',
    summary: 'HP up',
    description: '+1 HP\n\nHeals one red health container'
  }
  ,
  {
    id: 24,
    name: 'Dessert',
    quality:'1',
    summary: 'HP up',
    description: '+1 HP\n\nHeals one red health container'
  }
  ,
  {
    id: 25,
    name: 'Breakfast',
    quality:'1',
    summary: 'HP up',
    description: '+1 HP\n\nHeals one red health container'
  }
  ,
  {
    id: 26,
    name: 'Rotten meat',
    quality:'1',
    summary: 'HP up',
    description: '+1 HP\n\nHeals one red health container'
  }
  ,
  {
    id: 27,
    name: 'Wooden spoon',
    quality:'1',
    summary: 'Speed up',
    description: '+0.3 Speed up'
  }
  ,
  {
    id: 28,
    name: 'The belt',
    quality:'1',
    summary: 'Speed up',
    description: '+0.3 Speed up'
  }
  ,
  {
    id: 29,
    name: 'Mom\'s underwear',
    quality:'1',
    summary: 'Range up',
    description: '+1.5 Range up \n\nMakes Isaac deal 12 contact damage per tick \n\n1/3 Mom transformation'
  }
  ,
  {
    id: 30,
    name: 'Mom\'s heel',
    quality:'1',
    summary: 'Range up',
    description: '+1.5 Range up \n\nMakes Isaac deal 12 contact damage per tick \n\n1/3 Mom transformation'
  }
  ,
  {
    id: 31,
    name: 'Mom\'s lipstick',
    quality:'1',
    summary: 'Range up',
    description: '+2.25 Range up \n\nDrops a random heart on the floor when picked up \n\n1/3 Mom transformation'
  }
  ,
  {
    id: 32,
    name: 'Wire coat hanger',
    quality:'3',
    summary: 'Tears up',
    description: '+0.7 Tears up'
  }
  ,
  {
    id: 33,
    name: 'The bible',
    quality:'1',
    summary: 'Temporary flight',
    description: 'Gives flight for the current room \n\nInstantly kills Mom\'s foot, Mom\'s Heart and It Lives \n\nif used during the Satan fight, The bible will instantly kill isaac \n\n1/3 Seraphim transformation \n\n1/3 Bookworm transformation'
  }
  ,
  {
    id: 34,
    name: 'The book of belial',
    quality:'2',
    summary: 'Temporary DMG up',
    description: '+2 damage for the current room \n\n1.5x Damage multiplier if used with Blood of the martyr \n Devil/angel deal by +12.5% \n\n1/3 Bookworm transformation'
  }
  ,
  {
    id: 35,
    name: 'The necronomicon',
    quality:'1',
    summary: 'Mass room damage',
    description: 'Deals 40 damage to the current room \n\n1/3 Bookworm transformation'
  }
  ,
  {
    id: 36,
    name: 'The poop',
    quality:'0',
    summary: 'Plop!',
    description: 'Drops poop on the floor \n\ncan be placed next to a pit and exploded to make a bridge \n\ncan be placed over a broken red poop to overwrite it, causing it to no longer generate \n\n1/3 Oh crap transformation'
  }
  ,
  {
    id: 37,
    name: 'Mr boom',
    quality:'1',
    summary: 'Reusable bomb buddy',
    description: 'Drops a large bomb below the player which does 185 damage \n\ncompatible with bomb modifiers'
  }
  ,
  {
    id: 38,
    name: 'Tammy\'s head',
    quality:'2',
    summary: 'Reusable tear burst',
    description: 'Fires 10 tears in a circle around Isaac \n\nEach tear is equal to your damage + 25 flat damage \n\nThe tears spawned from Tammy\'s Head retain tear effects of Isaac\'s tears'
  }
  ,
  {
    id: 39,
    name: 'Mom\'s bra',
    quality:'1',
    summary: 'Mass fear',
    description: 'Freezes all enemies in the current room for 4 second \n\n1/3 Mom transformation'
  }
  ,
  {
    id: 40,
    name: 'Kamikaze',
    quality:'0',
    summary: 'Become the bomb!',
    description: 'Causes an explosion near Isaac which takes away half a heart and does 40 damage to all enemies in close proximity \n\ndoes not reduce devil/angel room chances'
  }
  ,
  {
    id: 41,
    name: 'Mom\'s pad',
    quality:'0',
    summary: 'Gross...',
    description: 'When used, causes all enemies in the current room to run away from Isaac in fear for 5 seconds \n\nspawns 1 blue attack fly per use \n\n1/3 Mom transformation'
  }
  ,
  {
    id: 42,
    name: 'Bob\'s rotten head',
    quality:'1',
    summary: 'Reusable ranged bomb',
    description: 'A poison bomb which can be thrown and leaves a poison effect on any enemies within blast radius. it also leaves a gas cloud at the place where it exploded \n\nthe bomb deals 185 damage + your tear damage on hit and leaves a damage over time poison effect that does 3 times your tear damage per tick \n\nSynergizes with tear modifying items \n\n1/3 Bob transformation'
  }
  ,
  {
    id: 44,
    name: 'Teleport',
    quality:'0',
    summary: 'Teleport!',
    description: 'Teleports Isaac to a random location on the map \n\nCan\'t be used to teleport to the I AM ERROR room'
  }
  ,
  {
    id: 45,
    name: 'Yum heart',
    quality:'1',
    summary: 'Reusable regeneration',
    description: 'Heals the player for one whole read red heart\n\nWorks with Keeper'
  }
  ,
  {
    id: 46,
    name: 'Lucky foot',
    quality:'2',
    summary: 'Lucky foot',
    description: '+1.0 Luck up\n\nBetter gambling chance\n\nHigher chance to get a random drop after clearing a room\n\nConverts all negative pills into their possitive counterparts'
  }
  ,
  {
    id: 47,
    name: 'Doctor\'s remote',
    quality:'1',
    summary: 'Doctors remote',
    description: 'A target is placed on the floor which can be controller. After a few seconds a huge missle hits te target and deals 20x your tear damage to anything nearby'
  }
  ,
  {
    id: 48,
    name: 'Cupid\'s arrow',
    quality:'3',
    summary: 'Piercing shots',
    description: 'The players tears now have a piercing effect'
  },
  {
    id: 49,
    name: 'Shoop da Whoop!',
    quality:'2',
    summary: 'BLLLARRRRGGG!',
    description: 'When used, fires a high damage laser in a straight line across the room\n\nThe laser does 2x tear damage.'
  }
  ,
  {
    id: 50,
    name: 'Steven',
    quality:'3',
    summary: 'DMG up',
    description: '+1 Damage up'
  }
  ,
  {
    id: 51,
    name: 'Pentagram',
    quality: '3',
    summary: 'DMG up',
    description: '+1.0 Damage up\n\n+10% chance for devil/angel deal\n\n 1/3 Leviathan transformation'
  },
  {
    id: 52,
    name: 'Dr. Fetus',
    quality: '4',
    summary: '???',
    description: 'Instead of tears, the player now shoots bombs\n\nBomb damage = Player damage x 10\n\nTears down (Tear delay x 2.5)\n\nBombs synergize with other bomb items and tear moddifiers\n\nBombs are immune to knockback from their own explosions'
  },
  {
    id: 53,
    name: 'Magneto',
    quality: '1',
    summary: 'Item snatcher',
    description: 'Pickups on the floor move towards the player\n\nWorks across pits but not trough key blocks\n\nChests up to 2 tiles away from the player open automaticly. locked and stone chests are not opened'
  },
  {
    id: 54,
    name: 'Treasure map',
    quality: '2',
    summary: 'Full visible map',
    description: 'Reveals the entire map except secret rooms'
  },
  {
    id: 55,
    name: 'Mom\'s eye',
    quality: '1',
    summary: 'Eye in the back of your head',
    description: 'The player has a chance to randomly shoot a tear from the back of their head\n\nIs effected by luck\n\n50% chance at 0 luck\n\n1/3 Mom transformation'
  },
  {
    id: 56,
    name: 'Lemon mishap',
    quality: '0',
    summary: 'Oops...',
    description: 'When used, drops a pool of \'lemonade\' on the floor which damages any enemies that come into contact with it for 8 damage per tick'
  },
  {
    id: 57,
    name: 'Distant admiration',
    quality: '2',
    summary: 'Attack fly',
    description: 'Gives the player an orbiting fly which deals 5 contact damage to enemies per tick\n\n1/3 Beezlebub transformation'
  },
  {
    id: 58,
    name: 'Book of shadows',
    quality: '3',
    summary: 'Temporary invincibility',
    description: 'when used, gives the player an invulnerability effect for 10 seconds\n\n1/3 Bookworm transformation'
  },
  {
    id: 60,
    name: 'The ladder',
    quality: '1',
    summary: 'Building bridges',
    description: 'Allows the player to walk over gaps with a width of one tile'
  },
  {
    id: 62,
    name: 'Charm of the vampire',
    quality: '1',
    summary: 'Kills heal',
    description: '+0.3 Damage up\n\nHeals half a heart after ever 13 enemies killed\n\nWorks with keeper'
  },
  {
    id: 63,
    name: 'The battery',
    quality: '2',
    summary: 'Stores energy',
    description: 'All active items can now be overcharged allowing them to be charged up twice\n\nWorks with self-charging items'
  },
  {
    id: 64,
    name: 'Steam sale',
    quality: '2',
    summary: '50% off',
    description: 'Items in the shop are now 50% off\n\n15 Cent items are now reduced to 7 cents\n\n 5 cents pickups are now 3 cents\n\n 3 cents pickups now become 2 cents\n\nStacks with other steam sales'
  },
  {
    id: 65,
    name: 'Anarchist cookbook',
    quality: '1',
    summary: 'Summon bombs',
    description: 'Spawns 6 troll bombs at random locations in the room\n\nBombs are effected by other passive bomb items\n\n1/3 Bookworm transformation'
  },
  {
    id: 66,
    name: 'The hourglass',
    quality: '1',
    summary: 'Temporary enemy slowdown',
    description: 'When used, slows down all enemies in the current room and their projectiles for 8 seconds'
  },
  {
    id: 67,
    name: 'Sister maggy',
    quality: '1',
    summary: 'Friends \'till the end',
    description: 'A familial which follows the player around and shoots blood tears that deal 5 damage\n\nhas a fire rate of 1 tear per second\n\n1/3 conjoined transformation'
  },
  {
    id: 68,
    name: 'Technology',
    quality: '3',
    summary: 'Laser tears',
    description: 'The players tears are replaced with a laser that has unlimited range, piercing and can only fire at right angles'
  },
  {
    id: 69,
    name: 'Chocolate milk',
    quality: '3',
    summary: 'Charged shots',
    description: 'Tears down: tears delay x 2.5\n\nThe player can now charge shots for more damage by holding down the fire button\n\nAt full charge, the players tears do 4 times more damage\n\nTears fired at the minimum possible charge do 1/3 of your normal damage'
  },
  {
    id: 70,
    name: 'Growth hormones',
    quality: '3',
    summary: 'DMG + Speed up',
    description: '+1.0 Damage up\n\n+0.2 Speed up\n\n1/3 Spun transformation'
  },
  {
    id: 71,
    name: 'Mini mush',
    quality: '2',
    summary: 'Speed + range up',
    description: '+0.3 Speed up\n\n+1.5 Range up\n\n1/3 Fun guy transformation'
  },
  {
    id: 72,
    name: 'Rosary',
    quality: '2',
    summary: 'Faith up',
    description: '+0.5 Tears up\n\n+3 Soul hearts\n\nAdds several instances of The bible into all item pools\n\n1/3 Seraphim transformation'
  },
  {
    id: 73,
    name: 'Cube of meat',
    quality: '2',
    summary: 'Gotta meat them all',
    description: 'An orbital that blocks shots and damages enemies it comes into contact with for 7 damage per tick\n\n2 Cubes of meat transform the orbital into a meat head which fires blood tears which deal 3.5 damage\n\n3 Cubes of meat transform it into a meat boy familial that walks around and deals 3.5 contact damage per tick to enemies\n\n4 Cubes of meat cuase the meat boy familia to grow in size and do 5.5 damage per tick instead\n\nany further cubes of meat past 4 wil start the cycle again'
  },
  {
    id: 74,
    name: 'A quarter',
    quality: '0',
    summary: '+25 coins',
    description: '+25 Coins'
  },
  {
    id: 75,
    name: 'PHD',
    quality: '2',
    summary: 'Better pills',
    description: 'Converts most negative pills into their positive counterpart\n\nPills are identified before using them\n\nDrops a pill on pickup\n\nHeals 2 full red hearts\n\nMore coins from Blood donation or IV bag'
  },
  {
    id: 76,
    name: 'X-Ray vision',
    quality: '2',
    summary: 'I\'ve seen everything',
    description: 'Reveals the entrance to secret rooms and automatically opens the hole'
  },
  {
    id: 77,
    name: 'My little unicorn',
    quality: '1',
    summary: 'Temporary badass',
    description: 'When used, the player invincibility and +0.28 speed up for 6 seconds\n\nwhile active you cannot fire tears, but running into enemies will deal 40 contact damage per second'
  },
  {
    id: 78,
    name: 'Book of revelations',
    quality: '3',
    summary: 'Reusable soul protection',
    description: 'When used, gives the player an extra soul heart\n\nUsing this item gives you a high chance to replace the boss with a horsemen boss instead\n\n+17.5% chance of a devil deal opening after a boss fight\n\n1/3 Bookworm transformation'
  },
  {
    id: 79,
    name: 'The mark',
    quality: '3',
    summary: 'DMG up',
    description: '+1.0 Damage up\n\n+0.2 Speed up\n\n+1 Soul heart\n\n1/3 Leviathan transformation'
  },
  {
    id: 80,
    name: 'The pact',
    quality: '3',
    summary: 'DMG + tears up',
    description: '+0.5 Damage up\n\n+0.7 Tears up\n\n+2 Black hearts\n\n1/3 Leviathan transformation'
  },
  {
    id: 81,
    name: 'Dead Cat',
    quality: '3',
    summary: '9 Lives',
    description: 'The players health is set to 1 and gains 9 extra lifes\n\nEach time the player dies, they will respawn with 1 health\n\nThe floating dead cat head that follows you will disappear when you are on your last life\n\n1/3 Guppy transformation'
  },
  {
    id: 82,
    name: 'Lord of the pit',
    quality: '3',
    summary: 'Demon wings',
    description: '+0.3 Speed up\n\nGives the player the ability to fly\n\n1/3 Leviathan transformation'
  },
  {
    id: 83,
    name: 'The Nail',
    quality: '2',
    summary: 'Temporary demon form',
    description: 'Each use of this item gives a +0.7 Damage up, -0.18 Speed down and the ability to destroy most objects in the room\n\n+1/2 Black heart\n\nAllows the player to deal 40 contact damage to enemies in the current room but does not prevent contact damage to the player\n\n1/3 Leviathan transformation'
  },
  {
    id: 84,
    name: 'We need to go deeper',
    quality: '2',
    summary: 'Reusable level skip',
    description: 'When used, spawns a trapdoor at the players feet which allows him to travel to the next floor\n\nDiggin at decorated spaces will guarantee a crawlspace once per floor\n\nCan destroy rocks if the player is hovering over one when the item is used'
  },
  {
    id: 85,
    name: 'Deck of cards',
    quality: '2',
    summary: 'Reusable card generator',
    description: 'When used, gives the player a random tarot card'
  },
  {
    id: 86,
    name: 'Monstro\'s tooth',
    quality: '1',
    summary: 'Summon monstro',
    description: 'When used, Spawns a monstro which will jump on a random enemy in the room, dealing 120 damage and destroys nearby obstacles'
  },
  {
    id: 87,
    name: 'Loki\'s horn',
    quality: '1',
    summary: 'Cross tears',
    description: 'Everytime the player fires a tear, there is a chance that they will also fire three more tears in all cardinal directions\n\nthis item is effected by luck\n\nAt +15 luck it will active everytime, whilst at 0 luck it has a 30% chance to trigger'
  },
  {
    id: 88,
    name: 'Little chubby',
    quality: '2',
    summary: 'Attack buddy',
    description: 'A familiar that follows the player and charges forward, dealing 3.5 damage per tick to any enemy it comes into contact with'
  },
  {
    id: 89,
    name: 'Spider bite',
    quality: '2',
    summary: 'Slow effect',
    description: 'Tears now have a chance of slowing enemies and their projectiles for 2.5 seconds\n\nThis item is effected by luck, at +15 luck it will activate everytime'
  },
  {
    id: 90,
    name: 'The small rock',
    quality: '3',
    summary: 'DMG up',
    description: '+1.0 Damage up\n\n+0.2 Tears up\n\n-0.2 Speed down'
  },
  {
    id: 91,
    name: 'Spelunker hat',
    quality: '2',
    summary: 'See-trough doors',
    description: 'Reveals adjacent rooms up to 2 rooms away, this includes secret and super secret room\n\nGives the player a slight glown when curse of darkness is active\n\nBlocks damage from falling projectiles from above'
  },
  {
    id: 92,
    name: 'Super bandage',
    quality: '2',
    summary: '+2 Hearts',
    description: '+1 HP\n\n+2 Soul hearts\n\nHeals one red heart container'
  },
  {
    id: 93,
    name: 'The gamekid',
    quality: '1',
    summary: 'Temporary Man-Pac',
    description: 'When used, the player transforms into pacman, which makes him invincible for 6 seconds and does 40 contact damage to enemies per chomp\n\neverytime you eat 2 enemies you regain 1/2 heart of red health\n\nThe player can\'t shoot tears while the effect is active'
  },
  {
    id: 94,
    name: 'Sack of pennies',
    quality: '1',
    summary: 'Gives money',
    description: 'A bag that floats around following the player and drops a random coin every 2 rooms'
  },
  {
    id: 95,
    name: 'Robo-baby',
    quality: '1',
    summary: 'Friends till the bzzzttt',
    description: 'A familiar that follows the player and shoots lasers\n\nRobo-baby\'s laser is spectrand and piercing\n\nRobo-baby\'s laser deals 3.5 damage per hit\n\n1/3 Conjoined transformation'
  },
  {
    id: 96,
    name: 'Little C.H.A.D.',
    quality: '2',
    summary: 'Gives kisses',
    description: 'A familiar which follows the player and drops half a read heart every 3 rooms'
  },
  {
    id: 97,
    name: 'The book of sin',
    quality: '2',
    summary: 'Reusable item generator',
    description: 'When used, spawns a random pickup on the floor\n\npickups include: Bombs, hearts, keys, coins, pills, batteries, tarot cards and runes\n\ncan\'t produce microbatteries\n\n1/3 Bookworm transformation'
  },
  {
    id: 98,
    name: 'The relic',
    quality: '3',
    summary: 'Soul generator',
    description: 'A blue cross that follows the player and drops a soul heart every 7 to 8 rooms'
  },
  {
    id: 99,
    name: 'Little gish',
    quality: '2',
    summary: 'Sticky friend',
    description: 'A familiar that follows the player and fires black tar tears, which slow enemies movement and projectile speed for a few seconds\n\nLittle gish\'s tears do 3.5 damage\n\nLittle gish fires tears at a rate of 1 tear per second'
  },
  {
    id:100,
    name: 'Little steven',
    quality: '2',
    summary: 'Pshycic friend',
    description: 'A familiar that follows Isaac and fires homing tears that deal 3.5 damage each\n\nLittle steven fires at a tear rate of 1 tear per second and has a slightly longer range then other familiars\n\n1/3 conjoined transformation',
  },
  {
    id: 101,
    name: 'The halo',
    quality: '2',
    summary: 'All stats up',
    description: '+1 HP\n\n+0.3 Damage up\n\n+0.2 Tears up\n\n+0.38 Range up\n\n+0.3 Speed up\n\nHeals one red heart container\n\n1/3 Seraphim transformation'
  },
  {
    id: 102,
    name: 'Mom\'s bottle of pills',
    quality: '1',
    summary: 'Reusable pill generator',
    description: 'When used, gives Isaac a random pill\n\n1/3 Mom transformation'
  },
  {
    id: 103,
    name: 'The common cold',
    quality: '1',
    summary: 'Poison damage',
    description: 'Tears now have a chance to apply a poison effect, causing double your tear damage per tick on the enemies\n\nIs effected by luck, +12 luck will activate everytime'
  },
  {
    id: 104,
    name: 'The parasite',
    quality: '3',
    summary: 'Split shot',
    description: 'Isaac\'s tears now split into two upon contact with enemies or the enviroment\n\nSplit tears deal half your damage'
  },
  {
    id: 105,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 106,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 107,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 108,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 109,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 110,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 111,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 112,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 113,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 114,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 115,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 116,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 117,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 118,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 119,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 120,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 121,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 122,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 123,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 124,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 125,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 126,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 127,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 128,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 129,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 130,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 131,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 132,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 133,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 134,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 135,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 136,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 137,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 138,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 139,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 140,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 141,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 142,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 143,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 144,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 145,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 146,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 147,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 148,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 149,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 150,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 151,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 152,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 153,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 154,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 155,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 156,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 157,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 158,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 159,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 160,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 161,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 162,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 163,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 164,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 165,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 166,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 167,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 168,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 169,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 170,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 171,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 172,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 173,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 174,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 175,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 176,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 177,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 178,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 179,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 180,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 181,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 182,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 183,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 184,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 185,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 186,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 187,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 188,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 189,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 190,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 191,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 192,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 193,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 194,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 195,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 196,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 197,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 198,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 199,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 200,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 201,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 202,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 203,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 204,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 205,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 206,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 207,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 208,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 209,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 210,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 211,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 212,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 213,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 214,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 215,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 216,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 217,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 218,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 219,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 220,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 221,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 222,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 223,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 224,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 225,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 226,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 227,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 228,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 229,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 230,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 231,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 232,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 233,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 234,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 236,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 237,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 238,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 239,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 240,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 241,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 242,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 243,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 244,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 245,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 246,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 247,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 248,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 249,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 250,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 251,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 252,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 253,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 254,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 255,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 256,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 257,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 258,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 259,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 260,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 261,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 262,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 263,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 264,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 265,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 266,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 267,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 268,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 269,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 270,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 271,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 272,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 273,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 274,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 275,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 276,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 277,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 278,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 279,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 280,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 281,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 282,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 283,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 284,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 285,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 286,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 287,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 288,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 289,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 290,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 291,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 292,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 293,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 294,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 295,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 296,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 297,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 298,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 299,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 300,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 301,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 302,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 303,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 304,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 305,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 306,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 307,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 308,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 309,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 310,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 311,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 312,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 313,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 314,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 315,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 316,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 317,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 318,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 319,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 320,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 321,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 323,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 324,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 325,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 326,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 327,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 328,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 329,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 330,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 331,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 332,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 333,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 334,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 335,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 336,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 337,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 338,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 339,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 340,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 341,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 342,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 343,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 344,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 345,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 346,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 347,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 348,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 349,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 350,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 351,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 352,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 353,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 354,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 355,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 356,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 357,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 358,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 359,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 360,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 361,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 362,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 363,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 364,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 365,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 366,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 367,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 368,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 369,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 370,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 371,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 372,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 373,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 374,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 375,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 376,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 377,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 378,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 379,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 380,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 381,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 382,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 383,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 384,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 385,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 386,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 387,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 388,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 389,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 390,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 391,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 392,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 393,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 394,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 395,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 396,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 397,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 398,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 399,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 400,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 401,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 402,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 403,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 404,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 405,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 406,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 407,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 408,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 409,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 410,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 411,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 412,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 413,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 414,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 415,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 416,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 417,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 418,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 419,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 420,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 421,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 422,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 423,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 424,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 425,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 426,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 427,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 428,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 429,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 430,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 431,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 432,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 433,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 434,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 435,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 436,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 437,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 438,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 439,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 440,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 441,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 442,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 443,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 444,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 445,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 446,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 447,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 448,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 449,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 450,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 451,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 452,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 453,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 454,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 455,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 456,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 457,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 458,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 459,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 460,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 461,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 462,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 463,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 464,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 465,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 466,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 467,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 468,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 469,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 470,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 471,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 472,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 473,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },

  {
    id: 475,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 476,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 477,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 478,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 479,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 480,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 481,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 482,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 483,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 484,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 485,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 486,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 487,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 488,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 489,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 490,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 491,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 492,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 493,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 494,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 495,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 496,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 497,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 498,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 499,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 500,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 501,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 502,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 503,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 504,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 505,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 506,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 507,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 508,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 509,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 510,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 511,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 512,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 513,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 514,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 516,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 517,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 518,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 519,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 520,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 521,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 522,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 523,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 524,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 525,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 526,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 527,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 528,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 529,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 530,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 531,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 532,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 533,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 534,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 535,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 536,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 537,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 538,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 539,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 540,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 541,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 542,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 543,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 544,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 545,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 546,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 547,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 548,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 549,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 550,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 551,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 552,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 553,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 554,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 555,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 556,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 557,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 558,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 560,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 561,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 562,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 563,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 564,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 565,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 566,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 567,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 568,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 569,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 570,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 571,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 572,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 573,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 574,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 575,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 576,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 577,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 578,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 579,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 580,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 581,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 582,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 583,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 584,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 585,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 586,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 588,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 589,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 590,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 591,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 592,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 593,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 594,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 595,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 596,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 597,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 598,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 599,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 600,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 601,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 602,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 603,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 604,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 605,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 606,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 607,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 608,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 609,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 610,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 611,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 612,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 614,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 615,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 616,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 617,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 618,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 619,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 621,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 622,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 623,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 624,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 625,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 626,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 627,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 628,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 629,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 631,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 632,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 633,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 634,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 635,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 636,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 637,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 638,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 639,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 640,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 641,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 642,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 643,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 644,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 645,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 646,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 647,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 649,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 650,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 651,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 652,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 653,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 654,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 655,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 657,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 658,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 659,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 660,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 661,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 663,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 664,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 665,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 667,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 668,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 669,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 670,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 671,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 672,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 673,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 674,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 675,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 676,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 677,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 678,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 679,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 680,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 681,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 682,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 683,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 684,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 685,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 686,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 687,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 688,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 689,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 690,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 691,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 692,
    name: '',
    quality: '',
    summary: '',
    description: ''
  },
  {
    id: 693,
    name: 'The swarm',
    quality: '2',
    summary: 'Infest',
    description: 'When picked up, this gives you 9 orbital flies\n\nEach time a fly blocks an enemy shot, it will turn into a blue fly and attack nearby enemies, leaving you with one less orbital\n\nEvery room clear gives you +1 orbital fly, up to a maximum of 9\n\n1/3 Beelzebub transformation'
  },
  {
    id: 694,
    name: 'Heartbreak',
    quality: '3',
    summary: 'Eternal sorrow',
    description: 'Gives you +0.25 Damage Up for every broken heart you have\n\nGives 3 broken hearts when picked up\n\nEvery hit of damage that would kill you, instead adds 2 more broken hearts and deal 40 damage to all enemies in the room\n\nHeartbreak cannot kill you on pickup\n\nBroken hearts are empty heart containers that cannot be removed or refilled and will override other types of hearts when you reach 12 total. Replacing all 12 containers with broken hearts will kill you instantly. The only way to remove broken hearts is by donating to a Confessional Machine'
  },
  {
    id: 695,
    name: 'Bloody gust',
    quality: '2',
    summary: 'May your rage bring haste',
    description: 'Every time you take damage, you gain a Speed Up and a Tears Up\n\nThe stat increases start small, and scale up each time you take damage (+0.25 Tears Up for the first hit, +0.75 Tears Up for the 6th hit)\n\nThe effect maxes out at +3 Tears Up and +1 Speed Up after taking damage 6 times.\n\nThe effect lasts for the rest of the current floor'
  },
  {
    id: 696,
    name: 'Salvation',
    quality: '3',
    summary: 'Divine protection',
    description: 'Isaac gains a halo of light around him. When an enemy touches the halo for couple of seconds, a beam of light will come down and deal a burst of damage to it\n\nThe triggered beam also fires in all 4 cardinal directions, dealing damage to anything it touches\n\nEvery time Isaac takes damage, the halo grows slightly bigger up to a maximum of 10 times. The size resets when leaving the floor\n\n1/3 Seraphim transformation'
  },
  {
    id: 697,
    name: 'Vanishing twin',
    quality: '2',
    summary: 'He wants revenge',
    description: 'A fetus familiar follows Isaac, and upon entering the Boss room on each floor, it will transform into a copy of the boss\n\nThis makes bosses a lot harder, however you now get 2 boss item drops'
  },
  {
    id: 698,
    name: 'Twisted pair',
    quality: '4',
    summary: 'Double trouble!',
    description: 'You gain two familiar demons, that stay by Isaac\'s side and fire shots in the same direction as you\n\nThe familiars deal roughly 40% of Isaac\'s damage, scaling with damage upgrades you get\n\nThey sit near and rotate around Isaac depending on which way you\'re firing tears. They do not block enemy shots\n\n1/3 Conjoined transformation'
  },
  {
    id: 699,
    name: 'Azazel\'s rage',
    quality: '2',
    summary: 'Ancient power',
    description: 'Isaac builds rage each time you clear a new room. This is shown by the Azazel skin spreading on Isaac\'s face\n\nAfter 4 rooms, Isaac\'s face will flash red. The next room you enter he will automatically fire a massive red brimstone laser for 4 seconds, dealing huge damage\n\nThe rage resets back to zero, and the cycle continues every 5 rooms cleared'
  },
  {
    id: 700,
    name: 'Echo chamber',
    quality: '3',
    summary: 'I can see see the future future future',
    description: 'When using a card, pill, or rune, you also use a copy of the last 3 cards/pills/runes you used after picking up Echo Chamber'
  },
  {
    id: 701,
    name: 'Isaac\'s tomb',
    quality: '3',
    summary: 'Buried memories',
    description: 'Spawns an Old chest at the start of all future floors\n\nOld Chests work the same as Golden Chests, requiring a key to open but contain different items\n\nThe Old chest can contain:\n\n3 trinkets (42% chance)\n1-3 soul hearts (43% chance)\nA random item from the Old Chest pool (10% chance)\nAn angel room item (5% chance)\n\nSpawns a second chest in the mirrored floor of Downpour II or Dross II, but only if you had this item before entering the floor'
  },
  {
    id: 702,
    name: 'Vengeful spirit',
    quality: '1',
    summary: 'Hot blooded',
    description: 'Each time you take damage, a red flame orbital will appear around Isaac for the remainder of the floor, up to a maximum of 6\n\nThe flames deal contact damage which scales with your tear damage\n\nUpon reaching 6 flames, they will also start to fire tears along with Isaac, dealing a flat 3.2 damage per tear\n\nWhen entering a new floor, all the flames disappear'
  },
  {
    id: 703,
    name: 'Esau JR',
    quality: '2',
    summary: 'Lost brother',
    description: 'Using this item swaps you between the character you started as, and Esau, which has 3 black hearts, +2 base damage and the ability to fly\n\nThis character keeps its own separate health and items. Items picked up are not shared between the two characters\n\nIf either character dies it\'s game over'
  },
  {
    id: 704,
    name: 'Berserk!',
    quality: '2',
    summary: 'Rip and tear',
    description: 'When activated, Isaac\'s tears are replaced by a bone sword and he goes on a killing rampage, gaining +0.4 Speed, +3 Flat Damage Up for 5 seconds\n\nThe sword deals x3 damage if used at close range, or x1.5 damage if charged up and thrown\n\nClearing rooms doesn\'t charge this item - charge is added equal to damage taken by enemies. This includes all sources of damage, including environmental damage to enemies\n\nKilling an enemy while berserk will increase the duration of the effect by 1 second\n\nYou don\'t die while in Berserk mode, but taking lethal damage will kill you after the effect wears off\n\nTainted Samson starts with a passive version of this item'
  },
  {
    id: 705,
    name: 'Dark arts',
    quality: '2',
    summary: 'One with the shadows',
    description: 'When used, Isaac turns into a ghost for 1 second and his speed goes up to maximum (2.0). During this time he can walk over enemies to mark them for death. When the effect wears off, Isaac quickly runs between each marked enemy, dealing high damage to each one rapidly (roughly x2.5 your tear damage)\n\nThe damage caused by this effect scales up with every target it hits in a row\n\nTainted Judas starts with this item'
  },
  {
    id: 706,
    name: 'Abyss',
    quality: '4',
    summary: 'Come forth from the depths',
    description: 'When used, Abyss consumes all pedestal items in the current room and converts them into Red attack flies\n\nRed attack flies will charge across the room in the same direction Isaac is shooting, dealing contact damage to enemies equal to Isaac\'s tear damage\n\nThe flies don\'t block enemy shots, but this also means they never die and stay with Isaac forever\n\nTainted Apollyon starts with this item'
  },
  {
    id: 707,
    name: 'Supper',
    quality: '1',
    summary: 'HP up',
    description: '+1 HP'
  },
  {
    id: 708,
    name: 'Stapler',
    quality: '3',
    summary: 'DMG up',
    description: '+1 Damage up\n\nStaples one of Isaac\'s eyes shut, meaning he only shoots tears from one eye.'
  },
  {
    id: 709,
    name: 'Suplex!',
    quality: '1',
    summary: 'Angel breaker',
    description: 'When used, you charge forwards for a second. If you touch an enemy in that time, Isaac will pick it up and slam it on the ground, killing it and sending a shockwave around the impact\n\nIn the brief period while holding the enemy you can move a target to decide where it lands\n\nActually does work on bosses! However after the attack you end up near the boss, which puts you in danger of taking damage too\n\nScales in damage and area of effect with the player\'s size'
  },
  {
    id: 710,
    name: 'Bag of crafting',
    quality: '3',
    summary: 'Make your destiny',
    description: 'When used will do a swipe attack in any direction. Can be used to store up to 8 consumables in, such as hearts, coins, keys, bombs, cards etc\n\nWhen the bag has 8 items you can hold down the activate button for 2 seconds to craft yourself a brand new random item\n\nBag of Crafting\'s recipes are based on your current seed, but there are some fixed recipes that exist in every run, e.g. 8 coins = Slot Machine\n\nWhile playing as Tainted Cain you get a visual interface to see what items are in the bag, allowing you to see what item will be created and swap out specific consumables\n\nHas other uses - Will deal 3 damage to enemies it hits, and can be used to quickly push bombs and objects across rooms\n\nTainted Cain starts with this item, but can be used by any character after unlocking it and finding it in the item room\n\nCannot be used to craft another Bag of Crafting!'
  },
  {
    id: 711,
    name: 'Flip',
    quality: '4',
    summary: 'Life and death',
    description: 'While holding flip, a ghost item will appear behind item pedestals upon entering Item Rooms and Shop that cannot be interacted with\n\nWhen activated, all real items in the room will be swapped with the ghost items behind them\n\nThe ghost item stays there even if you take the regular item, allowing you to use Flip to get both of them\n\nDoes nothing with item pedestals that don\'t have a ghost item behind them\n\nWhen playing as Tainted Lazarus, activating Flip also changes you between Lazarus and Dead Lazarus\n\nTainted Lazarus starts with this item, but can be used by any character after unlocking it and finding it in the item room'
  },
  {
    id: 712,
    name: 'Lemegeton',
    quality: '3',
    summary: 'Item summoner',
    description: 'When used, gives you an orbital flame which represents another random passive item in the game. While you have this flame you also have that item\'s effect\n\nThe flame deals double your tear damage to any enemies that touch it, but if it takes too much damage the flame will disappear and you lose the item\'s effect\n\nTainted Bethany starts with this item\n\nWisps are randomly chosen from Item Room, Boss Room and Shop item pools, with a 25% chance to pick the same pool as the current room\n\n1/3 Bookwork transformation'
  },
  {
    id: 713,
    name: 'Sumptorium',
    quality: '3',
    summary: 'Return',
    description: 'When used, removes half a heart of health and creates a clot familiar\n\nClot familiars follow Isaac\'s exact movements including flight, firing tears and tear effects\n\nHolding down the swap button will cause all your clots to stay in place\n\nWorks differently as Tainted Eve - instead clots are created by firing for 2 seconds, down to a minimum of half a red heart. Using Sumptorium as her will then cause all Clots to be consumed and return your hearts back to you. Clots returning back to Eve deal 3x damage as they suck back in\n\nThe type of heart consumed to create a clot will give it different abilities:\n\nSoul Hearts = More health\nBlack Hearts = Dark Matter effect\nEternal Hearts = Sacred Heart effect\nGold Hearts = Midas Touch effect\nBone Hearts = Compound Fracture effect\nRotten Hearts = Less health\n\nTainted Eve starts with this item, but can be used by any character after unlocking it and finding it in the item room'
  },
  {
    id: 714,
    name: 'Recall',
    quality: '0',
    summary: 'Come back',
    description: 'When used, this will retrieve the Tainted Forgotten\'s skeleton back to its owner\'s hands from any distance\n\nTainted Forgotten\'s Birthright effect. Cannot be obtained and has no use for any other character'
  },
  {
    id: 715,
    name: 'Hold',
    quality: '0',
    summary: 'Save for later',
    description: 'This is the item Tainted Blue Baby (???) uses as his main mechanic\n\nKilling or damaging enemies spawns various poops, which add to his collection. Pressing the bomb button will put the next poop into the \'Hold\' jar. Pressing it again allows you to throw it at enemies. Each poop has random effects like Butt Bombs, Fire Poops etc\n\nTainted Blue Baby starts with this item, and is the only one who can use it'
  },
  {
    id: 716,
    name: 'Keeper\'s sack',
    quality: '3',
    summary: 'Spending power',
    description: 'Spawns 3 random coins and a key when picked up\n\nBuying items from the shop gives you random stat upgrades. The more you spend the higher the stat increase\n\nPossible stats include Speed, Damage and Range\n\n15 cent items give all 3 stats:\n\n+1 Damage Up\n+0.03 or +0.06 Speed Up\n+0.25 or +0.5 Range Up\n\n5 cent items give 1 or 2 stats:\n\n+0.5 Damage Up\n+0.25 Range and +0.03 Speed Up'
  },
  {
    id: 717,
    name: 'Keeper\'s kin',
    quality: '2',
    summary: 'Under a rock',
    description: 'While in a room with enemies, blue spiders will randomly spawn from objects in the room (e.g. rocks, pots, stone blocks)\n\nAll rocks spawn 0-2 blue spiders when destroyed\n\n1/3 Spider Baby transformation'
  },
  {
    id: 719,
    name: 'Keeper\'s box',
    quality: '2',
    summary: 'Portable shop',
    description: 'When used, spawns a random shop item or consumable, however you have to pay the relevant cost to pick it up\n\nCan include anything that would appear in the shop'
  },
  {
    id: 720,
    name: 'Everything jar',
    quality: '3',
    summary: 'Anything is possible',
    description: 'With every bar of charge this item has, a different consumable is shown inside the Jar\n\n1 = poop\n2 = penny\n3 = bomb\n4 = key\n5 = red heart\n6 = pill\n7 = card\n8 = soul heart\n9 = gold heart\n10 = gold key\n11 = gold bomb\n\nAt the full 12 charges, a completely random effect will happen. It can be anything including spawning a bunch of consumables, spawning a glitched pedestal item, creating a bunch of light beams, spawning troll bombs or nothing at all'
  },
  {
    id: 721,
    name: 'TMTRAINER',
    quality: '0',
    summary: 'ZZaZZ ZZdZZiZZmZZhZZ ZZvZZ ZZoZZ ZZ ZZsZZlZZhZZsZZoZZaZZiZZ',
    description: 'When picked up, all future items become \'glitched\', causing them to become random combinations of 2-3 effects based on other items\n\nGlitched items can be passive or active and are completely randomly generated with infinite possibilities (similar to other \'Randomizer\' games)\n\nThe ratio of active to passive item effects given is 1/4\n\nRandom effects combine effects that exist on other items, and assign them to a random event (e.g. on enemy death, on room clear, on damage taken etc.)'
  },
  {
    id: 722,
    name: 'Anima sola',
    quality: '2',
    summary: 'Repent',
    description: 'When used, it puts the closes enemy in chains for 5 seconds, preventing it from moving. You can release the enemy early by using it again\n\nTainted Jacob starts with this item. While playing as him Anima Sola will always target Dark Esau. Releasing Dark Esau will cause him to charge directly at Jacob and deal damage to anything in his path. If used in a room with no enemies, Dark Esau will instantly spawn\n\nWill chain up to two targets if you have Car Battery, if only one valid target is present it will be chained for twice the duration'
  },
  {
    id: 723,
    name: 'Spindown dice',
    quality: '4',
    summary: '-1',
    description: 'Rerolls all pedestal items, lowering all their internal item IDs by 1\n\nFor example: Brimstone\'s ID = 118, so it would be rerolled into Dead Bird (ID = 117)\n\nSad Onion (ID = 1) will reroll into nothing\n\nThere are some gaps in item IDs which are skipped if no item exists, or will reroll into unexpected items if hidden items are present at that ID. For example rerolling Plan C (ID = 475) changes it into the Broken Glass Cannon, which is a hidden item with ID = 474\n\nItems that are yet to be unlocked will also be skipped over, preventing you from getting items you don\'t have access to yet'
  },
  {
    id: 724,
    name: 'Hypercoagulation',
    quality: '2',
    summary: 'Thick blooded',
    description: 'Upon taking damage you have a chance to drop the heart that you just lost. It gives you 2 seconds to pick it up again to re-heal, before it disappears'
  },
  {
    id: 725,
    name: 'IBS',
    quality: '0',
    summary: 'Your stomach rumbles',
    description: 'Whenever you deal damage to an enemy, has a chance to give the effect of one of Tainted ???\'s unique poops\n\nCorn poop - spawns a blue fly every 2 seconds\n\nFlaming poop - leaves behind fire that damages enemies\n\nStinky poop - emits a toxic cloud\n\nBlack poop - creates slowing black creep. Confuses all enemies briefly when destroyed\n\nWhite poop - Same effect as Hallowed Ground\n\nStone poop - Deals extra thrown damage, can hit multiple enemies. Takes more shots before breaking\n\nBomb poop - Throws a butt bomb that explodes after 2 seconds'
  },
  {
    id: 726,
    name: 'Hemoptysis',
    quality: '2',
    summary: 'Double tap sneeze',
    description: 'Allows you to quickly double tap a shoot button to sneeze on nearby enemies, dealing 1.5x your tear damage and pushing them back slightly\n\nIf an enemy is pushed into a wall or object it takes 10 damage'
  },
  {
    id: 727,
    name: 'Ghost bombs',
    quality: '2',
    summary: 'Spooky blast +5 bombs',
    description: '+5 Bombs\n\nBombs become spectral.\n\nBombs spawn a friendly white soul, which will hunt down other enemies, dealing contact damage which scales with your tear damage\n\nAfter 10 seconds the white soul explodes dealing 7 damage to nearby enemies. Isaac doesn\'nt take damage from this effect'
  },
  {
    id: 728,
    name: 'Gello',
    quality: '3',
    summary: 'Demonic gestation',
    description: 'Spawns a familiar that\s attached via an Umbilical Cord, but will move and shoot in the same direction Isaac is shooting\n\nWhen activated you first need to throw the familiar, which deals 3x your tear damage to any enemies it touches\n\nGello tears deal 0,75x your tear damage (1x if Lilith)\n\nCan be used multiple times per room to spawn more familiars, however they only last for the current room'
  },
  {
    id: 729,
    name: 'Decap attack',
    quality: '2',
    summary: 'Chuck away!',
    description: 'When used, this item allows you to throw your head where it will sit as a stationary sentry firing bullets until you walk over and pick it up again\n\nThrowing Isaac\'s head deals 24 damage to anything it hits while being thrown\n\nYour hitbox remains with the body. Enemies touching the head don\'t hurt Isaac'
  },
  {
    id: 730,
    name: 'Glass eye',
    quality: '3',
    summary: 'DMG + luck up',
    description: '+0.75 Damage up\n\n+1 Luck up'
  },
  {
    id: 731,
    name: 'Stye',
    quality: '2',
    summary: 'DMG + range up',
    description: 'Stats apply to right eye only:\n\n+28% damage up\n\n+7 range up\n\n-0.3 shot speed up'
  },
  {
    id: 732,
    name: 'Mom\'s ring',
    quality: '3',
    summary: 'DMG up',
    description: '+1 damage up\n\nDrops 1 random rune or soul stone when picked up\n\n1/3 Mom transformation'
  }
]

export default ITEM_DATA;