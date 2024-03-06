import dessertsModel from "../models/dessertsModel.js";

export const findDessert = async () => {
    try {
        return await dessertsModel.find();
    } catch (error) {
        throw new Error(error);
    }
}

export const findDessertById = async (id) => {
    try {
        return await dessertsModel.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

export const createDessert = async (form) => {
    try {
        const newUser = await dessertsModel.create(form);
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteDessert = async (id) => {
    try {
        return await dessertsModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

export const updateDessert = async (id, info) => {
    try {
        return await dessertsModel.findByIdAndUpdate(id, info);
    } catch (error) {
        throw new Error(error);
    }
}

export const findDessertByName = async (name) => {
    try {
        return await dessertsModel.find({ name: { $regex: new RegExp(name, 'i') } });
    } catch (error) {
        throw new Error(error);
    }
}