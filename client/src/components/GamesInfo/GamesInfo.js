const GamesInfo = [
  {
    id: 1,
    title: "Ori and the Will of the Wisps",
    img: "https://upload.wikimedia.org/wikipedia/ru/2/28/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Ori_and_the_Will_of_the_Wisps.jpg",
    description:
      "Ori and the Will of the Wisps is a platform-adventure Metroidvania video game developed by Moon Studios and published by Xbox Game Studios. Announced during E3 2017, the title is a direct sequel to 2015's Ori and the Blind Forest, and was released in March 2020 for Xbox One and Microsoft Windows.",
    video: "https://www.youtube.com/watch?v=2kPSl2vyu2Y",
    platform: "Steam",
    year: "2020",
    category: ["Metroidvania", "Platform game"],
  },
  {
    id: 2,
    title: "Witcher 3 Wild Hunt",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a2/The_Witcher_3-_Wild_Hunt_Cover.jpg/266px-The_Witcher_3-_Wild_Hunt_Cover.jpg",
    description:
      "The Witcher 3: Wild Hunt is an action role-playing game developed by Polish developer CD Projekt Red, and first published in 2015. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings and the third game in The Witcher video game series, played in an open world with a third-person perspective. The games are based on The Witcher series of fantasy novels written by Andrzej Sapkowski. ",
    video: "https://www.youtube.com/watch?v=c0i88t0Kacs",
    platform: "Steam",
    year: "2015",
    category: ["Action/RPG", "Open World"],
  },
  {
    id: 3,
    title: "GTA San Andreas",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/7/75/Grand_Theft_Auto_San_Andreas.jpg/274px-Grand_Theft_Auto_San_Andreas.jpg",
    description:
      "Grand Theft Auto: San Andreas is a 2004 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the fifth main entry in the Grand Theft Auto series, following 2002's Grand Theft Auto: Vice City, and the seventh installment overall. It was released in October 2004 for the PlayStation 2, in June 2005 for Microsoft Windows and Xbox, and in November 2010 for Mac OS X.",
    video: "https://www.youtube.com/watch?v=u_CbHrBbHNQ",
    platform: "Rockstar Games",
    year: "2004",
    category: ["Action adventure"],
  },
  {
    id: 4,
    title: "Call of Duty: Modern Warfare",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Call_of_Duty_Modern_Warfare_%282019%29_cover.jpg/220px-Call_of_Duty_Modern_Warfare_%282019%29_cover.jpg",
    description:
      "Call of Duty: Modern Warfare is a 2019 first-person shooter game developed by Infinity Ward and published by Activision. Serving as the sixteenth overall installment in the Call of Duty series, as well as a reboot of the Modern Warfare sub-series, it was released on October 25, 2019, for Microsoft Windows, PlayStation 4, and Xbox One. ",
    video: "https://www.youtube.com/watch?v=bH1lHCirCGI",
    platform: "Steam",
    year: "2019",
    category: ["Action", "Shooter"],
  },
  {
    id: 5,
    title: "World in Conflict",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Wic-win-cover.jpg/220px-Wic-win-cover.jpg",
    description:
      "World in Conflict is a 2007 real-time strategy (RTS) video game developed by the Swedish video game company Massive Entertainment and published by Vivendi Games for Microsoft Windows. The game was released in September 2007, receiving generally favorable reviews and several awards The game is considered by some to be the spiritual successor of Ground Control, another game by Massive Entertainment, and is generally conceived by its designers to be a real-time tactical game, despite being marketed as a RTS game. ",
    video: "https://www.youtube.com/watch?v=iBWnGUimRBw",
    platform: "Empty",
    year: "2007",
    category: ["Real-time strategy"],
  },
  {
    id: 6,
    title: "Dark Souls",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Dark_Souls_Cover_Art.jpg/220px-Dark_Souls_Cover_Art.jpg",
    description:
      "Dark Souls is a 2011 action role-playing game developed by FromSoftware and published by Namco Bandai Games. A spiritual successor to FromSoftware's Demon's Souls, the game is the second installment in the Souls series. Dark Souls takes place in the kingdom of Lordran, where players assume the role of a cursed undead character who begins a pilgrimage to discover the fate of their kind. A port for Microsoft Windows was released in August 2012, which featured additional content not seen in the original PlayStation 3 and Xbox 360 versions. The content was released for consoles in October 2012 under the subtitle Artorias of the Abyss.  ",
    video: "https://www.youtube.com/watch?v=o1780AqAa20",
    platform: "Steam",
    year: "2011",
    category: ["Action role-playing"],
  },
  {
    id: 7,
    title: "Dark Souls 2",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Dark_Souls_II_cover.jpg/220px-Dark_Souls_II_cover.jpg",
    description:
      "Dark Souls II is a 2014 action role-playing game developed by FromSoftware and published by Bandai Namco Games. The third game in the Souls series, it was released for Microsoft Windows, PlayStation 3 and Xbox 360, Although both are set in the same universe, there is no overt story connection between the first Dark Souls and the sequel. Taking place in the kingdom of Drangleic, the game features both player versus environment (PvE) and player versus player (PvP) gameplay, in addition to having some co-op components. Dark Souls II was released in March 2014 after some initial delays, with the Windows version being released the following month.  ",
    video: "https://www.youtube.com/watch?v=U6uyuIQYlfY",
    platform: "Steam",
    year: "2014",
    category: ["Action role-playing"],
  },
  {
    id: 8,
    title: "Dark Souls 3",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Dark_souls_3_cover_art.jpg/220px-Dark_souls_3_cover_art.jpg",
    description:
      "Dark Souls III is a 2016 action role-playing video game developed by FromSoftware and published by Bandai Namco Entertainment for PlayStation 4, Xbox One, and Microsoft Windows. It is the fourth overall entry of the Souls series and the final installment of the Dark Souls trilogy.  It is an action role-playing game played in a third-person perspective. Players have access to various weapons, armour, magic, and consumables that they can use to fight their enemies. Bonfires serve as checkpoints. The Estus Flask is the consumable used for healing in Dark Souls III. Ashen Estus Flasks restore focus points, which can be used for magic or weapon arts. Hidetaka Miyazaki, the creator of the series, returned to direct the game after handing the development duties of Dark Souls II to others in FromSoftware. ",
    video: "https://www.youtube.com/watch?v=cWBwFhUv1-8",
    platform: "Steam",
    year: "2016",
    category: ["Action role-playing"],
  },
  {
    id: 9,
    title: "Sekiro: Shadows Die Twice",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Sekiro_art.jpg/220px-Sekiro_art.jpg",
    description:
      "Sekiro: Shadows Die Twice is a 2019 action-adventure game developed by FromSoftware and published by Activision. The game follows a shinobi known as Wolf as he attempts to take revenge on a samurai clan who attacked him and kidnapped his lord. It was released for Microsoft Windows, PlayStation 4, and Xbox One in March 2019 and for Stadia in October 2020. Gameplay is focused on stealth, exploration, and combat, with a particular emphasis on boss battles. The game takes place in a fictionalized Japan during the Sengoku period and makes strong references to Buddhist mythology and philosophy. While making the game, lead director Hidetaka Miyazaki wanted to create a new intellectual property (IP) that marked a departure from the Souls series of games also made by FromSoftware. The developers looked to games such as The Mysterious Murasame Castle and the Tenchu series for inspiration.  ",
    video: "https://www.youtube.com/watch?v=rXMX4YJ7Lks",
    platform: "Steam",
    year: "2019",
    category: ["Action-adventure"],
  },
];

export default GamesInfo;
