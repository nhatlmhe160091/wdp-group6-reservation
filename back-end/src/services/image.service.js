const { Image } = require('../models/index');

class ImageService {
    getAllImages = async () => {
        return await Image.find();
    }

    /**
     * author: ThaiKV
     */
    createNewImage = async (data) => {

        return await Image.create(data);
    }

    /**
     * author: ThaiKV
     */
    getImagesByEntityId = async (entityId) => {
        return await Image.find({ entityId });
    }

    /**
     * author: ThaiKV
     */
    getImageById = async (imageId) => {
        return await Image.findById(imageId);
    }

    /**
     * author: ThaiKV
     */
    deleteImageById = async (imageId) => {
        return await Image.findByIdAndDelete(imageId);
    }

}

module.exports = new ImageService;
