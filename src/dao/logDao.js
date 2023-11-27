const LogModel = require("../model/Log.js")

module.exports = {
    inserir: async function(data, acao, autorId, autorEmail) {
        return await LogModel.create({
            data: data,
            acao: acao,
            autorId: autorId,
            autorEmail: autorEmail
        })
    }
}
