var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};
getJSON('https://api.themoviedb.org/3/movie/popular?api_key=0f17bafeb7d9fda0c1560d29b6259066',
    function (err, data) {
        if (err !== null) {
            console.log(err);
        } else {
            var items = data.results;
console.log(data)
            for (var i = 0; i < items.length; i++) {
                document.querySelector(".filmListesi").innerHTML += `
                   <li>
                      <a target="_blank" href="https://www.themoviedb.org/"> <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${items[i].poster_path}" alt=""><a/>
                      <br> <span><b>Film Adı:</b> ${items[i].original_title}</span><br>
                        <span><b>Film Dili:</b> ${items[i].original_language}</span><br>
                        <span><b>Puan:</b> ${items[i].vote_average}</span>
                    </li>
                `;
            }
        }
    });
const searchFilm=document.querySelector('.input');
searchFilm.addEventListener('keyup',(e)=>{
   const text = e.target.value;
   if(text!==''){
    console.log(text);
    }
 })
jQuery.expr[':'].contains = function(a,i,m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
};
$(document).ready(function () {
    $(".input").keyup(function(){
        var value = $(".input").val();
        if(value.length==0){
            $(".filmListesi li").show();
        }else{
            $(".filmListesi li").hide();
            $(".filmListesi li:contains("+value+")").show();
        }
    });
});