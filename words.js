var wordCounter = -1;
var correctWord = "";
var correctDef = "";

var nextWord = function(){
    wordCounter++;
    wordCounter = wordCounter % wordsData.length;
    return wordsData[wordCounter].term;
};

var pickCorrectWord = function(){
  var wordsLength = wordsData.length;
  var rand = (Math.floor(Math.random()*(wordsLength - 5))) + 5;
  //Add and minus 5 in order to prevent OutOfBounds
  var correctWordObj = wordsData[rand];
  correctWord = correctWordObj.term;
  correctDef = correctWordObj.definition;
};

var wordsData = [
    {
        "id": 75296352,
        "term": "laconic",
        "definition": "brief; to the point; using few words",
        "image": null
    },
    {
        "id": 75296353,
        "term": "lavish",
        "definition": "generous; openhanded; extravagant; profuse",
        "image": null
    },
    {
        "id": 75296354,
        "term": "lethargic",
        "definition": "drowsy; sluggish; torpid; lacking energy",
        "image": null
    },
    {
        "id": 75296355,
        "term": "levity",
        "definition": "lack of proper seriousness; frivolity; lightness of manner",
        "image": null
    },
    {
        "id": 75296356,
        "term": "malicious",
        "definition": "spiteful; hateful; malevolent",
        "image": null
    },
    {
        "id": 75296357,
        "term": "metaphor",
        "definition": "implied comparison of one thing to another; symbol",
        "image": null
    },
    {
        "id": 75296358,
        "term": "meticulous",
        "definition": "excessively careful; painstaking; scrupulous; fastidious",
        "image": null
    },
    {
        "id": 75296359,
        "term": "mitigate",
        "definition": "moderate; make less intense or severe; alleviate; appease",
        "image": null
    },
    {
        "id": 75296360,
        "term": "mollify",
        "definition": "soothe; moderate in intensity; soften",
        "image": null
    },
    {
        "id": 75296361,
        "term": "mundane",
        "definition": "ordinary; unimaginative; common",
        "image": null
    }/*,
    {
        "id": 75296362,
        "term": "nonchalance",
        "definition": "composure; lack of concern; indifference",
        "image": null
    },
    {
        "id": 75296363,
        "term": "notoriety",
        "definition": "disrepute; fame for something negative; infamy",
        "image": null
    },
    {
        "id": 75296364,
        "term": "nuture",
        "definition": "nourish; educate; foster; protect; cultivate",
        "image": null
    },
    {
        "id": 75296365,
        "term": "obdurate",
        "definition": "stubborn; obstinate; unyielding",
        "image": null
    },
    {
        "id": 75296366,
        "term": "oblivion",
        "definition": "state of being forgotten; obscurity; total unawareness; forgetfulness",
        "image": null
    },
    {
        "id": 75296367,
        "term": "opportunist",
        "definition": "individual who sacrifices principles for expeiency by taking advantage of opportunities",
        "image": null
    },
    {
        "id": 75296368,
        "term": "opulence",
        "definition": "extreme wealth; abundance; luxuriousness",
        "image": null
    },
    {
        "id": 75296369,
        "term": "ostentatious",
        "definition": "displaying wealth; showy; pretentious",
        "image": null
    },
    {
        "id": 75296370,
        "term": "partisan",
        "definition": "one-sided; prejudiced; committed to a particular party; devoted to a cause",
        "image": null
    },
    {
        "id": 75296371,
        "term": "pathos",
        "definition": "tender sorrow; pity; the quality in a work that prompts the reader to feel pity",
        "image": null
    },
    {
        "id": 75296372,
        "term": "peripheral",
        "definition": "marginal; outer; external; superficial; related to the key issue but not of central importance",
        "image": null
    },
    {
        "id": 75296373,
        "term": "pervasive",
        "definition": "spreading throughout, widespread",
        "image": null
    },
    {
        "id": 75296374,
        "term": "placate",
        "definition": "pacify; conciliate; appease, often by making concessions",
        "image": null
    },
    {
        "id": 75296375,
        "term": "pragmatic",
        "definition": "practical; concerned with the practical worth or impact of something; dealing with facts",
        "image": null
    },
    {
        "id": 75296376,
        "term": "preclude",
        "definition": "make impossible; prevent; keep from happening; exclude the possibility",
        "image": null
    },
    {
        "id": 75296377,
        "term": "predilection",
        "definition": "partiality; preference; inclination",
        "image": null
    },
    {
        "id": 75296378,
        "term": "presumptuous",
        "definition": "overconfident; impertinently bold; taking liberties; excessively forward",
        "image": null
    },
    {
        "id": 75296379,
        "term": "prevalent",
        "definition": "widespread; generally accepted; prevailing; common",
        "image": null
    },
    {
        "id": 75296380,
        "term": "prodigal",
        "definition": "wasteful; reckless with money; extravagant; self-indulgent",
        "image": null
    },
    {
        "id": 75296381,
        "term": "profane",
        "definition": "violate; desecrate; defile; treat unworthily",
        "image": null
    },
    {
        "id": 75296382,
        "term": "proliferation",
        "definition": "rapid growth; spread; multiplication",
        "image": null
    },
    {
        "id": 75296383,
        "term": "prolific",
        "definition": "abundantly fruitful; highly productive; fertile",
        "image": null
    },
    {
        "id": 75296384,
        "term": "proximity",
        "definition": "nearness; closeness",
        "image": null
    },
    {
        "id": 75296385,
        "term": "prudent",
        "definition": "cautious; careful; wise",
        "image": null
    },
    {
        "id": 75296386,
        "term": "quandary",
        "definition": "dilemma; state of perplexity",
        "image": null
    },
    {
        "id": 75296387,
        "term": "rancor",
        "definition": "bitterness; lasting resentment; hatred",
        "image": null
    },
    {
        "id": 75296388,
        "term": "rebuttal",
        "definition": "counter; response with contrary evidence; reply pointing out flaws in opponent's argument",
        "image": null
    },
    {
        "id": 75296389,
        "term": "recluse",
        "definition": "hermit; loner; someone who withdraws from society",
        "image": null
    },
    {
        "id": 75296390,
        "term": "recount",
        "definition": "narrate or tell",
        "image": null
    },
    {
        "id": 75296391,
        "term": "rectify",
        "definition": "correct; set right; remedy",
        "image": null
    }*/
];