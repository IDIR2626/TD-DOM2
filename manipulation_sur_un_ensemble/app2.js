function highlightParas (containing){
    if (typeof containing === 'string'){
        containing = new RegExp(`\\b${containing}\\b`, 'i');
        const paras = document.getElementsByTagName('p');

        for (let p of paras){
            if (!containing.test(p.textContent)) continue;
            p.classList.add('highlight');
        }
    }
}


function removeParaHighlights(){
    const highlightParas = document.querySelectorAll('p.highlight');
    for (let p of highlightParas){
        p.classList.remove('highlight');    
    }
}




function removeParasClass(removedClass){
    let c = removedClass;
    const paras = document.querySelectorAll(`p.${c}`);

    for (let p of paras){
        p.classList.remove(c);
    }
}

highlightParas('urgent');
//removeParaHighlights();
let c = 'highlight';
removeParasClass(c);
highlightParas('item');


