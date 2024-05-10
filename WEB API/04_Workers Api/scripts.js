let w;

function startWorker() {
    if (typeof Worker !== 'undefined') {
        //Worker Available

        // if w worker is not alrady defined
        if (typeof w == "undefined") {
            //Create a new  worker called 'w'
            w = new Worker("worker.js")
        }

        // listening for worker events/messages
        w.onmessage = function (event) {
            document.getElementById('demo').innerHTML = event.data;

        }
    }


    else {
        alert("Your broweser does't support Web Worker! ")
    }
}

function stopWorker() {
    if (typeof Worker !== "undefined") {
        w.terminate();
        w = undefined;
    }

    else {
        alert("Your broweser does't support Web Worker! ")

    }
}

