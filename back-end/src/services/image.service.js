const { Image } = require('../models/index');

class ImageService {
    getAllImages = async () => {
        return await Image.find();
    }

<<<<<<< HEAD
    /**
     * author: NgocNB
     */
=======
>>>>>>> parent of 9f11fb4 (fix bug)
    createNewImage = async (data) => {

        return await Image.create(data);
    }

<<<<<<< HEAD
    /**
     * author: NgocNB
     */
=======

>>>>>>> parent of 9f11fb4 (fix bug)
    getImagesByEntityId = async (entityId) => {
        return await Image.find({ entityId });
    }

<<<<<<< HEAD
    /**
     * author: NgocNB
     */
=======

>>>>>>> parent of 9f11fb4 (fix bug)
    getImageById = async (imageId) => {
        return await Image.findById(imageId);
    }

<<<<<<< HEAD
    /**
     * author: NgocNB
     */
=======

>>>>>>> parent of 9f11fb4 (fix bug)
    deleteImageById = async (imageId) => {
        return await Image.findByIdAndDelete(imageId);
    }

}

module.exports = new ImageService;
