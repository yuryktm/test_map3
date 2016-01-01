(function(){
    "use strict";
    angular.module("sm.leafletModule")
        .constant("url", "http://api.vk.com/method/users.get?callback=JSON_CALLBACK")
        .service("dataProviderService", dataProviderService)

    function dataProviderService($http, url){

        function errorLog(data, status, headers, config){
            console.log("AJAX failed!");
        };

        this.dataProvider =
        {
            getData: function(callback) {

                var params = {user_ids: 66748};

                $http.jsonp(url, {params: params})
                    .success(function (data, status, headers, config) {

                        var obj = data.response[0];
                        callback(obj.first_name);

                    })
                    .error(errorLog);
            },

            getSignsByType: function(callback, signType) {
                var url = "http://127.0.0.1:8802/Route/GetSigns?callback=JSON_CALLBACK"
                var params = {'signType': signType};
                $http.get(url, {params: params})
                    .success(function (response, status, headers, config) {

                       // response.Signs
                       // var obj = data.response[0];
                        callback(response.Signs);

                    })
                    .error(errorLog);
            }
        }
    }
})();

