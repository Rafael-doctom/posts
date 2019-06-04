import React from 'react';
import Comment from './Comment';

export default class Post extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            comments: [
                { text : 'Bom post'}
            ]
        };

        this.hundleSubmit = this.hundleSubmit.bind(this);
    }

    hundleSubmit(e){
        //this.setState
        e.preventDefault();
    }
    
    
    render(){
        return (
            <div>
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input />
                    <button type="submit">Comentário</button>
                </form>
                { this.state.comments.map((comment, index) => {
                    return <Comment key={index} text = {comment.text}/>
                })}
                
            </div>
        )  
    }
}