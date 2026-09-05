(function(){
/* MATS from materials.js */

const CATS = ["All","Elements","Metals","Fantasy Metals","Nature"];

function effectsFor(m){
  const d=m.d, s=m.s, dc=m.dc, name=m.n;
  const list=[
    {title:name+" Affinity Burst", body:"One creature within 30 ft takes 2d6 "+d+" damage ("+s+" save DC "+dc+" for half). On a failed save, it also has disadvantage on its next attack roll before the end of its next turn.", tags:["damage",d,"save"]},
    {title:name+" Resistance Hum", body:"For 10 minutes (concentration), you have resistance to "+d+" damage. If you already resist it, you instead ignore the first "+d+" damage you take each round.", tags:["buff","concentration","10 min"]},
    {title:name+" Weapon Song", body:"For 1 minute, a weapon you touch deals an extra 1d4 "+d+" damage and counts as magical for overcoming resistance/immunity to nonmagical attacks.", tags:["buff","1 min",d]},
    {title:name+" Ward", body:"Until the end of your next turn, you gain +2 AC and advantage on "+s+" saving throws.", tags:["buff","1 round"]},
    {title:name+" Condition Cadence", body:"One creature within 30 ft must succeed on a "+s+" saving throw (DC "+dc+") or suffer a thematic condition until the end of its next turn: slowed (half speed) if "+d+" is physical, or poisoned/frightened/blinded (DM picks one fitting "+m.t+") if energy/toxin/mind.", tags:["save","condition"]},
    {title:name+" Utility Tone", body:"For 10 minutes, you gain a utility tied to "+name+" ("+m.t+"): advantage on one related ability check of the DM’s choice (Athletics, Stealth, Arcana, Survival, etc.), usable once during the duration.", tags:["utility","10 min"]},
    {title:name+" Pulse Nova", body:"Creatures of your choice within 10 ft take 1d8 "+d+" damage ("+s+" DC "+dc+" for half). You take 1 "+d+" damage (minimum).", tags:["aoe",d,"risk"]},
    {title:name+" Lingering Aura", body:"For 1 minute, the ground in a 5-ft radius around you is difficult terrain for enemies, and the first enemy that enters takes 1d6 "+d+" damage (once per creature).", tags:["control","1 min"]},
    {title:"Signature — "+name, body:m.u+" (Save DC "+dc+" when a save applies.)", tags:["signature","unique"]},
    {title:name+" Transmute Touch", body:"Touch a nonmagical object no larger than 3 feet in any dimension: for 1 hour it gains a superficial "+name+" appearance and, if a weapon/ammo, deals its damage as "+d+" once (next hit only) or gains +1 to the next attack roll.", tags:["utility","1 hr"]},
    {title:name+" Countertune", body:"When you take "+d+" damage before the end of your next turn, reduce it by 1d8 + your proficiency bonus (minimum 0 remaining).", tags:["reaction-window","1 round"]},
    {title:name+" Echo Mark", body:"Mark one creature within 30 ft for 1 minute. The next time it takes damage, it takes extra 1d6 "+d+" damage, then the mark ends.", tags:["mark",d,"1 min"]}
  ];
  return list;
}

const listEl=document.getElementById("list");
const playBtn=document.getElementById("play");
const resultEl=document.getElementById("result");
const searchEl=document.getElementById("search");
const catsEl=document.getElementById("cats");
const countLine=document.getElementById("count-line");
let cat="All", selected=null, cache={};

CATS.forEach(c=>{
  const b=document.createElement("button");
  b.type="button"; b.className="cat"+(c==="All"?" active":""); b.textContent=c; b.dataset.cat=c;
  b.addEventListener("click",()=>{cat=c; catsEl.querySelectorAll(".cat").forEach(x=>x.classList.toggle("active",x.dataset.cat===c)); renderList();});
  catsEl.appendChild(b);
});

function renderList(){
  const q=(searchEl.value||"").trim().toLowerCase();
  const items=MATS.filter(m=>{
    if(cat!=="All" && m.c!==cat) return false;
    if(!q) return true;
    return (m.n+" "+m.c+" "+m.d+" "+m.t).toLowerCase().includes(q);
  });
  countLine.textContent=items.length+" material"+(items.length===1?"":"s")+" · "+MATS.length+" total · each has "+effectsFor(MATS[0]).length+" effects";
  listEl.innerHTML="";
  if(!items.length){listEl.innerHTML='<div class="empty-list">No matches. Try another search or category.</div>';return;}
  items.forEach(m=>{
    const btn=document.createElement("button");
    btn.type="button"; btn.className="mat"+(selected&&selected.id===m.id?" active":"");
    btn.setAttribute("role","option"); btn.dataset.id=m.id;
    btn.innerHTML='<span class="mat-name">'+m.n+'</span><span class="mat-meta">'+m.c+' · '+m.d+' · DC '+m.dc+' · '+m.t+'</span>';
    btn.addEventListener("click",()=>selectMat(m.id));
    listEl.appendChild(btn);
  });
}

function selectMat(id){
  selected=MATS.find(m=>m.id===id)||null;
  listEl.querySelectorAll(".mat").forEach(b=>{
    b.classList.toggle("active",b.dataset.id===id);
  });
  playBtn.disabled=!selected;
  playBtn.textContent=selected?"Play Fiddle — "+selected.n:"Select a material";
}

function roll(){
  if(!selected) return;
  const table=cache[selected.id]||(cache[selected.id]=effectsFor(selected));
  const n=table.length;
  const roll=1+Math.floor(Math.random()*n);
  const effect=table[roll-1];
  resultEl.classList.remove("empty","flash");
  void resultEl.offsetWidth;
  resultEl.classList.add("flash");
  const tags=(effect.tags||[]).map(t=>{
    const cls=/risk|unique/i.test(t)?"chip hot":/buff|utility|signature/i.test(t)?"chip ok":"chip";
    return '<span class="'+cls+'">'+t+"</span>";
  }).join("");
  resultEl.innerHTML='<span class="roll-num">d'+n+" → "+roll+'</span><h2 class="effect-title">'+effect.title+'</h2><p class="effect-body">'+effect.body+'</p><p class="dc-note">Material: <strong>'+selected.n+'</strong> ('+selected.c+'). Default save DC '+selected.dc+' unless you have a spell save DC. Homebrew table.</p><div class="tags">'+tags+"</div>";
}

playBtn.addEventListener("click",roll);
searchEl.addEventListener("input",renderList);
renderList();
})();
