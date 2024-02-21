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
addTask('leisure','trip to musanze','2023-12-9');
addTask('meeting','school parents meeting','2024-2-13');
addTask('study','learning algorithm',Date());
console.log(tasks);
//function to display tasks sorted by duedates
const displaytasks=()=>{
    let sortedTasks=tasks.sort((a,b)=>new Date(a.duedate)-new Date(b.duedate));
    console.log(sortedTasks);
}
//calling displaytasks function
displaytasks();
//function to update task
const update=(index,newtitel,newdescrption,newduedate,iscomplete)=>{
    if(index>=0 && index<tasks.length){
        tasks[index].titel=newtitel;
        tasks[index].descrption=newdescrption;
        tasks[index].duedate=newduedate;
        tasks[index].completed=iscomplete;}
    }
//updating task
update(1,'Learn','learning node js','2024-3-11',false);
console.log(tasks);