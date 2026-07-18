const imageExt = /\.(png|jpe?g|webp)$/i;
const videoExt = /\.(mp4|m4v|webm)$/i;
const rel = path => path;

function media(base, names) {
  return names.map(name => `${base}/${name}`);
}

const projects = [
  {
    category: "游戏 CG",
    index: "01",
    title: "MLBB / 决胜巅峰",
    en: "MOBILE LEGENDS · LAUNCH CG",
    role: "Lighting · Rendering · Compositing",
    cover: "个人作品集/游戏CG/决胜巅峰宣传CG/02.png",
    video: rel("https://pub-259330d9232b4602a06a289559b08dc3.r2.dev/videos/game-01-mlbb.mp4"),
    images: media("个人作品集/游戏CG/决胜巅峰宣传CG", ["02.png", "01.png", "03.png", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"])
  },
  {
    category: "游戏 CG",
    index: "02",
    title: "王者荣耀 × 宝格丽",
    en: "HONOR OF KINGS × BVLGARI",
    role: "Lighting · Rendering · Compositing",
    cover: "个人作品集/游戏CG/王者荣耀&宝格丽宣传CG/宝格丽7.png",
    video: rel("https://pub-259330d9232b4602a06a289559b08dc3.r2.dev/videos/game-02-bvlgari.mp4"),
    images: media("个人作品集/游戏CG/王者荣耀&宝格丽宣传CG", ["宝格丽1.png", "宝格丽2.png", "宝格丽3.png", "宝格丽4.png", "宝格丽5.png", "宝格丽6.png", "宝格丽7.png", "宝格丽8.png"])
  },
  {
    category: "游戏 CG",
    index: "03",
    title: "英雄联盟 终极魔典",
    en: "LEAGUE OF LEGENDS · ULTIMATE SPELLBOOK",
    role: "Look Development · Rendering",
    cover: rel("个人作品集/游戏CG/英雄联盟 终极魔典宣传CG/终极魔典1.png"),
    video: rel("https://pub-259330d9232b4602a06a289559b08dc3.r2.dev/videos/game-03-spellbook.mp4"),
    images: media("个人作品集/游戏CG/英雄联盟 终极魔典宣传CG", ["终极魔典1.png", "终极魔典2.png", "终极魔典3.png", "终极魔典4.png", "终极魔典5.png", "终极魔典6.png"])
  },
  {
    category: "游戏 CG",
    index: "04",
    title: "金铲铲 KDA 女团",
    en: "BATTLE OF GOLDEN SPATULA · KDA",
    role: "Look Development · Rendering",
    cover: rel("个人作品集/游戏CG/金铲铲 KDA女团CG/kda1.png"),
    video: rel("https://pub-259330d9232b4602a06a289559b08dc3.r2.dev/videos/game-04-kda.mp4"),
    images: media("个人作品集/游戏CG/金铲铲 KDA女团CG", ["kda8.png", "kda1.png", "kda2.png", "kda3.png", "kda4.png", "kda5.png", "kda6.png", "kda7.png"])
  },
  {
    category: "游戏 CG",
    index: "05",
    title: "金铲铲 灵魂莲华",
    en: "BATTLE OF GOLDEN SPATULA · SPIRIT BLOSSOM",
    role: "Lighting · Rendering",
    cover: "个人作品集/游戏CG/金铲铲 灵魂莲华CG/永恩5.png",
    video: rel("https://pub-259330d9232b4602a06a289559b08dc3.r2.dev/videos/game-05-yone.mp4"),
    images: media("个人作品集/游戏CG/金铲铲 灵魂莲华CG", ["永恩2.png", "永恩1.png", "永恩3.png", "永恩4.png", "永恩5.png"])
  },
  {
    category: "游戏 CG",
    index: "06",
    title: "金铲铲 香水女仆",
    en: "BATTLE OF GOLDEN SPATULA · PERFUME MAID",
    role: "Lighting · Rendering · Compositing",
    cover: "个人作品集/游戏CG/金铲铲 香水女仆CG/香水女仆4.png",
    video: rel("https://pub-259330d9232b4602a06a289559b08dc3.r2.dev/videos/game-06-perfume-maid.mp4"),
    images: media("个人作品集/游戏CG/金铲铲 香水女仆CG", ["香水女仆1.png", "香水女仆2.png", "香水女仆3.png", "香水女仆4.png", "香水女仆5.png", "香水女仆6.png", "香水女仆7.jpg"])
  },
  {
    category: "游戏 CG",
    index: "07",
    title: "王者荣耀 无限男团",
    en: "HONOR OF KINGS · BOY BAND",
    role: "Lighting · Rendering",
    cover: "个人作品集/游戏CG/王者荣耀 无限男团宣传CG/8.jpg",
    video: rel("https://pub-259330d9232b4602a06a289559b08dc3.r2.dev/videos/game-07-boy-band.mp4"),
    images: media("个人作品集/游戏CG/王者荣耀 无限男团宣传CG", ["10.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"])
  },
  {
    category: "产品广告",
    index: "08",
    title: "POCO 手机",
    en: "POCO · PRODUCT FILM",
    role: "CGI · Lighting · Rendering",
    cover: "个人作品集/产品广告/POCO手机/02.jpg",
    video: rel("https://pub-259330d9232b4602a06a289559b08dc3.r2.dev/videos/commercial-01-poco.mp4"),
    images: media("个人作品集/产品广告/POCO手机", ["06.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"])
  },
  {
    category: "产品广告",
    index: "09",
    title: "追觅洗地机",
    en: "DREAME · PRODUCT VISUAL",
    role: "Lighting · Rendering · Compositing",
    cover: rel("个人作品集/产品广告/追觅洗地机/sq020-sh010_ac_v0002.0103.png"),
    video: rel("https://pub-259330d9232b4602a06a289559b08dc3.r2.dev/videos/commercial-02-dreame.mp4"),
    images: media("个人作品集/产品广告/追觅洗地机", ["sq020-sh290_A_Frame_v0003.0098.png", "sq020-sh310_ac_v0003.0082.png", "sq020-sh300_Frame_v0001.0075.png", "sq020-sh280_ac_v0001.0085.png", "sq020-sh250_A_ac_v0002.0160.png", "sq020-sh180_ac_v0001.0019.png"])
  },
  {
    category: "产品广告",
    index: "10",
    title: "MOVA 泳池机",
    en: "MOVA · POOL CLEANER",
    role: "CGI · Motion · Rendering",
    cover: rel("个人作品集/产品广告/MOVA泳池机/sq020-sh190_ac_v0002.0000.png"),
    video: rel("https://pub-259330d9232b4602a06a289559b08dc3.r2.dev/videos/commercial-03-mova.mp4"),
    images: media("个人作品集/产品广告/MOVA泳池机", ["sq020-sh200_ac_v0002.0055.png", "sq020-sh190_ac_v0002.0000.png", "sq020-sh180b_ac_v0002.0025.png", "sq020-sh180a_ac_v0002.0033.png", "sq010-sh160_bc_v0001.0025.png", "sq010-sh150_bc_v0001.0052.png"])
  },
  {
    category: "产品广告",
    index: "11",
    title: "OPPO 手机壁纸",
    en: "OPPO · MOTION WALLPAPER",
    role: "CGI · Style Frames",
    cover: rel("个人作品集/产品广告/OPPO手机壁纸/oppo5.jpg"),
    video: rel("https://pub-259330d9232b4602a06a289559b08dc3.r2.dev/videos/commercial-04-oppo.mp4"),
    images: media("个人作品集/产品广告/OPPO手机壁纸", ["oppo5.jpg", "oppo4.jpg", "oppo3.png", "oppo2.png", "oppo1.png"])
  },
  {
    category: "产品广告",
    index: "12",
    title: "Tiktok 颁奖典礼",
    en: "TIKTOK · AWARDS VISUAL",
    role: "Stage Visual · Rendering",
    cover: "个人作品集/产品广告/Tiktok颁奖典礼/sq010-sh080_dz_v0001.0001.png",
    video: rel("https://pub-259330d9232b4602a06a289559b08dc3.r2.dev/videos/commercial-05-tiktok.mp4"),
    images: media("个人作品集/产品广告/Tiktok颁奖典礼", ["01.png", "sq010-sh060_ac_v0004.0270.png", "sq010-sh080_dz_v0001.0001.png"])
  },
  {
    category: "产品广告",
    index: "13",
    title: "蒙牛冠益乳",
    en: "MENGNIU · PRODUCT FILM",
    role: "Product CGI · Rendering",
    cover: "个人作品集/产品广告/蒙牛冠益乳/sq010-sh110_dz_v0005.0001.png",
    video: rel("https://pub-259330d9232b4602a06a289559b08dc3.r2.dev/videos/commercial-06-mengniu.mp4"),
    images: media("个人作品集/产品广告/蒙牛冠益乳", ["sq010-sh160_ac_v0001.0022.png", "sq010-sh140_ac_v0001.0030.png", "sq010-sh110_dz_v0005.0001.png", "sq010-sh090_dz_v0004.0001.png"])
  },
  {
    category: "产品广告",
    index: "14",
    title: "阳光新能源 光伏板",
    en: "SUNGROW · SOLAR PANEL",
    role: "Product CGI · Rendering",
    cover: "个人作品集/产品广告/阳光新能源 光伏板/sh190_v01.png",
    video: rel("https://pub-259330d9232b4602a06a289559b08dc3.r2.dev/videos/commercial-07-sungrow.mp4"),
    images: media("个人作品集/产品广告/阳光新能源 光伏板", ["sh320.png", "sh190_v02.png", "sh190_v01.png", "sh150_v02.png", "sh150_v01.png", "sh040.png"])
  },
  {
    category: "游戏 CG",
    index: "15",
    title: "QQ飞车 MV",
    en: "QQ SPEED · MUSIC VIDEO",
    role: "Lighting · Rendering · Compositing",
    cover: "个人作品集/游戏CG/QQ飞车 MV/03.png",
    video: rel("个人作品集/游戏CG/QQ飞车 MV/QQ飞车MV.mp4"),
    images: media("个人作品集/游戏CG/QQ飞车 MV", ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png"])
  },
  ...media("个人作品集/个人练习", ["写实渲染合成.png", "序列帧0000.png", "序列帧0001.png", "笔记本.jpg", "键盘01.jpg", "键盘02.jpg", "键盘03.jpg", "键盘04.jpg", "键盘06.jpg", "键盘07.jpg", "键盘08.jpg", "键盘09.jpg", "音响.jpg", "颐莲焕亮面膜.png", "香水.jpg", "龙.jpg"]).map((cover, i) => ({
    category: "视觉实验",
    index: String(i + 16).padStart(2, "0"),
    title: cover.split("/").pop().replace(imageExt, ""),
    en: "PERSONAL EXPLORATION",
    role: "CGI · Art Direction",
    cover,
    images: [cover]
  }))
];

const projectTitleOverrides = {
  "序列帧0000": "布料测试01",
  "序列帧0001": "布料测试02"
};

projects.forEach(project => {
  if (projectTitleOverrides[project.title]) {
    project.title = projectTitleOverrides[project.title];
  }
});

const cats = [
  {
    name: "游戏 CG",
    en: "GAME CINEMATICS",
    count: "08",
    cover: "个人作品集/游戏CG/决胜巅峰宣传CG/02.png",
    desc: "Game cinematics, character films and launch visuals."
  },
  {
    name: "产品广告",
    en: "COMMERCIAL CGI",
    count: "07",
    cover: rel("个人作品集/产品广告/POCO手机/06.jpg"),
    desc: "Commercial CGI for products, brands and campaigns."
  },
  {
    name: "视觉实验",
    en: "PERSONAL STUDIES",
    count: "16",
    cover: "个人作品集/个人练习/写实渲染合成.png",
    desc: "Personal studies in rendering, composition and form."
  }
];
const selectedProjectList = document.querySelector("#selected-project-list");
const allWorksButton = document.querySelector("#all-works-button");
const overlay = document.querySelector("#overlay");
const content = document.querySelector("#overlay-content");
const path = src => /^(?:https?:)?\/\//.test(src) || src.startsWith("file:///") ? src : "./" + src;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const isMobileViewport = matchMedia("(max-width: 760px)");
let overlayLevel = "";
let currentCategory = "";
let revealObserver;
let suppressHistoryPush = false;
let activeLightbox = null;

const revealSelectors = [
  ".hero-frame",
  ".hero-top-decor",
  ".hero-side-decor",
  ".hero-display-type",
  ".section-label",
  ".category-intro",
  ".selected-project-card",
  ".all-project-card",
  ".all-works-button",
  ".about-copy .quote",
  ".about-copy .body",
  ".about-stats > div",
  ".about-capability",
  "#about-button",
  ".portrait",
  ".contact-top",
  ".contact-kicker",
  ".contact h2",
  ".contact-notes p",
  ".field-row",
  ".category-overlay-head",
  ".overlay-project",
  ".detail-title",
  ".detail-info",
  ".detail-video",
  ".gallery figure",
  ".about-hero > span",
  ".about-hero h1",
  ".about-hero img",
  ".bio h2",
  ".bio p",
  ".about-detail-hero .about-kicker",
  ".about-detail-title",
  ".about-detail-portrait",
  ".about-detail-stats > div",
  ".about-block-head",
  ".about-story-copy",
  ".pipeline-item",
  ".tool-group",
  ".timeline-item",
  ".client-intro",
  ".client-group",
  ".about-cta"
].join(",");

function getRevealDelay(element) {
  const parent = element.parentElement;
  const staggerGroups = [
    ".selected-project-list",
    ".about-copy",
    ".about-stats",
    ".contact-left",
    ".contact-notes",
    ".contact-formlike",
    ".overlay-project-grid",
    ".gallery",
    ".pipeline-grid",
    ".tool-grid",
    ".timeline-list",
    ".client-columns"
  ];
  if (!parent || !staggerGroups.some(selector => parent.matches(selector))) return 0;
  return [...parent.children].indexOf(element) * 90;
}

function finishReveal(element) {
  const duration = Number(element.dataset.revealDuration || 820);
  const delay = Number(element.dataset.revealDelay || 0);
  setTimeout(() => {
    element.classList.remove("reveal-ready", "reveal-soft", "is-visible");
    element.style.removeProperty("--reveal-delay");
    element.style.removeProperty("--reveal-duration");
    element.removeAttribute("data-reveal-delay");
    element.removeAttribute("data-reveal-duration");
  }, duration + delay + 120);
}

function prepareReveals(root = document) {
  const elements = [...root.querySelectorAll(revealSelectors)].filter(element => {
    return !element.classList.contains("reveal-ready") && !element.classList.contains("nav");
  });

  if (reduceMotion) {
    elements.forEach(element => element.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        element.classList.add("is-visible");
        revealObserver.unobserve(element);
        finishReveal(element);
      });
    }, {
      root:null,
      threshold:0.18,
      rootMargin:"0px 0px -12% 0px"
    });
  }

  elements.forEach(element => {
    const delay = getRevealDelay(element);
    element.classList.add("reveal-ready");
    if (element.matches(".hero-top-decor,.hero-side-decor,.section-label,.contact-top,.project-meta")) {
      element.classList.add("reveal-soft");
    }
    element.dataset.revealDelay = String(delay);
    element.dataset.revealDuration = element.matches(".hero-frame,.portrait,.detail-video") ? "900" : "780";
    element.style.setProperty("--reveal-delay", `${delay}ms`);
    element.style.setProperty("--reveal-duration", `${element.dataset.revealDuration}ms`);
    revealObserver.observe(element);
  });
}

function loadHeroVideos() {
  const videos = [...document.querySelectorAll(".hero video[data-src]")];
  videos.forEach(video => {
    const source = isMobileViewport.matches && video.dataset.mobileSrc ? video.dataset.mobileSrc : video.dataset.src;
    video.src = source;
    video.load();
    video.play().catch(() => {});
  });
}

const heroMainVideo = document.querySelector(".hero-main-video");
const soundToggle = document.querySelector("#site-sound");
let soundEnabled = localStorage.getItem("portfolioSound") !== "off";
let soundNeedsGesture = false;

async function syncShowreelAudio() {
  if (!heroMainVideo || !soundToggle) return;
  const overlayIsOpen = overlay.classList.contains("open");
  const shouldPlaySound = soundEnabled && !overlayIsOpen && !document.hidden;
  heroMainVideo.volume = 0.65;
  soundNeedsGesture = false;

  if (shouldPlaySound) {
    heroMainVideo.muted = false;
    try {
      await heroMainVideo.play();
    } catch {
      soundNeedsGesture = true;
      heroMainVideo.muted = true;
      heroMainVideo.play().catch(() => {});
    }
  } else {
    heroMainVideo.muted = true;
  }

  const soundIsPlaying = shouldPlaySound && !soundNeedsGesture && !heroMainVideo.muted;
  soundToggle.classList.toggle("is-on", soundIsPlaying);
  soundToggle.classList.toggle("is-blocked", shouldPlaySound && soundNeedsGesture);
  soundToggle.setAttribute("aria-pressed", String(soundIsPlaying));
  soundToggle.setAttribute("aria-label", soundNeedsGesture ? "点击开启背景音乐" : soundIsPlaying ? "关闭背景音乐" : "开启背景音乐");
  soundToggle.querySelector(".sound-label").textContent = soundNeedsGesture ? "TAP FOR SOUND" : soundIsPlaying ? "SOUND ON" : "SOUND OFF";
}

function setSoundEnabled(enabled, remember = true) {
  soundEnabled = enabled;
  if (remember) localStorage.setItem("portfolioSound", enabled ? "on" : "off");
  syncShowreelAudio();
}

function unlockShowreelAudio(event) {
  if (event.target.closest && event.target.closest("#site-sound")) return;
  if (localStorage.getItem("portfolioSound") === "off") return;
  setSoundEnabled(true, false);
  removeEventListener("pointerdown", unlockShowreelAudio, true);
  removeEventListener("keydown", unlockShowreelAudio, true);
}

soundToggle.addEventListener("click", event => {
  event.stopPropagation();
  setSoundEnabled(soundNeedsGesture ? true : !soundEnabled);
});
addEventListener("pointerdown", unlockShowreelAudio, true);
addEventListener("keydown", unlockShowreelAudio, true);
document.addEventListener("visibilitychange", syncShowreelAudio);

const commercialProjects = projects.filter(project => project.category !== "视觉实验");
const selectedProjects = [
  projects[0],
  projects[7],
  ...projects.slice(1, 7),
  projects[8],
  projects[9],
  projects[14]
];

function projectCardMarkup(project, className, index) {
  return `
    <button class="${className} project-layout-${index + 1}" data-project-index="${projects.indexOf(project)}" data-preview-video="${path(project.video)}" aria-label="查看项目：${project.title}">
      <div class="project-visual">
        <img src="${path(project.cover)}" alt="${project.title}">
        <video muted loop playsinline preload="none" aria-hidden="true"></video>
        <span class="project-card-title">${project.title.replace("宣传 CG", "").replace("手机壁纸", "壁纸")}</span>
      </div>
    </button>
  `;
}

function bindProjectPreviews(root) {
  root.querySelectorAll("[data-preview-video]").forEach(card => {
    const video = card.querySelector("video");
    const startPreview = () => {
      if (isMobileViewport.matches || reduceMotion || !video) return;
      if (!video.getAttribute("src")) {
        video.src = card.dataset.previewVideo;
        video.load();
      }
      video.play().then(() => card.classList.add("is-previewing")).catch(() => {});
    };
    const stopPreview = () => {
      if (!video) return;
      video.pause();
      try { video.currentTime = 0; } catch {}
      card.classList.remove("is-previewing");
    };
    card.addEventListener("pointerenter", startPreview);
    card.addEventListener("pointerleave", stopPreview);
    card.addEventListener("click", () => openProject(projects[+card.dataset.projectIndex], { origin:"selected" }));
  });
}

function renderSelectedProjects() {
  selectedProjectList.innerHTML = selectedProjects.map((project, index) => projectCardMarkup(project, "selected-project-card", index)).join("");
  bindProjectPreviews(selectedProjectList);
  prepareReveals(selectedProjectList);
}

function openAllWorks(options = {}) {
  overlayLevel = "all-works";
  currentCategory = "all";
  content.innerHTML = `
    <section class="category-overlay-head all-works-head">
      <span>WORK / 全部作品</span>
      <h1>ALL <em>WORK</em></h1>
      <p>SELECTED COMMERCIAL PROJECTS · ${String(commercialProjects.length).padStart(2, "0")}</p>
    </section>
    <div class="all-project-grid">
      ${commercialProjects.map((project, index) => projectCardMarkup(project, "all-project-card", index)).join("")}
    </div>
  `;
  bindProjectPreviews(content);
  showOverlay();
  if (options.push !== false) pushOverlayState("all-works");
  prepareReveals(content);
}

function currentBaseHash() {
  return location.hash || "#home";
}

function pushOverlayState(level, data = {}) {
  if (suppressHistoryPush) return;
  history.pushState({
    portfolioOverlay:true,
    level,
    baseHash:currentBaseHash(),
    ...data
  }, "", currentBaseHash());
}

function replaceBaseHistoryState() {
  if (!history.state || history.state.portfolioOverlay) {
    history.replaceState({ portfolioOverlay:false }, "", currentBaseHash());
  }
}

function openCategory(category, options = {}) {
  const cat = cats.find(item => item.name === category);
  const visible = projects.filter(project => project.category === category);
  currentCategory = category;
  overlayLevel = "category";
  const isVisual = category === "视觉实验";
  content.innerHTML = `
    <section class="category-overlay-head">
      <span>WORKS / ${cat.en}</span>
      <h1>${cat.name}</h1>
      <p>SELECTED PROJECTS · ${cat.count}</p>
    </section>
    <div class="overlay-project-grid">
      ${visible.map(project => `
        <button class="overlay-project ${isVisual ? "visual-thumb" : ""}" data-index="${projects.indexOf(project)}" ${isVisual ? `data-src="${path(project.cover)}" data-title="${project.title}"` : ""}>
          <div class="image-wrap">
            <img src="${path(project.cover)}" alt="${project.title}">
            <span class="view">${isVisual ? "VIEW IMAGE ↗" : "VIEW PROJECT ↗"}</span>
          </div>
          <div class="project-meta">
            <span>${project.index}</span>
            <div><h3>${project.title}</h3><p>${project.en}</p></div>
            <span>↗</span>
          </div>
        </button>
      `).join("")}
    </div>
  `;
  content.querySelectorAll(".overlay-project").forEach(button => {
    button.addEventListener("click", () => {
      if (button.classList.contains("visual-thumb")) {
        openLightbox(button.dataset.src, button.dataset.title);
        return;
      }
      openProject(projects[+button.dataset.index]);
    });
  });
  showOverlay();
  if (options.push !== false) pushOverlayState("category", { category });
  prepareReveals(content);
}

function openProject(project, options = {}) {
  overlayLevel = "project";
  currentCategory = options.origin || currentCategory || "selected";
  content.innerHTML = `
    <div class="detail-title"><span>${project.index} / ${project.category}</span><h1>${project.title}</h1><p>${project.en}</p></div>
    <div class="detail-info"><span>ROLE</span><b>${project.role}</b><span>FORMAT</span><b>${project.video ? "CG FILM / STILLS" : "CGI STILLS"}</b><span>YEAR</span><b>2024 - 2026</b></div>
    ${project.video ? `<video class="detail-video" controls playsinline poster="${path(project.cover)}" src="${path(project.video)}"></video>` : ""}
    <div class="gallery">${project.images.map((src, i) => `<figure><img loading="${i > 1 ? "lazy" : "eager"}" src="${path(src)}" alt="${project.title} frame ${i + 1}"><figcaption>FRAME / ${String(i + 1).padStart(2, "0")}</figcaption></figure>`).join("")}</div>
  `;
  showOverlay();
  if (options.push !== false) pushOverlayState("project", {
    category:project.category,
    projectIndex:projects.indexOf(project),
    origin:currentCategory
  });
  prepareReveals(content);
}

function closeOverlay() {
  overlayLevel = "";
  currentCategory = "";
  overlay.classList.remove("open");
  overlay.style.display = "none";
  overlay.style.transform = "";
  overlay.style.pointerEvents = "";
  overlay.style.visibility = "";
  overlay.style.opacity = "";
  document.body.style.overflow = "";
  content.innerHTML = "";
  syncShowreelAudio();
}

function performOverlayBack() {
  if (overlayLevel === "project" && currentCategory === "all") {
    openAllWorks({ push:false });
    return;
  }
  if (overlayLevel === "project" && currentCategory && currentCategory !== "selected") {
    openCategory(currentCategory, { push:false });
    return;
  }
  closeOverlay();
}

function goBack() {
  if (activeLightbox) {
    closeLightbox();
    return;
  }
  if (history.state && history.state.portfolioOverlay) {
    history.back();
    return;
  }
  performOverlayBack();
}

function showOverlay() {
  overlay.style.display = "block";
  overlay.classList.add("open");
  overlay.style.transform = "translate3d(0, 0, 0)";
  overlay.style.pointerEvents = "auto";
  overlay.style.visibility = "visible";
  overlay.style.opacity = "1";
  document.body.style.overflow = "hidden";
  overlay.scrollTop = 0;
  syncShowreelAudio();
}

function closeLightbox() {
  if (!activeLightbox) return;
  activeLightbox.element.remove();
  removeEventListener("keydown", activeLightbox.onKey);
  activeLightbox = null;
}

function openLightbox(src, title, options = {}) {
  closeLightbox();
  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";
  lightbox.innerHTML = `
    <button class="image-lightbox-close" type="button">×</button>
    <img src="${src}" alt="${title}">
    <p>${title}</p>
  `;
  document.body.appendChild(lightbox);
  const close = () => {
    if (history.state && history.state.portfolioOverlay && history.state.level === "lightbox") {
      history.back();
      return;
    }
    closeLightbox();
  };
  function onKey(event) {
    if (event.key === "Escape" && document.body.contains(lightbox)) close();
  }
  lightbox.addEventListener("click", event => {
    if (event.target === lightbox || event.target.classList.contains("image-lightbox-close")) close();
  });
  addEventListener("keydown", onKey);
  activeLightbox = { element:lightbox, onKey };
  if (options.push !== false) pushOverlayState("lightbox", {
    category:currentCategory,
    src,
    title
  });
}

document.querySelector("#overlay-close").addEventListener("click", goBack);
addEventListener("keydown", event => {
  if (event.key === "Escape" && overlay.classList.contains("open") && !document.querySelector(".image-lightbox")) goBack();
});

function openAbout(options = {}) {
  overlayLevel = "about";
  currentCategory = "";
  content.innerHTML = `
    <section class="about-detail-hero">
      <span class="about-kicker">ABOUT / ZUO TAO · 3D DESIGNER</span>
      <h1 class="about-detail-title">MAKING IDEAS<br><em>VISIBLE.</em></h1>
      <figure class="about-detail-portrait">
        <img src="./个人头像.jpg" alt="左涛个人头像">
        <figcaption>ZT / PORTRAIT / 2026</figcaption>
      </figure>
      <div class="about-detail-stats">
        <div><b>07<sup>+</sup></b><span>YEARS OF EXPERIENCE<br>设计行业经验</span></div>
        <div><b>05</b><span>CORE PRODUCTION STAGES<br>核心制作环节</span></div>
        <div><b>11</b><span>TOOLS & RENDER ENGINES<br>软件与渲染工具</span></div>
      </div>
    </section>

    <section class="about-story about-section-dark">
      <div class="about-block-head"><span>01</span><p>PROFILE / 个人定位</p><i></i></div>
      <div class="about-story-copy">
        <h2>用三维视觉连接<br><em>创意、技术与商业。</em></h2>
        <div>
          <p>我是一名拥有 7 年设计行业经验的三维设计师。从电商与品牌视觉出发，逐步深入三维动画和高品质影像制作，形成了兼顾视觉表达、技术实现与商业目标的工作方式。</p>
          <p>能够从前期概念、资产准备、材质灯光、动画 Layout、渲染到后期合成持续推进项目，并在高压周期中保持稳定的执行效率与交付质量。</p>
        </div>
      </div>
    </section>

    <section class="about-pipeline about-section-warm">
      <div class="about-block-head"><span>02</span><p>CAPABILITIES / 我能完成的环节</p><i></i></div>
      <div class="pipeline-grid">
        <article class="pipeline-item"><span>01</span><h3>概念与视觉方向</h3><p>理解业务需求与脚本分镜，整理概念氛围和视觉参考，建立画面风格与项目基调。</p><b>CONCEPT · LOOK DEV</b></article>
        <article class="pipeline-item"><span>02</span><h3>资产与场景制作</h3><p>场景、道具和基础资产制作，包括模型、UV、材质贴图及画面所需的视觉细节。</p><b>MODELING · UV · TEXTURE</b></article>
        <article class="pipeline-item"><span>03</span><h3>Layout 与动态设计</h3><p>依据脚本和分镜完成基础 Layout、镜头构成、动画节奏与小型视觉特效。</p><b>LAYOUT · MOTION · FX</b></article>
        <article class="pipeline-item"><span>04</span><h3>材质灯光与渲染</h3><p>结合概念图完成材质、灯光、渲染测试和品质控制，保证风格与创意意图一致。</p><b>SHADING · LIGHTING · RENDER</b></article>
        <article class="pipeline-item"><span>05</span><h3>后期合成与交付</h3><p>完成多通道合成、画面整合、色彩与细节优化，让最终影像达到稳定的商业交付标准。</p><b>COMPOSITING · DELIVERY</b></article>
      </div>
    </section>

    <section class="about-tools about-section-dark">
      <div class="about-block-head"><span>03</span><p>TOOLKIT / 软件与技术</p><i></i></div>
      <div class="tool-grid">
        <article class="tool-group"><span>3D / 三维制作</span><h3>Cinema 4D<br>Blender<br>Maya</h3></article>
        <article class="tool-group"><span>RENDER / 渲染器</span><h3>Redshift<br>Octane Render<br>Arnold</h3></article>
        <article class="tool-group"><span>TEXTURE / 材质</span><h3>Substance<br>Painter</h3></article>
        <article class="tool-group"><span>POST / 后期</span><h3>Nuke<br>After Effects<br>Photoshop</h3></article>
      </div>
    </section>

    <section class="about-experience about-section-dark">
      <div class="about-block-head"><span>04</span><p>EXPERIENCE / 工作经历</p><i></i></div>
      <div class="timeline-list">
        <article class="timeline-item"><time>2021.11 - 2024.06</time><div><h3>一只（深圳）信息科技有限公司</h3><b>三维动画渲染师</b></div><p>主导项目全周期，从资产准备到后期合成；负责场景道具、UV 与材质、灯光渲染、基础 Layout 和小型特效动画，推动高品质成果交付。</p></article>
        <article class="timeline-item"><time>2020.09 - 2021.09</time><div><h3>浙江世界贸易中心广告有限公司</h3><b>视觉设计师</b></div><p>参与九阳品牌视觉、电商详情与活动页面设计，将摄影、三维渲染和微动态内容结合，支持品牌传播与销售转化。</p></article>
        <article class="timeline-item"><time>2019.06 - 2020.08</time><div><h3>风林牧火（杭州）电子商务有限公司</h3><b>视觉设计师</b></div><p>负责店铺整体视觉、产品详情页与主图设计，并与建模团队协作完成动态内容设计和渲染，同时参与团队技术分享。</p></article>
      </div>
    </section>

    <section class="about-clients about-section-warm">
      <div class="about-block-head"><span>05</span><p>SELECTED CLIENTS / 服务品牌与项目</p><i></i></div>
      <div class="client-intro">
        <h2>SELECTED BRANDS<br><em>& GAME WORLDS.</em></h2>
        <p>参与多个头部品牌、游戏与娱乐 IP 的三维视觉及动态影像项目，在不同品牌语境中建立兼具识别度、品质感与商业价值的视觉表达。</p>
      </div>
      <div class="client-columns">
        <article class="client-group client-group-games">
          <header><div><h3>游戏与娱乐 IP</h3><p>GAME &amp; ENTERTAINMENT</p></div></header>
          <ol class="client-list">
            <li><span>01</span><b>拳头游戏 · 英雄联盟</b><em>RIOT GAMES · LEAGUE OF LEGENDS</em></li>
            <li><span>02</span><b>腾讯游戏</b><em>TENCENT GAMES</em></li>
            <li><span>03</span><b>网易游戏</b><em>NETEASE GAMES</em></li>
            <li><span>04</span><b>王者荣耀</b><em>HONOR OF KINGS</em></li>
            <li><span>05</span><b>决胜巅峰</b><em>MOBILE LEGENDS: BANG BANG</em></li>
            <li><span>06</span><b>和平精英</b><em>GAME FOR PEACE</em></li>
            <li><span>07</span><b>金铲铲之战</b><em>BATTLE OF GOLDEN SPATULA</em></li>
            <li><span>08</span><b>三角洲行动</b><em>DELTA FORCE</em></li>
            <li><span>09</span><b>QQ 飞车</b><em>QQ SPEED</em></li>
          </ol>
        </article>
        <article class="client-group client-group-platforms">
          <header><div><h3>科技与数字平台</h3><p>TECHNOLOGY &amp; DIGITAL PLATFORM</p></div></header>
          <ol class="client-list">
            <li><span>01</span><b>阿里巴巴</b><em>ALIBABA</em></li>
            <li><span>02</span><b>字节跳动</b><em>BYTEDANCE</em></li>
            <li><span>03</span><b>OPPO</b><em>SMART DEVICES</em></li>
            <li><span>04</span><b>天猫</b><em>TMALL</em></li>
            <li><span>05</span><b>快手</b><em>KUAISHOU</em></li>
            <li><span>06</span><b>POCO</b><em>SMARTPHONE</em></li>
          </ol>
        </article>
        <article class="client-group client-group-brands">
          <header><div><h3>消费与生活方式</h3><p>CONSUMER &amp; LIFESTYLE</p></div></header>
          <ol class="client-list">
            <li><span>01</span><b>海信</b><em>HISENSE</em></li>
            <li><span>02</span><b>泡泡玛特</b><em>POP MART</em></li>
            <li><span>03</span><b>蒙牛</b><em>MENGNIU</em></li>
            <li><span>04</span><b>追觅</b><em>DREAME</em></li>
            <li><span>05</span><b>苏泊尔</b><em>SUPOR</em></li>
            <li><span>06</span><b>九阳</b><em>JOYOUNG</em></li>
          </ol>
        </article>
      </div>
    </section>

    <section class="about-cta">
      <span>AVAILABLE FOR PROJECTS / FULL-TIME</span>
      <h2>LET'S MAKE<br><em>IDEAS VISIBLE.</em></h2>
      <div><a href="#contact" data-about-contact>CONTACT ME ↗</a></div>
    </section>
  `;
  showOverlay();
  if (options.push !== false) pushOverlayState("about");
  prepareReveals(content);
  content.querySelector("[data-about-contact]").addEventListener("click", event => {
    closeOverlay();
    jumpToSection(event, "#contact");
  });
}

document.querySelector("#about-button").addEventListener("click", event => {
  event.preventDefault();
  event.stopPropagation();
  openAbout();
});

document.addEventListener("click", event => {
  const aboutButton = event.target.closest("#about-button");
  if (aboutButton) {
    event.preventDefault();
    event.stopPropagation();
    openAbout();
    return;
  }

}, true);

allWorksButton.addEventListener("click", () => openAllWorks());

const navItems = [...document.querySelectorAll(".nav-item")];
const navSections = [...document.querySelectorAll("#home,#works,#about,#contact")];
const nav = document.querySelector(".nav");
const aboutPortrait = document.querySelector("#about .portrait img");
const heroSection = document.querySelector("#home");
let navClickLockUntil = 0;
let pendingNavId = "";

function setActiveNav(id) {
  navItems.forEach(item => item.classList.toggle("active", item.getAttribute("href") === "#" + id));
}

function getCurrentSectionId() {
  if (heroSection && heroSection.getBoundingClientRect().bottom > 0) return "home";

  if (aboutPortrait) {
    const portraitTop = aboutPortrait.getBoundingClientRect().top + scrollY;
    const portraitBottom = portraitTop + aboutPortrait.offsetHeight;
    const aboutStarts = portraitBottom - innerHeight;
    const contactStarts = portraitBottom;
    if (scrollY < aboutStarts) return "works";
    if (scrollY < contactStarts) return "about";
    return "contact";
  }

  let current = "home";
  navSections.forEach(section => {
    if (scrollY >= section.offsetTop) current = section.id;
  });
  return current;
}

function syncNavFromScroll() {
  nav.classList.toggle("scrolled", scrollY > 48);
  if (pendingNavId && performance.now() < navClickLockUntil) {
    setActiveNav(pendingNavId);
    return;
  }
  pendingNavId = "";
  setActiveNav(getCurrentSectionId());
}

function jumpToSection(event, href) {
  const id = href.slice(1);
  const target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();
  pendingNavId = id;
  navClickLockUntil = performance.now() + 1400;
  setActiveNav(id);
  history.replaceState({ portfolioOverlay:false }, "", "#" + id);
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => {
    navClickLockUntil = 0;
    pendingNavId = "";
    setActiveNav(getCurrentSectionId());
  }, 1450);
}

navItems.forEach(item => item.addEventListener("click", event => {
  jumpToSection(event, item.getAttribute("href"));
}));

document.querySelector(".brand").addEventListener("click", event => {
  jumpToSection(event, "#home");
});

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

if ((location.hash || "#home") === "#home") {
  scrollTo(0, 0);
}

addEventListener("scroll", syncNavFromScroll, { passive: true });
addEventListener("hashchange", () => {
  const id = location.hash.replace("#", "");
  if (id) setActiveNav(id);
}, { passive: true });
addEventListener("popstate", event => {
  const state = event.state;
  suppressHistoryPush = true;
  closeLightbox();

  if (state && state.portfolioOverlay) {
    if (state.level === "category") {
      openCategory(state.category, { push:false });
    } else if (state.level === "all-works") {
      openAllWorks({ push:false });
    } else if (state.level === "project") {
      openProject(projects[state.projectIndex], { push:false, origin:state.origin });
    } else if (state.level === "about") {
      openAbout({ push:false });
    } else if (state.level === "lightbox") {
      if (state.category) openCategory(state.category, { push:false });
      openLightbox(state.src, state.title, { push:false });
    }
  } else {
    closeOverlay();
    syncNavFromScroll();
  }

  suppressHistoryPush = false;
});
replaceBaseHistoryState();
setActiveNav((location.hash || "#home").slice(1));
syncNavFromScroll();

renderSelectedProjects();
closeOverlay();
prepareReveals(document);
loadHeroVideos();
heroMainVideo?.addEventListener("canplay", syncShowreelAudio, { once:true });
syncShowreelAudio();


