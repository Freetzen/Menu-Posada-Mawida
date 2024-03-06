import teaFoodModel from "../models/teaFoodModel.js";

export const findTeaFood = async () => {
    try {
        return await teaFoodModel.find();
    } catch (error) {
        throw new Error(error);
    }
}

export const findTeaFoodById = async (id) => {
    try {
        return await teaFoodModel.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

export const createTeaFood = async (form) => {
    try {
        const newUser = await teaFoodModel.create(form);
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteTeaFood = async (id) => {
    try {
        return await teaFoodModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

export const updateTeaFood = async (id, info) => {
    try {
        return await teaFoodModel.findByIdAndUpdate(id, info);
    } catch (error) {
        throw new Error(error);
    }
}

export const findTeaFoodByName = async (name) => {
    try {
        return await teaFoodModel.find({ name: { $regex: new RegExp(name, 'i') } });
    } catch (error) {
        throw new Error(error);
    }
}