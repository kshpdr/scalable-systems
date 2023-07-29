import { Content } from "./Authors.styles"

const Authors: React.FC = () => {
    return(
        <div>
            <Content>
                <div>
                    <div>
                        <h2>Our Team</h2> <br/>
                        <h5>Daniil</h5>
                        <h5>Julius</h5>
                        <h5>Denis</h5>
                        <h5>Alex</h5>
                        <h5>Hans</h5>
                    </div>
                    <br/>
                    <div>
                        <h2>Our Project</h2> <br/>
                        In our project we allow potential users to create computating jobs with properties described in Jobs page in order to sort them 
                        between computating clusters located in all 15 regions of Great Britain according to actual carbon intensity values in those regions. <br/>
                        Intensity data is fetched from <a href="carbonintensity.org.uk">carbonintensity.org.uk</a> <br/>
                        Jobs are then sorted after their dedline, and our algorithm then assignes timeslots to the jobs according to lowest intensity values for the next 48 hours. <br/>

                    </div>
                </div>
            </Content>
        </div>
    )
}

export default Authors