// set intitial count
let count = 0;

// selectvalue and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(fucntion (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
            if(styles.contains('decrease')){
                count--;
            }
            value.textContent = count;
    })             
});