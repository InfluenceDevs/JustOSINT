const osintData = [
  {
    category: "Search Engines",
    tools: [
      { name: "Google Dorks", url: "https://www.exploit-db.com/google-hacking-database", tag: "queries" },
      { name: "Bing", url: "https://www.bing.com/", tag: "web" },
      { name: "Brave Search", url: "https://search.brave.com/", tag: "privacy" },
      { name: "Yandex", url: "https://yandex.com/", tag: "regional" },
      { name: "DuckDuckGo", url: "https://duckduckgo.com/", tag: "private" },
      { name: "Qwant", url: "https://www.qwant.com/", tag: "privacy" },
      { name: "Startpage", url: "https://www.startpage.com/", tag: "privacy" },
      { name: "Kagi", url: "https://kagi.com/", tag: "premium" }
    ]
  },
  {
    category: "Email Address",
    tools: [
      { name: "Hunter", url: "https://hunter.io/", tag: "discovery" },
      { name: "Have I Been Pwned", url: "https://haveibeenpwned.com/", tag: "breaches" },
      { name: "EmailRep", url: "https://emailrep.io/", tag: "reputation" },
      { name: "Verify Email", url: "https://verify-email.org/", tag: "validation" },
      { name: "DeHashed", url: "https://www.dehashed.com/", tag: "leaks" },
      { name: "Skymem", url: "https://www.skymem.info/", tag: "search" },
      { name: "LeakCheck", url: "https://leakcheck.io/", tag: "breaches" },
      { name: "GHunt", url: "https://github.com/mxrch/GHunt", tag: "google" }
    ]
  },
  {
    category: "Domain Name",
    tools: [
      { name: "Whois", url: "https://who.is/", tag: "registration" },
      { name: "crt.sh", url: "https://crt.sh/", tag: "certificates" },
      { name: "SecurityTrails", url: "https://securitytrails.com/", tag: "dns" },
      { name: "DNSTwister", url: "https://dnstwister.report/", tag: "typosquat" },
      { name: "BuiltWith", url: "https://builtwith.com/", tag: "tech stack" },
      { name: "DomainTools", url: "https://whois.domaintools.com/", tag: "historical" },
      { name: "ViewDNS", url: "https://viewdns.info/", tag: "dns" },
      { name: "Whoxy", url: "https://www.whoxy.com/", tag: "whois api" }
    ]
  },
  {
    category: "IP & MAC Address",
    tools: [
      { name: "Shodan", url: "https://www.shodan.io/", tag: "internet assets" },
      { name: "Censys", url: "https://search.censys.io/", tag: "asset intel" },
      { name: "AbuseIPDB", url: "https://www.abuseipdb.com/", tag: "abuse reports" },
      { name: "GreyNoise", url: "https://www.greynoise.io/", tag: "noise vs threat" },
      { name: "IPinfo", url: "https://ipinfo.io/", tag: "geo/asn" },
      { name: "VirusTotal IP", url: "https://www.virustotal.com/gui/home/search", tag: "reputation" },
      { name: "BGPView", url: "https://bgpview.io/", tag: "routing" },
      { name: "Robtex", url: "https://www.robtex.com/", tag: "dns+network" }
    ]
  },
  {
    category: "Geolocation Tools / Maps",
    tools: [
      { name: "OpenStreetMap", url: "https://www.openstreetmap.org/", tag: "maps" },
      { name: "Google Earth", url: "https://earth.google.com/", tag: "satellite" },
      { name: "Mapillary", url: "https://www.mapillary.com/", tag: "street level" },
      { name: "SunCalc", url: "https://www.suncalc.org/", tag: "sun shadows" },
      { name: "GeoSpy", url: "https://geospy.ai/", tag: "image geo" },
      { name: "GeoNames", url: "https://www.geonames.org/", tag: "gazetteer" },
      { name: "Overpass Turbo", url: "https://overpass-turbo.eu/", tag: "osm queries" },
      { name: "What3Words", url: "https://what3words.com/", tag: "location coding" }
    ]
  },
  {
    category: "Images / Videos / Docs",
    tools: [
      { name: "Google Lens", url: "https://lens.google.com/", tag: "reverse image" },
      { name: "TinEye", url: "https://tineye.com/", tag: "reverse image" },
      { name: "InVID", url: "https://www.invid-project.eu/tools-and-services/invid-verification-plugin/", tag: "video verify" },
      { name: "FotoForensics", url: "https://fotoforensics.com/", tag: "metadata" },
      { name: "ExifTool", url: "https://exiftool.org/", tag: "metadata cli" },
      { name: "Yandex Images", url: "https://yandex.com/images/", tag: "reverse image" },
      { name: "Bing Visual Search", url: "https://www.bing.com/visualsearch", tag: "reverse image" },
      { name: "FFmpeg", url: "https://ffmpeg.org/", tag: "video cli" },
      { name: "PDFDigger", url: "https://www.pdfdigger.com/", tag: "pdf metadata" },
      { name: "Metadata2Go", url: "https://www.metadata2go.com/", tag: "metadata" }
    ]
  },
  {
    category: "Social Networks",
    tools: [
      { name: "Social Searcher", url: "https://www.social-searcher.com/", tag: "mentions" },
      { name: "Twitonomy", url: "https://www.twitonomy.com/", tag: "x analytics" },
      { name: "Snoopreport", url: "https://snoopreport.com/", tag: "instagram" },
      { name: "Nitter Mirrors", url: "https://github.com/zedeus/nitter/wiki/Instances", tag: "x mirror" },
      { name: "CrowdTangle Guide", url: "https://help.crowdtangle.com/", tag: "meta insights" },
      { name: "Mastodon Search", url: "https://search.noc.social/", tag: "mastodon" },
      { name: "FediDB", url: "https://fedidb.org/", tag: "fediverse" },
      { name: "TubeArchivist", url: "https://github.com/tubearchivist/tubearchivist", tag: "youtube archive" }
    ]
  },
  {
    category: "Username",
    tools: [
      { name: "Namechk", url: "https://namechk.com/", tag: "availability" },
      { name: "WhatsMyName", url: "https://whatsmyname.app/", tag: "platform lookup" },
      { name: "Sherlock", url: "https://github.com/sherlock-project/sherlock", tag: "cli" },
      { name: "UserSearch", url: "https://usersearch.org/", tag: "cross-platform" },
      { name: "Blackbird", url: "https://github.com/p1ngul1n0/blackbird", tag: "automation" },
      { name: "Maigret", url: "https://github.com/soxoj/maigret", tag: "automation" },
      { name: "NexFil", url: "https://github.com/thewhiteh4t/nexfil", tag: "automation" },
      { name: "Holehe", url: "https://github.com/megadose/holehe", tag: "email+username" }
    ]
  },
  {
    category: "Public Records",
    tools: [
      { name: "PACER", url: "https://pacer.uscourts.gov/", tag: "us federal" },
      { name: "OpenCorporates", url: "https://opencorporates.com/", tag: "companies" },
      { name: "SEC EDGAR", url: "https://www.sec.gov/edgar/search/", tag: "filings" },
      { name: "WorldCat", url: "https://www.worldcat.org/", tag: "libraries" },
      { name: "State Business Search", url: "https://www.nass.org/business-services/business-resource-center", tag: "registry" },
      { name: "CourtListener", url: "https://www.courtlistener.com/", tag: "legal" },
      { name: "Data.gov", url: "https://www.data.gov/", tag: "open data" },
      { name: "National Archives", url: "https://www.archives.gov/", tag: "archives" },
      { name: "GovInfo", url: "https://www.govinfo.gov/", tag: "government docs" },
      { name: "OpenSanctions", url: "https://www.opensanctions.org/", tag: "sanctions" }
    ]
  },
  {
    category: "Dark Web",
    tools: [
      { name: "Tor Project", url: "https://www.torproject.org/", tag: "access" },
      { name: "Ahmia", url: "https://ahmia.fi/", tag: "onion search" },
      { name: "Dark.fail", url: "https://dark.fail/", tag: "directory" },
      { name: "OnionScan", url: "https://github.com/s-rah/onionscan", tag: "service scan" },
      { name: "Tails", url: "https://tails.net/", tag: "opsec" },
      { name: "OnionSearch", url: "https://github.com/megadose/OnionSearch", tag: "search" },
      { name: "Kali Tor Tools", url: "https://www.kali.org/tools/", tag: "tooling" },
      { name: "OnionLand", url: "https://onionlandsearchengine.com/", tag: "search" }
    ]
  },
  {
    category: "Blockchain & Cryptocurrency",
    tools: [
      { name: "Blockchain Explorer", url: "https://www.blockchain.com/explorer", tag: "btc" },
      { name: "Etherscan", url: "https://etherscan.io/", tag: "eth" },
      { name: "TRM Blog", url: "https://www.trmlabs.com/resources", tag: "intel" },
      { name: "Breadcrumbs", url: "https://www.breadcrumbs.app/", tag: "graph" },
      { name: "WalletExplorer", url: "https://www.walletexplorer.com/", tag: "clusters" },
      { name: "Blockchair", url: "https://blockchair.com/", tag: "multi chain" },
      { name: "Arkham", url: "https://platform.arkhamintelligence.com/", tag: "intel" },
      { name: "Mempool", url: "https://mempool.space/", tag: "btc mempool" }
    ]
  },
  {
    category: "Cloud Infrastructure",
    tools: [
      { name: "Netlas", url: "https://netlas.io/", tag: "attack surface" },
      { name: "BGPView", url: "https://bgpview.io/", tag: "routing" },
      { name: "CloudSnare", url: "https://github.com/christophetd/CloudFlair", tag: "origin ip" },
      { name: "RapidDNS", url: "https://rapiddns.io/", tag: "passive dns" },
      { name: "FOFA", url: "https://en.fofa.info/", tag: "internet mapping" },
      { name: "BinaryEdge", url: "https://www.binaryedge.io/", tag: "attack surface" },
      { name: "LeakIX", url: "https://leakix.net/", tag: "exposed services" },
      { name: "URLScan", url: "https://urlscan.io/", tag: "web telemetry" }
    ]
  },
  {
    category: "Phone Numbers",
    tools: [
      { name: "Numverify", url: "https://numverify.com/", tag: "validation" },
      { name: "Truecaller", url: "https://www.truecaller.com/", tag: "caller id" },
      { name: "Sync.me", url: "https://sync.me/", tag: "identity" },
      { name: "PhoneInfoga", url: "https://github.com/sundowndev/phoneinfoga", tag: "cli" },
      { name: "Whoscall", url: "https://whoscall.com/", tag: "caller id" },
      { name: "CarrierLookup", url: "https://carrierlookup.com/", tag: "carrier" },
      { name: "Twilio Lookup", url: "https://www.twilio.com/lookup", tag: "api" },
      { name: "NumBuster", url: "https://numbuster.com/", tag: "community" }
    ]
  },
  {
    category: "Transportation",
    tools: [
      { name: "FlightRadar24", url: "https://www.flightradar24.com/", tag: "aviation" },
      { name: "ADS-B Exchange", url: "https://globe.adsbexchange.com/", tag: "aviation" },
      { name: "MarineTraffic", url: "https://www.marinetraffic.com/", tag: "shipping" },
      { name: "OpenRailwayMap", url: "https://www.openrailwaymap.org/", tag: "rail" },
      { name: "VesselFinder", url: "https://www.vesselfinder.com/", tag: "shipping" },
      { name: "Raildar", url: "https://raildar.co.uk/", tag: "rail" },
      { name: "Airportia", url: "https://www.airportia.com/", tag: "flight history" },
      { name: "PlaneSpotters", url: "https://www.planespotters.net/", tag: "aircraft registry" }
    ]
  },
  {
    category: "Archives",
    tools: [
      { name: "Wayback Machine", url: "https://web.archive.org/", tag: "web archive" },
      { name: "Archive.today", url: "https://archive.ph/", tag: "snapshot" },
      { name: "Memento Time Travel", url: "https://timetravel.mementoweb.org/", tag: "archive aggregator" },
      { name: "OldWeb.today", url: "https://oldweb.today/", tag: "historical browsing" },
      { name: "Ghostarchive", url: "https://ghostarchive.org/", tag: "media archive" },
      { name: "Library of Congress", url: "https://www.loc.gov/", tag: "records" },
      { name: "Perma.cc", url: "https://perma.cc/", tag: "legal archive" },
      { name: "ArchiveBox", url: "https://archivebox.io/", tag: "self hosted" }
    ]
  },
  {
    category: "Relatives & Family Lookup",
    tools: [
      { name: "FamilySearch", url: "https://www.familysearch.org/", tag: "genealogy" },
      { name: "Find A Grave", url: "https://www.findagrave.com/", tag: "memorial" },
      { name: "TruePeopleSearch", url: "https://www.truepeoplesearch.com/", tag: "people search" },
      { name: "Whitepages", url: "https://www.whitepages.com/", tag: "directory" },
      { name: "Spokeo", url: "https://www.spokeo.com/", tag: "aggregator" },
      { name: "FastPeopleSearch", url: "https://www.fastpeoplesearch.com/", tag: "people search" },
      { name: "Thatsthem", url: "https://thatsthem.com/", tag: "identity" },
      { name: "AnyWho", url: "https://www.anywho.com/", tag: "directory" },
      { name: "ClustrMaps", url: "https://clustrmaps.com/", tag: "address links" },
      { name: "USSearch", url: "https://www.ussearch.com/", tag: "records" },
      { name: "FamilyTreeNow", url: "https://www.familytreenow.com/", tag: "family graph" },
      { name: "PeopleFinders", url: "https://www.peoplefinders.com/", tag: "people search" }
    ]
  },
  {
    category: "Dating & Relationships",
    tools: [
      { name: "Bumble", url: "https://bumble.com/", tag: "dating profile" },
      { name: "Tinder", url: "https://tinder.com/", tag: "dating profile" },
      { name: "Hinge", url: "https://hinge.co/", tag: "dating profile" },
      { name: "OkCupid", url: "https://www.okcupid.com/", tag: "dating profile" },
      { name: "Match", url: "https://www.match.com/", tag: "dating profile" },
      { name: "Plenty of Fish", url: "https://www.pof.com/", tag: "dating profile" },
      { name: "eHarmony", url: "https://www.eharmony.com/", tag: "dating profile" },
      { name: "Badoo", url: "https://badoo.com/", tag: "dating profile" },
      { name: "Coffee Meets Bagel", url: "https://coffeemeetsbagel.com/", tag: "dating profile" },
      { name: "BLK", url: "https://blk-app.com/", tag: "dating profile" },
      { name: "Feeld", url: "https://feeld.co/", tag: "dating profile" },
      { name: "Boo", url: "https://boo.world/", tag: "dating profile" }
    ]
  },
  {
    category: "People Search & Identity",
    tools: [
      { name: "Pipl", url: "https://pipl.com/", tag: "identity" },
      { name: "PeekYou", url: "https://www.peekyou.com/", tag: "username" },
      { name: "Radaris", url: "https://radaris.com/", tag: "people search" },
      { name: "Nuwber", url: "https://nuwber.com/", tag: "people search" },
      { name: "BeenVerified", url: "https://www.beenverified.com/", tag: "background" },
      { name: "Intelius", url: "https://www.intelius.com/", tag: "background" },
      { name: "TruthFinder", url: "https://www.truthfinder.com/", tag: "background" },
      { name: "PeopleLooker", url: "https://www.peoplelooker.com/", tag: "background" },
      { name: "ZabaSearch", url: "https://www.zabasearch.com/", tag: "directory" },
      { name: "AddressSearch", url: "https://addresssearch.com/", tag: "address" },
      { name: "NeighborWho", url: "https://www.neighborwho.com/", tag: "property" },
      { name: "LocatePeople", url: "https://www.locatepeople.org/", tag: "people search" }
    ]
  },
  {
    category: "Property & Address Records",
    tools: [
      { name: "Zillow", url: "https://www.zillow.com/", tag: "property" },
      { name: "Realtor", url: "https://www.realtor.com/", tag: "property" },
      { name: "Redfin", url: "https://www.redfin.com/", tag: "property" },
      { name: "Trulia", url: "https://www.trulia.com/", tag: "property" },
      { name: "County Office", url: "https://www.countyoffice.org/", tag: "public records" },
      { name: "PropertyShark", url: "https://www.propertyshark.com/", tag: "records" },
      { name: "OnXmaps", url: "https://www.onxmaps.com/", tag: "parcel maps" },
      { name: "Landgrid", url: "https://landgrid.com/", tag: "parcel maps" },
      { name: "Regrid", url: "https://regrid.com/", tag: "parcel maps" },
      { name: "BatchGeo", url: "https://batchgeo.com/", tag: "mapping" },
      { name: "OpenAddresses", url: "https://openaddresses.io/", tag: "open data" },
      { name: "Assessor Parcel Search", url: "https://www.nass.org/business-services/business-resource-center", tag: "county assessor" }
    ]
  },
  {
    category: "Court, Marriage & Divorce",
    tools: [
      { name: "RECAP Archive", url: "https://www.courtlistener.com/recap/", tag: "court dockets" },
      { name: "JudyRecords", url: "https://www.judyrecords.com/", tag: "court records" },
      { name: "UniCourt", url: "https://unicourt.com/", tag: "court records" },
      { name: "Trellis", url: "https://trellis.law/", tag: "state courts" },
      { name: "VitalChek", url: "https://www.vitalchek.com/", tag: "vital records" },
      { name: "CDC Vital Records", url: "https://www.cdc.gov/nchs/w2w/index.htm", tag: "vital records" },
      { name: "State Courts Directory", url: "https://www.ncsc.org/information-and-resources/state-court-websites", tag: "court links" },
      { name: "Justia Dockets", url: "https://dockets.justia.com/", tag: "court dockets" },
      { name: "Law360", url: "https://www.law360.com/", tag: "legal news" },
      { name: "State Marriage Indexes", url: "https://www.familysearch.org/search/collection/list", tag: "marriage" },
      { name: "State Divorce Indexes", url: "https://www.familysearch.org/search/collection/list", tag: "divorce" },
      { name: "PublicData Check", url: "https://publicdatacheck.com/", tag: "background" }
    ]
  },
  {
    category: "Messaging & Community Signals",
    tools: [
      { name: "Telegram", url: "https://telegram.org/", tag: "messaging" },
      { name: "Discord", url: "https://discord.com/", tag: "community" },
      { name: "Reddit", url: "https://www.reddit.com/", tag: "community" },
      { name: "4chan Archive", url: "https://archive.4plebs.org/", tag: "forum archive" },
      { name: "Lemmy Explorer", url: "https://join-lemmy.org/instances", tag: "fediverse" },
      { name: "Discord.me", url: "https://discord.me/", tag: "server discovery" },
      { name: "TelegramDB", url: "https://telegramdb.org/", tag: "channel discovery" },
      { name: "Disboard", url: "https://disboard.org/", tag: "server discovery" },
      { name: "Top.gg", url: "https://top.gg/servers", tag: "server discovery" },
      { name: "Kbin Instances", url: "https://kbin.pub/en", tag: "fediverse" },
      { name: "Usenet CSE", url: "https://cse.google.com/cse?cx=010582677517954599991:2x8jzj7y6gc", tag: "archives" },
      { name: "BoardReader", url: "https://boardreader.com/", tag: "forum search" }
    ]
  },
  {
    category: "Genealogy & Historical People",
    tools: [
      { name: "Ancestry", url: "https://www.ancestry.com/", tag: "genealogy" },
      { name: "MyHeritage", url: "https://www.myheritage.com/", tag: "genealogy" },
      { name: "Geni", url: "https://www.geni.com/", tag: "family tree" },
      { name: "WikiTree", url: "https://www.wikitree.com/", tag: "family tree" },
      { name: "Cyndi's List", url: "https://www.cyndislist.com/", tag: "genealogy links" },
      { name: "NARA Genealogy", url: "https://www.archives.gov/research/genealogy", tag: "us archives" },
      { name: "Ellis Island Records", url: "https://heritage.statueofliberty.org/", tag: "immigration" },
      { name: "JewishGen", url: "https://www.jewishgen.org/", tag: "genealogy" },
      { name: "Findmypast", url: "https://www.findmypast.com/", tag: "records" },
      { name: "BillionGraves", url: "https://billiongraves.com/", tag: "cemetery" },
      { name: "The National Archives UK", url: "https://www.nationalarchives.gov.uk/", tag: "archives" },
      { name: "ArchiveGrid", url: "https://researchworks.oclc.org/archivegrid/", tag: "archive search" }
    ]
  },
  {
    category: "Employment & Professional",
    tools: [
      { name: "LinkedIn", url: "https://www.linkedin.com/", tag: "professional" },
      { name: "Xing", url: "https://www.xing.com/", tag: "professional" },
      { name: "RocketReach", url: "https://rocketreach.co/", tag: "contacts" },
      { name: "Apollo", url: "https://www.apollo.io/", tag: "contacts" },
      { name: "ZoomInfo", url: "https://www.zoominfo.com/", tag: "company intel" },
      { name: "Crunchbase", url: "https://www.crunchbase.com/", tag: "companies" },
      { name: "BuiltIn", url: "https://builtin.com/", tag: "company profiles" },
      { name: "Wellfound", url: "https://wellfound.com/", tag: "startup people" },
      { name: "Indeed Company Pages", url: "https://www.indeed.com/companies", tag: "company profiles" },
      { name: "Glassdoor", url: "https://www.glassdoor.com/", tag: "employment" },
      { name: "OpenSecrets", url: "https://www.opensecrets.org/", tag: "influence" },
      { name: "LittleSis", url: "https://littlesis.org/", tag: "network mapping" }
    ]
  }
];

const body = document.body;
const cardsRoot = document.getElementById("cardsRoot");
const categoryNav = document.getElementById("categoryNav");
const searchInput = document.getElementById("searchInput");
const resultsMeta = document.getElementById("resultsMeta");
const actionStatus = document.getElementById("actionStatus");
const themeToggle = document.getElementById("themeToggle");
const interactiveTree = document.getElementById("interactiveTree");
const treeStage = document.getElementById("treeStage");
const boardTitle = document.getElementById("boardTitle");
const zoomLabel = document.getElementById("zoomLabel");
const treeBadge = document.querySelector(".tree-badge");

const homeBtn = document.getElementById("homeBtn");
const knowledgeBtn = document.getElementById("knowledgeBtn");
const flowBtn = document.getElementById("flowBtn");
const statsBtn = document.getElementById("statsBtn");
const workspaceBtn = document.getElementById("workspaceBtn");
const foldersModeBtn = document.getElementById("foldersModeBtn");
const tagsModeBtn = document.getElementById("tagsModeBtn");
const expandAllBtn = document.getElementById("expandAllBtn");
const collapseAllBtn = document.getElementById("collapseAllBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");
const zoomInBtn = document.getElementById("zoomInBtn");
const boardActions = document.querySelector(".board-actions");

const workspacePanel = document.getElementById("workspacePanel");
const profileForm = document.getElementById("profileForm");
const profileList = document.getElementById("profileList");
const exportProfilesBtn = document.getElementById("exportProfilesBtn");
const importProfilesInput = document.getElementById("importProfilesInput");
const clearWorkspaceBtn = document.getElementById("clearWorkspaceBtn");
const favoritesList = document.getElementById("favoritesList");

const submitScoreBtn = document.getElementById("submitScoreBtn");
const sendFeedbackBtn = document.getElementById("sendFeedbackBtn");
const issueDead = document.getElementById("issueDead");
const issuePaywalled = document.getElementById("issuePaywalled");
const issueIncorrect = document.getElementById("issueIncorrect");

let activeCategory = "all";
let query = "";
let navMode = "folders";
let treeZoom = 1;
let boardMode = "home";

const appStorageKey = "justOsintAppStateV2";
const appState = {
  favorites: [],
  profiles: [],
  activeProfileId: null,
  profileDraft: {}
};

const expandedCategories = new Set(["Search Engines", "Public Records", "Domain Name"]);
const expandedFlowNodes = new Set(["root"]);
let draggedProfileId = null;

function uniqueTags(data) {
  return new Set(data.flatMap((group) => group.tools.map((tool) => tool.tag))).size;
}

function normalizedQuery() {
  return query.trim().toLowerCase();
}

function setStatus(text) {
  actionStatus.textContent = text;
}

function safeId() {
  return typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `id-${Date.now()}-${Math.random()}`;
}

function updateTreeBadge() {
  treeBadge.textContent = String(osintData.length);
}

function saveAppState() {
  localStorage.setItem(appStorageKey, JSON.stringify(appState));
}

function loadAppState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(appStorageKey) || "{}");
    appState.favorites = Array.isArray(parsed.favorites) ? parsed.favorites : [];
    appState.profiles = Array.isArray(parsed.profiles) ? parsed.profiles : [];
    appState.activeProfileId = typeof parsed.activeProfileId === "string" ? parsed.activeProfileId : null;
    appState.profileDraft = parsed.profileDraft && typeof parsed.profileDraft === "object" ? parsed.profileDraft : {};
  } catch (_error) {
    appState.favorites = [];
    appState.profiles = [];
    appState.activeProfileId = null;
    appState.profileDraft = {};
  }
}

function profileSummaryText() {
  return `Profiles: ${appState.profiles.length} total, Favorites: ${appState.favorites.length} pinned tool(s).`;
}

function setActiveRail(button) {
  [homeBtn, knowledgeBtn, flowBtn, statsBtn, workspaceBtn].forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

function setZoom(value) {
  treeZoom = Math.max(0.55, Math.min(2, value));
  interactiveTree.style.transform = `scale(${treeZoom})`;
  zoomLabel.textContent = `${Math.round(treeZoom * 100)}%`;
}

function matchesNode(text) {
  const q = normalizedQuery();
  if (!q) return true;
  return text.toLowerCase().includes(q);
}

function toolKey(category, tool) {
  return `${category}::${tool.name}`;
}

function isFavorited(category, tool) {
  const id = toolKey(category, tool);
  return appState.favorites.some((entry) => entry.id === id);
}

function toggleFavorite(category, tool) {
  const id = toolKey(category, tool);
  const idx = appState.favorites.findIndex((entry) => entry.id === id);
  if (idx >= 0) {
    appState.favorites.splice(idx, 1);
    setStatus(`Removed favorite: ${tool.name}`);
  } else {
    appState.favorites.push({ id, category, name: tool.name, url: tool.url, tag: tool.tag });
    setStatus(`Pinned favorite: ${tool.name}`);
  }
  saveAppState();
  renderFavorites();
  renderSidebar();
  if (boardMode === "knowledge") {
    renderKnowledgeMode(filterData());
  }
}

function createPinButton(category, tool, className = "pin-btn") {
  const pinBtn = document.createElement("button");
  pinBtn.type = "button";
  pinBtn.className = className;
  pinBtn.textContent = isFavorited(category, tool) ? "★" : "+";
  pinBtn.title = isFavorited(category, tool) ? "Unpin favorite" : "Pin favorite";
  pinBtn.classList.toggle("active", isFavorited(category, tool));
  pinBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleFavorite(category, tool);
  });
  return pinBtn;
}

function renderFavorites() {
  favoritesList.innerHTML = "";
  if (!appState.favorites.length) {
    favoritesList.innerHTML = '<p class="workspace-empty">No pinned tools yet.</p>';
    return;
  }

  appState.favorites.forEach((item) => {
    const row = document.createElement("div");
    row.className = "tool-row";

    const link = document.createElement("a");
    link.className = "tree-leaf";
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noreferrer noopener";
    link.innerHTML = `<span class="tree-leaf-name">${item.name}</span><span class="tree-item-meta">${item.category}</span>`;

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "pin-btn active";
    removeBtn.textContent = "×";
    removeBtn.title = "Remove favorite";
    removeBtn.addEventListener("click", () => {
      appState.favorites = appState.favorites.filter((entry) => entry.id !== item.id);
      saveAppState();
      renderFavorites();
      renderSidebar();
      if (boardMode === "knowledge") {
        renderKnowledgeMode(filterData());
      }
    });

    row.appendChild(link);
    row.appendChild(removeBtn);
    favoritesList.appendChild(row);
  });
}

function renderSidebarFolders() {
  categoryNav.innerHTML = "";
  const q = normalizedQuery();

  const allBtn = document.createElement("button");
  allBtn.className = "tree-root-btn";
  allBtn.innerHTML = '<span class="tree-item-label">All Categories</span><span class="tree-item-meta">all</span>';
  allBtn.classList.toggle("active", activeCategory === "all");
  allBtn.addEventListener("click", () => {
    activeCategory = "all";
    renderAll();
  });
  categoryNav.appendChild(allBtn);

  osintData.forEach((group) => {
    const toolMatches = group.tools.filter((tool) => matchesNode(`${tool.name} ${tool.tag}`));
    const categoryMatch = matchesNode(group.category);
    if (q && !categoryMatch && toolMatches.length === 0) return;

    const node = document.createElement("div");
    node.className = "tree-node";

    const row = document.createElement("div");
    row.className = "tree-row";

    const toggleBtn = document.createElement("button");
    toggleBtn.type = "button";
    toggleBtn.className = "tree-toggle";
    const shouldOpen = (q && (categoryMatch || toolMatches.length > 0)) || expandedCategories.has(group.category);
    toggleBtn.textContent = shouldOpen ? "▾" : "▸";
    toggleBtn.addEventListener("click", () => {
      if (expandedCategories.has(group.category)) expandedCategories.delete(group.category);
      else expandedCategories.add(group.category);
      renderSidebarFolders();
    });

    const categoryBtn = document.createElement("button");
    categoryBtn.className = "tree-category-btn";
    categoryBtn.innerHTML = `<span class="tree-item-label">${group.category}</span><span class="tree-item-meta">${group.tools.length}</span>`;
    categoryBtn.classList.toggle("active", activeCategory === group.category);
    categoryBtn.addEventListener("click", () => {
      activeCategory = group.category;
      renderAll();
    });

    row.appendChild(toggleBtn);
    row.appendChild(categoryBtn);
    node.appendChild(row);

    if (shouldOpen) {
      const children = document.createElement("div");
      children.className = "tree-children";

      (q ? toolMatches : group.tools).forEach((tool) => {
        const toolRow = document.createElement("div");
        toolRow.className = "tool-row";

        const leaf = document.createElement("a");
        leaf.className = "tree-leaf";
        leaf.href = tool.url;
        leaf.target = "_blank";
        leaf.rel = "noreferrer noopener";
        leaf.innerHTML = `<span class="tree-leaf-name">${tool.name}</span><span class="tree-item-meta">${tool.tag}</span>`;

        toolRow.appendChild(leaf);
        toolRow.appendChild(createPinButton(group.category, tool));
        children.appendChild(toolRow);
      });
      node.appendChild(children);
    }

    categoryNav.appendChild(node);
  });
}

function tagMapFromData() {
  const map = new Map();
  osintData.forEach((group) => {
    group.tools.forEach((tool) => {
      if (!map.has(tool.tag)) map.set(tool.tag, []);
      map.get(tool.tag).push({ ...tool, category: group.category });
    });
  });

  return Array.from(map.entries())
    .map(([tag, tools]) => ({ tag, tools }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
}

function renderSidebarTags() {
  categoryNav.innerHTML = "";
  const grouped = tagMapFromData();
  const q = normalizedQuery();

  grouped.forEach((entry) => {
    const tools = entry.tools.filter((tool) => !q || matchesNode(`${entry.tag} ${tool.name} ${tool.category}`));
    if (!tools.length) return;

    const node = document.createElement("div");
    node.className = "tree-node";
    const row = document.createElement("div");
    row.className = "tree-row";

    const tagId = `tag:${entry.tag}`;
    const isOpen = q ? true : expandedCategories.has(tagId);

    const toggleBtn = document.createElement("button");
    toggleBtn.type = "button";
    toggleBtn.className = "tree-toggle";
    toggleBtn.textContent = isOpen ? "▾" : "▸";
    toggleBtn.addEventListener("click", () => {
      if (expandedCategories.has(tagId)) expandedCategories.delete(tagId);
      else expandedCategories.add(tagId);
      renderSidebarTags();
    });

    const tagBtn = document.createElement("button");
    tagBtn.className = "tree-category-btn";
    tagBtn.innerHTML = `<span class="tree-item-label">#${entry.tag}</span><span class="tree-item-meta">${entry.tools.length}</span>`;

    row.appendChild(toggleBtn);
    row.appendChild(tagBtn);
    node.appendChild(row);

    if (isOpen) {
      const children = document.createElement("div");
      children.className = "tree-children";

      tools.forEach((tool) => {
        const toolRow = document.createElement("div");
        toolRow.className = "tool-row";

        const leaf = document.createElement("a");
        leaf.className = "tree-leaf";
        leaf.href = tool.url;
        leaf.target = "_blank";
        leaf.rel = "noreferrer noopener";
        leaf.innerHTML = `<span class="tree-leaf-name">${tool.name}</span><span class="tree-item-meta">${tool.category}</span>`;

        toolRow.appendChild(leaf);
        toolRow.appendChild(createPinButton(tool.category, tool));
        children.appendChild(toolRow);
      });
      node.appendChild(children);
    }

    categoryNav.appendChild(node);
  });
}

function createNodeRow(node, hasChildren) {
  const row = document.createElement("div");
  row.className = "flow-row";

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = `flow-toggle${hasChildren ? "" : " hidden"}`;
  const isOpen = expandedFlowNodes.has(node.id);
  toggle.textContent = isOpen ? "▾" : "▸";

  const label = hasChildren ? document.createElement("button") : document.createElement("a");
  label.className = `flow-pill ${node.kind}`;
  if (node.kind === "tool") {
    label.href = node.url;
    label.target = "_blank";
    label.rel = "noreferrer noopener";
  } else {
    label.type = "button";
  }

  const detail = node.count !== undefined ? `<span class="tree-item-meta">${node.count}</span>` : "";
  label.innerHTML = `${node.label}${detail}`;

  if (hasChildren) {
    toggle.addEventListener("click", () => {
      if (expandedFlowNodes.has(node.id)) expandedFlowNodes.delete(node.id);
      else expandedFlowNodes.add(node.id);
      renderFlowMode();
    });
  }

  if (node.kind === "folder") {
    label.addEventListener("click", () => {
      activeCategory = node.category;
      setActiveRail(knowledgeBtn);
      setBoardMode("knowledge");
      setStatus(`Focused category: ${node.category}`);
    });
  }

  row.appendChild(toggle);
  row.appendChild(label);

  if (node.kind === "tool") {
    row.appendChild(createPinButton(node.category, { name: node.label, url: node.url, tag: node.tag }, "flow-pin"));
  }
  return { row, isOpen };
}

function buildFlowTree() {
  const q = normalizedQuery();
  const root = {
    id: "root",
    kind: "root",
    label: "OSINT Framework",
    count: osintData.length,
    children: []
  };

  osintData.forEach((group) => {
    if (activeCategory !== "all" && group.category !== activeCategory) return;

    const bucket = new Map();
    group.tools.forEach((tool) => {
      if (!bucket.has(tool.tag)) bucket.set(tool.tag, []);
      bucket.get(tool.tag).push(tool);
    });

    const tagNodes = Array.from(bucket.entries()).map(([tag, tools]) => ({
      id: `tag:${group.category}:${tag}`,
      kind: "tag",
      label: `#${tag}`,
      count: tools.length,
      children: tools.map((tool) => ({
        id: `tool:${group.category}:${tool.name}`,
        kind: "tool",
        label: tool.name,
        category: group.category,
        tag: tool.tag,
        url: tool.url
      }))
    }));

    root.children.push({
      id: `cat:${group.category}`,
      kind: "folder",
      label: group.category,
      category: group.category,
      count: group.tools.length,
      children: tagNodes
    });
  });

  if (!q) return root;

  function filterNode(node) {
    const nodeMatch = matchesNode(node.label);
    if (!node.children) return nodeMatch ? { ...node } : null;
    const filteredChildren = node.children.map((child) => filterNode(child)).filter(Boolean);
    if (!nodeMatch && filteredChildren.length === 0) return null;
    return { ...node, children: filteredChildren };
  }

  return filterNode(root) || { ...root, children: [] };
}

function renderFlowNode(node, container) {
  const hasChildren = Array.isArray(node.children) && node.children.length > 0;
  const wrapper = document.createElement("div");
  wrapper.className = "flow-node";

  const { row, isOpen } = createNodeRow(node, hasChildren);
  wrapper.appendChild(row);

  if (hasChildren && isOpen) {
    const childrenWrap = document.createElement("div");
    childrenWrap.className = "flow-children";
    node.children.forEach((child) => renderFlowNode(child, childrenWrap));
    wrapper.appendChild(childrenWrap);
  }

  container.appendChild(wrapper);
}

function filterData() {
  const q = normalizedQuery();
  return osintData
    .filter((group) => activeCategory === "all" || group.category === activeCategory)
    .map((group) => {
      const tools = group.tools.filter((tool) => !q || `${group.category} ${tool.name} ${tool.tag}`.toLowerCase().includes(q));
      return { ...group, tools };
    })
    .filter((group) => group.tools.length > 0);
}

function renderHomeMode(groups) {
  interactiveTree.innerHTML = "";
  interactiveTree.classList.remove("graph-view");

  const totalTools = osintData.reduce((sum, group) => sum + group.tools.length, 0);
  const totalTags = uniqueTags(osintData);
  const topCategories = [...osintData].sort((a, b) => b.tools.length - a.tools.length).slice(0, 3);

  const wrap = document.createElement("div");
  wrap.className = "home-grid";
  wrap.innerHTML = `
    <article class="home-card"><h3>Categories</h3><div class="metric-value">${osintData.length}</div><p class="workspace-hint">Knowledge buckets indexed</p></article>
    <article class="home-card"><h3>Tools</h3><div class="metric-value">${totalTools}</div><p class="workspace-hint">Curated external resources</p></article>
    <article class="home-card"><h3>Tags</h3><div class="metric-value">${totalTags}</div><p class="workspace-hint">Filter dimensions</p></article>
  `;

  topCategories.forEach((category) => {
    const card = document.createElement("article");
    card.className = "home-card";
    card.innerHTML = `<h3>${category.category}</h3><div class="metric-value">${category.tools.length}</div><p class="workspace-hint">Largest category</p>`;
    wrap.appendChild(card);
  });

  if (appState.favorites.length) {
    const favCard = document.createElement("article");
    favCard.className = "home-card";
    favCard.innerHTML = `<h3>Pinned Tools</h3><div class="metric-value">${appState.favorites.length}</div><p class="workspace-hint">Use these from the right rail</p>`;
    wrap.appendChild(favCard);
  }

  if (!groups.length) {
    const emptyCard = document.createElement("article");
    emptyCard.className = "home-card";
    emptyCard.innerHTML = '<h3>No Matches</h3><p class="workspace-hint">Try a broader query.</p>';
    wrap.appendChild(emptyCard);
  }

  interactiveTree.appendChild(wrap);
  resultsMeta.textContent = "Home dashboard overview.";
}

function renderKnowledgeMode(groups) {
  cardsRoot.innerHTML = "";
  if (!groups.length) {
    cardsRoot.innerHTML = '<p class="workspace-empty">No tools match this filter.</p>';
    resultsMeta.textContent = "0 resources in current filter.";
    return;
  }

  const grid = document.createElement("div");
  grid.className = "knowledge-grid";

  groups.forEach((group) => {
    const card = document.createElement("article");
    card.className = "knowledge-card";
    card.innerHTML = `<h3>${group.category}</h3><span class="workspace-meta">${group.tools.length} tool(s)</span>`;

    const wrap = document.createElement("div");
    wrap.className = "tool-chip-wrap";

    group.tools.forEach((tool) => {
      const row = document.createElement("div");
      row.className = "tool-chip";

      const link = document.createElement("a");
      link.href = tool.url;
      link.target = "_blank";
      link.rel = "noreferrer noopener";
      link.textContent = `${tool.name} · #${tool.tag}`;

      row.appendChild(link);
      row.appendChild(createPinButton(group.category, tool));
      wrap.appendChild(row);
    });

    card.appendChild(wrap);
    grid.appendChild(card);
  });

  cardsRoot.appendChild(grid);
  const total = groups.reduce((sum, g) => sum + g.tools.length, 0);
  resultsMeta.textContent = `Showing ${total} resources in knowledge cards.`;
}

function renderFlowMode() {
  interactiveTree.innerHTML = "";
  interactiveTree.classList.remove("graph-view");

  const root = buildFlowTree();
  const rootWrap = document.createElement("div");
  rootWrap.className = "flow-root";
  renderFlowNode(root, rootWrap);
  interactiveTree.appendChild(rootWrap);
  resultsMeta.textContent = `Flow view${query ? ` filtered by "${query}"` : ""}.`;
}

function renderStatsMode() {
  interactiveTree.innerHTML = "";
  interactiveTree.classList.remove("graph-view");

  const totalCategories = osintData.length;
  const totalTools = osintData.reduce((sum, group) => sum + group.tools.length, 0);
  const totalTags = uniqueTags(osintData);
  const summary = document.createElement("div");
  summary.className = "flow-root";
  summary.innerHTML = `
    <div class="flow-row"><div class="flow-pill root">Categories <span class="tree-item-meta">${totalCategories}</span></div></div>
    <div class="flow-row"><div class="flow-pill root">Tools <span class="tree-item-meta">${totalTools}</span></div></div>
    <div class="flow-row"><div class="flow-pill root">Tags <span class="tree-item-meta">${totalTags}</span></div></div>
    <div class="flow-row"><div class="flow-pill root">Profiles <span class="tree-item-meta">${appState.profiles.length}</span></div></div>
    <div class="flow-row"><div class="flow-pill root">Pinned Tools <span class="tree-item-meta">${appState.favorites.length}</span></div></div>
  `;
  interactiveTree.appendChild(summary);
  resultsMeta.textContent = "Stats mode summary.";
}

function applyBoardLayout(mode) {
  const workspace = mode === "workspace";
  const knowledge = mode === "knowledge";
  const canvas = !workspace && !knowledge;

  workspacePanel.classList.toggle("hidden", !workspace);
  cardsRoot.classList.toggle("hidden", !knowledge);
  treeStage.classList.toggle("hidden", !canvas);

  const showBoardActions = mode === "flow";
  boardActions.classList.toggle("hidden", !showBoardActions);
}

function setBoardMode(mode) {
  boardMode = mode;
  applyBoardLayout(mode);

  if (mode === "home") boardTitle.textContent = "Home Dashboard";
  if (mode === "knowledge") boardTitle.textContent = "Knowledge Cards";
  if (mode === "flow") boardTitle.textContent = "Flow Explorer";
  if (mode === "stats") boardTitle.textContent = "Statistics";
  if (mode === "workspace") boardTitle.textContent = "Advanced Profile Builder";

  renderAll();
}

function renderSidebar() {
  if (navMode === "folders") {
    foldersModeBtn.classList.add("active");
    tagsModeBtn.classList.remove("active");
    renderSidebarFolders();
  } else {
    foldersModeBtn.classList.remove("active");
    tagsModeBtn.classList.add("active");
    renderSidebarTags();
  }
}

function getProfileFormData() {
  const form = new FormData(profileForm);
  return {
    id: appState.activeProfileId || safeId(),
    fullName: String(form.get("profileFullName") || "").trim(),
    alias: String(form.get("profileAlias") || "").trim(),
    dob: String(form.get("profileDob") || "").trim(),
    location: String(form.get("profileLocation") || "").trim(),
    emails: String(form.get("profileEmails") || "").trim(),
    phones: String(form.get("profilePhones") || "").trim(),
    usernames: String(form.get("profileUsernames") || "").trim(),
    employers: String(form.get("profileEmployers") || "").trim(),
    relationship: String(form.get("profileRelationship") || "").trim(),
    tags: String(form.get("profileTags") || "").trim(),
    risk: String(form.get("profileRisk") || "medium").trim(),
    notes: String(form.get("profileNotes") || "").trim(),
    updatedAt: Date.now()
  };
}

function setProfileFormData(profile) {
  profileForm.profileFullName.value = profile.fullName || "";
  profileForm.profileAlias.value = profile.alias || "";
  profileForm.profileDob.value = profile.dob || "";
  profileForm.profileLocation.value = profile.location || "";
  profileForm.profileEmails.value = profile.emails || "";
  profileForm.profilePhones.value = profile.phones || "";
  profileForm.profileUsernames.value = profile.usernames || "";
  profileForm.profileEmployers.value = profile.employers || "";
  profileForm.profileRelationship.value = profile.relationship || "";
  profileForm.profileTags.value = profile.tags || "";
  profileForm.profileRisk.value = profile.risk || "medium";
  profileForm.profileNotes.value = profile.notes || "";
}

function resetProfileForm() {
  appState.activeProfileId = null;
  profileForm.reset();
  profileForm.profileRisk.value = "medium";
  appState.profileDraft = {};
  saveAppState();
}

function renderProfiles() {
  profileList.innerHTML = "";

  if (!appState.profiles.length) {
    profileList.innerHTML = '<p class="workspace-empty">No profiles saved yet.</p>';
    return;
  }

  appState.profiles.forEach((profile) => {
    const item = document.createElement("article");
    item.className = "workspace-item";
    item.draggable = true;
    item.dataset.id = profile.id;

    item.innerHTML = `
      <h4>${profile.fullName || "Unnamed profile"}</h4>
      <span class="workspace-meta">${profile.alias || "no alias"} • risk: ${profile.risk || "medium"}</span>
      <p>${(profile.notes || "No notes.").slice(0, 180)}</p>
      <div class="workspace-item-actions">
        <button class="workspace-mini-btn" type="button" data-action="edit" data-id="${profile.id}">Edit</button>
        <button class="workspace-mini-btn" type="button" data-action="delete" data-id="${profile.id}">Delete</button>
      </div>
    `;

    item.addEventListener("dragstart", () => {
      draggedProfileId = profile.id;
      item.classList.add("dragging");
    });
    item.addEventListener("dragend", () => {
      draggedProfileId = null;
      item.classList.remove("dragging");
    });
    item.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    item.addEventListener("drop", (event) => {
      event.preventDefault();
      if (!draggedProfileId || draggedProfileId === profile.id) return;

      const from = appState.profiles.findIndex((p) => p.id === draggedProfileId);
      const to = appState.profiles.findIndex((p) => p.id === profile.id);
      if (from < 0 || to < 0) return;

      const [moved] = appState.profiles.splice(from, 1);
      appState.profiles.splice(to, 0, moved);
      saveAppState();
      renderProfiles();
      setStatus("Profile order updated.");
    });

    profileList.appendChild(item);
  });
}

function renderWorkspaceMode() {
  renderProfiles();
  resultsMeta.textContent = profileSummaryText();
}

function renderAll() {
  const groups = filterData();
  renderSidebar();
  renderFavorites();

  if (boardMode === "home") {
    renderHomeMode(groups);
    return;
  }
  if (boardMode === "knowledge") {
    renderKnowledgeMode(groups);
    return;
  }
  if (boardMode === "flow") {
    renderFlowMode();
    return;
  }
  if (boardMode === "stats") {
    renderStatsMode();
    return;
  }
  renderWorkspaceMode();
}

searchInput.addEventListener("input", (event) => {
  query = event.target.value;
  renderAll();
});

foldersModeBtn.addEventListener("click", () => {
  navMode = "folders";
  setStatus("Sidebar switched to folder mode.");
  renderSidebar();
});

tagsModeBtn.addEventListener("click", () => {
  navMode = "tags";
  setStatus("Sidebar switched to tag mode.");
  renderSidebar();
});

homeBtn.addEventListener("click", () => {
  setActiveRail(homeBtn);
  setBoardMode("home");
  setStatus("Home dashboard active.");
});

knowledgeBtn.addEventListener("click", () => {
  setActiveRail(knowledgeBtn);
  setBoardMode("knowledge");
  setStatus("Knowledge cards active.");
});

flowBtn.addEventListener("click", () => {
  expandedFlowNodes.clear();
  expandedFlowNodes.add("root");
  setActiveRail(flowBtn);
  setBoardMode("flow");
  setStatus("Flow mode active. Branches start collapsed.");
});

statsBtn.addEventListener("click", () => {
  setActiveRail(statsBtn);
  setBoardMode("stats");
  setStatus("Stats mode active.");
});

workspaceBtn.addEventListener("click", () => {
  setActiveRail(workspaceBtn);
  setBoardMode("workspace");
  setStatus("Advanced Profile Builder active.");
});

themeToggle.addEventListener("click", () => {
  const isLight = body.classList.contains("light");
  body.classList.toggle("light", !isLight);
  body.classList.toggle("dark", isLight);
  localStorage.setItem("osintAtlasTheme", isLight ? "dark" : "light");
  setStatus(`Switched to ${isLight ? "dark" : "light"} mode.`);
});

expandAllBtn.addEventListener("click", () => {
  if (boardMode !== "flow") return;
  expandedFlowNodes.clear();
  expandedFlowNodes.add("root");
  osintData.forEach((group) => {
    expandedFlowNodes.add(`cat:${group.category}`);
    new Set(group.tools.map((tool) => tool.tag)).forEach((tag) => expandedFlowNodes.add(`tag:${group.category}:${tag}`));
  });
  renderFlowMode();
  setStatus("Expanded all flow branches.");
});

collapseAllBtn.addEventListener("click", () => {
  if (boardMode !== "flow") return;
  expandedFlowNodes.clear();
  expandedFlowNodes.add("root");
  renderFlowMode();
  setStatus("Collapsed flow to root.");
});

zoomInBtn.addEventListener("click", () => {
  if (boardMode !== "flow") return;
  setZoom(treeZoom + 0.1);
});

zoomOutBtn.addEventListener("click", () => {
  if (boardMode !== "flow") return;
  setZoom(treeZoom - 0.1);
});

submitScoreBtn.addEventListener("click", () => {
  setStatus("Demo rating submitted.");
});

sendFeedbackBtn.addEventListener("click", () => {
  const selected = [issueDead, issuePaywalled, issueIncorrect].filter((item) => item.checked).length;
  setStatus(selected ? `Feedback queued with ${selected} issue flag(s).` : "Select at least one issue flag first.");
});

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const profile = getProfileFormData();
  if (!profile.fullName) {
    setStatus("Full name is required.");
    return;
  }

  const existingIndex = appState.profiles.findIndex((entry) => entry.id === profile.id);
  if (existingIndex >= 0) appState.profiles[existingIndex] = profile;
  else appState.profiles.unshift(profile);

  appState.activeProfileId = profile.id;
  appState.profileDraft = profile;
  saveAppState();
  renderProfiles();
  setStatus(existingIndex >= 0 ? "Profile updated." : "Profile created.");
});

profileForm.addEventListener("input", () => {
  appState.profileDraft = getProfileFormData();
  saveAppState();
});

profileList.addEventListener("click", (event) => {
  const actionBtn = event.target.closest("button[data-action]");
  if (!actionBtn) return;

  const id = actionBtn.dataset.id;
  const action = actionBtn.dataset.action;
  const profile = appState.profiles.find((entry) => entry.id === id);
  if (!profile) return;

  if (action === "edit") {
    appState.activeProfileId = id;
    appState.profileDraft = profile;
    setProfileFormData(profile);
    saveAppState();
    setStatus(`Loaded profile: ${profile.fullName}`);
    return;
  }

  if (action === "delete") {
    appState.profiles = appState.profiles.filter((entry) => entry.id !== id);
    if (appState.activeProfileId === id) resetProfileForm();
    saveAppState();
    renderProfiles();
    setStatus("Profile deleted.");
  }
});

exportProfilesBtn.addEventListener("click", () => {
  const payload = JSON.stringify({ profiles: appState.profiles, exportedAt: Date.now() }, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `justosint-profiles-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  setStatus("Profiles exported.");
});

importProfilesInput.addEventListener("change", async (event) => {
  const [file] = event.target.files || [];
  if (!file) return;

  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    const incoming = Array.isArray(parsed) ? parsed : parsed.profiles;

    if (!Array.isArray(incoming)) {
      setStatus("Invalid import file format.");
      return;
    }

    appState.profiles = incoming
      .filter((entry) => entry && typeof entry === "object")
      .map((entry) => ({ ...entry, id: entry.id || safeId(), updatedAt: entry.updatedAt || Date.now() }));

    appState.activeProfileId = null;
    appState.profileDraft = {};
    profileForm.reset();
    profileForm.profileRisk.value = "medium";
    saveAppState();
    renderProfiles();
    setStatus(`Imported ${appState.profiles.length} profile(s).`);
  } catch (_error) {
    setStatus("Import failed. Please use a valid JSON export file.");
  } finally {
    importProfilesInput.value = "";
  }
});

clearWorkspaceBtn.addEventListener("click", () => {
  if (!confirm("Delete all saved profiles?")) return;
  appState.profiles = [];
  resetProfileForm();
  saveAppState();
  renderProfiles();
  setStatus("All profiles cleared.");
});

function enableDragPan() {
  let pointerId = null;
  let startX = 0;
  let startY = 0;
  let originLeft = 0;
  let originTop = 0;
  let isPanning = false;
  let suppressClick = false;

  function resetPan() {
    pointerId = null;
    isPanning = false;
    treeStage.classList.remove("panning");
    body.classList.remove("no-select");
  }

  treeStage.addEventListener("pointerdown", (event) => {
    if (boardMode === "workspace" || boardMode === "knowledge") return;
    if (event.button !== 0) return;
    if (event.target.closest("input, textarea, select, button, a, label")) return;

    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    originLeft = treeStage.scrollLeft;
    originTop = treeStage.scrollTop;
    suppressClick = false;
    treeStage.setPointerCapture(pointerId);
  });

  treeStage.addEventListener("pointermove", (event) => {
    if (pointerId !== event.pointerId) return;

    const dx = event.clientX - startX;
    const dy = event.clientY - startY;

    if (!isPanning && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
      isPanning = true;
      suppressClick = true;
      treeStage.classList.add("panning");
      body.classList.add("no-select");
    }

    if (!isPanning) return;
    treeStage.scrollLeft = originLeft - dx;
    treeStage.scrollTop = originTop - dy;
    event.preventDefault();
  });

  treeStage.addEventListener("pointerup", resetPan);
  treeStage.addEventListener("pointercancel", resetPan);
  window.addEventListener("blur", resetPan);

  treeStage.addEventListener(
    "click",
    (event) => {
      if (!suppressClick) return;
      event.preventDefault();
      event.stopPropagation();
      suppressClick = false;
    },
    true
  );
}

(function initTheme() {
  const saved = localStorage.getItem("osintAtlasTheme");
  if (saved === "light") {
    body.classList.add("light");
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
    body.classList.remove("light");
  }
})();

loadAppState();
enableDragPan();
updateTreeBadge();
setZoom(1);

if (appState.activeProfileId) {
  const current = appState.profiles.find((entry) => entry.id === appState.activeProfileId);
  if (current) setProfileFormData(current);
  else if (appState.profileDraft && Object.keys(appState.profileDraft).length) setProfileFormData(appState.profileDraft);
} else if (appState.profileDraft && Object.keys(appState.profileDraft).length) {
  setProfileFormData(appState.profileDraft);
}

setActiveRail(homeBtn);
setBoardMode("home");
setStatus("Ready. Use Knowledge for cards, Flow for collapsed tree navigation, and Workspace for profile building.");
