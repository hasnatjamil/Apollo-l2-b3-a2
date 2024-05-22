import mongoose from "mongoose";
import app from "./app";
import confiq from "./confiq";



async function main() {

    try {
        await mongoose.connect(confiq.db_url as string); // atalas url will be used here 

        //const port = 5000;

        app.listen(confiq.port, () => {
            console.log(`Example app listening on port ${confiq.port}`)
        })
    } catch (error) {
        console.log(error);

    }
}

main().catch(err => console.log(err)); //calling the main function to run 