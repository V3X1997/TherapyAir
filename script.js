

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => 
  {e.preventDefault();

    console.log('Forma je prosledjena')

    document.getElementById("telo").innerHTML = `<div class="container-fluid" id="ucitani">
<h5>Vaš Therapy Air iOn je uspešno naručen, hvala vam na kupovini</h5><br>
<a href="./index.html" class="btn btn-outline-secondary">Povratak na početnu stranicu</a>
</div>`;

  })


