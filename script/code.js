
let about = document.querySelector('section#about .row:last-child');
let aboutContents = [
    "Humility is the practice of recognizing our limitations and imperfections, and it is essential to personal growth and development. Whether it's acknowledging our mistakes and shortcomings, seeking feedback from others, or approaching new situations with a sense of openness and curiosity, humility can help us learn and grow in meaningful ways"

]
//loop through function
 aboutContents.forEach((content, i)=>{
    about.innerHTML += ` <p class='lead'>${i+1} ${content}</p>
    `
})
// create a array to show one element foreach shows which element you want to display , //
// Education
let education = [
    {
        id: 1,
        year: 2023,
        description: "I'm currently studying at life Choices",
        place: 'Life Choices',
        type: 'certificate pending',
        certificate: ''
    },
    {
        id: 2,
        year: 2022,
        description: 'I finished high school and got multiple awards and the 1st top student.',
        place: 'Darul Islam High School',
        type: 'Bachelors pass',
        certificate: ''
    },
    {
        id: 3,
        year: 2018,
        description: 'I finished primary school and got average results.',
        place: 'Hidayatul Islam Primary School',
        type: 'Certificate',
        certificate: ''
    },
   
    
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})