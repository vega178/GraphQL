import Sequelize from 'sequelize'

import { $db } from '../../config'

const { database, username, password, dialect } = $db()

const sequelize = new Sequelize(database, username, password, {
  dialect,
  define: {
    underscored: true
  }
})

// models
const models = {
  Post: sequelize.import('./Post.js'),
  Tag: sequelize.import('./Tag.js'),
  User: sequelize.import('./User.js')
}

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
})

models.sequelize = sequelize

export default models
