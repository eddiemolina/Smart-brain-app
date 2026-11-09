const controlSignIn = (req,res,knex,bcrypt) => {
    const {email , password} = req.body;

    const DEMO_EMAIL = 'demo@example.com';
    const DEMO_PASSWORD = 'Demo123';

    const DEMO_USER = {
        id: 0,
        name: 'Demo User',
        email: DEMO_EMAIL,
        entries: 5,
        joined: '2026-01-01'
    }

    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        
        return res.json(DEMO_USER);
    }
    
    if (!email || !password) {
        return res.status(400).json('incorrect form submission');
    }
    

//Must be enabled for DB lookup

//     knex.select('email', 'hash')
//     .from('login')
//     .where('email', '=', email)
//     .then(data => {
//        const isValid = bcrypt.compareSync(password, data[0].hash);
//         if (isValid) {
//             return knex.select('*')
//             .from ('users')
//             .where('email' , '=', email)
//             .then(user => {
//                 res.json(user[0])    
//             })
//             .catch(err => res.status(400).json('unable to get user'))
//         } else {
//             res.status(400).json('wrong credentials')
//         }
//     })
//     .catch(err => res.status(400).json('wrong credentials'))

    res.status(400).json('wrong credentials')

}

exports.controlSignIn = controlSignIn;