module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    business: { type: String },
    business_name: { type: String },
    business_branch: { type: String },
    telephone: { type: String },
    location: { type: Array },
    store_location: { type: String },
    sales_department: { type: String },
    sales_principal: { type: String },
    branch_phone: { type: String },
    activity: { type: Array },
    describe: { type: String },
    merchant_status: { type: String },
    format: { type: String },
    discount_map: { type: String },
    business_city: { type: String },
    license_name: { type: String },
    urlLogo: { type: String },
    secondary_branch: { type: String },
    date: { type: String },
    landmark: { type: Array },
    acquiring: { type: Array },
    account: { type: Array },
    expand_channel: { type: String },
    expand_name: { type: String },
    expand_telephone: { type: String },
    business_number: { type: String },
    business_hours: { type: String },
    average_day_amount: { type: String },
    customer_price: { type: String },
  });

  return mongoose.model('formats', UserSchema);

};

