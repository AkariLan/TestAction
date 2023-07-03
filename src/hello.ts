import * as core from "@actions/core"
import * as constants from "./constants"

try {
    const whoToGreet = core.getInput("who-to-greet", {required: true})
    core.info(`Akari: Hello ${whoToGreet}`)
    const time = (new Date).toTimeString()
    core.setOutput("time", time)
    core.info("Hello Time " + time)
    core.info("Hello： " + constants.INPUT_JAVA_PACKAGE)
} catch (error) {
    core.error((error as any).message)
}
