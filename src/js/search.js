const input = document.getElementById('search');
const companyName = document.querySelectorAll('#company')
const productName = document.querySelectorAll('#product-description')

function searchInput(child) {
    
    input.oninput = function() {

    let value = this.value.trim();
    
    if(value != '') {

        child.forEach(function(elem) {
    
            if(elem.innerText.search(value) == -1) {
                const a = elem.parentElement;
                const b = a.parentElement;
                b.style.display = 'none'
            }
            else {
                const a = elem.parentElement;
                const b = a.parentElement;
                b.style.display = 'block'
            }
    })
    } else {
        child.forEach(function(elem) {
                const a = elem.parentElement;
                const b = a.parentElement;
                b.style.display = 'block'    
    })
}
}
}

searchInput(productName);

