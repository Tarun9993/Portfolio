export const navText = (delay) =>{
    return{
        hidden:{
            opacity:0,
            y:-100,  
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:0,
                type: "spring",
                stiffness: 30,
                delay:delay
            }
        }
     }
}
export const navBg = (delay) =>{
    return{
        hidden:{
            opacity:0,
            x:-100,  
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:0.3,
                type: "spring",
                stiffness: 20,
                damping: 10,
                delay: delay
            }
        }
     }
}

export const sparklesText = (delay) =>{
    return{
        hidden:{
            opacity:0,
            y:100,  
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:0.8,
                type: "spring",
                stiffness: 30,
                delay: delay
            }
        }
     }
}
export const projectImg = (delay) => {
    return{
        hidden:{
            opacity:0,
            x:-100,  
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration: 0.3, 
                type: "spring",
                stiffness: 20, 
                damping: 10,
                delay: delay,
            }
        }
 
    }
} 
export const projectText = (delay) => {
    return{
        hidden:{
            opacity:0,
            x:22,  
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration: 0.3, 
                type: "spring",
                stiffness: 20, 
                damping: 10, 
                delay: delay,
            }
        }
 
    }
} 