# Controlli effettivamente svolti

- Verificata presenza fisica dei PDF e relativo numero di pagine con `pdfinfo`; Questions.docx accessibile e catalogato dalle 17 pagine renderizzate, fotografie incluse.
- Verificata sintassi dei file JavaScript principali con `node --check`.
- Verificata sintassi dello script inline dell'Atlante con `node --check`.
- Verificati collegamenti locali `href` e `src` presenti in index.html e atlante.html con uno script di controllo file.
- Verificato manualmente il caso originale di rotolamento: T=½(m+J/R²)ẋ², vincolo ẋ=Rθ̇ e dimensione [J/R²]=kg. Per la coppia relativa: P=τ(α̇−β̇).
- Non è stato eseguito un test di interazione in un browser grafico reale, né una revisione matematica di tutte le prove fotografate; nessuna verifica di GitHub Pages pubblicato.

## Controlli estensione
Verifica statica locale di link, presenza dei contenuti e compilazione JavaScript eseguita in questa consegna; nessun test end-to-end su browser o pubblicazione GitHub.

## Controlli nuova estensione
Controllati analiticamente i bilanci energetici degli esempi BG e la coerenza di unità, segni e dipendenza dei momenti. I test automatici di file, script e collegamenti sono riportati nel resoconto di esecuzione; nessun test manuale browser dichiarato.
