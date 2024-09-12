// import mongoose from 'mongoose';
// import connectDB from '../../utils/database/connectDB';
//
// export async function searchFlight(formData: FormData) {
//     'use server'; // Wichtig für Next.js Server Actions
//
//     await connectDB();
//
//     const from = formData.get('from')?.toString().trim();
//     const to = formData.get('to')?.toString().trim();
//
//     const filter: any = {}; // Typ für Filter anpassen
//
//     if (from) {
//         filter.from = { $regex: new RegExp(`^${from}`, 'i') };
//     }
//
//     if (to) {
//         filter.to = { $regex: new RegExp(`^${to}`, 'i') };
//     }
//
//     const flight = await mongoose.connection.db.collection('flights').find(filter).toArray();
//
//     console.log(flight);
//
//     return flight;
}
