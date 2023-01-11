const ClientModel = require('../Models/ClientModel');

class ClientController {
    async store(req, res) {
        try {
            const { name, email, phone, address, cpf } = req.body;
            if(!name || !email || !phone || !address ||!cpf){
                return res.status(400).json({message: "All the informations are required"});
            }
            const createdClient = await ClientModel.create(req.body);

        return res.status(200).json(createdClient);
            
        } catch (error) {
            return res.status(404).json({message: "Internal Error" });
        }
        
    }

    async index(req, res) {
        try {
            const clients = await ClientModel.find();

            return res.status(200).json(clients);
        } catch (error) {
            return res.status(404).json({message: "Internal Error" });
        }
        
    }

    async show(req, res) {

        try {
            const { id } = req.params;

            const client = await ClientModel.findById(id);
    
            if(!client){
                return res.status(404).json({message: "Client does not exists" });
            }
    
            return res.status(200).json(client);
        }
        catch (error) {
            return res.status(404).json({message: "Failed to delete client. Verify the client id." });
        }
    }

    async update(req, res) {

        try {
            const { id } = req.params;
            await ClientModel.findByIdAndUpdate(id, req.body);

            return res.status(200).jason({message: "Client updated"});

        } catch (error) {
            return res.status(404).json({message: "Failed to update client. Verify the client id." });
        }
        
    }

    async destroy(req, res) {
        try {
            const { id } = req.params;

            const clientDeleted = await ClientModel.findByIdAndDelete(id);

            if(!clientDeleted){
                return res.status(404).json({message: "Client does not exists"});
            }

            return res.status(200).json({message: "Client deleted"});
            
        } catch (error) {
            return res.status(404).json({message: "Failed to delete client. Verify the client id." });
        }
    }
}

module.exports = new ClientController();