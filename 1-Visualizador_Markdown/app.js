
class App extends React.Component{
    constructor(props){
      super(props)
      this.state ={
        text:` # Hi
  ## This is a markdown previewer
  ### You can see the syntax of **markdown** [Here](https://www.markdownguide.org/basic-syntax/)
  
  ---
  
   So when you input *words*, this convert to HTML, like:
   
   >\`<p>words</p>\`
   
  - You can write code if you indent 2 tabs
  - Or put bethween backticks \`\`
  
  ---
   
      <div>
        <h1>Hi code</h1>
      </div>
      
  Also renderers images:
  
  ![markdwon_image](https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/205_Markdown_logo_logos-512.png)
  `,
      }
      this.handleChange = this.handleChange.bind(this)
    }
      
    handleChange(event){
      this.setState({text:event})
    }
    
    render(){
      return(
        <main>
          <h1 className='title'><span className='vertical'>MARKDOWN</span>  <span className='horizontal'>PREVIEWER</span></h1>
          <div class='flex'>
            <div class='container'>
              <textarea spellcheck='false' id='editor' value={this.state.text} onChange={(event)=>{this.handleChange(event.target.value)}}></textarea>
              </div>
            <div class='container'>
              
              <div id='preview' dangerouslySetInnerHTML={{ __html: marked.parse(this.state.text,{breaks: true})}}></div>
           </div>
          </div>
        </main>
      )
    }
  }
  
        ReactDOM.render(<App />, document.getElementById('mydiv'))