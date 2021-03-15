const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  _id: {
    type: Object,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true,
    default:0
  },
  status: {
    type: String,
    required: true
  },
 
  date: {
    type: Date,
    default: Date.now
  }
})

const AccountSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true,
    default:0
  },
  pendingTransactions: TransactionSchema,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("accounts", AccountSchema);
