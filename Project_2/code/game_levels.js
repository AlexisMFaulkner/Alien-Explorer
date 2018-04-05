var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                         xxxx                   ",
   "                                    o        xxx                                ",
   "                                                                                ",
   "                                   xxxxx           xxxx                         ",
   "                                                                                ",
   "                        o     xxxx          o  yyy                              ",
   "                                                                   o            ",
   "                      xxxx               xxxxx                                  ",
   "             xxxx                                                 xxxx        & ",
   "@                                                                               ",
   "xxxxxxxxx                                                              xxxxxxxxx",
   "xxxxxxxxx                                                              xxxxxxxxx",
   "xxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxx",
   "xxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxx",
   "xxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxx"],
   ["                                                                                                                  ",
    "                                                                                                                  ",
    "                                                                                                                  ",
    "                                                                                                                  ",
    "                                                                                                                  ",
    "                                                                                                               &  ",
    "                                                                                                                  ",
    "                                                                                                      xxxxxxxxxxxx",
    "                                                                          o                xxxx                   ",
    "                                                                                         xxxx!!!!!!!!!!!!!!!!!!!!!",
    "                                                                                       xxxxxx!!!!!!!!!!!!!!!!!!!!!",
    "                                                                                     xxxxxxxxxxxxxxxxxxxxxx!xxxxxx",
    "                                                                      xx      xx                           v      ",
    "                                                                      xx!!!!!!xx                                o ",
    "                                                                      xx!!!!!!xx                                  ",
    "                                                                      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx        xxx",
    "                                                                                                  xxxx         xxx",
    "                                                                                                  xxxx        xxxx",
    "                                 xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxx         xxx",
    "                                 xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxx       xxx",
    "                 xxxxxxx         xxxx!xxxxxxxxxxxxx!xxxxxxxxxxxxxx!xxxxxxxxxxxxxxxxxxx!xxxxxxxxxxxxxxx         xxx",
    "               xxxxxxxxx             v             v              v                   v           xxxx       xxxxx",
    "             xxxxxxxxxxx                                                                          xxxx         xxx",
    "  @          xxxxxxxxxxx                                                                          xxxxxxx      xxx",
    "xxxxxxx      xxxxxxxxxxx                     o                                o                                xxx",
    "xxxxxxx      xxxxxxxxxxx                                                                                       xxx",
    "xxxxxxx!!!!!!xxxxxxxxxxx!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "xxxxxxx!!!!!!xxxxxxxxxxx!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "xxxxxxx!!!!!!xxxxxxxxxxx!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                                                                  ",
   "                                                                  ",
   "                                                                  ",
   "                                                                  ",
   "                                                                  ",
   "                                                               o  ",
   "  @                                                               ",
   "xxxxxxxxxxxxxxxx      xxxxxxxxxxxxxx       xxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxx!!!!!!xxxxxxxxxxxxxx       xxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxx!!!!!!xxxxxxxxxxxxxxxxx    xxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx       xxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxx!xxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                          v   ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                           ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                       ",
   "xxxxxxxx!xxxxxxxxxx!xxxxxxxxx!xxxxxxxxxxxxxxxxx       xxxxxx      ",
   "        v          v         v                        xxxxxx   o  ",
   "                                                   xxxxxxxxx      ",
   " o                                                 xxxxxxxxxxxxxxx",
   "xxxx                                               xxxxxxxxxxxxxxx",
   "                                   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "       xxxx                     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                   xxxx         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                  ",
   "                          xxxx                                    ",
   "               xxxx                                               ",
   "                                                                  ",
   "    xxxx                                                          ",
   "                                                                  ",
   "            xxxx                                                  ",
   "                        o                                         ",
   "                      xxxx                                        ",
   "      xxxx                                                        ",
   "                 xxxx                                             ",
   "                              xxxx                                ",
   "            xxxx                                 xxxx         &   ",
   "                                       xxxx                       ",
   "xxxxxxxxx                                                xxxxxxxxx",
   "xxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxx",
   "xxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxx",
   "xxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxx"],
  ["xxxxxxxxxxxx!xxxxxxxxxxxxxxxxxxxx!xxxxxxxxxxxxxxxxxxxxxxxxxxx!xxxxxxxxxxxxxxxxxx!xxxxxxxxxxxxxxx              ",
   "            |                    |                           |                  |                             ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                            @ ",
   "                                                                                                        xxxxxx",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                   xxx        ",
   "                                                                                                              ",
   "                                                                                             yyyyy            ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                       xxxxx                  ",
   "                                                                                                              ",
   "                                                       o                     xxxxxx                           ",
   "                                                                                                              ",
   "                                                      xx              xxx                                     ",
   "                                                               xxxx                                           ",
   "                                                     !!!!                                                     ",
   "                                                     xxxx                                                     ",
   "                                        xxxxxxxx                                                              ",
   "                        o                                                                                     ",
   "                                 yyyy                                                                         ",
   "                                                                                                              ",
   "                       xxxxxxxx                                                                               ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                   xx                                                                                         ",
   "                                                                                                              ",
   "              yxy                                                                                             ",
   "   &                                                                                                          ",
   "xxxxxxxxx                                                                                            xxxxxxxxx",
   "xxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxx"],
   ["                                                                      ",
    "                                                                      ",
    "    E   E EEEEE E     E                                               ",
    "    E   E E     E     E                                               ",
    "    E E E EEE   E     E                                               ",
    "    EE EE E     E     E                                               ",
    "    E  EE EEEEE EEEEE EEEEE                                           ",
    "                                                                      ",
    "    EEE   EEEEE E   E EEEEE                                           ",
    "    E  E  E   E EE  E E                                               ",
    "    E   E E   E E E E EEE                                             ",
    "    E  E  E   E E  EE E                                               ",
    "    EEE   EEEEE E   E EEEEE                                           ",
    "                                                                      ",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
