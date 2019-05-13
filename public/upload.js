
//var myDropzone = new Dropzone("form#myDrop", { url: "/file-upload"});

function cancelUpload(){
  Dropzone.off('error');
  Dropzone.removeAllFiles(true);
  //Dropzone.disable();
}
