function calculatePercentaje()
{
    let quantity = document.getElementById("quantity").value;;
    let goal = document.getElementById("goal").value;

    if(validateInputs(quantity, goal) === true ) 
    {
        return true;
    }

    let total = 0;
    total =(quantity/goal)*100;
    updateBarProgress( total) ;
}

function validateInputs(quantity, goal)
{
    let errorAlert =  document.getElementById("error-alert");
    if(quantity === "" || goal === "")
    {
        errorAlert.style.display = "block";
        errorAlert.innerHTML = "Warning: Please insert some numbers";
        updateBarProgress(0);
        return true;
    }
    else
    {
        if(isNaN(quantity) || isNaN(goal)  ) 
        {
            errorAlert.style.display = "block";
            errorAlert.innerHTML = "Warning: Please insert valid numbers";
            updateBarProgress(0);
            return true;
        }
    }
    document.getElementById("error-alert").style.display = "none";
    return false;
}
function updateBarProgress(percentage)
{
    let bar = document.getElementById("bar");    
    bar.style.width = percentage + '%';  
    return;    
}


window.onload = function(){
    let formTest = document.getElementById("form-test-midware");
    formTest.addEventListener("submit", function(evt) {
        evt.preventDefault();
    });
};