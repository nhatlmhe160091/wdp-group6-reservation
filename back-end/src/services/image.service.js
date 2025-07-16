const { Image } = require('../models/index');

class ImageService {
    getAllImages = async () => {
        return await Image.find();
    }

    createNewImage = async (data) => {

        return await Image.create(data);
    }


    getImagesByEntityId = async (entityId) => {
        return await Image.find({ entityId });
    }


    getImageById = async (imageId) => {
        return await Image.findById(imageId);
    }


    deleteImageById = async (imageId) => {
        return await Image.findByIdAndDelete(imageId);
    }

}

module.exports = new ImageService;
