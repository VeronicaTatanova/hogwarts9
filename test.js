const {pool} = require(`./pgConfig.js`)
pool.query(`select * from задания;`, (err, res) =>
{
    if(err) console.log(`Ошибка:`, err)
    else
    {
        console.log(res.rows)
        pool.end()
    }
})