const mongoose = require ('mongoose');
const connectionURL =
  ' mongodb+srv://mahith:kingofking@cluster0.xw2f1.mongodb.net/<dbname>?retryWrites=true&w=majority ';

mongoose.connect (connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  autoIndex: true,
});
