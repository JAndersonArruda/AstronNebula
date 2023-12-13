const startDrawing = (protocol, host, port) => {
    console.log(" _____________________   _   _   ______________   _   _   _____________________ \n");
    console.log("     ____   _   _   _   _   _   _    __ __    _   _   _   _   _   _ ");
    console.log("    / _  | ___ _____ ____  ___  __ _| \\|| | ___  ___  _ _ _    ___");
    console.log("   / /_| |/ __|_____|  _ \\/   \\|  | |  \\| |/ _ \\| _ \\| | | |  | _ \\");
    console.log("  / ___  |\\__ \\ | | | |__/| | || \\  | \\ \\ |  __/| _ \\| | | |__| __ \\ ");
    console.log(" /_/   |_||___/ |_| |_|\\_\\\\___/|_|\\_|_|\\__|\\___||___/\\___/\\___|_| \\_\\ \n");
    console.log(" _____________________   _   _   ______________   _   _   _____________________ \n");

    console.log("");
    console.log("* Serving Express app");
    console.log(`* Running on: ${protocol}://${host}:${port}`);
    console.log("Press CTRL+C to quit");
}

export default startDrawing