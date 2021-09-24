

<div className="AboutmeData">
<img className="AboutmeImg" alt="healthcare"src={aboutme}/>
<div className="Cart">
    <div className="DocInfo">
        <div className="DocInfoText">
            <div className="DoctorName InterBold ">
                Dr. Kierra Calzoni
            </div>
            <div className="DoctorDescription thirdBodyText">
                Lorem ipsum dolor sit amet conct adipiscing elit. Sed tpus donec ultricies molestie vel.
            </div>
            <div className="DocTel">
                <img className="PhoneLogo" src={tel} alt="number"/>
                <div className="DocNumber">
                    +88 01924 184 461
                </div>
            </div>
        </div>
        <div className="DocRating">
            <div className="DocStarRate InterBold">
                Rating :
                <Rating className="DocRate"
                    readonly={true}
                    initialRating={rating}
                    fullSymbol={fullIcon}
                    emptySymbol={emptyIcon}
                    fractions={2}
                />   
            </div>
            <ReactECharts className="DocChart"
                option={options}
            />
        </div> 
    </div>
</div>
</div>