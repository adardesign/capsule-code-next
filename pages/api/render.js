
// https://nps.jsreportonline.net/api/report
const client = require("jsreport-client")("https://nps.jsreportonline.net/", "elib@accucontrive.com", "@cviwJga5kD7SMM")

async function render(req) {
    try {

        const rendered = await client.render({
            "template": {
                "content": "Hello world {{name}}",
                "recipe": "chrome-pdf",
                "engine": "handlebars",
                "chrome": {
                    "landscape": true
                }
            },
            "data": { "name": "hello" }
        })
        const bodyBuffer = await rendered.body()

        return bodyBuffer;
    } catch (error) {
        debugger;
        return "error";
    }

}



export default async (req, res) => {
    // res.end("TEST");
    const rendered = await render();

    // response.pipe(res);
    res.statusCode = 200;
    res.send(rendered);
}
