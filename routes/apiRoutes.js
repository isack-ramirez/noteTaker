const notes = require('../db/db')

module.exports=(app)=>{
    app.get('/api/notes', (req, res) => res.json(notes));

    app.post(('/api/notes'), (req,res)=>{

        notes.push(req.body);
        res.json(true);
      

    });

    app.delete(('/api/notes'), (req,res)=>{
        
        
    });

    
}