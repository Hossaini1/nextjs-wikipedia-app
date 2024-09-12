import CountryModel from "../../../lib/models/wikiModel";
import { NextResponse } from "next/server";
import connectDB from "../../../lib/db/connectDB";

export async function GET(req) {
    try {
        await connectDB();


        const url = new URL(req.url);
        const country = url.searchParams.get('country');
        console.log('country', country);

        let filter = {};

        if (country) {
            filter = {
                country: { $regex: new RegExp('^' + country, 'i') }
            };
        }

        const filteredCountries = await CountryModel.find(filter);

        return NextResponse.json({ status: 200, data: filteredCountries });
    } catch (err) {
        console.log('Server Error Get Country', err);
        return NextResponse.json({ status: 500, message: 'Server error' });
    }
}

