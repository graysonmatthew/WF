const botRefList = [
  "^whowhere",
  "^teoma",
  "^scumware.org",
  "^bfore.ai",
  "^atomz",
  "^bot",
  "^churl",
  "^sphider",
  "^forcepoint",
  "^crawler",
  "^surfright",
  "^security",
  "^curl",
  "^cyradar",
  "^gulliver",
  "^y!j-brw",
  "^butterfly",
  "^salty",
  "^threathive",
  "^robbie",
  "^alyac",
  "^gdata",
  "^csci",
  "^cusco",
  "^xenu",
  "^smartwit",
  "^cynet",
  "^ichiro",
  "^analysis",
  "^findlinks",
  "^genieknows",
  "^ia_archiver",
  "^gromit",
  "^bitdefender",
  "^downloadexpress",
  "^spro-net-206-80-96",
  "^blog",
  "^wget",
  "^inspectorweb",
  "^avg",
  "^kraken",
  "^verticrawl",
  "^percolatecrawler",
  "^google",
  "^libwww",
  "^baidu",
  "^nutch",
  "^gazz",
  "^openfind",
  "^grabber",
  "^w3m2",
  "^appie",
  "^sna-",
  "^romtelecom",
  "^t-h-u-n-d-e-r-s-t-o-n-e",
  "^pear.",
  "^kaspersky",
  "^parasite",
  "^baiduspider-image",
  "^motor",
  "^virusdie",
  "^lvlt-static-4-14-16",
  "^boitho",
  "^cmc",
  "^jakarta",
  "^baiduspider",
  "^max",
  "^acronis",
  "^aranha",
  "^drweb",
  "^messagelabs",
  "^ccbot",
  "^benkow.cc",
  "^aa419",
  "^docomo",
  "^gsa-crawler",
  "^heimdalsecurity",
  "^paperlibot",
  "^fortinet",
  "^cyveillance",
  "^heritrix",
  "^omniexplorer_bot",
  "^netcraftsurveyagent",
  "^packrat",
  "^securebrain",
  "^fouineur",
  "^lumu.io",
  "^tutorgig",
  "^araneo",
  "^pulsecrawler",
  "^sucuri.net",
  "^tgsoft",
  "^sogouwebspider",
  "^indexer",
  "^atn",
  "^wildferret",
  "^mercator",
  "^altavista",
  "^trendmicro",
  "^updated",
  "^antivirus",
  "^occam",
  "^antiy-avl",
  "^a6-indexer",
  "^rambler",
  "^suntek",
  "^avira",
  "^emsisoft",
  "^bradley",
  "^jiawest",
  "^nano-av",
  "^mnogosearch",
  "^urlhaus",
  "^ahoy",
  "^digger",
  "^teoma",
  "^vision-search",
  "^paypal",
  "^piranha",
  "^webreaper",
  "^lachesis",
  "^webfoot",
  "^havindex",
  "^abot",
  "^moget",
  "^webstolperer",
  "^htmlgobble",
  "^cybercrime",
  "^abusix",
  "^incywincy",
  "^pageboy",
  "^sg-scout",
  "^webzinger",
  "^ning",
  "^externalfacebookhit",
  "^inagist",
  "^seznambot",
  "^html_analyzer",
  "^ebot",
  "^emsisoft",
  "^vbot",
  "^page_verifier",
  "^jetbot",
  "^combine",
  "^sleek",
  "^pbot",
  "^hopliteindustries",
  "^seclookup",
  "^urlresolver",
  "^nucleon-security",
  "^yahoo!slurp",
  "^sbot",
  "^iconsurf",
  "^webwalk",
  "^javabee",
  "^escanav",
  "^golem",
  "^yahoo pipes 1.0",
  "^ubiquity",
  "^twiceler",
  "^urlquery",
  "^grokkit-crawler",
  "^safebrowsing",
  "^griffon",
  "^grapeshotcrawler",
  "^rising",
  "^adressendeutschland",
  "^avast",
  "^malbeacon",
  "^f-secure",
  "^scan",
  "^scrubby",
  "^printfulbot",
  "^blueliv",
  "^zerocert",
  "^spyder",
  "^wwwc",
  "^silk",
  "^phishtank",
  "^unwindfetchor",
  "^lockon",
  "^slurp",
  "^mattie",
  "^multitext",
  "^netpilot",
  "^augurfind",
  "^fetchrover",
  "^blackwidow",
  "^blaiz",
  "^spider",
  "^informant",
  "^acoon",
  "^linkscan",
  "^google",
  "^hamahakki",
  "^amazonaws",
  "^dwcp",
  "^clean-mx.de",
  "^objectssearch",
  "^inktomisearch.com",
  "^sangfor",
  "^linode",
  "^mcafee-gw-edition",
  "^scooter",
  "^r6_commentreader",
  "^dbot",
  "^evliyacelebi",
  "^hyper-decontextualizer",
  "^openintelligencedata",
  "^e-collector",
  "^ipsum",
  "^k7computing",
  "^steeler",
  "^maxsecure",
  "^larbin",
  "^theophrastus",
  "^intergenia",
  "^jumpstation",
  "^muncher",
  "^jack",
  "^kingsoft",
  "^newscan-online",
  "^jiangmin",
  "^urlcheck",
  "^comagent",
  "^noisebridge",
  "^googlebot-video",
  "^webcopy",
  "^securelist",
  "^sven",
  "^depspid",
  "^semanticdiscovery",
  "^picosearch",
  "^ibm_planetwide",
  "^tarantula",
  "^yandexbot",
  "^ncsabeta",
  "^ip3000",
  "^supersnooper",
  "^ezooms",
  "^sbider",
  "^ybot",
  "^htdig",
  "^skymob.com",
  "^dmoz",
  "^webbandit",
  "^spro-net-209-19-128",
  "^vagabondo",
  "^stopforumspam",
  "^weblayers",
  "^spinner",
  "^estsecurity",
  "^malware",
  "^yahooseeker",
  "^virit",
  "^quickheal",
  "^rules",
  "^lbot",
  "^mantraagent",
  "^adminuslabs",
  "^katipo",
  "^trendmicro-housecall",
  "^zonealarm",
  "^robozilla",
  "^internetshinchakubin",
  "^pimptrain",
  "^arachnophilia",
  "^valkyrie",
  "^kdd-explorer",
  "^yeti",
  "^bazquxbot",
  "^daumoa",
  "^microsofturlcontrol",
  "^weblogmonitor",
  "^grapnel",
  "^xget",
  "^rbot",
  "^yandexsitelinks",
  "^snort.org",
  "^mon.itor.us",
  "^image.kapsi.net",
  "^shai'hulud",
  "^falcon",
  "^iltrovatore",
  "^chongluadao",
  "^w3c_validator",
  "^dns8",
  "^gcreep",
  "^sitetech-rover",
  "^mapoftheinternet",
  "^ivia",
  "^kototoi",
  "^badware.info",
  "^adsbot-google",
  "^sygol",
  "^ovh",
  "^pegasus",
  "^sucuri",
  "^webwombat",
  "^webcatcher",
  "^websecurity",
  "^googlebot",
  "^cmcts.com.vn",
  "^getterroboplus",
  "^nhse",
  "^genieo",
  "^arks",
  "^msnbot-mobile",
  "^glx",
  "^threatsourcing",
  "^malwarebytes",
  "^ikarus",
  "^sohu",
  "^goforit",
  "^arale",
  "^vxvault",
  "^titin",
  "^roadhouse",
  "^phpdig",
  "^greensnow",
  "^tencenttraveler",
  "^exabot",
  "^cyansecurity",
  "^quttera",
  "^noyona",
  "^scoutjet",
  "^cienciaficcion",
  "^wauuu",
  "^crdf",
  "^pgpkeyagent",
  "^yanga",
  "^0xsi_f33d",
  "^infobee",
  "^dr.web",
  "^deepindex",
  "^victoria",
  "^malsilo",
  "^blo.",
  "^hubater",
  "^ebay",
  "^israeli-search",
  "^roadrunner",
  "^wwwster",
  "^legs",
  "^nano-antivirus",
  "^superantispyware",
  "^voyager-hc",
  "^hbot",
  "^netresearchserver",
  "^cyble",
  "^bannana_bot",
  "^jiffybox",
  "^msnbot-media",
  "^juniper",
  "^intelligence",
  "^atlocal",
  "^microsoft",
  "^hauri.net",
  "^threat",
  "^queryseekerspider",
  "^intelliagent",
  "^volcano",
  "^zippp",
  "^myweb",
  "^lwp",
  "^sophos",
  "^pioneer",
  "^ahnlab-v3",
  "^nederland.zoek",
  "^picsearch",
  "^nbot",
  "^googlebot-image",
  "^applebot",
  "^obot",
  "^omni",
  "^szukacz",
  "^monitorapp",
  "^gralon",
  "^adidxbot",
  "^cfetch",
  "^spam404",
  "^xirq",
  "^yandexdirect",
  "^esther",
  "^clamav",
  "^webcore",
  "^baypup",
  "^ahrefsbot",
  "^facebookexternalhit",
  "^ccubee",
  "^lionic",
  "^proximic",
  "^snappy",
  "^webvac",
  "^feedfetcher-google",
  "^blocklist",
  "^webquest",
  "^googlebot",
  "^zoner",
  "^asterias",
  "^spro-net-207-70-0",
  "^grub",
  "^pagebull",
  "^zao",
  "^ananzi",
  "^hetzner",
  "^showyoubot",
  "^dieblindekuh",
  "^ucsd",
  "^shark",
  "^arcabit",
  "^securolytics",
  "^hostinger",
  "^ah-ha.com",
  "^msnbot",
  "^knowledge",
  "^mj12bot",
  "^amazon",
  "^cyren",
  "^hostway",
  "^accoona",
  "^ingrid",
  "^java",
  "^nazilla",
  "^speedfind",
  "^searchmetricsbot",
  "^nokia6682",
  "^r6_feedfetcher",
  "^linkvalidator",
  "^trustlook",
  "^harvest",
  "^sphere",
  "^worldlight",
  "^tachyon",
  "^scantitan",
  "^slurp",
  "^theplanet.com",
  "^lycos",
  "^computingsite",
  "^trendmicro",
  "^tencent",
  "^patric",
  "^netmechanic",
  "^publisher",
  "^nzexplorer",
  "^mediafox",
  "^malwared",
  "^yeti",
  "^magpie-crawler",
  "^drweb",
  "^spinn3r",
  "^walker",
  "^osis-project",
  "^phishing",
  "^gridinsoft",
  "^prebytes",
  "^avira",
  "^minirank",
  "^cyber",
  "^pogodak",
  "^robofox",
  "^softlayer",
  "^labelgrabber",
  "^netcraft",
  "^kaspersky",
  "^hkuwwwoctopus",
  "^phantom",
  "^k7security",
  "^marvin",
  "^fdcservers",
  "^scanurl",
  "^kilroy",
  "^merlinkbot",
  "^twitterbot",
  "^funnelweb",
  "^felixide",
  "^vba32",
  "^miva",
  "^certego",
  "^bkav",
  "^helix",
  "^iron33",
  "^merzscope",
  "^avast-mobile",
  "^malwares",
  "^netvision",
  "^anthill",
  "^bjaaland",
  "^emergingthreats",
  "^feedly",
  "^calyxinstitute",
  "^domainappender",
  "^fido",
  "^desenmascara.me",
  "^sistrixcrawler",
  "^bingbot",
  "^senrigan",
  "^mediapartners",
  "^biglotron",
  "^websense-net2",
  "^dreamhost",
  "^udmsearch",
  "^fireeye",
  "^python",
  "^urlappendbot",
  "^go-http-client",
  "^solutionpro",
  "^homerweb",
  "^openphish",
  "^suke",
  "^ad-aware",
  "^toutatis",
  "^vipre",
  "^spbot",
  "^collective",
  "^panscient",
  "^aretha",
  "^phantomjs",
  "^hostdime",
  "^dr.web",
  "^tkwww",
  "^ejupiter",
  "^netseercrawler",
  "^smxcrawler",
  "^tbot",
  "^butterfly",
  "^yodao",
  "^siteexplorer",
  "^alienvault",
  "^cliqzbot",
  "^roach",
  "^najdi",
  "^bomborabot",
  "^webmonkey",
  "^opentext",
  "^searchprocess",
  "^imagelock",
  "^booch",
  "^plumtreewebaccessor",
  "^crawl",
  "^kbot",
  "^seek",
  "^yandex",
  "^yandexvideo",
  "^tor-exit",
  "^yandex",
  "^facebot",
  "^emacs-w3searchengine",
  "^populariconoclast",
  "^tornet",
  "^mediapartners-google",
  "^feodotracker",
  "^youdaobot",
  "^ebiness",
  "^sitevalet",
  "^peregrinator",
  "^quickheal",
  "^broadcom",
  "^maxpointcrawler",
  "^rackspace",
  "^applebot",
  "^ditto",
  "^safetoopen",
  "^ezresult",
  "^twisted",
  "^tachblackwidow",
  "^opendns",
  "^facebook",
  "^t-rex",
  "^geturl",
  "^baiduspider-video",
  "^xift",
  "^python-urllib",
  "^zyborg",
  "^above",
  "^simmany",
  "^bdfetch",
  "^eset",
  "^alibaba",
  "^wanderer",
  "^fishsearch",
  "^viriback",
  "^zbot",
  "^tweetmemebot",
  "^baiduspider-mobile",
  "^nec-meshexplorer",
  "^mbot",
  "^sidewinder",
  "^phishlabs",
  "^fireball",
  "^phishtank",
  "^linkdexbot",
  "^ravensearch",
  "^w3mir",
  "^paypal",
  "^templeton",
  "^bloodhound",
  "^snooper",
  "^malicious",
  "^search.",
  "^voyager",
  "^webwatch",
  "^p3pwgdsn",
  "^eset-nod32",
  "^pinpoint",
  "^ebingbong",
  "^urlscan",
  "^nationaldirectory",
  "^moose",
  "^magpie",
  "^titan",
  "^orbsearch",
  "^k7gw",
  "^symantec",
  "^sitesearcher",
  "^architext",
  "^mwd.search",
  "^virobot",
  "^etaospider",
  "^monster",
  "^keyweb",
  "^panda",
  "^websitepulse",
  "^netscoop",
  "^muscatferret",
  "^yandexmobilebot",
  "^surfnomore",
  "^tweetedtimesbot",
  "^deweb",
  "^webhopper",
  "^htmlindex",
  "^americanexpress",
  "^nomad",
  "^psycheclone",
  "^dtaagent",
  "^ferret",
  "^charlotte",
  "^delorie",
  "^woriobot",
  "^mj12",
  "^nameprotect",
  "^bigbrother",
  "^netcartawebmapengine",
  "^autoshun",
  "^webmirror",
  "^torservers",
  "^kretrieve",
  "^whizbang",
  "^sift",
  "^websnarf",
  "^lionic",
  "^poirot",
  "^comodo",
  "^pompos",
  "^calif",
  "^piltdownman",
  "^trustwave",
  "^talosintelligence",
  "^cinsarmy",
  "^netflix",
  "^naverbot",
  "^k7antivirus",
  "^80legs.comwebcrawler",
  "^wallpaper",
  "^weblinker",
  "^alphamountain",
  "^yandexwebmaster",
  "^partnersite",
  "^zillya",
  "^webroot",
  "^bitdefendertheta",
  "^wavefire",
  "^metauri.com",
  "^norton",
  "^cassandra",
  "^netcraft",
  "^linkalarm",
  "^shopwiki",
  "^backrub",
  "^mcafee",
  "^poppelsdorf",
  "^poppi",
];

module.exports = {
  botRefList,
};
