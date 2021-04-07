function getCountries() {
}

$(function () {
    $("#btnShowCountries").click(function () {
        $.ajax(
            {
                url: "http://location:8000/countries",
        
                success: function (data, status, response) {
                    console.log(data);

                    for(var i=0;i< data.length;i++){
                        $("ul").append(`<li>${data[i]}</li>`)
                    }
                }
            }
        );
        // var listCountries = getCountries();
        // console.log(listCountries);
    })
});
