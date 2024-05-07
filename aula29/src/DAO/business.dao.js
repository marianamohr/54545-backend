const businessModel = require("../models/business.model")

const getBusiness = async () => {
    const business = await businessModel.find()
    return business;
};

const createBusiness = async (business) => {
    const businessCreated = await businessModel.create(business)
    return businessCreated;
};



module.exports = {getBusiness, createBusiness}