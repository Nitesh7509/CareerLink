var ImageKit = require("imagekit");


exports.ImageKit = () => {
    var imagekitsetup = new ImageKit({
        publicKey: process.env.IMAGEKIT_PUBLICKEY,
        privateKey: process.env.IMAGEKIT_PRIVATEKEY,
        urlEndpoint: process.env.IMAGEKIT_URLENDPOINT,
    });
    return imagekitsetup
}


