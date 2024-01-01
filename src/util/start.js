import chalk from "chalk";

const startDrawing = (protocol, host, port) => {
    console.log(" _____________________   _   _   ______________   _   _   _____________________ \n");
    console.log("     ____   _   _   _   _   _   _    __ __    _   _   _   _   _   _ ");
    console.log("    / _  | ___ _____ ____  ___  __ _| \\|| | ___  ___  _ _ _    ___");
    console.log("   / /_| |/ __|_____|  _ \\/   \\|  | |  \\| |/ _ \\| _ \\| | | |  | _ \\");
    console.log("  / ___  |\\__ \\ | | | |__/| | || \\  | \\ \\ |  __/| _ \\| | | |__| __ \\ ");
    console.log(" /_/   |_||___/ |_| |_|\\_\\\\___/|_|\\_|_|\\__|\\___||___/\\___/\\___|_| \\_\\ \n");
    console.log(" _____________________   _   _   ______________   _   _   _____________________ \n");

    console.log("");
    console.log(chalk.rgb(255, 0, 0)("* Access point used for development, does not have a definitive connection to the Web"));
    console.log("* Serving Express app");
    console.log("* Running on:" + chalk.rgb(70, 200, 215)(` ${protocol}://${host}:${port}`));
    console.log("  " + chalk.rgb(255, 200, 50)("Press CTRL+C to quit"));
}

export default startDrawing