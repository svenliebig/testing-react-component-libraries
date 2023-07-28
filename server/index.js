import fs from "fs"
import path from "path"
import express from "express"

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express()

app.get("/dogs", async (req, res) => {
	const json = fs.readFileSync(path.resolve(__dirname, "data", "dogs.json"), "utf8")
	const dogs = JSON.parse(json)

	let { start, max } = req.query

	if (!start) {
		start = 0
	} else {
		start = parseInt(start)
	}

	if (!max) {
		max = 20
	} else {
		max = parseInt(max)
	}

	return res.send({ items: dogs.slice(start, start + max), total: dogs.length })
})

app.listen(8080, () => {
	console.log("Server is listening on port 8080")
})