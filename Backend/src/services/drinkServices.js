import drinksModel from "../models/drinksModel.js";

export const findDrink = async () => {
    try {
        return await drinksModel.find();
    } catch (error) {
        throw new Error(error);
    }
}

export const findDrinkById = async (id) => {
    try {
        return await drinksModel.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

export const createDrink = async (form) => {
    try {
        const newUser = await drinksModel.create(form);
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteDrink = async (id) => {
    try {
        return await drinksModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

export const updateDrink = async (id, info) => {
    try {
        return await drinksModel.findByIdAndUpdate(id, info);
    } catch (error) {
        throw new Error(error);
    }
}

export const findDrinkByName = async (name) => {
    try {
        return await drinksModel.find({ name: { $regex: new RegExp(name, 'i') } });
    } catch (error) {
        throw new Error(error);
    }
}