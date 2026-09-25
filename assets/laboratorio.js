'use strict';
const answers=[
 {right:1,feedback:['ẋ₂ è la velocità di m₂ rispetto al suolo: non descrive la distanza tra le masse.','Corretto: derivando q_C=x₂−x₁−ℓ₀ si ottiene q̇_C=ẋ₂−ẋ₁.','La somma non deriva dalla differenza delle posizioni con assi concordi.']},
 {right:1,feedback:['Due elementi I non implicano due momenti indipendenti quando un vincolo impone la stessa velocità.','Corretto: v₁=v₂, quindi p₁/m₁=p₂/m₂. Un solo momento ridotto P=(m₁+m₂)v.','Il vincolo riduce da due a uno i DOF; non blocca il moto comune.']},
 {right:1,feedback:['m+J_G/R² è riferita alla coordinata x, non all’angolo θ.','Corretto: T=½(mR²+J_G)θ̇².','J_G compare una sola volta nell’energia cinetica; aggiungerlo due volte è un doppio conteggio.']}
];
const key='msms-laboratorio-v1';
function load(){try{return JSON.parse(localStorage.getItem(key)||'{}')}catch{return {}}}
const progress=load();
document.querySelectorAll('.decision').forEach((box,i)=>{
 const name='d'+i,selected=progress[name];if(Number.isInteger(selected)){const input=box.querySelector(`input[value="${selected}"]`);if(input)input.checked=true;}
 box.querySelector('button.check').addEventListener('click',()=>{
  const choice=box.querySelector('input:checked'),out=box.querySelector('.feedback');
  if(!choice){out.textContent='Seleziona una risposta prima di verificare.';return;}
  const j=Number(choice.value),data=answers[i];out.textContent=(j===data.right?'✓ ':'Da rivedere: ')+data.feedback[j];
  progress[name]=j;try{localStorage.setItem(key,JSON.stringify(progress))}catch{out.textContent+=' Il browser non ha consentito il salvataggio locale.'}
 });
});
