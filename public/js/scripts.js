var longYOURL;
$("#shorten").click(function(){
var longYOURL = $("#shortenURL").val();
$.ajax({
  url : 'https://www.googleapis.com/urlshortener/v1/url?&key=AIzaSyB28OZnBbdz7b5p9S3Sn6qGL8PgQFQcG3Q',
  type : 'POST',
  contentType : 'application/json; charset=utf-8',
  data :'{longUrl:"'+longYOURL+'" }',
  success : function(response){
    console.log(response["id"]);
$("#result").html(response["id"]);
bootbox.alert("Shortened URL : <a href ="+response["id"]+" target=_BLANK >"+response["id"]+"</a>");
  }
});
});

