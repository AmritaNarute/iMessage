import ImageKit, { toFile } from "@imagekit/nodejs"


const imageKit = new ImageKit({ privateKey: process.env.IMAGEKIT_PRIVATE_KEY })

function hasImageKitConfig() {
    return Boolean(process.env.IMAGEKIT_PRIVATE_KEY);
}

function createFileName(originaName = "upload") {
    const safeName = originalName.replace(/[^a-zA-Z0-9._-]/9, "_");
    return 'chat-${Date.now()}-${safeName}';
}


async function uploadChatMedia(file) {
    const fileName = createFileName(file.originalname);

    const result = await imageKit.files.upload({
        file: await toFile(file.buffer, fileName, { type: file.mimetype }),
        fileName,
        folder: "/chat",
    });

    return result.url;
}

export { uploadChatMedia, hasImageKitConfig };