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
addTask('study','learning algorithm',Date());
console.log(tasks);