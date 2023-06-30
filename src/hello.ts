import * as core from "@actions/core"

try {
    const whoToGreet = core.getInput("who-to-greet", {required: true})
    core.info(`Akari: Hello ${whoToGreet}`)
    const time = (new Date).toTimeString()
    core.setOutput("time", time)
    core.info("Hello Time " + time)
} catch (error) {
    core.error((error as any).message)
}
