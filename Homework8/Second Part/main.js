let dropdownItem = document.getElementsByClassName('dropdown-item');

for (let i = 0; i < dropdownItem.length; i++){

    dropdownItem[i].firstElementChild.addEventListener('click', function({target}) {

        let targetNextSibling = target.nextElementSibling;

        if (targetNextSibling.classList.contains('d-none')) {
            targetNextSibling.classList.toggle('d-none');

            let dropdownItem = document.getElementsByClassName('dropdown-menu');

            for (let j = 0; j < dropdownItem.length; j++) {
                if (dropdownItem[j] !== targetNextSibling && !dropdownItem[j].classList.contains('d-none')){
                    dropdownItem[j].classList.toggle('d-none')
                };
            };
        }
        else {
            targetNextSibling.classList.toggle('d-none');
        };
    });
};


