import React from 'react';
import aboutme from '../../assets/img/aboutme.svg';
import '../../core-ui/Aboutme.css';
import tel from '../../assets/img/tel.svg';
import Rating  from 'react-rating';
import ReactECharts from 'echarts-for-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar } from '@fortawesome/free-solid-svg-icons';
// import { library, icon } from '@fortawesome/fontawesome-svg-core'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Aboutme() {
    const fullIcon =  <FontAwesomeIcon icon={faStar} className="faStarFull"/>
    const emptyIcon = <FontAwesomeIcon icon={faStar} className="faStarEmpty"/>


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    let data =  [
        {
            name:"Chris",
            surname:"Pratt",
            Rating: 3.4,
            Description:"Lorem ipsum dolor sit amet conct adipiscing elit. Sed tpus donec ultricies molestie vel.",
            picture: aboutme,
            number: "+88 01924 184 461",
            data: [
                { value: 30, name: 'Good'},
                { value: 70, name: 'Bad'} 
            ]
        },
        {
            name:"Calzoni",
            surname:"Kiera",
            Rating: 4,
            Description:"Lorem ipsum dolor sit amet conct adipiscing elit. Sed tpus donec ultricies molestie vel.",
            picture: aboutme,
            number: "+88 01924 184 461",
            data: [
                { value: 12, name: 'Good'},
                { value: 88, name: 'Bad'} 
            ]
        }
        
    ]
    const foo = function(data:any) {
        let opt = {
            color: ["#FFF1F0","rgb(252, 117, 109)"],
            title: {
                id:'datachart',
                show:false,
                text:'Bezier'
            },
            tooltip: {
              trigger: 'item'
            },
            series: [
              {
                name: 'Notation',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                  borderRadius: 10,
                  borderColor: '#fff',
                  borderWidth: 2
                },
                label: {
                  show: true,
                  backgroundColor: "#fff",
                  fontSize: '34',
                  fontWeight: 'bold',
                  color: "#031126",
                  position: 'center',
                  formatter: '{d}%\n{b} ',
                  borderRadius: [100, 100, 100, 100]
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: '34',
                    fontWeight: 'bold',
                    color: "#031126"
                  }
                },
                labelLine: {
                  show: false
                },
                cursor: 'pointer',
                showEmptyCircle: true,
                data: data
              }
            ]
          }
          return opt;
      };
      
      
    return (
    <div className="Aboutme">
        <Slider {...settings} className="AboutmeData">
            {data.map(function(doc, index) {
            return (
                <div key={index}>
                <img className="AboutmeImg" alt="healthcare"src={doc.picture}/>
                <div className="Cart">
                    <div className="DocInfo">
                        <div className="DocInfoText">
                            <div className="DoctorName InterBold ">
                                Dr. {doc.surname} {doc.name}
                            </div>
                            <div className="DoctorDescription thirdBodyText">
                                {doc.Description}
                            </div>
                            <div className="DocTel">
                                <img className="PhoneLogo" src={tel} alt="number"/>
                                <div className="DocNumber">
                                    {doc.number}
                                </div>
                            </div>
                        </div>
                        <div className="DocRating">
                            <div className="DocStarRate InterBold">
                                Rating :
                                <Rating className="DocRate"
                                    readonly={true}
                                    initialRating={doc.Rating}
                                    fullSymbol={fullIcon}
                                    emptySymbol={emptyIcon}
                                    fractions={2}
                                />   
                            </div>
                            <ReactECharts className="DocChart"
                                option={foo(doc.data)}
                            />
                        </div> 
                    </div>
                </div>
            </div>
            );
          })}
        </Slider>
        <div className="AboutmeText">
            <div className="subtitleText">
                About Me
            </div>
            <div className="titleText">
                Actually, I love to care <div className="underlineBlueText">Patient</div>.
            </div>
            <div className="bodyText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor proin id aliquet lacinia vulputate non. Rhoncus,
                Blandit feugiat viverra est Suspendisse porta tortor commodo.
                Tempor proin id aliquet lacinia vulputate non. Rhoncus, blandit feugiat viverra est suspendisse porta tortor commodo, tellus. Neque.
            </div>
            <button className="ButtonFull">Let's talk</button>
        </div>
    </div>
  );
}

export default Aboutme;
