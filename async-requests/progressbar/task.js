const btn = document.getElementById('send');
const progress = document.getElementById('progress');
const form = document.getElementById('form')
progress.value = 0.7;

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        xhr.upload.onprogress = function (event) {
            progress.value = event.loaded / event.total;
        }
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(form)
    xhr.send(formData);
})


