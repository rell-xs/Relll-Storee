// ===== DATA PRODUK =====
const products=[
  {game:'ml', name:'ML Sultan', desc:'Skin epic + mythic', price:'Rp300.000', badge:'badge_best.jpg', images:['ml1_1.jpg','ml1_2.jpg','ml1_3.jpg','ml1_4.jpg','ml1_5.jpg'], wa:'6285184105776'},
  {game:'ml', name:'ML Epic', desc:'Skin legend', price:'Rp280.000', badge:'', images:['ml2_1.jpg','ml2_2.jpg','ml2_3.jpg','ml2_4.jpg','ml2_5.jpg'], wa:'6285184105776'},
  {game:'ml', name:'ML Legend', desc:'Full skin', price:'Rp350.000', badge:'badge_best.jpg', images:['ml3_1.jpg','ml3_2.jpg','ml3_3.jpg','ml3_4.jpg','ml3_5.jpg'], wa:'6285184105776'},
  {game:'ml', name:'ML Mythic', desc:'Skin terbatas', price:'Rp400.000', badge:'', images:['ml4_1.jpg','ml4_2.jpg','ml4_3.jpg','ml4_4.jpg','ml4_5.jpg'], wa:'6285184105776'},
  {game:'ml', name:'ML Starter', desc:'Skin dasar', price:'Rp150.000', badge:'', images:['ml5_1.jpg','ml5_2.jpg','ml5_3.jpg','ml5_4.jpg','ml5_5.jpg'], wa:'6285184105776'},

  {game:'ff', name:'FF Rare', desc:'Bundle langka', price:'Rp150.000', badge:'', images:['ff1_1.jpg','ff1_2.jpg','ff1_3.jpg','ff1_4.jpg','ff1_5.jpg'], wa:'6285184105776'},
  {game:'ff', name:'FF Epic', desc:'Bundle eksklusif', price:'Rp180.000', badge:'', images:['ff2_1.jpg','ff2_2.jpg','ff2_3.jpg','ff2_4.jpg','ff2_5.jpg'], wa:'6285184105776'},
  {game:'ff', name:'FF Legend', desc:'Full bundle', price:'Rp200.000', badge:'badge_best.jpg', images:['ff3_1.jpg','ff3_2.jpg','ff3_3.jpg','ff3_4.jpg','ff3_5.jpg'], wa:'6285184105776'},
  {game:'ff', name:'FF Starter', desc:'Bundle dasar', price:'Rp120.000', badge:'', images:['ff4_1.jpg','ff4_2.jpg','ff4_3.jpg','ff4_4.jpg','ff4_5.jpg'], wa:'6285184105776'},
  {game:'ff', name:'FF Pro', desc:'Bundle premium', price:'Rp250.000', badge:'', images:['ff5_1.jpg','ff5_2.jpg','ff5_3.jpg','ff5_4.jpg','ff5_5.jpg'], wa:'6285184105776'},

  {game:'rb', name:'Roblox Premium', desc:'Item eksklusif', price:'Rp200.000', badge:'', images:['rb1_1.jpg','rb1_2.jpg','rb1_3.jpg','rb1_4.jpg','rb1_5.jpg'], wa:'6285184105776'},
  {game:'rb', name:'Roblox Rare', desc:'Item limited', price:'Rp220.000', badge:'badge_best.jpg', images:['rb2_1.jpg','rb2_2.jpg','rb2_3.jpg','rb2_4.jpg','rb2_5.jpg'], wa:'6285184105776'},
  {game:'rb', name:'Roblox Epic', desc:'Item langka', price:'Rp250.000', badge:'', images:['rb3_1.jpg','rb3_2.jpg','rb3_3.jpg','rb3_4.jpg','rb3_5.jpg'], wa:'6285184105776'},
  {game:'rb', name:'Roblox Starter', desc:'Item dasar', price:'Rp180.000', badge:'', images:['rb4_1.jpg','rb4_2.jpg','rb4_3.jpg','rb4_4.jpg','rb4_5.jpg'], wa:'6285184105776'},
  {game:'rb', name:'Roblox Pro', desc:'Item premium', price:'Rp300.000', badge:'', images:['rb5_1.jpg','rb5_2.jpg','rb5_3.jpg','rb5_4.jpg','rb5_5.jpg'], wa:'6285184105776'},
];

// ===== GENERATE PRODUK =====
const container=document.getElementById('productContainer');
products.forEach(prod=>{
let card=document.createElement('div'); card.className=`card ${prod.game}`;
let slider=`<div class="product-slider">${prod.images.map((img,i)=>`<img src="images/${img}" class="${i===0?'active':''}" onclick="openLightbox(this)">`).join('')}</div>`;
let badgeHTML=prod.badge?`<img src="images/${prod.badge}" class="badge">`:'';
card.innerHTML=`${slider}<h3>${prod.name} ${badgeHTML}</h3><p>${prod.desc}</p><span>${prod.price}</span><div class="rating">★★★★☆</div><a href="https://wa.me/${prod.wa}?text=Halo saya mau beli akun ${prod.name} ${prod.price}" class="buy">Beli</a>`;
container.appendChild(card);
});

// ===== FILTER & SEARCH =====
function filterGame(game){document.querySelectorAll('.card').forEach(c=>c.style.display=(game==='all'||c.classList.contains(game))?'block':'none');}
document.getElementById('searchInput').addEventListener('keyup',()=>{
let val=document.getElementById('searchInput').value.toLowerCase();
document.querySelectorAll('.card').forEach(c=>c.style.display=c.querySelector('h3').innerText.toLowerCase().includes(val)?'block':'none');
});

// ===== MINI SLIDER PRODUK =====
document.querySelectorAll('.product-slider').forEach(slider=>{
const imgs=slider.querySelectorAll('img'); let i=0;
setInterval(()=>{imgs.forEach(img=>img.classList.remove('active')); imgs[i].classList.add('active'); i=(i+1)%imgs.length;},3000);
});

// ===== LIGHTBOX =====
let currentLightbox;
function openLightbox(img){document.getElementById('lightbox-img').src=img.src;document.getElementById('lightbox').style.display='flex';currentLightbox=Array.from(img.parentElement.children).indexOf(img);}
function closeLightbox(){document.getElementById('lightbox').style.display='none';}
function nextLightbox(e){e.stopPropagation();const imgs=document.querySelectorAll('.product-slider img');currentLightbox=(currentLightbox+1)%imgs.length;document.getElementById('lightbox-img').src=imgs[currentLightbox].src;}
function prevLightbox(e){e.stopPropagation();const imgs=document.querySelectorAll('.product-slider img');currentLightbox=(currentLightbox-1+imgs.length)%imgs.length;document.getElementById('lightbox-img').src=imgs[currentLightbox].src;}

// ===== TESTIMONI =====
const testimoni=[
{img:'testi1.jpg', text:'Transaksi cepat dan aman!', name:'Rian'},
{img:'testi2.jpg', text:'Seller terpercaya!', name:'Dika'},
{img:'testi3.jpg', text:'Akun sesuai deskripsi', name:'Fajar'}
];
const testiContainer=document.getElementById('testiContainer');
testimoni.forEach(t=>{
let div=document.createElement('div'); div.className='slide';
div.innerHTML=`<img src="images/${t.img}" onclick="openLightbox(this)"><p>"${t.text}"</p><span>- ${t.name}</span>`;
testiContainer.appendChild(div);
});
let testiIndex=0;
function showTesti(){document.querySelectorAll('.slide').forEach((s,i)=>s.style.display=i===testiIndex?'block':'none');}
function nextTesti(){testiIndex=(testiIndex+1)%testimoni.length;showTesti();}
function prevTesti(){testiIndex=(testiIndex-1+testimoni.length)%testimoni.length;showTesti();}
showTesti();
setInterval(nextTesti,5000);

// ===== POPUP =====
function showPopup(){document.getElementById('promoPopup').style.display='block';}
function closePopup(){document.getElementById('promoPopup').style.display='none';}
setTimeout(showPopup,2000);