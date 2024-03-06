import midAfterFoodModel from "../models/midAfternoonFoodModel.js";

export const findMidAfterFood = async () => {
    try {
        return await midAfterFoodModel.find();
    } catch (error) {
        throw new Error(error);
    }
}

export const findMidAfterFoodById = async (id) => {
    try {
        return await midAfterFoodModel.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

export const createMidAfterFood = async (form) => {
    try {
        const newUser = await midAfterFoodModel.create(form);
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteMidAfterFood = async (id) => {
    try {
        return await midAfterFoodModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

export const updateMidAfterFood = async (id, info) => {
    try {
        return await midAfterFoodModel.findByIdAndUpdate(id, info);
    } catch (error) {
        throw new Error(error);
    }
}

export const findMidAfterFoodByName = async (name) => {
    try {
        return await midAfterFoodModel.find({ name: { $regex: new RegExp(name, 'i') } });
    } catch (error) {
        throw new Error(error);
    }
}