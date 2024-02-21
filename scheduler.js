const tasks=[];
//fuction to add tasks on scheduler

const addTask=(titel,descrption,duedate)=>{
    const task={
        titel:titel,
        descrption:descrption,
        duedate:duedate,
        completed:false

    }
    tasks.push(task);
}
//calling addTask function
addTask('study','learning algorithm',Date());
console.log(tasks);
//function to display tasks sorted by duedates
const displaytasks=()=>{
    let sortedTasks=tasks.sort((a,b)=>new Date(a.duedate)-new Date(b.duedate));
    console.log(sortedTasks);
}
addTask('leisure','trip to musanze','2023-12-9');
addTask('meeting','school parents meeting','2024-2-13');
displaytasks();