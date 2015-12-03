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
            }
        }
    }
})();

