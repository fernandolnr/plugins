var phonegapWatchdog = {

    phonegapWatchdog: function(timer) {
        cordova.exec(null, null, "Watchdog", "phonegapWatchdog", [timer]);
    },
};

module.exports = phonegapWatchdog; 
