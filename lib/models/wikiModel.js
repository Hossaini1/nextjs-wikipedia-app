// models/Country.js
import mongoose from 'mongoose';



const countrySchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
    },
    population: Number,
    cities: [String],
    capitalCity: String,
});

const CountryModel = mongoose.models.Country || mongoose.model('Country', countrySchema);

export default CountryModel;



