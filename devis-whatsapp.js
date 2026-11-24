// Le formulaire prépare uniquement un message : aucune requête vers une base de données.
const devisWhatsApp = Object.freeze({
 createUrl(data){
  const value=key=>String(data[key]||'').trim();
  const lines=['Bonjour Digital Numérique,','Je souhaite obtenir un devis.','',
   'Nom : '+value('name'),'Téléphone : '+value('phone')];
  if(value('email'))lines.push('E-mail : '+value('email'));
  if(value('company'))lines.push('Entreprise / organisation : '+value('company'));
  lines.push('Prestation : '+value('service'));
  if(value('quantity'))lines.push('Quantité / volume : '+value('quantity'));
  if(value('deadline')){const parts=value('deadline').split('-');lines.push('Date souhaitée : '+(parts.length===3?parts.reverse().join('/'):value('deadline')));}
  lines.push('Localité : '+value('commune'),'','Mon besoin :',value('message'));
  return 'https://wa.me/2250506083239?text='+encodeURIComponent(lines.join('\n'));
 }
});
