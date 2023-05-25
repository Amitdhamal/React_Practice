
function Main() {
    const tag = <h2>hiiii I am Tag</h2>
    const img_url = "https://static.toiimg.com/thumb/msid-89344484,width-400,resizemode-4/89344484.jpg"

    function greet(x) {
        return `Hi ${x}`
    }

    const items = ["item1","item2","item3"]
    const mapped = items.map((item)=>{
        return <li>{item}</li>
    })

    const style = {width:"250px",height:"150px",backgroundColor:"green"}
    return (
        <div>
            <div>{X + Y}</div>
            <div>{name}</div>
            <div>{tag}</div>
            <div>{greet('good morning')}</div>
            <img src={img_url} alt=""/>
            <div>
                <ol>
                    {items.map((item)=>{
                    return <li>{item}</li>
                    })} 
                </ol>
            </div>
            <div>
                <ul>
                    {mapped}
                </ul>
            </div>
            <div style={{width:"250px",height:"150px",backgroundColor:"red"}}>

            </div>
            <div style={style}>

            </div>  
        </div>
    )
}

export default Main