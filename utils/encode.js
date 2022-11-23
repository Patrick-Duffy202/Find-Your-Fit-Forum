function encode() {
    var selectedfile = document.querySelector('input[name="image-input"]').getElementById("image-input").files;
    if (selectedfile.length > 0) {
      var imageFile = selectedfile[0];
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result;
        var newImage = 'image-input'.createElement('img');
        newImage.src = srcData;
        document.getElementById("display-image").innerHTML = newImage.outerHTML;
        document.getElementById("txt").value = document.getElementById("display-image").innerHTML;
      }
      fileReader.readAsDataURL(imageFile);
    }
  }

  module.exports= encode;