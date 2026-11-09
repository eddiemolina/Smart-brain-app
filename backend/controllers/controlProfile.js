const DEMO_USER = {
    id: 0,
    name: 'Demo User',
    email: 'demo@example.com',
    entries: 5,
    joined: '2026-01-01'
};

const controlProfile = (req,res,knex) => {
    const { id } = req.params;

    // Handle demo user
    if (id === 0) {
        return res.json(DEMO_USER);
    }

    knex
     .select('*')
     .from('users')
     .where({id})
     .then(user => {
        if(user.length) {
         res.json(user[0])
        } else {
            res.status(400).json('not found')
        }
     })
      .catch(err => res.status(400).json('not found'));
}

exports.controlProfile = controlProfile;