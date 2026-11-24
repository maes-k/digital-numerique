const $ = selector => document.querySelector(selector);
const draftKey = 'digital-numerique-devis';
const menu = $('.menu-toggle');
const nav = $('#navigation');
function closeMenu(){nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');}
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();}});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('click',event=>{if(!event.target.closest('.nav-shell'))closeMenu();});
function readDraft(){try{return JSON.parse(sessionStorage.getItem(draftKey)||'{}');}catch{return {};}}
function saveDraft(data){try{sessionStorage.setItem(draftKey,JSON.stringify(data));}catch{/* Storage may be disabled. The form remains usable. */}}
document.querySelectorAll('.product-choice').forEach(link=>link.addEventListener('click',()=>{saveDraft({...readDraft(),service:'Objets personnalisés',message:'Je souhaite personnaliser : '+new URL(link.href).searchParams.get('produit')});}));
document.querySelectorAll('.service-choice').forEach(link=>link.addEventListener('click',()=>{saveDraft({...readDraft(),service:new URL(link.href).searchParams.get('service')});}));
$('#builder')?.addEventListener('submit',event=>{event.preventDefault();saveDraft({...readDraft(),service:'Objets personnalisés',quantity:$('#bqty').value+' '+$('#bproduct').value,message:'Support : '+$('#bproduct').value+'\n'+$('#bdetail').value});location.assign('contact.html#contact-form');});
const form = $('#contact-form');
if(form){
 form.id='contact-form';
 const draft=readDraft();const query=new URLSearchParams(location.search);
 if(query.has('service'))draft.service=query.get('service');
 if(query.has('produit')){draft.service='Objets personnalisés';draft.message='Je souhaite personnaliser : '+query.get('produit');}
 for(const [key,value] of Object.entries(draft)){const field=form.elements.namedItem(key);if(field&&field.type!=='checkbox')field.value=String(value);}
 const preserve=()=>{const data=Object.fromEntries(new FormData(form));delete data.consent;delete data.website;saveDraft(data);};
 form.addEventListener('input',preserve);form.addEventListener('change',preserve);
 form.addEventListener('submit',event=>{
  event.preventDefault();
  if(!form.reportValidity())return;
  preserve();
  const url=devisWhatsApp.createUrl(Object.fromEntries(new FormData(form)));
  const link=$('#whatsapp-reopen');link.href=url;link.hidden=false;
  $('#form-status').textContent='Votre message est prêt. Dans WhatsApp, appuyez sur « Envoyer » pour transmettre votre demande. Si WhatsApp ne s’ouvre pas, utilisez le lien ci-dessous.';
  window.open(url,'_blank','noopener,noreferrer');
 });
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(other=>other.setAttribute('aria-pressed',String(other===button)));document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;});}));
const dialog=$('#example-dialog');let originButton;
document.querySelectorAll('.example-open').forEach(button=>button.addEventListener('click',()=>{originButton=button;const art=button.closest('article').querySelector('.sample-art').cloneNode(true);$('#dialog-art').replaceChildren(art);$('#dialog-title').textContent=button.closest('article').querySelector('h3').textContent;dialog.showModal();}));
$('.dialog-close')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
dialog?.addEventListener('close',()=>originButton?.focus());
