const draggableElement = document.querySelectorAll('.box');
const droppableElement = document.querySelectorAll('.droppable');
let score = 0;

draggableElement.forEach(element=>{

    element.addEventListener('dragstart', (drgStart)=>{

        drgStart.dataTransfer.setData('text',drgStart.target.id);

        drgStart.currentTarget.classList.add('draggableFormat');
        //console.log('dragStart event is Activated!');
        //console.log(drgStart);
    });

});

//draggableElement.forEach(element=>{
    //element.addEventListener('dragend', dragendEvt=>{

   // });
//);

droppableElement.forEach(element=>{
        element.addEventListener('drop', drpEvt=>{
            drpEvt.preventDefault();
            
            const droppedElementId = drpEvt.dataTransfer.getData('text');
            const dropZoneId = drpEvt.target.getAttribute('data-draggable-id');
            const draggableElement = document.getElementById(droppedElementId);

            drpEvt.target.appendChild(document.getElementById(droppedElementId));
            //drpEvt.target.appendChild(draggableElement.cloneNode(true));

            //console.log(dropZoneId);
            if(droppedElementId===dropZoneId){
                //console.log('tama');
                score+=1;
                document.getElementById('remarks').innerText = "Tama!";
                document.getElementById('scores').innerText = score;

            }else{
                //console.log('mali');
                document.getElementById('remarks').innerText = "Mali!";


            }//end of if


        });

        element.addEventListener('dragover', (drgOverEvt)=>{
                drgOverEvt.preventDefault();

        })

});