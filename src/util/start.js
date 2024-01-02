import chalk from "chalk";

const startDrawing = (protocol, host, port) => {
    console.log(chalk.rgb(130, 260, 220)(" _____________________   _   _   ______________   _   _   _____________________ \n"));
    console.log(chalk.rgb(10, 200, 240)("         ____   _   _   _   _   _   _    __ __    _   _   _   _   _   _ "));
    console.log(chalk.rgb(30, 210, 235)("        / _  | ___ _____ ____  ___  __ _| \\|| | ___  ___  _ _ _    ___"));
    console.log(chalk.rgb(50, 220, 230)("       / /_| |/ __|_____|  _ \\/   \\|  | |  \\| |/ _ \\| _ \\| | | |  | _ \\"));
    console.log(chalk.rgb(70, 230, 225)("      / ___  |\\__ \\ | | | |__/| | || \\  | \\ \\ |  __/| _ \\| | | |__| __ \\ "));
    console.log(chalk.rgb(90, 240, 220)("     /_/   |_||___/ |_| |_|\\_\\\\___/|_|\\_|_|\\__|\\___||___/\\___/\\___|_| \\_\\ \n"));
    console.log(chalk.rgb(130, 260, 220)(" _____________________   _   _   ______________   _   _   _____________________ \n"));

    console.log("");
    console.log(chalk.rgb(255, 0, 0)("* Access point used for development, does not have a definitive connection to the Web"));
    console.log("* Serving Express app");
    console.log("* Running on:" + chalk.rgb(70, 200, 215)(` ${protocol}://${host}:${port}`));
    console.log("  " + chalk.rgb(255, 200, 50)("Press CTRL+C to quit"));
}

export default startDrawing
