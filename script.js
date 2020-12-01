// TODO: add code here
function init () {
    let URL = "https://handlers.education.launchcode.org/static/astronauts.json";
    fetch(URL).then(
        function(response) {
            response.json().then(function(json) {
                const container = document.getElementById("container");
                container.innerHTML += `
                <h2>Total count is ${json.length}</h2>
                `
                function sortOrder(prop) {
                    return function(a,b) {
                        if (a[prop] > b[prop]) {
                            return 1;
                        }
                        else if (a[prop] < b[prop]) {
                            return -1;
                        }
                        return 0;
                    }
                }
                json.sort(sortOrder("hoursInSpace"));
                function greenTrue (active) {
                    if (active === true) {
                        let green = 
                        `
                        <li style = "color:green">Active: ${active}</li>
                        `
                        return green
                        }
                    else {
                        let noGreen = 
                        `
                        <li >Active: ${active}</li>
                        `
                        return noGreen
                        }
                };

                for (let i = 0; i < json.length; i++) {
                    container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            ${greenTrue(json[i].active)}
                            <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}">
                    </div>
                    `
                }
            })
        }
    )
    
    ;}

window.onload = init;