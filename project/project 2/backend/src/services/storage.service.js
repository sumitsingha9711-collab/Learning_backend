const ImageKit = require('@imagekit/nodejs')

const ImagekitClient = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFiles(file){
    const result = await ImagekitClient.files.upload({
        file,
        fileName:"music_" + Date.now(),
        folder: "music"
    })

    return result
}

module.exports = {uploadFiles}