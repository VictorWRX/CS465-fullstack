/* GET travel view */
const travel = (req, res) => {
    pageTitle = ' TRAVLR - Travlr';
    res.render('travel', { title: pageTitle});
   };
   
   module.exports = {
    travel
   };