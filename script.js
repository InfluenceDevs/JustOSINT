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
const treeViewport = document.getElementById("treeViewport");
const graphSvg = document.getElementById("graphSvg");
const boardTitle = document.getElementById("boardTitle");
const zoomLabel = document.getElementById("zoomLabel");
const treeBadge = document.querySelector(".tree-badge");

const homeBtn = document.getElementById("homeBtn");
const knowledgeBtn = document.getElementById("knowledgeBtn");
const flowBtn = document.getElementById("flowBtn");
const statsBtn = document.getElementById("statsBtn");
const foldersModeBtn = document.getElementById("foldersModeBtn");
const tagsModeBtn = document.getElementById("tagsModeBtn");
const expandAllBtn = document.getElementById("expandAllBtn");
const collapseAllBtn = document.getElementById("collapseAllBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");
const zoomInBtn = document.getElementById("zoomInBtn");
const submitScoreBtn = document.getElementById("submitScoreBtn");
const sendFeedbackBtn = document.getElementById("sendFeedbackBtn");
const issueDead = document.getElementById("issueDead");
const issuePaywalled = document.getElementById("issuePaywalled");
const issueIncorrect = document.getElementById("issueIncorrect");

let activeCategory = "all";
let query = "";
let navMode = "folders";
let treeZoom = 1;
let boardMode = "tree";
const expandedCategories = new Set(["Public Records", "Search Engines", "Domain Name"]);
const expandedFlowNodes = new Set(["root", "cat:Public Records", "cat:Search Engines", "cat:Domain Name"]);

function uniqueTags(data) {
  return new Set(data.flatMap((group) => group.tools.map((tool) => tool.tag))).size;
}

function tagMapFromData() {
  const map = new Map();
  osintData.forEach((group) => {
    group.tools.forEach((tool) => {
      if (!map.has(tool.tag)) {
        map.set(tool.tag, []);
      }
      map.get(tool.tag).push({ ...tool, category: group.category });
    });
  });
  return Array.from(map.entries())
    .map(([tag, tools]) => ({ tag, tools }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
}

function normalizedQuery() {
  return query.trim().toLowerCase();
}

function setStatus(text) {
  actionStatus.textContent = text;
}

function setActiveRail(button) {
  [homeBtn, knowledgeBtn, flowBtn, statsBtn].forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

function setZoom(value) {
  treeZoom = Math.max(0.55, Math.min(2, value));
  interactiveTree.style.transform = `scale(${treeZoom})`;
  zoomLabel.textContent = `${Math.round(treeZoom * 100)}%`;
}

function updateTreeBadge() {
  treeBadge.textContent = String(osintData.length);
}

function matchesNode(text) {
  const q = normalizedQuery();
  if (!q) return true;
  return text.toLowerCase().includes(q);
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

    if (q && !categoryMatch && toolMatches.length === 0) {
      return;
    }

    const node = document.createElement("div");
    node.className = "tree-node";

    const row = document.createElement("div");
    row.className = "tree-row";

    const toggleBtn = document.createElement("button");
    toggleBtn.type = "button";
    toggleBtn.className = "tree-toggle";
    const shouldOpen = (q && (categoryMatch || toolMatches.length > 0)) || expandedCategories.has(group.category);
    toggleBtn.textContent = shouldOpen ? "▾" : "▸";
    toggleBtn.setAttribute("aria-expanded", String(shouldOpen));
    toggleBtn.addEventListener("click", () => {
      if (expandedCategories.has(group.category)) {
        expandedCategories.delete(group.category);
      } else {
        expandedCategories.add(group.category);
      }
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
        const leaf = document.createElement("a");
        leaf.className = "tree-leaf";
        leaf.href = tool.url;
        leaf.target = "_blank";
        leaf.rel = "noreferrer noopener";
        leaf.innerHTML = `<span class="tree-leaf-name">${tool.name}</span><span class="tree-item-meta">${tool.tag}</span>`;
        children.appendChild(leaf);
      });
      node.appendChild(children);
    }

    categoryNav.appendChild(node);
  });
}

function renderSidebarTags() {
  categoryNav.innerHTML = "";
  const grouped = tagMapFromData();
  const q = normalizedQuery();

  grouped.forEach((entry) => {
    const tools = entry.tools.filter((tool) => {
      if (!q) return true;
      return matchesNode(`${entry.tag} ${tool.name} ${tool.category}`);
    });

    if (!tools.length) {
      return;
    }

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
      if (expandedCategories.has(tagId)) {
        expandedCategories.delete(tagId);
      } else {
        expandedCategories.add(tagId);
      }
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
        const leaf = document.createElement("a");
        leaf.className = "tree-leaf";
        leaf.href = tool.url;
        leaf.target = "_blank";
        leaf.rel = "noreferrer noopener";
        leaf.innerHTML = `<span class="tree-leaf-name">${tool.name}</span><span class="tree-item-meta">${tool.category}</span>`;
        children.appendChild(leaf);
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
      if (expandedFlowNodes.has(node.id)) {
        expandedFlowNodes.delete(node.id);
      } else {
        expandedFlowNodes.add(node.id);
      }
      renderInteractiveTree();
    });
  }

  if (node.kind === "folder") {
    label.addEventListener("click", () => {
      activeCategory = node.category;
      renderAll();
    });
  }

  row.appendChild(toggle);
  row.appendChild(label);
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
    const bucket = new Map();
    group.tools.forEach((tool) => {
      if (!bucket.has(tool.tag)) {
        bucket.set(tool.tag, []);
      }
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

  if (!q) {
    return root;
  }

  function filterNode(node) {
    const nodeMatch = matchesNode(node.label);
    if (!node.children) {
      return nodeMatch ? { ...node } : null;
    }

    const filteredChildren = node.children.map((child) => filterNode(child)).filter(Boolean);

    if (!nodeMatch && filteredChildren.length === 0) {
      return null;
    }

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

function renderTreeMode() {
  graphSvg.classList.remove("active");
  graphSvg.innerHTML = "";
  treeViewport.style.width = "";
  treeViewport.style.height = "";
  interactiveTree.classList.remove("graph-view");
  interactiveTree.innerHTML = "";

  const root = buildFlowTree();
  const rootWrap = document.createElement("div");
  rootWrap.className = "flow-root";
  renderFlowNode(root, rootWrap);
  interactiveTree.appendChild(rootWrap);
}

function renderGraphMode() {
  interactiveTree.classList.add("graph-view");
  interactiveTree.innerHTML = "";

  const graphWidth = Math.max(1500, Math.round(1500 * treeZoom));
  const categoryGapY = 72;
  const topPad = 70;

  const categories = osintData.filter((group) => {
    if (!query) return true;
    return matchesNode(group.category) || group.tools.some((tool) => matchesNode(`${tool.name} ${tool.tag}`));
  });

  if (!categories.length) {
    treeViewport.style.width = "980px";
    treeViewport.style.height = "620px";
    graphSvg.classList.remove("active");
    const empty = document.createElement("div");
    empty.className = "flow-root";
    empty.innerHTML = '<div class="flow-row"><div class="flow-pill root">No graph matches for current filter</div></div>';
    interactiveTree.appendChild(empty);
    return;
  }

  const graphHeight = Math.max(860, topPad + categories.length * categoryGapY + 120);
  treeViewport.style.width = `${graphWidth}px`;
  treeViewport.style.height = `${graphHeight}px`;

  graphSvg.setAttribute("viewBox", `0 0 ${graphWidth} ${graphHeight}`);
  graphSvg.classList.add("active");
  graphSvg.innerHTML = "";

  const rootNode = document.createElement("div");
  rootNode.className = "graph-node root";
  rootNode.style.left = "40px";
  rootNode.style.top = "32px";
  rootNode.textContent = `OSINT Framework (${categories.length})`;
  interactiveTree.appendChild(rootNode);

  categories.forEach((group, idx) => {
    const y = topPad + idx * categoryGapY;
    const x = 300;

    const catNode = document.createElement("div");
    catNode.className = "graph-node folder";
    catNode.style.left = `${x}px`;
    catNode.style.top = `${y}px`;
    catNode.textContent = `${group.category} (${group.tools.length})`;
    catNode.addEventListener("click", () => {
      activeCategory = group.category;
      boardMode = "tree";
      setActiveRail(knowledgeBtn);
      boardTitle.textContent = "Knowledge Tree";
      setStatus(`Focused category: ${group.category}`);
      renderAll();
    });
    interactiveTree.appendChild(catNode);

    const rootPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    rootPath.setAttribute("class", "graph-link root-to-category");
    rootPath.setAttribute("d", `M 170 52 C 220 52, 230 ${y + 14}, ${x - 10} ${y + 14}`);
    graphSvg.appendChild(rootPath);

    const tools = group.tools.slice(0, 6);
    tools.forEach((tool, tIndex) => {
      const tx = 700 + (tIndex % 3) * 210;
      const ty = y + Math.floor(tIndex / 3) * 28;

      const toolNode = document.createElement("a");
      toolNode.className = "graph-node tool";
      toolNode.href = tool.url;
      toolNode.target = "_blank";
      toolNode.rel = "noreferrer noopener";
      toolNode.style.left = `${tx}px`;
      toolNode.style.top = `${ty}px`;
      toolNode.textContent = tool.name;
      interactiveTree.appendChild(toolNode);

      const toolPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      toolPath.setAttribute("class", "graph-link");
      toolPath.setAttribute("d", `M ${x + 190} ${y + 14} C ${x + 260} ${y + 14}, ${tx - 35} ${ty + 13}, ${tx - 6} ${ty + 13}`);
      graphSvg.appendChild(toolPath);
    });
  });
}

function renderStatsMode() {
  graphSvg.classList.remove("active");
  graphSvg.innerHTML = "";
  treeViewport.style.width = "";
  treeViewport.style.height = "";
  interactiveTree.classList.add("graph-view");
  interactiveTree.innerHTML = "";

  const totalCategories = osintData.length;
  const totalTools = osintData.reduce((sum, group) => sum + group.tools.length, 0);
  const totalTags = uniqueTags(osintData);

  const topCategories = [...osintData]
    .sort((a, b) => b.tools.length - a.tools.length)
    .slice(0, 6);

  const tagCounts = new Map();
  osintData.forEach((group) => {
    group.tools.forEach((tool) => {
      tagCounts.set(tool.tag, (tagCounts.get(tool.tag) || 0) + 1);
    });
  });
  const topTags = [...tagCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  const summary = document.createElement("div");
  summary.className = "flow-root";
  summary.innerHTML = `
    <div class="flow-row"><div class="flow-pill root">Categories <span class="tree-item-meta">${totalCategories}</span></div></div>
    <div class="flow-row"><div class="flow-pill root">Tools <span class="tree-item-meta">${totalTools}</span></div></div>
    <div class="flow-row"><div class="flow-pill root">Tags <span class="tree-item-meta">${totalTags}</span></div></div>
    <div class="flow-row"><div class="flow-pill folder">Top Categories</div></div>
  `;

  const catWrap = document.createElement("div");
  catWrap.className = "flow-children";
  topCategories.forEach((category) => {
    const row = document.createElement("div");
    row.className = "flow-row";
    row.innerHTML = `<div class="flow-pill folder">${category.category} <span class="tree-item-meta">${category.tools.length}</span></div>`;
    catWrap.appendChild(row);
  });

  summary.appendChild(catWrap);

  const tagsHeader = document.createElement("div");
  tagsHeader.className = "flow-row";
  tagsHeader.innerHTML = '<div class="flow-pill tag">Top Tags</div>';
  summary.appendChild(tagsHeader);

  const tagsWrap = document.createElement("div");
  tagsWrap.className = "flow-children";
  topTags.forEach(([tag, count]) => {
    const row = document.createElement("div");
    row.className = "flow-row";
    row.innerHTML = `<div class="flow-pill tag">#${tag} <span class="tree-item-meta">${count}</span></div>`;
    tagsWrap.appendChild(row);
  });
  summary.appendChild(tagsWrap);

  interactiveTree.appendChild(summary);
}

function renderInteractiveTree() {
  if (boardMode === "graph") {
    renderGraphMode();
    return;
  }
  if (boardMode === "stats") {
    renderStatsMode();
    return;
  }
  renderTreeMode();
}

function setBoardMode(mode) {
  boardMode = mode;
  if (mode === "tree") {
    boardTitle.textContent = "Knowledge Tree";
  } else if (mode === "graph") {
    boardTitle.textContent = "Graph View";
  } else {
    boardTitle.textContent = "Tree + Stats";
  }
  renderInteractiveTree();
}

function filterData() {
  const q = normalizedQuery();

  return osintData
    .filter((group) => activeCategory === "all" || group.category === activeCategory)
    .map((group) => {
      const tools = group.tools.filter((tool) => {
        if (!q) return true;
        return `${group.category} ${tool.name} ${tool.tag}`.toLowerCase().includes(q);
      });
      return { ...group, tools };
    })
    .filter((group) => group.tools.length > 0);
}

function renderMeta(groups) {
  const total = groups.reduce((sum, g) => sum + g.tools.length, 0);
  const scope = activeCategory === "all" ? "all categories" : activeCategory;
  const byQuery = query ? ` filtered by \"${query}\"` : "";
  resultsMeta.textContent = `Showing ${total} resources in ${scope}${byQuery}`;
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

function renderAll() {
  const groups = filterData();
  renderSidebar();
  renderInteractiveTree();
  renderMeta(groups);
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
  query = "";
  searchInput.value = "";
  activeCategory = "all";
  boardMode = "tree";
  expandedFlowNodes.clear();
  expandedFlowNodes.add("root");
  setActiveRail(homeBtn);
  boardTitle.textContent = "Interactive OSINT Tree";
  setStatus("Reset view to home state.");
  setZoom(1);
  renderAll();
});

knowledgeBtn.addEventListener("click", () => {
  setActiveRail(knowledgeBtn);
  setStatus("Knowledge tree mode active.");
  setBoardMode("tree");
});

flowBtn.addEventListener("click", () => {
  setActiveRail(flowBtn);
  setStatus("Graph mode active with curved links.");
  setBoardMode("graph");
});

statsBtn.addEventListener("click", () => {
  setActiveRail(statsBtn);
  const totalTools = osintData.reduce((sum, group) => sum + group.tools.length, 0);
  const tags = uniqueTags(osintData);
  setStatus(`Stats: ${osintData.length} categories, ${totalTools} tools, ${tags} tags.`);
  setBoardMode("stats");
});

themeToggle.addEventListener("click", () => {
  const isLight = body.classList.contains("light");
  body.classList.toggle("light", !isLight);
  body.classList.toggle("dark", isLight);
  localStorage.setItem("osintAtlasTheme", isLight ? "dark" : "light");
  setStatus(`Switched to ${isLight ? "dark" : "light"} mode.`);
});

expandAllBtn.addEventListener("click", () => {
  expandedFlowNodes.clear();
  expandedFlowNodes.add("root");
  osintData.forEach((group) => {
    expandedFlowNodes.add(`cat:${group.category}`);
    const tags = new Set(group.tools.map((tool) => tool.tag));
    tags.forEach((tag) => expandedFlowNodes.add(`tag:${group.category}:${tag}`));
  });
  setStatus("Expanded all tree branches.");
  if (boardMode === "tree") {
    renderInteractiveTree();
  }
});

collapseAllBtn.addEventListener("click", () => {
  expandedFlowNodes.clear();
  expandedFlowNodes.add("root");
  setStatus("Collapsed tree to root.");
  if (boardMode === "tree") {
    renderInteractiveTree();
  }
});

zoomInBtn.addEventListener("click", () => {
  setZoom(treeZoom + 0.1);
  if (boardMode === "graph") {
    renderInteractiveTree();
  }
});

zoomOutBtn.addEventListener("click", () => {
  setZoom(treeZoom - 0.1);
  if (boardMode === "graph") {
    renderInteractiveTree();
  }
});

submitScoreBtn.addEventListener("click", () => {
  setStatus("Demo rating submitted. Connect this action to a backend endpoint when ready.");
});

sendFeedbackBtn.addEventListener("click", () => {
  const selected = [issueDead, issuePaywalled, issueIncorrect].filter((item) => item.checked).length;
  setStatus(selected ? `Feedback queued with ${selected} issue flag(s).` : "Select at least one issue flag first.");
});

(function enableDragPan() {
  let pointerDown = false;
  let panning = false;
  let startX = 0;
  let startY = 0;
  let originLeft = 0;
  let originTop = 0;
  let suppressClick = false;

  function endPan() {
    pointerDown = false;
    panning = false;
    treeStage.classList.remove("panning");
    body.classList.remove("no-select");
  }

  treeStage.addEventListener("mousedown", (event) => {
    if (event.button !== 0) return;
    if (event.target.closest("input, textarea, select")) return;
    pointerDown = true;
    panning = false;
    suppressClick = false;
    startX = event.clientX;
    startY = event.clientY;
    originLeft = treeStage.scrollLeft;
    originTop = treeStage.scrollTop;
  });

  window.addEventListener("mousemove", (event) => {
    if (!pointerDown) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;

    if (!panning && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) {
      panning = true;
      suppressClick = true;
      treeStage.classList.add("panning");
      body.classList.add("no-select");
    }

    if (!panning) return;
    treeStage.scrollLeft = originLeft - dx;
    treeStage.scrollTop = originTop - dy;
    event.preventDefault();
  });

  window.addEventListener("mouseup", () => {
    endPan();
  });

  window.addEventListener("blur", () => {
    endPan();
  });

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
})();

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

setZoom(1);
updateTreeBadge();
renderAll();
setStatus("Ready. Drag the canvas to pan, zoom controls to scale, and Flow for graph mode.");
