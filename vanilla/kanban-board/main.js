let backlogSection = document.querySelector("#backlog");
let createBacklogButton = document.querySelector("#create-backlog");

createBacklogButton.addEventListener("click", () => {
    console.log("Backlog button has been clicked!");

    let taskTitleLabel = document.createElement("label");
    taskTitleLabel.innerText = "Task Title";

    let taskTitle = document.createElement("input");
    taskTitleLabel.setAttribute("for", "taskTitle");
    taskTitle.setAttribute("type", "text");
    taskTitle.setAttribute("id", "taskTitle");
    taskTitle.setAttribute("placeholder", "Enter Task Title...");

    let taskDescriptionLabel = document.createElement("label");
    taskDescriptionLabel.innerText = "Task Description";

    let taskDescription = document.createElement("textarea");
    taskDescriptionLabel.setAttribute("for", "taskDescription");
    taskDescription.setAttribute("id", "taskDescription");
    taskDescription.setAttribute("placeholder", "Enter Task Description...");

    let createTaskButton = document.createElement("button");
    createTaskButton.innerText = "+ Create Backlog";
    createTaskButton.classList.add("editor-form-open-btn");

    let createTaskForm = document.createElement("div");

    let taskTitleContainer = document.createElement("div");
    taskTitleContainer.appendChild(taskTitleLabel);
    taskTitleContainer.appendChild(taskTitle);

    let taskDescriptionCotainer = document.createElement("div");
    taskDescriptionCotainer.appendChild(taskDescriptionLabel);
    taskDescriptionCotainer.appendChild(taskDescription);

    createTaskForm.appendChild(taskTitleContainer);
    createTaskForm.appendChild(taskDescriptionCotainer);
    createTaskForm.appendChild(createTaskButton);

    backlogSection.appendChild(createTaskForm);
})

// 1. Get the backlogs data from the localStorage.
let backlogs = localStorage.getItem("backlogs");
backlogs = JSON.parse(backlogs);
console.log(backlogs);

function renderBacklog(backlog, index) {
    console.log(index, backlog)
    let article = document.createElement("article");
    article.setAttribute("id", index)
    let h3 = document.createElement("h3");
    h3.innerText = backlog.taskTitle;
    let p = document.createElement("p");
    p.innerText = backlog.taskDescription;
    article.appendChild(h3);
    article.appendChild(p);
    return article;
}

let backlogTasksContent = document.createElement("div");

function createBacklogsContainer(backlog, index) {
    let article = renderBacklog(backlog, index)
    backlogTasksContent.appendChild(article);
}

backlogs.map((backlog, index) => createBacklogsContainer(backlog, index))
backlogSection.appendChild(backlogTasksContent);