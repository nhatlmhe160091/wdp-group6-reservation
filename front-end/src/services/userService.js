import api from './index'
import { handleApiCall } from '../utils/handleApi';

const UserService = {
    getCurrentUser: async () => {
        return handleApiCall(() =>
            api.get("/user/get-current-user")
        )
    },

    registerCustomerAccount: async (filter) => {
        const {
            fname, lname, dob, phoneNumber, email, gender, password
        } = filter;
        return handleApiCall(() =>
            api.post("/user/register-customer-account", {
                fname, lname, dob, phoneNumber, email, gender, password
            })
        )
    },

    updateCustomerInfo: async (filter) => {
        const {
            fname, lname, dob, phoneNumber, gender
        } = filter
        return handleApiCall(() =>
            api.patch("/user/update-customer-info", {
                fname, lname, dob, phoneNumber, gender
            })
        )
    },

    sendEmailVerification: async (email) => {
        return handleApiCall(() =>
            api.post("/user/send-email-verification", { email })
        )
    },

    resetPassword: async (email) => {
        return handleApiCall(() =>
            api.post("/user/reset-password", { email })
        )
    },

    getPaginatedUsers: async (page = 1, limit = 10, search = '', role = '') => {
        return handleApiCall(() =>
            api.get("/user/paginated", {
                params: { page, limit, search, role }
            })
        );
    },

    registerAndVerifyAccount: async (filter) => {
        const {
            fname, lname, dob, phoneNumber, email, gender, password, role
        } = filter;
        return handleApiCall(() =>
            api.post("/user/register-and-verify-account", {
                fname, lname, dob, phoneNumber, email, gender, password, role
            })
        );
    },

    updateAccountInfo: async (id, fname, lname, dob, phoneNumber, gender, role) => {
        return handleApiCall(() =>
            api.patch(`/user/update-account-info/${id}`, {
                fname, lname, dob, phoneNumber, gender, role
            })
        );
    },
    getEmailByFirebaseUID: async (firebaseUID) => {
        return handleApiCall(() =>
            api.get(`/user/get-account-email/${firebaseUID}`)
        )
    }
}

export default UserService;
