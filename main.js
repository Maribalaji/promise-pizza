let pizza=new Promise((resolve,reject)=>{
    let a=true
    if(a){
        resolve()
    }
    else{
        reject()
    }
})
function order(){
    ((type,name,callback)=>{
        // document.write(`${type} ${name} ordered<br>`);
        console.log(`${type} ${name} ordered`);
        // document.write(`${type} ${name} for preparation<br>`);
        console.log(`${type} ${name} for preparation`);
        
        setTimeout(()=> {
            let ans = `Your ${type} ${name} is ready. The total bill amount is $80`;
            callback(ans);
            // document.write(`On the Way Pizzahub server <br>`);
            console.log(`On the Way Pizzahub server`);
            
        }, 3000);
        setTimeout(()=>{
            // document.write(`Succesfully Deliverd Thanks for your order`);
            console.log(`Succesfully Deliverd Thanks for your order`);
        },6000)
    })
    ("cheese", "pizza",(message)=>{
        // document.write(message);
        console.log(message);
    });

}

function fail(){
    console.log(`Order failure`);
}
pizza.then(order).catch(fail)

