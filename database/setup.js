role: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'employee',
    validate: {
        isIn: [['employee', 'manager', 'admin']]
    }
}
role: 'employee'
role: 'manager'
role: 'admin'
