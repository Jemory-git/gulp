async function test(){
    await {
        then(resolve){
            setTimeout(()=>{
                console.log('done');
                
                resolve();
            },500)
        }
    }
}

test();

let obj = {
    arrow: ()=>{
        console.log('arrow');
        
    }
}

obj.arrow();