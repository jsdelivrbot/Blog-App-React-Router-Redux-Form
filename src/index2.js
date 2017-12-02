import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            posts: [
                { id: 1,
                    title: 'Hi!',
                    categories: 'Computer, Friends',
                    content: 'Post about Friends'
                },
                {
                    id: 2,
                    title: 'New Post',
                    categories: 'Candy',
                    content: 'Post about Candy'
                }
            ]
        };
    }

    render() {
        let posts = this.state.posts.map((item) => {
            return (
                <div>
                    <h1>{item.title}</h1>
                    <h6>{item.categories}</h6>
                    <p>{item.content}</p>
                </div>
            );
        });

        return (
            <div>
                {this.posts}
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
