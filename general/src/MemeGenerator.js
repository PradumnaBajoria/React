import React, {Component} from "react"

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/1bij.jpg",
            allMemeImg: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                //console.log(memes[1])
                this.setState({allMemeImg: memes})
            })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event){
        event.preventDefault()

        const randNum = Math.floor(Math.random() * this.state.allMemeImg.length)
        const randMemeImg = this.state.allMemeImg[randNum].url
        this.setState({randomImage: randMemeImg})
    }

    render(){
        return(
            <div class="main" onSubmit={this.handleSubmit}>
                <form>
                    <br />
                    <input type="text" name="topText" value={this.state.topText} placeholder="Top Text" onChange={this.handleChange} />
                    <br />
                    <input type="text" name="bottomText" value={this.state.bottomText} placeholder="Bottom Text" onChange={this.handleChange}/>
                    <br />
                    <button>Generate</button>
                    <br />
                </form>
                <div>
                    <h2 className="top">{this.state.topText}</h2>
                    <img src={this.state.randomImage} alt="loading..." height="300px" width="400px" />
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator