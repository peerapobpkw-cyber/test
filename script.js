/* ============================================================
   DATA — แก้ไข/เพิ่ม/ลบหัวข้อได้จากจุดนี้จุดเดียว
   หมายเหตุ: รายการที่มีค่า "(รอเพิ่ม...)" เป็นข้อมูลที่ต้นฉบับ
   ไม่ได้ระบุมา หรือระบุไม่ตรงหัวข้อ — แก้ไขให้ตรงกับเนื้อหาจริงก่อนเผยแพร่
   path รูปภาพเป็น path แบบ relative แล้ว (แก้จาก path เครื่อง Mac เดิม
   ที่ใช้ไม่ได้บน GitHub Pages) — วางไฟล์รูปจริงไว้ที่ assets/image/
   ============================================================ */
const projects = [
  {
    number: "1",
    title: "สร้างรูปด้วย AI",
    description: "สร้างรูปบ้าน และทำการ Prompt แก้ไขให้ได้ผลลัพธ์ตามต้องการ",
    tool: "Canva",
    imageBefore: "assets/image/Home1.jpg",
    imageAfter:  "assets/image/Home2.jpg",
    learning: "จากการทดลองทั้งสองครั้ง ผู้จัดทำได้เรียนรู้ว่า ความละเอียดและความชัดเจนของ Prompt มีผลต่อคุณภาพของภาพที่ AI สร้างขึ้นอย่างมาก คำสั่งที่ระบุเพียงภาพรวมช่วยให้ได้ผลลัพธ์เบื้องต้น แต่การเพิ่มรายละเอียดและให้ AI ซักถามความต้องการก่อนสร้างภาพ จะช่วยลดความคลุมเครือ ทำให้ผลลัพธ์มีความเฉพาะเจาะจง สมจริง และตรงตามวัตถุประสงค์มากยิ่งขึ้น"
  },
  {
    number: "2",
    title: "การสร้างกราฟอธิบายความสัมพันธ์ทางคณิตศาสตร์",
    description: "(รอเพิ่มคำอธิบาย)",
    tool: "Desmos",
    imageBefore: "assets/image/cat1.png",
    imageAfter:  "assets/image/cat2.png",
    learning: "คณิตศาสตร์ไม่ได้มีเพียงการคำนวณ แต่ยังสามารถนำมาใช้สร้างสรรค์ภาพและออกแบบงานได้ การปรับค่าต่าง ๆ ในสมการ เช่น จุดศูนย์กลาง รัศมี ความกว้าง หรือความชัน จะส่งผลต่อขนาด ตำแหน่ง และรูปร่างของกราฟโดยตรง ทำให้เข้าใจความสัมพันธ์ของสมการและกราฟได้ชัดเจนขึ้น ทั้งยังช่วยให้การเรียนคณิตศาสตร์มีความน่าสนใจและเห็นภาพมากขึ้น"
  },
  {
    number: "3",
    title: "การสร้าง diagram จาก Mermaid code",
    description: "(รอเพิ่มคำอธิบาย)",
    tool: "Mermaid",
    imageBefore: "assets/image/diagramresult1.jpeg",
    imageAfter:  "assets/image/Diagramresult2.png",
    learning: "Mermaid Code สามารถเปลี่ยนข้อมูลที่มีความซับซ้อนให้เป็นแผนภาพที่เข้าใจง่ายได้ การเริ่มจากคำสั่งทั่วไปช่วยให้ได้โครงสร้างพื้นฐาน ส่วนการเพิ่มรายละเอียดและกำหนดหัวข้อของระบบให้ชัดเจน ช่วยให้แผนภาพมีความเป็นระเบียบ ครบถ้วน และสื่อสารความสัมพันธ์ของข้อมูลได้มีประสิทธิภาพมากขึ้น"
  },
  {
    number: "4",
    title: "การสร้างบทความหรือหนังสือจาก LaTeX",
    description: "(รอเพิ่มคำอธิบาย)",
    tool: "LaTeX (Overleaf)",
    imageBefore: "assets/image/overleafresult1.png",
    imageAfter:  "assets/image/overleafresult2.png",
    learning: "(รอเพิ่มบทสรุปการเรียนรู้ — ข้อความต้นฉบับของหัวข้อนี้อ่านไม่ได้ความ กรุณาเขียนใหม่)"
  },
  {
    number: "5",
    title: "การสร้าง slide สรุปงานด้วย NotebookLM",
    description: "(รอเพิ่มคำอธิบาย)",
    tool: "NotebookLM",
    imageBefore: "assets/image/LMresult1.png",
    imageAfter:  "assets/image/LMresult2.png",
    learning: "(รอเพิ่มบทสรุปการเรียนรู้ — ข้อความต้นฉบับของหัวข้อนี้อ่านไม่ได้ความ กรุณาเขียนใหม่)"
  },
  {
    number: "6",
    title: "การเขียนเว็บไซต์เพื่อไปฝากบน GitHub",
    description: "(รอเพิ่มคำอธิบาย)",
    tool: "GitHub Pages",
    imageBefore: "assets/image/Home1.jpg",
    imageAfter:  "assets/image/Home2.jpg",
    learning: "(รอเพิ่มบทสรุปการเรียนรู้)"
  },
];

const tools = [
  { name: "Canva",          desc: "สร้างและแก้ไขภาพด้วย AI",        url: "https://www.canva.com" },
  { name: "Desmos",         desc: "กราฟสมการคณิตศาสตร์เชิงโต้ตอบ", url: "https://www.desmos.com" },
  { name: "Mermaid",        desc: "สร้างแผนภาพจากโค้ดข้อความ",     url: "https://mermaid.js.org" },
  { name: "LaTeX / Overleaf", desc: "จัดพิมพ์เอกสารวิชาการ",        url: "https://www.overleaf.com" },
  { name: "NotebookLM",     desc: "สรุปเอกสารและสร้างสไลด์ด้วย AI", url: "https://notebooklm.google" },
  { name: "GitHub Pages",   desc: "โฮสต์เว็บไซต์แบบ static ฟรี",    url: "https://pages.github.com" },
];

/* ============================================================
   RENDER PROJECTS
   ============================================================ */
function imageFigure(src, caption){
  const slot = document.createElement("div");
  slot.className = "image-slot";

  const btn = document.createElement("button");
  btn.type = "button";
  btn.setAttribute("aria-label", `ขยายรูป: ${caption}`);

  const img = document.createElement("img");
  img.src = src;
  img.alt = caption;
  img.loading = "lazy";
  img.addEventListener("click", () => openLightbox(src, caption));

  img.addEventListener("error", () => {
    const fallback = document.createElement("div");
    fallback.className = "image-fallback";
    fallback.textContent = `ไม่พบรูปภาพ: ${src.split("/").pop()}`;
    btn.replaceWith(fallback.cloneNode(true));
    slot.querySelector("button")?.remove();
    slot.prepend(fallback);
  }, { once: true });

  btn.appendChild(img);
  btn.addEventListener("click", () => openLightbox(src, caption));

  const figcaption = document.createElement("p");
  figcaption.textContent = caption;

  slot.appendChild(btn);
  slot.appendChild(figcaption);
  return slot;
}

function renderProjects(){
  const list = document.getElementById("projectList");
  const frag = document.createDocumentFragment();

  projects.forEach((p) => {
    const entry = document.createElement("article");
    entry.className = "project-entry";

    const num = document.createElement("div");
    num.className = "entry-number";
    num.textContent = p.number.padStart(2, "0");

    const body = document.createElement("div");

    const title = document.createElement("h3");
    title.className = "entry-title";
    title.textContent = p.title;

    const tool = document.createElement("span");
    tool.className = "entry-tool";
    tool.textContent = p.tool;

    const desc = document.createElement("p");
    desc.className = "entry-desc" + (p.description.startsWith("(รอ") ? " is-placeholder" : "");
    desc.textContent = p.description;

    const images = document.createElement("div");
    images.className = "entry-images";
    images.appendChild(imageFigure(p.imageBefore, "ผลลัพธ์แรก"));
    images.appendChild(imageFigure(p.imageAfter, "ผลลัพธ์ใหม่"));

    const learning = document.createElement("div");
    learning.className = "entry-learning";
    const learningLabel = document.createElement("span");
    learningLabel.textContent = "สิ่งที่เรียนรู้";
    const learningText = document.createElement("p");
    if (p.learning.startsWith("(รอ")) learningText.classList.add("is-placeholder");
    learningText.textContent = p.learning;
    learning.appendChild(learningLabel);
    learning.appendChild(learningText);

    body.appendChild(title);
    body.appendChild(tool);
    body.appendChild(desc);
    body.appendChild(images);
    body.appendChild(learning);

    entry.appendChild(num);
    entry.appendChild(body);
    frag.appendChild(entry);
  });

  list.appendChild(frag);
}

/* ============================================================
   RENDER TOOLS (deduplicated by name)
   ============================================================ */
function renderTools(){
  const grid = document.getElementById("toolGrid");
  const seen = new Set();
  const frag = document.createDocumentFragment();

  tools.forEach((t) => {
    const key = t.name.trim().toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);

    const card = document.createElement("a");
    card.className = "tool-card";
    card.href = t.url;
    card.target = "_blank";
    card.rel = "noopener";

    const name = document.createElement("span");
    name.className = "tool-name";
    name.textContent = t.name;

    const desc = document.createElement("p");
    desc.className = "tool-desc";
    desc.textContent = t.desc;

    const link = document.createElement("span");
    link.className = "tool-link";
    link.textContent = t.url.replace(/^https?:\/\//, "");

    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(link);
    frag.appendChild(card);
  });

  grid.appendChild(frag);
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
let lastFocused = null;

function openLightbox(src, caption){
  lastFocused = document.activeElement;
  lightboxImg.src = src;
  lightboxImg.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  lightboxClose.focus();
  document.body.style.overflow = "hidden";
}

function closeLightbox(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  lastFocused?.focus();
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
});

/* ============================================================
   MOBILE NAV
   ============================================================ */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

/* ============================================================
   FOOTER YEAR + INIT
   ============================================================ */
document.getElementById("year").textContent = new Date().getFullYear();

renderProjects();
renderTools();
