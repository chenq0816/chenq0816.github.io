  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });


  $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        alert("Ready");
        console.log(modal, trigger);
      },
      complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );

  var count= 0;

  function getScreen(){
    console.log(name);
    html2canvas($('#defaultCanvas0'), {
      dpi: 192,
      onrendered: function(canvas){
        $('#blank').attr('href', canvas.toDataURL("image/png"));
        $('#blank').attr('download', count+'.png');
        $('#blank')[0].click();
      }
    })
  }

  document.getElementById('add').addEventListener('click', function(){
  	var value= document.getElementById('task-content').value;
  	if(value){
      var list= document.getElementById('list');

      var newLI = document.createElement('li');
      newLI.classList.add('collection-item');
      newLI.innerText= value;

      var newA = document.createElement('a');
      newA.classList.add('secondary-content');
      newA.href="#modal2";
      var modal2= document.getElementById('modal2');
      var img = document.createElement('IMG');
      img.id= "img";
      var name= count;
      console.log(name);
      img.src ="image/"+name+".png";
      img.width = "200";
      img.height = "200";
      

      var newI= document.createElement('i');
      newI.classList.add('material-icons');
      newI.id= "edit";
      newI.innerText="edit";

      modal2.appendChild(img);
      newA.appendChild(newI);
      newLI.appendChild(newA);
      newA.appendChild(newI);
      list.appendChild(newLI);

      document.getElementById('task-content').value='';

      count++;

      getScreen();

  	} 
  })

    document.getElementById('remove').addEventListener('click',function(){
        var list= document.getElementById('list');
        var len= list.childNodes.length;
        for (var i=0; i < len;i++) {
          if (i==len-1) {
            list.removeChild(list.childNodes[i]);
          }     
    }

  })










