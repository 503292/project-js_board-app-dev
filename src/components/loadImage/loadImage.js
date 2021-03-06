import services from '../../services/index';

// Функція записує в масив images[] загружені фотографії користувача
export default function handleFileSelect(evt) {
  const refsImg = {
    outputMult: document.getElementById('outputMulti'),
   
  }
  let file = evt.target.files; // FileList object

  refsImg.outputMult.innerHTML = "";
  let f;
  for (let i = 0; (f = file[i]); i++) {
    // Перевірка. Загружати тільки IMG
    if (!f.type.match('image.*')) {
      alert('Image only please....');
    }
    let reader = new FileReader();
    //
    reader.onload = (function(theFile) {

      return function(e) {
       
        refsImg.outputMult.insertAdjacentHTML("beforeend", [
          '<img class="thumb" title="',
          ,
          '" src="',
          e.target.result,
          '" />',
        ].join(''))

        // запис фотографії в масив фотографій
        
        services.image.push(e.target.result);
      };
    })(f);
    // читає дані файлу-(f), а результатом є Data URL
    reader.readAsDataURL(f);
  }

  services.image = [];
}



