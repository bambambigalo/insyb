"use strict"

document.addEventListener('DOMContentLoaded', function() {
  let popup = document.getElementById('popup');
  const form = document.getElementById('form');
  const window = document.getElementById('window');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);
    let formData = new FormData(form);
    if (error === 0) {
      window.classList.add('_loader');
	  let response = await fetch(SENDMAILER_PATH,{
        method: 'POST',
        body: formData
      });
      if(response.ok) {
        let result = await response.json();
        alert(result.message);
		formPreview.innerHTML = '';
        form.reset();
		popup.style.display = 'none';
        window.classList.remove('_loader');
      }else {
        alert('Ошибка!');
        window.classList.remove('_loader');
      }


    }else {
      alert('Заполните обязательные поля!');
    }

  }

function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {

        const input = formReq[index];
        formRemoveError(input);

        if (input.classList.contains('_mob')) {
            if (testNumb(input)) {
              formAddError(input);
              error++;
            }
        }else if (input.classList.contains('_email')) {
          if (testEmail(input)) {
              formAddError(input);
              error++;
            }
        }else {
          if (input.value === '') {
            formAddError(input);
            error++;
          }
        }


       }
       return error;
    }
  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }  
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }  

  function testNumb(input) {
    return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value);
  } 
  function testEmail(input) {
    return !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value);
  }  

const formImage = document.getElementById('formImage');
const formPreview = document.getElementById('formPreview');
formImage.addEventListener('change', ()=> {
  uploadFile(formImage.files[0]);
});

 

function uploadFile(file) {
  if(!['image/png','image/jpeg', 'image/gif', 'application/psd', 'application/x-zip-compressed', 'application/vnd.rar', 'application/msword', 'application/x-7z-compressed', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
    alert('тип файла не подходит(');
    formImage.value = '';

    return;
  }
  if(file.size > 20 * 1024 * 1024) {
    alert('Файл должен быть не более 20 мб!');
    return;
  }
 
  var reader = new FileReader();
  reader.onload = function (event) {
    
    formPreview.innerHTML = `<div> файл загружен </div>`  
     
  };
 console.log(event);
  reader.onerror = function (event) {
    alert ('Ошибка');
    
  }
  reader.readAsDataURL(file);

}



});

