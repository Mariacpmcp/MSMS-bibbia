# Bibbia MSMS — versione estesa, ancora incompleta

Apri `index.html` nel browser oppure `atlante.html` per il catalogo aggiornato delle testimonianze. Tutti i link sono relativi: il sito può essere pubblicato sotto `/MSMS-bibbia/` senza build o backend. Per provare localmente con un server: `python -m http.server 8000` nella cartella `MSMS-bibbia`, poi visita `http://localhost:8000/`.

Per aggiornare il repository esistente: estrai lo ZIP, copia il contenuto della cartella `MSMS-bibbia/` nella root del repository `mariacpmcp/MSMS-bibbia` e pubblica con le impostazioni GitHub Pages già configurate. Il repository non è stato modificato automaticamente.

`assets/content.js`: capitoli, esercizi, quiz; `assets/app.js`: navigazione e interazioni; `atlante.html`: schede Questions.docx e percorsi decisionali; `INVENTARIO.md`, `COPERTURA.md`, `CONTROLLI.md`: tracciabilità e limiti. I progressi restano nel localStorage del browser, senza sincronizzazione tra dispositivi. Non vengono corretti automaticamente testi, formule o disegni liberi.

Le slide del corso e il libro sono riferimenti per lo studio personale; il sito pubblica spiegazioni originali e non incorpora integralmente dispense o fotografie protette.

## Nuovi contenuti
Aprire `approfondimenti.html` per derivazioni originali; `CATALOGO_PAGINE.md` è un indice di pagine, non un atlante di soluzioni.

## Laboratorio aggiuntivo
`laboratorio.html` contiene tre esercizi originali con disegni SVG, decisioni guidate, feedback, formule e controlli energetici. `assets/laboratorio.js` salva le scelte in localStorage; non sincronizza tra dispositivi. Gli schemi BG sono topologici e non vanno scambiati per diagrammi completi con causal strokes.

## Nuove sezioni
- `causalita-completa.html`: esempio originale con bond numerati, stroke e bilancio energetico, più vincolo rigido e causalità derivativa.
- `teoria-verificabile.html`: 26 domande teoriche con risposte originali e ripasso persistente locale.
- Aprire `index.html` oppure pubblicare tutti i file nella root del repository GitHub Pages esistente; collegamenti relativi compatibili con `/MSMS-bibbia/`.

## Soluzione originale tracciata
`exam-like-7.html` deriva posizione, velocità e Jacobiano dalla pagina 1 di Exam_like7.pdf. È una soluzione **parziale**: non contiene dinamica o BG causale dell’intera traccia.
