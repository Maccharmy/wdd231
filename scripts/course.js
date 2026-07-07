const courses = [
    { code: "WDD130", name: "Web Fundamentals", credits: 3, type: "WDD", completed: true },
    { code: "WDD231", name: "Frontend Development", credits: 3, type: "WDD", completed: false },
    { code: "CSE110", name: "Programming Basics", credits: 3, type: "CSE", completed: true },
    { code: "CSE210", name: "Data Structures", credits: 3, type: "CSE", completed: false }
];

const container = document.getElementById("courseContainer");
const totalCredits = document.getElementById("totalCredits");

function displayCourses(list) {
    container.innerHTML = "";
    list.forEach(course => {
        const card = document.createElement("div");
        card.textContent = `${course.code} - ${course.name} (${course.credits} credits)`;
        card.style.backgroundColor = course.completed ? "#c8e6c9" : "#ffcdd2";
        card.style.padding = "0.5rem";
        card.style.margin = "0.5rem 0";
        card.style.borderRadius = "4px";
        container.appendChild(card);
    });
    const credits = list.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = credits;
}

document.getElementById("allBtn").addEventListener("click", () => displayCourses(courses));
document.getElementById("wddBtn").addEventListener("click", () => displayCourses(courses.filter(c => c.type === "WDD")));
document.getElementById("cseBtn").addEventListener("click", () => displayCourses(courses.filter(c => c.type === "CSE")));

displayCourses(courses);
