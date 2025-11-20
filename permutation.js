"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permute6 = permute6;
exports.unpermute6 = unpermute6;

function permute6(x) {
    if (!Number.isInteger(x) || x < 100000 || x > 999999)
        throw new Error("Input must be a 6-digit integer.");
    var y = feistel(x);

    while (y < 100000 || y > 999999) {
        y = feistel(y);
    }
    return y;
}
function unpermute6(y) {
    if (!Number.isInteger(y) || y < 100000 || y > 999999)
        throw new Error("Input must be a 6-digit integer.");
    var x = feistelInverse(y);

    while (x < 100000 || x > 999999) {
        x = feistelInverse(x);
    }
    return x;
}


function feistel(x) {
    var keys = [0xA3, 0xF1, 0xC7];
    var L = Math.floor(x / 1000);
    var R = x % 1000;
    for (var i = 0; i < keys.length; i++) {
        var F = feistelF(R, keys[i]);
        var newL = R;
        var newR = (L ^ F) % 1000;
        L = newL;
        R = newR;
    }
    return L * 1000 + R;
}
function feistelInverse(x) {
    var keys = [0xA3, 0xF1, 0xC7];
    var L = Math.floor(x / 1000);
    var R = x % 1000;
    for (var i = keys.length - 1; i >= 0; i--) {
        var prevR = L;
        var F = feistelF(prevR, keys[i]);
        var prevL = (R ^ F) % 1000;
        L = prevL;
        R = prevR;
    }
    return L * 1000 + R;
}

function feistelF(r, key) {
    return ((r * 1103515245 + key) >>> 5) & 0x3FF;
}

