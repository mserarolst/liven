import React from 'react';
import '../../static/css/components/SliderComponent.css';



class SliderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexSelected: 0,
            title: "Disseny - Programació",
            subtitle: "Desenvolupament Web"
        };
        this.changeImage();
    }
    
    componentDidMount() {
        
    }

    changeImage(){
        const { widthPage } = this.props;
        setInterval(() => {
            let index = this.state.indexSelected
            if (this.state.indexSelected < 3) {
                index = index + 1;
            } else {
                index = 0;
            }
            this.setState({indexSelected: index});
        }, 6000)
    }

    render() {
        const { translatePixels, title, subtitle, indexSelected } = this.state;
        const { widthPage, images } = this.props;
        return(
            <div className="SliderComponent-container">
                <div className="SliderComponent-overflow">
                    <div className="SliderComponent-translate">
                        {images.map((image, index) => {
                            return (
                                <div key={index} className={"SliderComponent-image " + (indexSelected == index ? "select-image" : "")} style={{"width": widthPage+"px"}}>
                                    <img className="SliderComponent-img" src={image}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className="SliderComponent-title-container">
                        <div className="SliderComponent-title">{title}</div>
                        <div className="SliderComponent-subtitle">{subtitle}</div>
                    </div>
                    <div className="SliderComponent-background"></div>
                </div>
            </div>
        );
    }
}

export default SliderComponent;