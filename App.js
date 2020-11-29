const express = require('express')
const hoa = require('hoa-events')
const app = express()
const port = 3000
app.use(express.json())

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/events', async (req, res) => {
    let events = await hoa.getAllEvents();
    res.send(events);
})

app.get('/today', async (req, res) => {
    let events = await hoa.getTodaysEvents();
    res.send(events);
})

app.get('/ongoing', async (req, res) => {
    let events = await hoa.getOngoingEvents();
    res.send(events);
})

app.get('/starting', async (req, res) => {
    let date = new Date(Date.parse('2020-12-06'));
    let events = await hoa.getEventsStarts(date);
    res.send(events);
})

app.get('/tags', async (req, res) => {
    let tags = await hoa.getTags();
    res.send(tags);
})

app.get('/eventsTags', async (req, res) => {
    let events = await hoa.getEventsWithTags(['health','trips']);
    res.send(events);
})