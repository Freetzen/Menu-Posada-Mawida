import foodModel from "../models/foodsModel.js";

export const findFood = async () => {
    try {
        return await foodModel.find();
    } catch (error) {
        throw new Error(error);
    }
}

export const findFoodById = async (id) => {
    try {
        return await foodModel.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

export const createFood = async (form) => {
    try {
        const newUser = await foodModel.create(form);
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteFood = async (id) => {
    try {
        return await foodModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

export const updateFood = async (id, info) => {
    try {
        return await foodModel.findByIdAndUpdate(id, info);
    } catch (error) {
        throw new Error(error);
    }
}

export const findFoodByName = async (name) => {
    try {
        return await foodModel.find({ name: { $regex: new RegExp(name, 'i') } });
    } catch (error) {
        throw new Error(error);
    }
}