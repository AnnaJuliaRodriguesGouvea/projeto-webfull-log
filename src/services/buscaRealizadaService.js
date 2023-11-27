const LogDao = require('../dao/logDao')

const salva = (payload) => {
    // TODO Validar dados antes de salvar
    LogDao.inserir(payload.data, payload.acao, payload.autorId, payload.autorEmail)
}

module.exports = {salva};
