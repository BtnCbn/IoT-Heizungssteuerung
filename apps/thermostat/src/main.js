/**
 * Main entry point for the thermostat application.
 * Responsible for connecting to the message broker mosquitto and starting the consumer.
 * @module main
 * @requires mqtt
 * @exports CLIENT
 * @author Botan Coban
 */
import mqtt from "mqtt";
import { start } from "./thermostat.js";

/**
 * The connection string to connect to the message broker.
 * @constant {string}
 */
const CONNECTION_STRING = "mqtt://localhost:1883";

/**
 * The mqtt client for the message broker.
 * @constant {mqtt.Client}
 */
export const CLIENT = mqtt.connect(CONNECTION_STRING);

/**
 * The room in which the thermostat is located.
 * @constant {string}
 */
const room = process.argv[2];

CLIENT.on("connect", () => {
    // eslint-disable-next-line no-console -- message to console
    console.info("thermostat application connected to message broker.");
    start(room);
});
