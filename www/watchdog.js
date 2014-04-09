var phonegapWatchdog = {

    phonegapWatchdog: function(successCallback, errorCallback, timer) {
        exec(succesCallback, errorCallback, "Watchdog", "phonegapWatchdog", [timer]);
    },
};

module.exports = phonegapWatchdog; 
