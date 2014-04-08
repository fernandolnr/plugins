var phonegapWatchgdog = {

    phonegapWatchgdog: function(successCallback, errorCallback, timer) {
        exec(succesCallback, errorCallback, "watchdog", "phonegapWatchgdog", [timer]);
    },
};

module.exports = phonegapWatchgdog; 