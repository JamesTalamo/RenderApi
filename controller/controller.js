const save = async (req, res) => {
    const { message } = req.body

    if (!message) return res.send("req {message} is required!")

    try {
        const DataModel = require('../models/DataModel')

        // Create a new instance of the DataModel with "Hello, World!" as the data
        const newData = new DataModel({ message: message })

        // Save the new data to MongoDB
        await newData.save()

        res.send("Added!")
    } catch (error) {
        console.error("Error saving data:", error)
        res.status(500).send("Error saving data to MongoDB")
    }
}

const delAll = async (req, res) => {
    try {
        const DataModel = require('../models/DataModel');

        // Delete all documents from the DataModel collection
        await DataModel.deleteMany();

        res.send("All values deleted successfully!");
    } catch (error) {
        console.error("Error deleting values:", error);
        res.status(500).send("Error deleting values from MongoDB");
    }
};

const getAllData = async (req, res) => {
    try {
        const DataModel = require('../models/DataModel');

        // Fetch all documents from the DataModel collection
        const allData = await DataModel.find();

        res.json(allData);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data from MongoDB");
    }
};




module.exports =
{

    save,
    delAll,
    getAllData
}