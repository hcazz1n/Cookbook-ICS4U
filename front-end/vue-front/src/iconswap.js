//swaps icon in tabs
function iconSwap(){
    let num = parseInt((Math.random() * 3) + 1, 10)
    link = document.createElement('link');
    link.rel = 'icon'
    document.head.appendChild(link)
    
    let icon = 'icon' + num + '.png'
    link.href = icon
}