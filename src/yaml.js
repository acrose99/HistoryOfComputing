
function main() {
    const fs = require('fs');
    const yaml = require('js-yaml');


    try {
        let fileContents = fs.readFileSync('/Users/Alex/WebstormProjects/HistoryOfComputing/src/test.yaml', 'utf8');
        let data = yaml.safeLoadAll(fileContents);

        let events = [];
        // console.log(data);
        for (let i = 0; i < data.length ; i++) {
            events.push(data[i]);
            // let Title = data[i]['Title'];
            // let Date = data[i]['Date'];
            // let Location = data[i]['Location'];
            // console.log("Title : " + Title);
            // console.log("Date : " + Date);
            // console.log("Location : " + Location);
        }
        for (let i = 0; i < events.length; i++) {
            let Date = events[i]['Date'];
            Date = parseInt(Date);
            // console.log(typeof Date);
            // console.log("Date : " + Date);

            //improve here!
            if (i >= 1 && Date < parseInt(events[i-1]['Date'])) {
                let tempDate = events[i-1]['Date'] ;
                console.log("Temp: " + tempDate);
                console.log("Date  " + Date);
                events[i-1]['Date'] = Date;
                events[i]['Date'] = tempDate;
            }
        }
        console.log(events);
        return events;

    } catch (e) {
        console.log(e);
    }

}

main();