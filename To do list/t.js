/*var title=document.getElementById('title');
var description=document.getElementById('description');*/
document.getElementById('sub').addEventListener('submit', addtask);
function addtask(a)
{
    var title=document.getElementById('title').value;
    var description=document.getElementById('description').value;
    var task={title,
     description
    };
    if(localStorage.getItem('tasks')==null){
        var tasks=[];
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    else{
        var tasks=JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));
        }
        getTasks();
        document.getElementById('sub').reset();
    a.preventDefault();
}
function del(title){
    var tasks=JSON.parse(localStorage.getItem('tasks'));
    for(var i=0;i<tasks.length;i++){
        if(tasks[i].title==title){
            tasks.splice(i,1);
        }
    }
    localStorage.setItem('tasks',JSON.stringify(tasks));
    getTasks();
}
function getTasks(){
    var tasks=JSON.parse(localStorage.getItem('tasks'));
    var tasksview=document.getElementById('tasks');
    tasksview.innerHTML='';
    for(var i=1;i<=tasks.length;i++){
        var title=tasks[i].title;
        var description=tasks[i].description;
        
        tasksview.innerHTML +=
      `<div class="container-fluid" > 
      <div class="card mb-1"  style="background-color:#fbfadf;;">
        <div class="card-body">
        <div class="row my-1">
          <div class="col-sm-3 text-center">
            <p>${title}</p>
          </div>
          <div class="col-sm-4 text-right">
            <p>${description}</p>
          </div>
          <div class="col-sm-5 text-right">
          <input type="button" onclick="del('${title}')" value="DEL"/>
          </div>
        </div>  
       </div>
      </div>
      </div>`;
        ;
    }
}

getTasks();
