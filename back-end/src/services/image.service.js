const { Image } = require('../models/index');

class ImageService {
    getAllImages = async () => {
        return await Image.find();
    }

<<<<<<< Updated upstream
=======
    /**
     * author: NgocNB
     */
>>>>>>> Stashed changes
    createNewImage = async (data) => {

        return await Image.create(data);
    }

<<<<<<< Updated upstream

=======
    /**
     * author: NgocNB
     */
>>>>>>> Stashed changes
    getImagesByEntityId = async (entityId) => {
        return await Image.find({ entityId });
    }

<<<<<<< Updated upstream

=======
    /**
     * author: NgocNB
     */
>>>>>>> Stashed changes
    getImageById = async (imageId) => {
        return await Image.findById(imageId);
    }

<<<<<<< Updated upstream

=======
    /**
     * author: NgocNB
     */
>>>>>>> Stashed changes
    deleteImageById = async (imageId) => {
        return await Image.findByIdAndDelete(imageId);
    }

}

module.exports = new ImageService;
