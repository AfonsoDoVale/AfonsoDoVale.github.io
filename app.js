const $ = s => document.querySelector(s);
const menu = $('.menu'), nav = $('#navigation');
function closeMenu(){menu?.setAttribute('aria-expanded','false');nav?.classList.remove('open');}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav?.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
if($('#year'))$('#year').textContent=new Date().getFullYear();
const dialog=$('#image-dialog');
let imageTrigger;
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{imageTrigger=button;$('#expanded-image').src=button.dataset.image;$('#expanded-image').alt=button.dataset.alt;$('#image-caption').textContent=button.dataset.caption;dialog.showModal();}));
$('.dialog-close')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
dialog?.addEventListener('close',()=>imageTrigger?.focus());
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});let count=0;document.querySelectorAll('#event-list [data-event-type]').forEach(event=>{event.hidden=button.dataset.filter!=='all'&&event.dataset.eventType!==button.dataset.filter;if(!event.hidden)count++;});$('#event-status').textContent=`${count} activities shown`;}));
$('#print-cv')?.addEventListener('click',()=>window.print());
// Preserve incoming links to sections of the original single-page portfolio.
if(document.body.dataset.page==='home'){
 const legacy={research:'research.html',observing:'observing.html',publications:'publications.html',catalogs:'catalogs.html',events:'conferences.html',contact:'contact.html'};
 const destination=legacy[location.hash.slice(1)];if(destination)location.replace(destination);
}
