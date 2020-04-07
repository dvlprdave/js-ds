import database from '../../data.json'

export default (req, res) => {
  // const { author } = req.query;
  let data = database;

  // if (author) {
  //   data = data.filter(quote => quote.author.toLowerCase().includes(author.toLowerCase()));
  // }
  // if (!data.length) {
  //   data = database.filter(quote => quote.author.toLowerCase() === 'unknown');
  // }

  // FIXME: length and author TBD

  res.status(200).json(data);
};

// TODO: Clean file