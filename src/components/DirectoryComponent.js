import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: [
                {
                    id: 0,
                    name: 'Contact Us',
                    image: 'assets/port/426.jpg',
                    description: "Basic information." 
                },
                {
                  id: 1,
                  name: 'About Us',
                  image: 'assets/port/hotwings.jpg',
                  description: "Stuff and things about me.  My Art and fun stuff (history and jobs)." 
                },
                {
                    id: 2,
                    name: 'TECH',
                    image: 'assets/port/glass.jpg',
                    description: "Some of the things I have learned about coding."
                },
                {
                    id: 3,
                    name: 'Extra Content',
                    image: 'assets/port/isthiscurtains.jpg',
                    description: "You'll never want to leave this hidden gem."
                }
            ],
        };
    }

    render() {
        const directory = this.state.subjects.map(subjects => {
            return (
                <div key={subjects.id} className="col-md-3 offset-2">
                    <img src={subjects.image} alt={subjects.name} />
                    <h2>{subjects.name}</h2>
                    <p>{subjects.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;