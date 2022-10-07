const schemeBtn = document.querySelectorAll('.scheme-btn');
const schemes = document.querySelector('#schemes');
const indexSchemes = document.querySelector('#indexSchemes');

let chooseScheme = localStorage.getItem('scheme');

schemeBtn.forEach(scheme => {
    if (chooseScheme === scheme.dataset.scheme) {
        scheme.classList.add('active');
    }
    localStorage.removeItem('scheme');
})

if (indexSchemes) {
    indexSchemes.addEventListener('click', (e) => {
        const choose = e.target.dataset.scheme;
        localStorage.setItem('scheme', choose)
    })
}

if (schemes) {
    schemes.addEventListener('click', (e) => {
        const choose = e.target;
        if (choose.nodeName !== "BUTTON") {
            return;
        }
        schemeBtn.forEach(scheme => {
            scheme.classList.remove('active');
        })

        e.target.classList.add('active');
    })
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()