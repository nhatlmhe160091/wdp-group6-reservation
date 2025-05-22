const express = require('express');
const router = express.Router();
const { UserController } = require('../../../controllers/index');
const { AuthMiddleware } = require('../../../middlewares/index');


router.post('/reset-password', AuthMiddleware.checkRoles(['GUEST', 'CUSTOMER', 'STAFF', 'MANAGER', 'ADMIN']), UserController.resetPassword);
router.post('/send-email-verification', AuthMiddleware.checkRoles(['GUEST', 'CUSTOMER', 'STAFF', 'MANAGER', 'ADMIN']), UserController.sendEmailVerification);
router.get('/verify-email', AuthMiddleware.checkRoles(['GUEST', 'CUSTOMER', 'STAFF', 'MANAGER', 'ADMIN']), UserController.verifyEmail);
router.get('/get-current-user', AuthMiddleware.checkRoles(['CUSTOMER', 'STAFF', 'MANAGER', 'ADMIN']), UserController.getCurrentUser);
router.post('/register-customer-account', AuthMiddleware.checkRoles(['GUEST']), UserController.registerCustomerAccount);
router.patch('/update-customer-info', AuthMiddleware.checkRoles(['CUSTOMER']), UserController.updateCustomerInfo);
router.get('/authenticated', AuthMiddleware.checkRoles(['ADMIN']), UserController.getAllAuthenticatedUsers);
router.get('/unauthenticated', AuthMiddleware.checkRoles(['ADMIN']), UserController.getAllUnauthenticatedUser);
router.get('/', AuthMiddleware.checkRoles(['ADMIN']), UserController.getAllUsers);


router.get('/paginated', UserController.getPaginatedUsers);
router.post('/register-and-verify-account', UserController.registerAndVerifyAccount);
router.patch('/update-account-info/:id', UserController.updateAccountInfo);
router.get('/get-account-email/:firebaseUID', UserController.getEmailByFirebaseUID);
module.exports = router;
