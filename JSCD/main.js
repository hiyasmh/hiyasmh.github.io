class ToDo {
    isDone = false;
    task
    taskEl


    constructor(task, taskEl){
        this.task = task
        this.taskEl = taskEl

        this.taskEl.innerHTML = `
        <input type="checkbox" />
        <label for="checkbox"> $(task)</label>
        <button>X</button
        `
        this.initInteraction();
    }

   initInteraction(){
    const checkboxEl = this.taskEl.querySelector('input');
    checkboxEl.addEventListerner('click', (event)=>{
        if (checkboxEl.checked){
            this.classList.add('complete')
        } else {
            this.classList.remove('complete')
        }
    })
   }
}

    class ToDoList {
        tasks
        formEl
        taskEl

        constructor(formEl, taskEl){
            this.formEl = formEl
            this.taskEl = taskEl
            this.tasks = new Array()

            this.initInteraction()
        }

        initInteraction(){
            const buttonEl = this.formEl.querySelector('button');
            buttonEl.addEventListerner('click', (event)=> {
                event.preventDefault()

                const taskValue = this.formEl.querySelector('input').value;
                this.addTask(taskValue)
            })
        }

        addTask(task){
            const taskEl = document.createElement('li');
            this.taskEl.appendChild(taskEl);

            const t = new ToDo(task, taskEl);
            this.tasks.push(t);
        }
    }



const list = new ToDoList(document.querySelector('form'),document.querySelector('ul') )
console.log(list);