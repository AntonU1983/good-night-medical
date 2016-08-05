(function (){
  'use strict';

  var app = angular.module('app');

  var serviceId = 'uiNotifications';

  app.service(serviceId, uiNotifications);
  
  function uiNotifications() {
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-bottom-full-width",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    
    return {
      info: inform,
      success: success,
      error: error
    };

    function inform(message, title){
      toastr.info(message, title || "Info")
    }

    function success(message, title) {
      toastr.success(message, title || "Success");
    }
    
    function error(message, title) {
      toastr.error(message, title || "Error");
    }
    /**
     * Generate callback-function with an appropriate actions method.
     * @param action {Function | null}
     * @param msg {String | null}
     * @param opts {Object | null}
     * @returns {*}
     */
    function confirm(action, msg, opts){
      if (action == null) throw new Error (defaultMessages.VariableIsUndefined);
      return Lobibox.confirm({
        msg: msg || "Do you really want to do this?",
        callback: function ($this, type, ev) {
          if (type == "yes") {
            try {
              action();
            }
            catch (err) {
              console.log(err);
              throw new Error([err, ". ", defaultMessages.CallbackIsNotFunction].join(""));
            }
          }
        },
        title: opts ? opts.title : "Confirmation"
      });
    }

    function popup(data, msgType) {
      if (angular.isArray(data)) {
        var errorList = data.join(' ');
        simplePopup(errorList, msgType);
      } else if (angular.isString(data)) {
        simplePopup(data, msgType);
      } else {
        simplePopup(data ? data.Exception : defaultMessages.ServerIsOffline, msgType);
      }
    }

    /**
     * Default popup messenger.
     * @param {String|Number} msg
     * @param {String} type
     */
    function simplePopup(msg, type) {
      Lobibox.alert(type || 'error', {
        msg: msg
      });
      $(".lobibox").css({
        'z-index': '999999999'
      });
    }
  }
})();