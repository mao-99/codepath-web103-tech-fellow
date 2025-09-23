const renderWorkshops = async () => {
    const response = await fetch('/workshops')
    const data = await response.json()
    const mainContent = document.getElementById("main-content")

    console.log("Debug #1", data)

    if (data) {
        console.log("Pass #1: Workshops loaded")
        data.map(workshop => {
            let workshopContainer = document.createElement("section")
            workshopContainer.classList.add("workshopContainer")
            let workshopDetails = document.createElement('a')
            workshopDetails.href = `/workshops/${workshop.id}`
            let workshopTitle = document.createElement('h3')
            workshopTitle.textContent = `Title: ${workshop.title}`
            workshopTitle.classList.add('workshopTitle')
            workshopTitle.classList.add('londrina-solid-black')
            workshopDetails.appendChild(workshopTitle)
            //Getting related concepts
            let workshopConcepts = workshop.related_concepts
            //Creating container for all concepts
            let workshopConceptsContainer = document.createElement("aside")
            workshopConceptsContainer.appendChild(workshopDetails)
            let conceptsContainer = document.createElement('div')
            conceptsContainer.classList.add('conceptsContainer')
            workshopConcepts.map(concept => {
                conceptSpan = document.createElement('span')
                conceptSpan.textContent = `${concept}, `
                conceptSpan.classList.add('conceptSpan')
                conceptSpan.classList.add('londrina-solid-black')

                conceptsContainer.appendChild(conceptSpan)
            })

            workshopConceptsContainer.appendChild(conceptsContainer)
            let container = document.createElement("div")
            container.classList.add("container")

            let leetcodeLink = document.createElement("a")
            leetcodeLink.href = "https://leetcode.com/bogusQuestionLink"
            leetcodeLink.textContent = "LeetCode"
            leetcodeLink.classList.add("leetcodeLink")
            leetcodeLink.classList.add("lugrasimo-regular")

            let rating = document.createElement('div')
            rating.textContent = `Rating: ${workshop.rating}`
            rating.classList.add("textContent")
            rating.classList.add("londrina-solid-black")

            let difficulty = document.createElement('div')
            difficulty.textContent = `Difficulty: ${workshop.difficulty}`
            difficulty.classList.add("textContent")
            difficulty.classList.add("londrina-solid-black")

            let solutionsheetLink = document.createElement('a')
            solutionsheetLink.href = `${workshop["solution_sheet_link"]}`
            solutionsheetLink.textContent = "Sheet"
            solutionsheetLink.classList.add("textContent")
            solutionsheetLink.classList.add("lugrasimo-regular")

            let discordLink = document.createElement('a')
            discordLink.href = `${workshop.discord_server_link}`
            discordLink.textContent = "Discord"
            discordLink.classList.add("textContent")
            discordLink.classList.add("lugrasimo-regular")

            let workshopVideoLink = document.createElement('a')
            workshopVideoLink.href = `${workshop.video_link}`
            workshopVideoLink.textContent = "Workshop"
            workshopVideoLink.classList.add("workshopVideoLink")
            workshopVideoLink.classList.add("lugrasimo-regular")


            let row1 = document.createElement('div')
            let row2 = document.createElement('div')
            let row3 = document.createElement('div')
            row1.classList.add('row')
            row2.classList.add('row')
            row3.classList.add('row')

            row1.appendChild(workshopVideoLink)
            row1.appendChild(difficulty)
            row2.appendChild(leetcodeLink)
            row2.appendChild(rating)
            row3.appendChild(solutionsheetLink)
            row3.appendChild(discordLink)

            
            container.appendChild(workshopConceptsContainer)
            container.appendChild(row1)
            container.appendChild(row2)
            container.appendChild(row3)
            workshopContainer.appendChild(container)
            mainContent.appendChild(workshopContainer)
        })
    }
    else {
        console.log("Error #1: No data from server")
        let errorMsg = document.createElement('h2')
        errorMsg.textContent = "Sorry, but I couldnt get my data"
        document.appendChild(errorMsg)
        return 
    }
}

const renderWorkshop = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop());
    let response = await fetch('/workshops');
    console.log("This is the response", response)
    const workshops = await response.json();
    const workshopContent = document.getElementById('workshop-content');
    if (workshops) {
        let workshop = workshops.find(workshop => workshop.id === requestedID);
    
        if (workshop) {
            // Populate the workshop details
            let workshopTitle = document.getElementById('title')
            workshopTitle.textContent = workshop.title;
            let workshopVideo = document.getElementById("workshopVideo")
            workshopVideo.href = workshop.video_link
            workshopVideo.textContent = 'Workshop Link: ' + workshop.video_link;
            let difficulty = document.getElementById('difficulty')
            difficulty.textContent = 'Difficulty: ' + workshop.difficulty;
            let leetcode = document.getElementById('leetcodeLink')
            leetcode.href = workshop.leetcode_link
            leetcode.textContent = 'Leetcode: ' + workshop.leetcode_link;
            let rating = document.getElementById('rating')
            rating.textContent = "Rating: " + workshop.rating;
            let solutionSheet = document.getElementById('solutionSheet')
            solutionSheet.textContent = "Solution Sheet: " + workshop.solution_sheet;
            let discord = document.getElementById('discordLink')
            discord.textContent = "Discord Link: " + workshop.discord_link;

            document.title = `Workshop - ${workshop.title}`;

            // Create the related concepts section
            let workshopConcepts = workshop.related_concepts;
            
            // Create a container for related concepts
            let workshopConceptsContainer = document.createElement("aside");
            workshopConceptsContainer.classList.add("workshopConceptsContainer"); // Optional class for styling

            // Create the div for concept tags
            let conceptsContainer = document.createElement('div');
            conceptsContainer.classList.add('conceptsContainer');
            
            // Map over related concepts and create a span for each
            workshopConcepts.map(concept => {
                let conceptSpan = document.createElement('span');
                conceptSpan.textContent = `${concept}, `;
                conceptSpan.classList.add('conceptSpan', 'londrina-solid-black');
                conceptsContainer.appendChild(conceptSpan);
            });

            // Append the concepts container to the workshop concepts container
            workshopConceptsContainer.appendChild(conceptsContainer);

            // Append the entire workshop concepts container to the workshop content
            workshopContent.appendChild(workshopConceptsContainer);
        } 
        else {
            const message = document.createElement('h2');
            message.textContent = 'No Workshops Available 😞';
            workshopContent.appendChild(message);
        }
    }
}



renderWorkshops()


renderWorkshop()